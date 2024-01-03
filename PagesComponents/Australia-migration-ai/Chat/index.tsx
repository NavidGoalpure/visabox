import { deviceMin } from 'Consts/device';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import styled from 'styled-components';
import {
  Layer1_TitleStyle,
  Layer1_SubtitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { componentStatements, LanguageKeys } from './const';
import { useFixie } from 'fixie/web';
import { ScrollBox } from 'Elements/ScrollBox';
import { layer2A_BodyStyle } from 'Styles/Theme/Layers/layer2/style';
import ShowConversation from './ShowConversation';
import { Loading } from 'Elements/Loading';
import { ChatScrollAnchor } from './chatScrollAnchor';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';

import { Client } from 'Interfaces/Database/Client';
import SmartRow from './SmartRow';

interface Props {
  aiAgentId: string;
  userData: Client | undefined;
}
function Content({ aiAgentId, userData }: Props) {
  const { status } = useSession();

  const { t } = useStaticTranslation(componentStatements);
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
      <ChatArea>
        <Scroll $size={conversation ? 'full' : 'mini'}>
          <ShowConversation turns={conversation?.turns} />
          {isLoading && <Loading />}
          <ChatScrollAnchor trackVisibility={isLoading} />;
        </Scroll>

        <SmartRow
          userData={userData}
          sendMessage={sendMessage}
          isLoading={isLoading}
          stop={stop}
        />
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
  border-radius: 15px;
  padding: 0;
  margin-bottom: 1rem;
`;
const PageSubtitle = styled.h2`
  ${Layer1_SubtitleStyle};
`;
const Scroll = styled(ScrollBox)<{ $size: 'mini' | 'full' }>`
  border-radius: 15px;
  ${({ $size }) =>
    $size === 'full'
      ? 'min-height: calc(100vh - 12rem);'
      : 'min-height: calc(100vh - 27rem);'}
`;
const Disclaimer = styled.div`
  ${Layer1_SubtitleStyle};
  font-size: 12px;
  line-height: 20px;
  span {
    color: var(--color-secondary4);
  }
`;
