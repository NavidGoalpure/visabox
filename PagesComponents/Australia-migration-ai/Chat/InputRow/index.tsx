import React, { useState } from 'react';
import { AdvanceTextArea } from 'Elements/SearchInput/textarea';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';
import { PrimaryButton } from 'Elements/Button/Primary';
import { FaRegCircleStop } from 'react-icons/fa6';
import { VscSend } from 'react-icons/vsc';
import { useLocale } from 'Hooks/useLocale';
import { Languages } from 'Interfaces';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import useDevice from 'Hooks/useDevice';

interface Props {
  asqQuestion: (message?: string | undefined) => void;
  isLoading: boolean;
  stopStream: () => boolean;
}

function QuestionRow({ asqQuestion, isLoading, stopStream }: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const { isMobile } = useDevice();
  const [inputValue, setInputValue] = useState<string>('');
  const { locale } = useLocale();
  //
  function sendQuestionHandler() {
    asqQuestion(inputValue);
    setInputValue('');
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      sendQuestionHandler();
    }
  };

  return (
    <Container>
      <Wrapper>
        <InputField
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={handleKeyPress}
          placeholder={
            isMobile
              ? t(LanguageKeys.MobilePlaceholder)
              : t(LanguageKeys.DesktopPlaceholder)
          }
          endElement={
            <SendButton onClick={isLoading ? stopStream : sendQuestionHandler}>
              {isLoading ? <FaRegCircleStop /> : <SendIcon $locale={locale} />}
            </SendButton>
          }
        />
      </Wrapper>
    </Container>
  );
}

export default QuestionRow;
const Container = styled.section`
  width: 100%;
  padding: 0 1rem 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  transition: all 0.3s ease;
  max-width: 100%;
`;
const InputField = styled(AdvanceTextArea)`
  margin: 0 auto;
  height: max-content;
`;
const SearchIcon = styled(CiSearch)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-primary4);
  margin-inline-end: 0.5rem;
`;
const SendButton = styled(PrimaryButton)`
  border-radius: 0.5rem;
  padding: 0;
  height: 3rem;
  width: 3rem;
  flex-shrink: 0;
  margin-top: auto;
`;
const SendIcon = styled(VscSend)<{ $locale: Languages }>`
  transform: ${({ $locale }) =>
    $locale === Languages.fa ? 'rotate(180deg)' : 'none'};
`;
