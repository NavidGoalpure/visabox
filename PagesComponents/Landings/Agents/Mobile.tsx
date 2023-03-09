import { deviceMin } from 'Consts/device';
import styled from 'styled-components';

function MobileAgentsPage() {
  return (
    <Container>
      <div>dre</div>
    </Container>
  );
}
export default MobileAgentsPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 0;
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
