import * as S from "./centeredSvgFrame.styled";

interface CenteredSvgFramProps {
  className?: string;
  label?: string;
  textColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function CenteredSvgFrame({
  className,
  label,
  textColor,
  children,
  onClick,
}: CenteredSvgFramProps) {
  return (
    <>
      <S.SvgWrapper className={className} onClick={onClick}>
        {children}
        <S.Text color={textColor}>{label}</S.Text>
      </S.SvgWrapper>
    </>
  );
}

export default CenteredSvgFrame;
