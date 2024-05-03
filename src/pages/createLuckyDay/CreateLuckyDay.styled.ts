import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CreateLuckyDay = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  //TODO: 임시 버튼으로 수정예정
  ${({ theme }) => css`
    padding: 5px 10px;
    background-color: ${theme.colors.orange};
    color: #fff;
  `}
`;
