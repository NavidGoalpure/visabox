import {
  InputHTMLAttributes,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
} from "react";
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
  // isNumberOnly detemines if value can only accept numbers
  isNumberOnly?: boolean;
  ref?: RefObject<HTMLInputElement>;
}

export const Input = ({
  type = "text",
  isNumberOnly = false,
  errorMasage,
  value,
  disabled = false,
  className,
  onChange,
  focus = false,
  endElement,
  placeholder,
  inputName,
  id,
  label,
  ref,
  ...props
}: InputProps) => {
  return (
    <Container className={className}>
      <InputContainer disabled={disabled} id="input-container">
        {!!label && <Label htmlFor={inputName || ""}>{label}</Label>}
        <StyledInput
          id={id}
          type={type}
          ref={ref}
          onChange={onChange}
          hasError={!!errorMasage}
          value={isNumberOnly ? value?.replace(/[^\d]/g, "") : value}
          disabled={disabled}
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
