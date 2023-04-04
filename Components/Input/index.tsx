import { InputHTMLAttributes, ReactNode, useEffect, useRef } from "react";
import { Container, InputContainer, StyledInput, Error, Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: any;
  type?: string;
  errorMasage?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  focus?: boolean;
  endElement?: string | ReactNode;
  placeholder?: string;
  inputName?: string;
  label?: string;
}

export const Input = ({
  type = "text",
  errorMasage,
  value,
  disabled = false,
  className,
  onChange,
  focus = false,
  pattern,
  endElement,
  placeholder,
  inputName,
  label,
  ...props
}: InputProps) => {
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputElement?.current && focus) {
      inputElement?.current?.focus();
    }
  }, [focus]);
  return (
    <Container className={className}>
      <InputContainer disabled={disabled} id="input-container">
        {!!label && <Label htmlFor={inputName || ""}>{label}</Label>}
        <StyledInput
          type={type}
          onChange={onChange}
          hasError={!!errorMasage}
          value={value}
          disabled={disabled}
          pattern={pattern}
          placeholder={placeholder}
          name={inputName}
          {...props}
        ></StyledInput>
        {endElement ? endElement : null}
      </InputContainer>
      {errorMasage && <Error data-testid="error-input">{errorMasage}</Error>}
    </Container>
  );
};
