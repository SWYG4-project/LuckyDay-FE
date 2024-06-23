import styled from "@emotion/styled";

export const CreateLuckyDayButton = styled.button`
  width: 70px;
  height: 70px;
  border: none;
  background-size: cover;
  background-image: url("/images/empty-white.png");
  cursor: pointer;

  & > svg {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 390px) {
    width: 60px;
    height: 60px;

    & > svg {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 375px) {
    width: 50px;
    height: 50px;

    & > svg {
      width: 30px;
      height: 30px;
    }
  }
`;
