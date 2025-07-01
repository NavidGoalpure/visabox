import { BedrockMessage } from './types/bedrock';
import { JSX } from 'react';
import styled from 'styled-components';
import {
  AnotherMessage_Style,
  layer3_TextStyle,
} from 'Styles/Theme/Layers/layer3/style';
import { containsArabicOrPersianAlphabets } from 'Utils';
import { convertMarkdownToHTML } from './Utils';
import { BsRobot } from 'react-icons/bs';

interface Props {
  messages: BedrockMessage[] | undefined;
}

function AssistantMsg({ messages }: Props) {
  if (messages?.length === 0) return null;
  let outputComponent: JSX.Element[] = [];
  
  messages?.forEach((message) => {
    if (message.role === 'assistant') {
      // Replace "Bot:" with bot icon in the content
      let processedContent = message.content;
      if (processedContent.includes('Bot:')) {
        processedContent = processedContent.replace(/Bot:\s*/g, '');
      }
      
      outputComponent.push(
        <Container key={message.timestamp || Date.now()}>
          <MessageHeader
            style={{
              direction: containsArabicOrPersianAlphabets(processedContent)
                ? 'rtl'
                : 'ltr',
            }}
          >
            <MessageContent
              dangerouslySetInnerHTML={{
                __html: convertMarkdownToHTML(processedContent),
              }}
            />
          </MessageHeader>
        </Container>
      );
    }
  });
  
  return <>{outputComponent}</>;
}
export default AssistantMsg;

const Container = styled.div`
  ${AnotherMessage_Style}
  padding: 1rem;
  border-radius: 0.5rem;
  margin-inline-end: auto;
  margin-bottom: 1.5rem;
  white-space-collapse: break-spaces;
  display: flex;
  flex-direction: column;
`;

const MessageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

const BotIcon = styled(BsRobot)`
  width: 1.2rem;
  height: 1.2rem;
  color: var(--color-secondary1);
  flex-shrink: 0;
`;

const MessageContent = styled.div`
  line-height: 1.5;
  white-space: pre-line;
`;
