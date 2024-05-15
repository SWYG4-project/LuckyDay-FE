import * as S from "./myPage.styled";
import { useState } from "react";
import { useLogout } from "services";
import { Link } from "react-router-dom";
import { ax } from "apis/axios";
import { DeleteUserConfirmModal } from "components";

export default function MyPage() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { mutate: logoutMutate } = useLogout();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const logout = () => {
    sessionStorage.clear();
    logoutMutate();

    if (window.Kakao?.Auth) {
      window.Kakao.Auth.logout(() => {});
    }
    window.location.href = `${baseUrl}/users/sign-out`;
  };

  const deleteUser = async () => {
    try {
      const res = await ax.delete(`${baseUrl}/users`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      if (res.status === 202) {
        logout();
      }
    } catch (error) {
      console.error("회원 탈퇴 실패", error);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <S.TitleBox>마이페이지</S.TitleBox>
      <S.ContentsBox>
        <Link to="/editProfile">
          <S.MenuBox>프로필 설정</S.MenuBox>
        </Link>
        <S.MenuBox>럭키보드 초기화</S.MenuBox>
        <S.MenuBox onClick={logout}>로그아웃</S.MenuBox>
        <S.MenuBox onClick={openModal}>회원 탈퇴</S.MenuBox>
      </S.ContentsBox>
      {isModalOpen && (
        <DeleteUserConfirmModal onClose={closeModal} onDelete={deleteUser} />
      )}
    </>
  );
}
