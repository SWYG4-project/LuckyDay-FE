import * as S from "./FileUploader.styled";
import React, { useRef, useState } from "react";
import { ComponentSpinner } from "components";

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      onFileSelect(file);
      setLoading(false);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <S.Container>
      <S.UploadBox onClick={handleClick}>
        {loading && <ComponentSpinner />}
        <S.HiddenFileInput
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
        />
      </S.UploadBox>
    </S.Container>
  );
};

export default FileUploader;
