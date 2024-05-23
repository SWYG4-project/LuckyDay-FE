import * as S from "./FileUploader.styled";
import React, { useRef, useState } from "react";
import { useToast } from "hooks";
import { ComponentSpinner } from "components";
import imageCompression from "browser-image-compression";

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { addToast } = useToast();

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        addToast({ content: "3MB 이하의 파일만 업로드할 수 있습니다." });
        return;
      }

      setLoading(true);

      const options = {
        maxSizeMB: 0.19,
        useWebWorker: true,
      };

      try {
        let compressedFile = await imageCompression(file, options);

        while (compressedFile.size > 200 * 1024) {
          const newOptions = {
            ...options,
            maxSizeMB: compressedFile.size / 1024 / 1024 / 2,
          };
          compressedFile = await imageCompression(compressedFile, newOptions);
        }

        onFileSelect(compressedFile);
      } catch (error) {
        console.error("Error compressing file:", error);
      } finally {
        setLoading(false);
      }
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
