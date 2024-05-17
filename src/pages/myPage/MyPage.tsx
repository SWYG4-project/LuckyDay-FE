import * as S from "./myPage.styled";
import { Link } from "react-router-dom";
import { useModal } from "hooks";
import { useLogout, useDeleteUser } from "services";
import { DeleteUserConfirmModal } from "components";

export default function MyPage() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { mutate: logoutMutate } = useLogout();
  const { mutate: deleteUserMutate } = useDeleteUser();
  const { handleOpenModal, handleModalClose } = useModal();

  const logout = () => {
    sessionStorage.clear();
    logoutMutate();

    if (window.Kakao?.Auth) {
      window.Kakao.Auth.logout(() => {});
    }
    window.location.href = `${baseUrl}/users/sign-out`;
  };

  const deleteUser = () => {
    deleteUserMutate(undefined, {
      onSuccess: () => {
        logout();
      },
      onError: (error: unknown) => {
        console.error("회원 탈퇴 실패", error);
      },
    });
  };

  const openDeleteUserModal = () => {
    handleOpenModal(
      <DeleteUserConfirmModal
        onClose={handleModalClose}
        onDelete={deleteUser}
      />
    );
  };

  return (
    <>
      <S.TitleBox>마이페이지</S.TitleBox>
      <S.ContentsBox>
        <Link to="/editProfile">
          <S.MenuBox>프로필 설정</S.MenuBox>
        </Link>
        <S.MenuBox>럭키보드 초기화</S.MenuBox>
        <S.MenuBox onClick={logout}>로그아웃</S.MenuBox>
        <S.MenuBox onClick={openDeleteUserModal}>회원 탈퇴</S.MenuBox>
      </S.ContentsBox>
    </>
  );
}
