import { InputHTMLAttributes, ReactNode, RefObject } from "react";
import {
  Container,
  InputContainer,
  StyledInput,
  ErrorElement,
  ErrorIcon,
  Label,
  InputWrapper,
} from "./styles";
import { InputLoading } from "./inputLoading";

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
  label?: string | ReactNode;
  isInputInModal?: boolean;
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
  isInputInModal = false,
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
            isInputInModal={isInputInModal}
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
          {isLoading && <InputLoading />}
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
