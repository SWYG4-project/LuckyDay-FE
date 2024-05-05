// NavigationToggle.tsx

import * as S from "./NavigationToggle.styled";
import { useState } from "react";
import { MenuIcon } from "assets";
import { Link } from "react-router-dom";

interface NavigationToggleProps {
  defaultOn?: boolean;
}

const NavigationToggle: (props: NavigationToggleProps) => JSX.Element = ({
  defaultOn = false,
}) => {
  const [isToggleVisible, setIsToggleVisible] = useState(defaultOn);

  const toggleNavigation = () => {
    setIsToggleVisible((prevState) => !prevState);
  };

  return (
    <>
      <S.MenuIcon onClick={toggleNavigation}>
        <MenuIcon />
      </S.MenuIcon>
      {isToggleVisible && (
        <S.ToggleBox>
          <button onClick={toggleNavigation}></button>
          <S.ToggleContentsBox>
            {/* FIXME: 추후 user api 연동 예정 */}
            <S.ProfileBox>
              <S.ProfileImage />
              이소연님
            </S.ProfileBox>
            <S.ToggleMenuBox>
              <Link to="/luckyBoard">
                <S.ToggleMenu>럭키 보드</S.ToggleMenu>
              </Link>
              <S.ToggleMenu>럭키 보드 설정</S.ToggleMenu>
              <S.ToggleMenu>마이페이지</S.ToggleMenu>
            </S.ToggleMenuBox>
          </S.ToggleContentsBox>
        </S.ToggleBox>
      )}
    </>
  );
};

export default NavigationToggle;
