import React from "react";
import * as S from "./Input.styled";

interface InputProps {
  className?: string;
  placeholder: string;
  disabled?: boolean;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur?: () => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef(
  (
    {
      className,
      placeholder,
      disabled,
      handleFocus,
      handleBlur,
      handleChange,
    }: InputProps,
    ref?: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <S.Input
        className={className}
        ref={ref}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
