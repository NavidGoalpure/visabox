import { deviceMin } from 'Consts/device';
import { BedrockTurn } from './types/bedrock';
import styled from 'styled-components';
import { layer2A_Bg } from 'Styles/Theme/Layers/layer2/theme';
import Turn from './Turn';

interface Props {
  turns: BedrockTurn[] | undefined;
}
function ConversationsHistory({ turns }: Props) {
  if (!turns) return null;
  return (
    <Container>
      {turns.map((turn, index) => {
        return <Turn key={`${turn.timestamp}-${index}`} turn={turn} />;
      })}
    </Container>
  );
}
export default ConversationsHistory;

const Container = styled.div`
  ${layer2A_Bg}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
