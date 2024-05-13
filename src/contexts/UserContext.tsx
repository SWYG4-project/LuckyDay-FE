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
  getToken: (code: string) => Promise<void>;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    email: "",
    nickname: "",
  });

  const initializeKakao = useCallback(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_CLIENT_ID);
    }
  }, []);

  useEffect(() => {
    initializeKakao();
  }, [initializeKakao]);

  const getToken = useCallback(async (code: string) => {
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
      setIsLoggedIn(true);

      if (window.Kakao.isInitialized() && window.Kakao.API) {
        const profileData = await window.Kakao.API.request({
          url: "/v2/user/me",
        });
        console.log("Profile Data:", profileData);
        setUserProfile({
          email: profileData.kakao_account.email,
          nickname: profileData.properties.nickname,
        });
      } else {
        console.error("Kakao SDK is not initialized or API is unavailable");
      }
    } catch (err) {
      console.log("Error fetching user data:", err);
      Cookies.remove("accessToken");
      setIsLoggedIn(false);
      setUserProfile({ email: "", nickname: "" });
    }
  }, []);

  const logout = useCallback(() => {
    Cookies.remove("accessToken");
    setIsLoggedIn(false);
    setUserProfile({ email: "", nickname: "" });
  }, []);

  useEffect(() => {
    const checkLoginStatus = () => {
      const accessToken = Cookies.get("accessToken");
      setIsLoggedIn(!!accessToken);
    };
    checkLoginStatus();
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, userProfile, getToken, logout }}>
      {children}
    </UserContext.Provider>
  );
};
