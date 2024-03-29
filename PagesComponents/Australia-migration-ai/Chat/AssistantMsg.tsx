import { FunctionCall, Message, TextMessage } from 'fixie';
import { AnchorHTMLAttributes, ClassAttributes, JSX } from 'react';
import styled from 'styled-components';
import {
  AnotherMessage_Style,
  layer3_TextStyle,
} from 'Styles/Theme/Layers/layer3/style';
import { containsArabicOrPersianAlphabets } from 'Utils';
import { ILookupEnum } from './Interface';
import { convertMarkdownToHTML, getLookupLabel } from './Utils';

interface Props {
  messages: Message[] | undefined;
}

function AssistantMsg({ messages }: Props) {
  if (messages?.length === 0) return null;
  let outputComponent: JSX.Element[] = [];
  messages?.map(async (message) => {
    switch (message.kind) {
      case 'text':
        // convertMarkdownToHtml(message.content).then((content) => {

        //   outputComponent.push(<Container>{content}</Container>);
        // });
        const state = message.metadata;

        outputComponent.push(
          <Container>
            <div
              style={{
                direction: containsArabicOrPersianAlphabets(message.content)
                  ? 'rtl'
                  : 'ltr',
              }}
              dangerouslySetInnerHTML={{
                __html: convertMarkdownToHTML(message.content),
              }}
            />
          </Container>
        );
        break;
      case 'functionCall':
        const myMessage: FunctionCall = message as FunctionCall;
        // اگه قبلا نشون  داده نشده بود
        if (myMessage?.name && myMessage?.args?.query) {
          outputComponent.push(
            <Aware
              dangerouslySetInnerHTML={{
                __html: `looking in
                    <span>
                      ${getLookupLabel(myMessage.name as ILookupEnum)}
                    </span>
                    for <span class='standalone'>${
                      myMessage?.args?.query
                    }</span>`,
              }}
            ></Aware>
          );
        }
        break;
      default:
        break;
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
`;
const Aware = styled.div`
  ${layer3_TextStyle}
  margin-bottom:0.5rem;
  span {
    color: var(--color-secondary3);
  }
  .standalone {
    color: var(--color-secondary2);
  }
`;
