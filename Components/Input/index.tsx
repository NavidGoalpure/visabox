import { InputHTMLAttributes, ReactNode, RefObject } from "react";
import {
  Container,
  InputContainer,
  StyledInput,
  ErrorElement,
  ErrorIcon,
  Label,
} from "./styles";

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
  console.log("navid value ===", value);
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
          value={isNumberOnly && value ? value.replace(/[^\d]/g, "") : value}
          disabled={disabled}
          placeholder={placeholder}
          name={inputName}
          {...props}
        ></StyledInput>
        {!!errorMasage && (
          <ErrorElement>
            <ErrorIcon />
            {errorMasage}{" "}
          </ErrorElement>
        )}
        {endElement ? endElement : null}
      </InputContainer>
    </Container>
  );
};
