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
  const toggleRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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

  useEffect(() => {
    setIsToggleVisible(false);
  }, [location]);

  const toggleNavigation = () => {
    setIsToggleVisible((prevState) => !prevState);
  };

  return (
    <>
      <S.MenuIcon onClick={toggleNavigation} ref={menuIconRef}>
        <MenuIcon />
      </S.MenuIcon>
      {isToggleVisible && (
        <S.ToggleBox ref={toggleRef}>
          <button onClick={toggleNavigation}></button>
          <S.ToggleContentsBox>
            <S.ProfileBox>
              <S.ProfileImage />
              닉네임님
            </S.ProfileBox>
            <S.ToggleMenuBox>
              <Link to="/luckyBoard" onClick={() => setIsToggleVisible(false)}>
                <S.ToggleMenu>럭키 보드</S.ToggleMenu>
              </Link>
              <Link
                to="/settingLuckyBoard"
                onClick={() => setIsToggleVisible(false)}
              >
                <S.ToggleMenu>럭키 보드 설정</S.ToggleMenu>
              </Link>
              <Link
                to="/luckyDayArchive"
                onClick={() => setIsToggleVisible(false)}
              >
                <S.ToggleMenu>럭키 데이 보관함</S.ToggleMenu>
              </Link>
              <Link to="/myPage" onClick={() => setIsToggleVisible(false)}>
                <S.ToggleMenuBottom>마이페이지</S.ToggleMenuBottom>
              </Link>
            </S.ToggleMenuBox>
          </S.ToggleContentsBox>
        </S.ToggleBox>
      )}
    </>
  );
};

export default NavigationToggle;
