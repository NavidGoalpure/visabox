import { deviceMin } from "Consts/device";
import styled, { css } from "styled-components";
import { Lawyers } from "../const";
import Image from "next/image";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import theme from "styled-theming";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
import { Headline4Style } from "Styles/Typo";
import { SidebarPage } from "Components/Business/Lawyer/LawyerPage/SideBar";
import { AiFillStar } from "react-icons/ai";
import { Lawyer } from "../interfaces";
interface Props {
  ChosenLawyer?: Lawyer;
}
function MobileLawyersPage({ ChosenLawyer }: Props) {
  const { dt } = useDynamicTranslation();

  return (
    <Container>
      <StarBackground aria-hidden={true}>
        <Star aria-hidden={true} />
      </StarBackground>
      <ProfilePictureWrapper>
        <ProfilePicture
          fill
          src={`/Images/businesses/lawyer/${ChosenLawyer?.slug}.jpeg`}
          alt={"lawyer image"}
        />
        <VIPStarContainer aria-hidden={true}>
          <VIPStar aria-hidden={true} />
        </VIPStarContainer>
      </ProfilePictureWrapper>
      <Title>{dt(ChosenLawyer?.name)}</Title>
      <SidebarPage
        maraNumber={ChosenLawyer?.maraNumber}
        website={ChosenLawyer?.website}
        email={ChosenLawyer?.contact?.email}
        phone={ChosenLawyer?.contact?.phone}
        telegram={ChosenLawyer?.contact?.telegram}
        instagram={ChosenLawyer?.contact?.instagram}
        linkedin={ChosenLawyer?.contact?.linkedin}
        desc={ChosenLawyer?.desc}
      />
    </Container>
  );
}
export default MobileLawyersPage;
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
  z-index: 0;
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
const ProfilePictureWrapper = styled.div`
  width: 14rem;
  height: 14rem;
  z-index: 1;
  margin-bottom: 4rem;
  position: relative;
`;
const ProfilePicture = styled(Image)`
  // navid this is ugly
  object-fit: contain;
  position: relative !important;
  border-radius: 15px;
`;

const Title = styled.h2`
  ${TitleColor}
  ${Headline4Style}
  z-index:1;
  font-weight: 900;
  margin-bottom: 4rem;
`;
const VIPStarContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-gray5);
  border-radius: 0 0 50% 50%;
  position: absolute;
  top: 0;
  right: 5%;
`;
const VIPStar = styled(AiFillStar)`
  color: var(--color-secondary4);
  width: 70%;
  height: auto;
`;
