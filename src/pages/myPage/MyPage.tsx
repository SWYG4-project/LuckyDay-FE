import * as S from "./myPage.styled";
import { Link, useNavigate } from "react-router-dom";
import { useModal, useToast } from "hooks";
import { useLogout, useDeleteUser } from "services";
import { DeleteUserConfirmModal, SingleButtonLayout } from "components";

export default function MyPage() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { mutate: logoutMutate } = useLogout();
  const { mutate: deleteUserMutate } = useDeleteUser();
  const { handleOpenModal, handleModalClose } = useModal();
  const { addToast } = useToast();
  const navigate = useNavigate();

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
        sessionStorage.clear();
        addToast({ content: "회원 탈퇴 완료" });
        navigate("/");
        window.location.reload();
      },
      onError: () => {
        addToast({ content: "회원 탈퇴에 실패했습니다. 다시 시도해 주세요." });
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

  return (
    <SingleButtonLayout>
      <S.TitleBox>마이페이지</S.TitleBox>
      <S.ContentsBox>
        <Link to="/mypage/edit">
          <S.MenuBox>프로필 설정</S.MenuBox>
        </Link>
        <S.MenuBox onClick={logout}>로그아웃</S.MenuBox>
        <S.MenuBox onClick={openDeleteUserModal}>회원 탈퇴</S.MenuBox>
      </S.ContentsBox>
    </SingleButtonLayout>
  );
}
