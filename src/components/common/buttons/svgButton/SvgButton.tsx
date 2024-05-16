import * as S from "./SvgButton.styled";
import { SvgFrame } from "components/common/svgFrame";
import { ReactNode } from "react";
import { useTheme } from "@emotion/react";

interface SvgButtonProps {
  className?: string;
  label: string;
  textColor?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  icon: ReactNode;
  fillColor?: string;
  width?: string;
  height?: string;
}

export default function SvgButton({
  className,
  label,
  textColor,
  onClick,
  children,
  icon,
  fillColor,
  width = "247px",
  height = "45px",
}: SvgButtonProps) {
  const theme = useTheme();
  const finalFillColor = fillColor || theme.colors.beige;

  return (
    <S.SvgWrapper className={className} onClick={onClick}>
      {children}
      <SvgFrame css={S.SvgButton(finalFillColor, width, height)} icon={icon} />
      <S.Text color={textColor}>{label}</S.Text>
    </S.SvgWrapper>
  );
}
