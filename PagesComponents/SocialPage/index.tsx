import { deviceMin } from "Consts/device";
import styled from "styled-components";
import { SocialMedias } from "./const";
import SmartSocialCard from "./SocialCard";

function Content() {
  return (
    <Container>
      {SocialMedias.map((socialMedia, i) => (
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
