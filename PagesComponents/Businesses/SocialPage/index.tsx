import { deviceMin } from 'Consts/device';
import styled from 'styled-components';
import { VipSocialMedias, NormalSocialMedias } from './const';
import SmartSocialCard from './SocialCard';

function Content() {
  return (
    <Container>
      <Row>
        {VipSocialMedias.map((socialMedia, i) => (
          <SmartSocialCard
            key={i}
            isFeatured={socialMedia.isFeatured}
            desc={socialMedia.desc}
            name={socialMedia.name}
            link={socialMedia.link}
            socialmediaType={socialMedia.socialmediaType}
            locations={socialMedia.locations}
            slug={socialMedia.slug}
          />
        ))}
      </Row>
      <Row>
        {NormalSocialMedias.map((socialMedia, i) => (
          <SmartSocialCard
            key={i}
            isFeatured={socialMedia.isFeatured}
            desc={socialMedia.desc}
            name={socialMedia.name}
            link={socialMedia.link}
            socialmediaType={socialMedia.socialmediaType}
            locations={socialMedia.locations}
            slug={socialMedia.slug}
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
