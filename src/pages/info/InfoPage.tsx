import * as S from "./InfoPage.styled";
import { SingleButtonLayout } from "components";

export default function InfoPage() {
  return (
    <SingleButtonLayout>
      <S.TitleBox>만든 사람들</S.TitleBox>
      <S.ContentsBox>
        <S.MenuBox>
          <S.ProfileBox>
            <S.ProfileImage src="/images/logo.webp" />
            <S.InfoBox>
              Team LuckyDay
              <S.EmailBox>enjoyluckday@gmail.com</S.EmailBox>
            </S.InfoBox>
          </S.ProfileBox>
        </S.MenuBox>
        <S.MenuBox>
          <S.JobBox>Product Manager</S.JobBox>
          <S.ProfileBox>
            <S.ProfileImage src="/images/profile/profile-03.webp" />
            <S.InfoBox>
              명채린
              <S.EmailBox>ghkrk1132@gmail.com</S.EmailBox>
            </S.InfoBox>
          </S.ProfileBox>
        </S.MenuBox>
        <S.MenuBox>
          <S.JobBox>Designer</S.JobBox>
          <S.ProfileBox>
            <S.ProfileImage src="/images/profile/profile-01.webp" />
            <S.InfoBox>
              이소연
              <S.EmailBox>ghkrk1132@gmail.com</S.EmailBox>
            </S.InfoBox>
          </S.ProfileBox>
        </S.MenuBox>
        <S.MenuBox>
          <S.JobBox>Frontend Developer</S.JobBox>
          <S.ProfileBox>
            <S.ProfileImage src="/images/profile/profile-05.webp" />
            <S.InfoBox>
              김유래
              <S.EmailBox>yoorae.dev@gmail.com</S.EmailBox>
            </S.InfoBox>
          </S.ProfileBox>
          <S.ProfileBox>
            <S.ProfileImage src="/images/profile/profile-06.webp" />
            <S.InfoBox>
              이현진
              <S.EmailBox>limgx5192@gmail.com</S.EmailBox>
            </S.InfoBox>
          </S.ProfileBox>
        </S.MenuBox>
        <S.MenuBox>
          <S.JobBox>Backend Developer</S.JobBox>
          <S.ProfileBox>
            <S.ProfileImage src="/images/profile/profile-02.webp" />
            <S.InfoBox>
              송혜린
              <S.EmailBox>songhr95@gmail.com</S.EmailBox>
            </S.InfoBox>
          </S.ProfileBox>
          <S.ProfileBox>
            <S.ProfileImage src="/images/profile/profile-04.webp" />
            <S.InfoBox>
              홍정명
              <S.EmailBox>hkdhjm@gmail.com</S.EmailBox>
            </S.InfoBox>
          </S.ProfileBox>
        </S.MenuBox>
        <S.TextBox>© 2024 Team LuckyDay. All rights reserved</S.TextBox>
      </S.ContentsBox>
    </SingleButtonLayout>
  );
}
