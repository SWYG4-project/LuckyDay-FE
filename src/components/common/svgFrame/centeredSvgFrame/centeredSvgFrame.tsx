import * as S from "./centeredSvgFrame.styled";

interface CenteredSvgFramProps {
  className?: string;
  label: string;
  textColor?: string;
  children: React.ReactNode;
}

function CenteredSvgFrame({
  className,
  label,
  textColor,
  children,
}: CenteredSvgFramProps) {
  return (
    <>
      <S.SvgWrapper className={className}>
        {children}
        <S.Text color={textColor}>{label}</S.Text>
      </S.SvgWrapper>
    </>
  );
}

export default CenteredSvgFrame;
