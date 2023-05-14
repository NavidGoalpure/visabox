import { InputHTMLAttributes, ReactNode, RefObject } from "react";
import {
  Container,
  InputContainer,
  StyledInput,
  ErrorElement,
  ErrorIcon,
  Label,
  InputWrapper,
  LoadingBackgroundCircle,
  LoadingMovingCircle,
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
  isLoading?: boolean;
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
  focus = false,
  disabled = false,
  isLoading = false,
  errorMasage,
  value,
  className,
  onChange,
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
        <InputWrapper>
          <StyledInput
            id={id}
            type={type}
            ref={ref}
            onChange={onChange}
            hasError={!!errorMasage}
            value={
              isNumberOnly && value
                ? value.toString().replace(/[^\d]/g, "")
                : value
            }
            disabled={disabled || isLoading}
            placeholder={placeholder}
            name={inputName}
            {...props}
          />
          {isLoading && (
            <svg width="50" height="50" viewBox="0 0 100 100">
              <LoadingBackgroundCircle
                strokeWidth={7}
                r="30"
                cx={50}
                cy={50}
                x={0}
                y={0}
              />
              <LoadingMovingCircle
                strokeWidth={7}
                r="30"
                cx={50}
                cy={50}
                x={0}
                y={0}
              />
            </svg>
          )}
        </InputWrapper>
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
