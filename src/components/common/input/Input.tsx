// Input.tsx
import React from "react";
import * as S from "./Input.styled";

interface InputProps {
  className?: string;
  placeholder: string;
  disabled?: boolean;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleBlur?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      placeholder,
      disabled,
      handleFocus,
      handleBlur,
      handleKeyDown,
      handleChange,
      value,
    },
    ref
  ) => {
    return (
      <S.Input
        className={className}
        ref={ref}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={value}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
