import { InputHTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { InputContainer, StyledInput, Error, StyledTextarea } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
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
  isTextarea?: boolean;
}

export const AdvanceTextArea = ({
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
  isTextarea = false,
  ...props
}: InputProps) => {
  const textareaElement = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaElement?.current && focus) {
      textareaElement?.current?.focus();
    }
  }, [focus]);

  return (
    <Container className={className}>
      <InputContainer disabled={disabled} id='input-container'>
        {icon ? icon : null}
        <StyledTextarea
          ref={textareaElement}
          style={{
            height: value
              ? `${textareaElement?.current?.scrollHeight || '40'}px`
              : '40px',
          }}
          onChange={onChange}
          hasError={!!errorMasage}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
        />

        {endElement ? endElement : null}
      </InputContainer>
      {errorMasage && <Error data-testid='error-input'>{errorMasage}</Error>}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: max-content;
`;
