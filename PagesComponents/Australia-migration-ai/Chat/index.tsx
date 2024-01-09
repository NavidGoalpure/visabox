import { deviceMin } from 'Consts/device';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import styled from 'styled-components';
import {
  Layer1_TitleStyle,
  Layer1_SubtitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import {
  componentStatements,
  FREE_CREDIT_THRESHOLD,
  LanguageKeys,
} from './const';
import { useFixie } from 'fixie/web';
import { ScrollBox } from 'Elements/ScrollBox';
import { layer2A_BodyStyle } from 'Styles/Theme/Layers/layer2/style';
import ShowConversation from './ShowConversation';
import { Loading } from 'Elements/Loading';
import { ChatScrollAnchor } from './chatScrollAnchor';
import React, { useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import SmartRow from './SmartRow';
import { AiChatContext, AiChatContextProvider } from './hooks/useAiCredit';
import { findSmartHeight } from 'Elements/Select/utils';

interface Props {
  aiAgentId: string;
}
function Content({ aiAgentId }: Props) {
  const { status } = useSession();
  const { t } = useStaticTranslation(componentStatements);
  const { questionRemain } = useContext(AiChatContext);
  //
  const { conversation, sendMessage, stop } = useFixie({
    agentId: aiAgentId,
    agentStartsConversation: false,
  });

  //////isLoading logic//////
  const conversationLength = conversation?.turns?.length || 0;
  const isLoading =
    conversation?.turns?.[conversationLength - 1]?.state === 'in-progress';
  //
  if (status === 'loading') return <Loading />;

  return (
    <Container>
      {!conversation && <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>}
      {!conversation && (
        <PageSubtitle>{t(LanguageKeys.PageSubtitle)}</PageSubtitle>
      )}
      <QuestionRemain
        dangerouslySetInnerHTML={{
          __html: t(LanguageKeys.QuestionRemain, [
            // به عدد باقیمانده سوالات ۳ تا اضافه میکنیم چون همیشه ۳ ا اشانتیون وجود دارد
            {
              $number: questionRemain.toString(),
            },
          ]),
        }}
      />
      <ChatArea>
        <Scroll
          $size={conversation ? 'full' : 'mini'}
          // height={'40vh'}
        >
          <ShowConversation turns={conversation?.turns} />
          {isLoading && <Loading />}
          <ChatScrollAnchor trackVisibility={isLoading} />;
        </Scroll>

        <SmartRow sendMessage={sendMessage} isLoading={isLoading} stop={stop} />
      </ChatArea>
      <Disclaimer
        dangerouslySetInnerHTML={{ __html: t(LanguageKeys.Disclaimer) }}
      />
    </Container>
  );
}
export default Content;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${deviceMin.tabletM} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const PageTitle = styled.h1`
  ${Layer1_TitleStyle}
  @media ${deviceMin.tabletS} {
    width: 100%;
    text-align: start;
  }
`;
const ChatArea = styled.section`
  width: 100%;
  ${layer2A_BodyStyle};
  border-radius: 0 15px 15px 15px;
  padding: 0;
  margin-bottom: 1rem;
`;
const QuestionRemain = styled.div`
  display: flex;
  background: var(--color-secondary4);
  color: var(--color-gray1);
  font-weight: 600;
  width: max-content;
  padding: 1rem;
  margin-inline-end: auto;
  border-radius: 15px 15px 0 0;
  white-space-collapse: preserve;
  span {
    color: var(--color-secondary1);
  }
`;
const PageSubtitle = styled.h2`
  ${Layer1_SubtitleStyle};
`;
const Scroll = styled(ScrollBox)<{ $size: 'mini' | 'full' }>`
  border-radius: 15px;
  ${({ $size }) =>
    $size === 'full'
      ? 'min-height: calc(100vh - 15rem);'
      : 'min-height: calc(100vh - 26rem);'}
`;
const Disclaimer = styled.div`
  ${Layer1_SubtitleStyle};
  font-size: 12px;
  line-height: 20px;
  span {
    color: var(--color-secondary4);
  }
`;
