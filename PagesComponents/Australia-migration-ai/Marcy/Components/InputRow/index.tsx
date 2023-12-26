import React, { useContext, useEffect, useState } from 'react';
import { AdvanceTextArea } from 'Elements/SearchInput/textarea';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';
import { PrimaryButton } from 'Elements/Button/Primary';
import { FaRegCircleStop } from 'react-icons/fa6';
import { VscSend } from 'react-icons/vsc';
interface Props {
  sendMessage: (message?: string | undefined) => boolean;
  isLoading: boolean;
  stopStream: () => boolean;
}

function QuestionRow({ sendMessage, isLoading, stopStream }: Props) {
  const [inputValue, setInputValue] = useState<string>('');
  function sendQuestionHandler() {
    console.log('navid inja');

    sendMessage(inputValue);
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
          placeholder={'ask question'}
          endElement={
            <SendButton onClick={isLoading ? stopStream : sendQuestionHandler}>
              {isLoading ? <FaRegCircleStop /> : <VscSend />}
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
