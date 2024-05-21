import * as S from "./ComponentSpinner.styled";

export default function ComponentSpinner() {
  return (
    <div css={S.ComponentSpinnerContainer}>
      <div css={S.ComponentSpinner} />
    </div>
  );
}
