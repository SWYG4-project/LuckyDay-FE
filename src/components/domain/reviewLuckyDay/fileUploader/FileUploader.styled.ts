// FileUploader.styled.ts
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const UploadBox = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  cursor: pointer;
`;
