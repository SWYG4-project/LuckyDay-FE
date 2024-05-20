import * as S from "./SvgButton.styled";
import { SvgFrame } from "components/common/svgFrame";
import { ReactNode } from "react";
import { useTheme } from "@emotion/react";

interface SvgButtonProps {
  className?: string;
  label?: string;
  icon: ReactNode;
  width?: string;
  height?: string;
  textColor?: string;
  fillColor?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function SvgButton({
  className,
  label,
  icon,
  width = "247px",
  height = "45px",
  textColor,
  fillColor,
  disabled = false,
  children,
  onClick,
}: SvgButtonProps) {
  const theme = useTheme();
  const finalFillColor = fillColor || theme.colors.beige;

  return (
    <S.SvgWrapper
      className={className}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {children}
      <SvgFrame
        css={S.SvgButton(finalFillColor, width, height, disabled)}
        icon={icon}
      />
      <S.Text color={textColor}>{label}</S.Text>
    </S.SvgWrapper>
  );
}
