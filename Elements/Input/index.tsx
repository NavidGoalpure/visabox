import { InputHTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { Container, InputContainer, StyledInput, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
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
}

export const Input = ({
  icon,
  type = 'text',
  errorMasage,
  value,
  disabled = false,
  className,
  onChange,
  focus = false,
  pattern,
  endElement,
  placeholder,
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
      <InputContainer disabled={disabled}>
        {icon ? icon : null}
        <StyledInput
          type={type}
          onChange={onChange}
          hasError={!!errorMasage}
          value={value}
          disabled={disabled}
          pattern={pattern}
          placeholder={placeholder}
          {...props}
        ></StyledInput>
        {endElement ? endElement : null}
      </InputContainer>
      {errorMasage && <Error data-testid='error-input'>{errorMasage}</Error>}
    </Container>
  );
};
