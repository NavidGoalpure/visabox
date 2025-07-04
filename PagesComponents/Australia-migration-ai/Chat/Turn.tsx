import { BedrockTurn, BedrockMessage } from './types/bedrock';
import styled from 'styled-components';
import { SelfMessage_Style } from 'Styles/Theme/Layers/layer3/style';
import AssistantMsg from './AssistantMsg';

interface Props {
  turn: BedrockTurn | undefined;
}
function Turn({ turn }: Props) {
  if (!turn) return null;
  
  const message = turn.messages[0]?.content;
  const { role, timestamp, state } = turn;
  
  if (role === 'assistant') return <AssistantMsg messages={turn?.messages} />;

  return <SelfMessage>{message?.trim()}</SelfMessage>;
}
export default Turn;

const SelfMessage = styled.div`
  ${SelfMessage_Style}
  padding: 1rem;
  border-radius: 0.5rem;
  margin-inline-start: auto;
  margin-bottom: 0.5rem;
  white-space-collapse: break-spaces;
`;
