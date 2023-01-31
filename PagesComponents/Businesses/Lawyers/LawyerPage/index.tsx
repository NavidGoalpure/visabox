import { deviceMin } from "Consts/device";
import styled, { css } from "styled-components";
import { Lawyers } from "../const";
import Image from "next/image";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import theme from "styled-theming";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
interface Props {
  slug?: string | string[];
}
function Content({ slug }: Props) {
  const chosenLawyer = Lawyers.filter((lawyer) => lawyer.slug === slug);
  const { dt } = useDynamicTranslation();
  return (
    <Container>
      <StarBackground>
        <Star />
      </StarBackground>
      <ProfilePictureWrapper>
        <ProfilePicture
          fill
          src={`/Images/businesses/lawyer/${slug}.jpeg`}
          alt={"lawyer image"}
        />
      </ProfilePictureWrapper>
      <Title>{dt(chosenLawyer?.[0]?.name)}</Title>
    </Container>
  );
}
export default Content;
const StarBackgroundColor = theme("mode", {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray4);
  `,
});
const TitleColor = theme("mode", {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});
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
const ProfilePictureWrapper = styled.div`
  width: 14rem;
  height: 14rem;
  z-index:1;
`;
const ProfilePicture = styled(Image)`
  // object-fit: contain;
  position: relative !important;
  border-radius: 15px;
`;
const StarBackground = styled.div`
${StarBackgroundColor}
clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
position: absolute;
top: -0.5rem;
  left: -0.5rem;
  z-index: 0;
  width: 100vw;
  height: 25rem;
  `;
  const Star = styled.div`
  ${layer1_BG}
  width: 150%;
  height: 150%;
  position: absolute;
  z-index:0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  clip-path: polygon(
    50% 0%,
    66% 34%,
    98% 35%,
    71% 56%,
    86% 100%,
    49% 88%,
    13% 100%,
    32% 56%,
    2% 35%,
    37% 35%
  );
`;
const Title = styled.h2`
${TitleColor}
`
