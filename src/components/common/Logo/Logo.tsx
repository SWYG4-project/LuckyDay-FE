import * as S from "./Logo.styled";

export default function Logo() {
  return <S.Logo_Basic />;
}

////// 상의 후 onClick 함수 추가 예정

// import { MouseEventHandler } from "react";
// import { useNavigate } from "react-router-dom";
// import * as S from "./Logo.styled";

// export default function Logo() {
//   const navigate = useNavigate();

//   const onClickMoveToHome: MouseEventHandler<HTMLImageElement> = () => {
//     navigate("/home");
//   };

//   return (
//     <>
//       <S.Logo onClick={onClickMoveToHome} />
//     </>
//   );
// }

////////
