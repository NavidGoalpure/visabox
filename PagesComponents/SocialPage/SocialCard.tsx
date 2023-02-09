import { Locations } from "Interfaces";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { layer1_TextColor } from "Styles/Theme/Layers/layer1/theme";
import { Headline6Style } from "Styles/Typo";
import { TelegramGroup } from "./interfaces";

type Props = TelegramGroup;
function Content({
  desc,
  name,
  telegramLink,
  socialmediaType,
  locations,
  slug,
}: Props) {
  return (
    <Container>
      <Desc>{desc}</Desc>
      <BottomWrapper>
        <LocationTag>
          {locations === Locations.fa ? "Persian" : "English"}
        </LocationTag>
      </BottomWrapper>
    </Container>
  );
}
export default Content;
export const ContainerTheme = theme("mode", {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});
const Container = styled.div`
  ${ContainerTheme};
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  clip-path: polygon(0 0, 95% 0, 100% 75%, 100% 100%, 0 100%);
  padding: 3.25rem 8.75rem;
  margin-bottom: 4rem;
`;
const Desc = styled.p`
  ${layer1_TextColor}
  ${Headline6Style}
`;
const BottomWrapper = styled.div``;
const LocationTag = styled.h3``;
