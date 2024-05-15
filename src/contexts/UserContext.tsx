import React, { createContext, useState, useCallback, useEffect } from "react";
import { KAKAO_CLIENT_ID, KAKAO_REDIRECT_URL, CLIENT_SECRET } from "config";
import { ax } from "apis/axios";
import Cookies from "js-cookie";
import qs from "qs";

interface TokenResponse {
  access_token: string;
}

interface UserProfile {
  email: string;
  nickname: string;
}

export interface UserContextType {
  isLoggedIn: boolean;
  userProfile: UserProfile;
  isLoading: boolean;
  getToken: (code: string) => Promise<void>;
  logout: () => void;
}

const defaultUserContextValue: UserContextType = {
  isLoggedIn: false,
  userProfile: { email: "", nickname: "" },
  isLoading: true,
  getToken: async () => {},
  logout: () => {},
};

export const UserContext = createContext<UserContextType>(
  defaultUserContextValue
);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    email: "",
    nickname: "",
  });

  const initializeKakao = useCallback(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_CLIENT_ID);
    }
  }, []);

  const fetchProfile = useCallback(async () => {
    const storedProfile = sessionStorage.getItem("userProfile");
    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
      setIsLoggedIn(true);
    } else if (window.Kakao.isInitialized() && window.Kakao.API) {
      const profileData = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      console.log("Profile Data:", profileData);
      setUserProfile({
        email: profileData.kakao_account.email,
        nickname: profileData.properties.nickname,
      });
      sessionStorage.setItem(
        "userProfile",
        JSON.stringify({
          email: profileData.kakao_account.email,
          nickname: profileData.properties.nickname,
        })
      );
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const getToken = useCallback(
    async (code: string) => {
      setIsLoading(true);
      console.log("getToken called with code:", code);
      const payload = qs.stringify({
        grant_type: "authorization_code",
        client_id: KAKAO_CLIENT_ID,
        redirect_uri: KAKAO_REDIRECT_URL,
        code: code,
        client_secret: CLIENT_SECRET,
      });

      try {
        const res = await ax.post<TokenResponse>(
          "https://kauth.kakao.com/oauth/token",
          payload
        );
        Cookies.set("accessToken", res.data.access_token, {
          expires: 1,
          secure: true,
          sameSite: "strict",
        });
        window.Kakao.Auth.setAccessToken(res.data.access_token);
        await fetchProfile();
      } catch (err) {
        console.log("Error fetching user data:", err);
        Cookies.remove("accessToken");
        setIsLoggedIn(false);
        setUserProfile({ email: "", nickname: "" });
        sessionStorage.removeItem("userProfile");
      } finally {
        setIsLoading(false);
      }
    },
    [fetchProfile]
  );

  const logout = useCallback(() => {
    ax.get("/users/sign-out")
      .then((response) => {
        console.log("로그아웃 성공:", response);
        Cookies.remove("accessToken");
        sessionStorage.clear();
        if (window.Kakao && window.Kakao.Auth) {
          window.Kakao.Auth.logout(() => {
            console.log("카카오 로그아웃 완료");
          });
        }
        setIsLoggedIn(false);
        setUserProfile({ email: "", nickname: "" });
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("로그아웃 실패:", error);
      });
  }, []);

  useEffect(() => {
    initializeKakao();
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      window.Kakao.Auth.setAccessToken(accessToken);
      fetchProfile();
    } else {
      setIsLoading(false);
    }
  }, [initializeKakao, fetchProfile]);

  return (
    <UserContext.Provider
      value={{ isLoggedIn, userProfile, isLoading, getToken, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
