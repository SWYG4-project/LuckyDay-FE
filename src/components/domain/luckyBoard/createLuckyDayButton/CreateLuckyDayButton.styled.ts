import styled from "@emotion/styled";

export const CreateLuckyDayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-size: cover;
  background-image: url("/images/empty-white.png");
  cursor: pointer;

  & > svg {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 390px) {
    width: 60px;
    height: 60px;

    & > svg {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 375px) {
    width: 50px;
    height: 50px;

    & > svg {
      width: 28px;
      height: 28px;
    }
  }
`;
