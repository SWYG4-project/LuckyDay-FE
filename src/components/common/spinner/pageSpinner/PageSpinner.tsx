import * as S from "./PageSpinner.styled";

export default function PageSpinner() {
  return (
    <div css={S.PageSpinnerContainer}>
      <div css={S.PageSpinner} />
    </div>
  );
}
