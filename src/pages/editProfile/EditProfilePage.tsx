import * as S from "./EditProfilePage.styled";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useModal } from "hooks";
import { updateProfile } from "apis/users";
import {
  EditProfileConfirmModal,
  SingleButtonLayout,
  SvgButton,
} from "components";
import { ShortBoxIcon } from "assets";

export default function EditProfilePage() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nicknameError, setNicknameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const { handleOpenModal, handleModalClose } = useModal();

  const initialNickname = sessionStorage.getItem("nickname") || "";
  const initialEmail = sessionStorage.getItem("email") || "";

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      setEmailError("럭키 데이 알림을 받을 이메일 주소를 입력하세요.");
      return false;
    } else if (!email.includes("@")) {
      setEmailError("유효하지 않은 이메일 주소입니다.");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    if (newNickname.length > 8) {
      setNicknameError("닉네임은 최대 8자까지 입력 가능합니다.");
    } else {
      setNicknameError("");
      setNickname(newNickname);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handleSave = async () => {
    console.log("저장 시도: ", nickname, email);
    if (!validateEmail(email)) {
      return;
    }
    try {
      await updateProfile({ nickname, email });
      sessionStorage.setItem("nickname", nickname);
      sessionStorage.setItem("email", email);
      navigate("/mypage");
    } catch (error) {
      console.error("프로필 업데이트 실패: ", error);
    }
  };

  useEffect(() => {
    setNickname(initialNickname);
    setEmail(initialEmail);
  }, [initialNickname, initialEmail]);

  useEffect(() => {
    if (
      (nickname !== initialNickname || email !== initialEmail) &&
      validateEmail(email)
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [nickname, email, initialNickname, initialEmail]);

  const openEditProfileModal = () => {
    handleOpenModal(
      <EditProfileConfirmModal
        onClose={handleModalClose}
        onSave={handleSave}
        email={email}
      />
    );
  };

  return (
    <SingleButtonLayout>
      <S.TitleBox>프로필 설정</S.TitleBox>
      <S.ContentsBox>
        <S.ProfileBox>
          <S.Text_h2>닉네임</S.Text_h2>
          <S.StyledInput
            placeholder="닉네임을 입력해주세요."
            value={nickname || undefined}
            handleChange={handleNicknameChange}
          />
          <S.ErrorContainer>
            {nicknameError && <S.ErrorText>{nicknameError}</S.ErrorText>}
          </S.ErrorContainer>
          <S.Text_h2>이메일 주소</S.Text_h2>
          <S.StyledInput
            placeholder="이메일을 입력해주세요."
            value={email || undefined}
            handleChange={handleEmailChange}
          />
          <S.ErrorContainer>
            {emailError && <S.ErrorText>{emailError}</S.ErrorText>}
            {!emailError && email === "" && (
              <S.ErrorText>
                럭키 데이 알림을 받을 이메일 주소를 입력하세요.
              </S.ErrorText>
            )}
          </S.ErrorContainer>
          <S.ButtonBox>
            <SvgButton
              label={"저장하기"}
              onClick={openEditProfileModal}
              icon={<ShortBoxIcon />}
              textColor={
                isButtonDisabled ? theme.colors.black : theme.colors.white
              }
              fillColor={
                isButtonDisabled ? theme.colors.gray : theme.colors.purple
              }
              width="100px"
              height="42px"
              disabled={isButtonDisabled}
            ></SvgButton>
          </S.ButtonBox>
        </S.ProfileBox>
      </S.ContentsBox>
    </SingleButtonLayout>
  );
}
