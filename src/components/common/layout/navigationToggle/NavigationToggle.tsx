import * as S from "./NavigationToggle.styled";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon } from "assets";

interface NavigationToggleProps {
  defaultOn?: boolean;
}

const NavigationToggle: (props: NavigationToggleProps) => JSX.Element = ({
  defaultOn = false,
}) => {
  const [isToggleVisible, setIsToggleVisible] = useState(defaultOn);
  const [toggleBoxPosition, setToggleBoxPosition] = useState({
    top: 0,
    left: 0,
    right: "auto" as number | "auto",
  });
  const toggleRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const nickname = sessionStorage.getItem("nickname");
  const profileNumber = sessionStorage.getItem("profileNumber");

  const getProfileImageUrl = (prfNo: string | null) => {
    if (!prfNo) return "/images/profile/profile-03.webp";
    const profileNumber = parseInt(prfNo, 10);
    if (profileNumber < 1 || profileNumber > 6)
      return "/images/profile/profile-03.webp";
    return `/images/profile/profile-0${profileNumber}.webp`;
  };

  const profileImageUrl = getProfileImageUrl(profileNumber);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !toggleRef.current?.contains(event.target as Node) &&
        !menuIconRef.current?.contains(event.target as Node)
      ) {
        setIsToggleVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNavigation = () => {
    if (menuIconRef.current) {
      const { bottom, right, width } =
        menuIconRef.current.getBoundingClientRect();
      const toggleBoxWidth = 200;
      const screenWidth = window.innerWidth;
      let leftPosition = right - toggleBoxWidth + width / 2;
      let rightPosition: number | "auto" = "auto";

      if (leftPosition + toggleBoxWidth > screenWidth) {
        leftPosition = screenWidth - toggleBoxWidth;
        rightPosition = 0;
      }

      setToggleBoxPosition({
        top: bottom,
        left: leftPosition,
        right: rightPosition,
      });
    }
    setIsToggleVisible((prevState) => !prevState);
  };

  useEffect(() => {
    setIsToggleVisible(false);
  }, [location]);

  return (
    <>
      <S.MenuIcon onClick={toggleNavigation} ref={menuIconRef}>
        <MenuIcon />
      </S.MenuIcon>
      {isToggleVisible && (
        <S.ToggleBox
          ref={toggleRef}
          style={{
            top: `${toggleBoxPosition.top}px`,
            left:
              typeof toggleBoxPosition.left === "number"
                ? `${toggleBoxPosition.left}px`
                : toggleBoxPosition.left,
            right:
              toggleBoxPosition.right === "auto"
                ? "auto"
                : `${toggleBoxPosition.right}px`,
          }}
        >
          <button onClick={toggleNavigation}></button>
          <S.ToggleContentsBox>
            <S.ProfileBox>
              <S.ProfileImage imageUrl={profileImageUrl} />
              {!nickname ? "사용자님" : `${nickname!.slice(0, 8)}님`}
            </S.ProfileBox>
            <S.ToggleMenuBox>
              <Link
                to="/luckydays/list"
                onClick={() => setIsToggleVisible(false)}
              >
                <S.ToggleMenu>럭키 데이 보관함</S.ToggleMenu>
              </Link>
              <Link to="/mypage" onClick={() => setIsToggleVisible(false)}>
                <S.ToggleMenu>마이페이지</S.ToggleMenu>
              </Link>
              <Link to="/noticeboard" onClick={() => setIsToggleVisible(false)}>
                <S.ToggleMenuBottom>게시판</S.ToggleMenuBottom>
              </Link>
            </S.ToggleMenuBox>
          </S.ToggleContentsBox>
        </S.ToggleBox>
      )}
    </>
  );
};

export default NavigationToggle;
