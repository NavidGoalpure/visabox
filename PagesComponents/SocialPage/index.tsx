import styled from "styled-components";
import { SocialMedias } from "./const";
import SocialCard from "./SocialCard";

function Content() {
  return (
    <Container>
      {SocialMedias.map((socialMedia, i) => (
        <SocialCard
          desc={socialMedia.desc}
          name={socialMedia.name}
          telegramLink={socialMedia.telegramLink}
          socialmediaType={socialMedia.socialmediaType}
          locations={socialMedia.locations}
          slug={socialMedia.slug}
        />
      ))}
    </Container>
  );
}
export default Content;
const Container = styled.div``