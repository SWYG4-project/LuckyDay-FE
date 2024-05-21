import * as S from "./myPage.styled";
import { Link } from "react-router-dom";
import { useModal } from "hooks";
import { useLogout, useDeleteUser, useDeleteLuckyBoard } from "services";
import { DeleteUserConfirmModal, ResetLuckyBoardModal } from "components";

export default function MyPage() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { mutate: logoutMutate } = useLogout();
  const { mutate: deleteUserMutate } = useDeleteUser();
  const { mutate: deleteLuckyBoardMutate } = useDeleteLuckyBoard();
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
        onDelete={deleteUser}
        onClose={handleModalClose}
      />
    );
  };

  const resetLuckyBoard = () => {
    deleteLuckyBoardMutate(undefined, {
      onSuccess: (data) => {
        console.log("럭키보드 초기화 성공", data);
        sessionStorage.setItem("hasLuckyday", "0");
        handleModalClose();
      },
      onError: (error: unknown) => {
        console.error("럭키보드 초기화 실패", error);
      },
    });
  };

  const openResetLuckyBoardrModal = () => {
    handleOpenModal(<ResetLuckyBoardModal onReset={resetLuckyBoard} />);
  };

  return (
    <>
      <S.TitleBox>마이페이지</S.TitleBox>
      <S.ContentsBox>
        <Link to="/mypage/edit">
          <S.MenuBox>프로필 설정</S.MenuBox>
        </Link>
        <S.MenuBox onClick={openResetLuckyBoardrModal}>
          럭키보드 초기화
        </S.MenuBox>
        <S.MenuBox onClick={logout}>로그아웃</S.MenuBox>
        <S.MenuBox onClick={openDeleteUserModal}>회원 탈퇴</S.MenuBox>
      </S.ContentsBox>
    </>
  );
}
