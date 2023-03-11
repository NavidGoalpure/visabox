import { Exchanges } from 'Consts/Businesses/exchages';
import { deviceMin } from 'Consts/device';
import styled from 'styled-components';
import ExchangeCard from './ExchangeCard';

function Content() {
  return (
    <Container>
      <Row>
        {Exchanges.map((exchange, i) => (
          <ExchangeCard
            key={i}
            isFeatured={exchange.isFeatured}
            desc={exchange.desc}
            name={exchange.fullName}
            externalLink={exchange.contact.website || ''}
            location={exchange.location}
            slug={exchange.slug}
            contact={{}}
          />
        ))}
      </Row>
    </Container>
  );
}
export default Content;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  @media ${deviceMin.tabletM} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  row-gap: 3rem;
`;
