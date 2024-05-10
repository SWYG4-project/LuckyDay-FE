import * as S from "./EditProfilePage.styled";

export default function EditProfilePage() {
  return (
    <>
      <S.TitleBox>마이페이지</S.TitleBox>
      <S.ContentsBox>
        <S.Text_h1>프로필 설정</S.Text_h1>
        <S.ProfileBox>
          <S.Text_h2>닉네임</S.Text_h2>
          <S.StyledInput placeholder="닉네임을 입력해주세요." />
          <S.Text_h2>이메일 주소</S.Text_h2>
          <S.StyledInput placeholder="이메일을 입력해주세요." />
          <S.Text_h3>럭키 데이 알림을 받을 이메일 주소를 입력하세요.</S.Text_h3>
        </S.ProfileBox>
      </S.ContentsBox>
    </>
  );
}
