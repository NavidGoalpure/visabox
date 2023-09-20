import { deviceMin } from "Consts/device";
import styled, { css } from "styled-components";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import theme from "styled-theming";
import {
  layer2A_TextStyle,
  layer2A_TitleStyle,
} from "Styles/Theme/Layers/layer2/style";
import { layer2A_Key } from "Styles/Theme/Layers/layer2/theme";
import { Client } from "Interfaces/Database/Client";
import DescriptionSection from "../DescriptionSection";
import { CalculateClientScore } from "PagesComponents/Clients/PointCalculator/Contexts/FormDataContext/utils";
import { componentStatements, LanguageKeys } from "../const";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { Headline7Style } from "Styles/Typo";
import { BsPersonCircle } from "react-icons/bs";
import {
  Hint_SecondaryContainer,
  Hint_SecondaryIcon,
  Hint_SecondaryTextStyle,
} from "Styles/Theme/Hint/style";
import { FiInfo } from "react-icons/fi";
import BoxesSection from "../BoxesSection";

interface Props {
  client: Client;
  userId: string;
}
function MobileAgentsPage({ client, userId }: Props) {
  const dataCreatedAt = client?._createdAt?.toString().substring(0, 10);
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <StarBackground aria-hidden={true}>
        <Star aria-hidden={true} />
      </StarBackground>
      <ProfilePictureWrapper>
        {client?.avatar ? (
          <ProfilePicture
            src={client?.avatar || "/Images/placeholder.jpeg"}
            alt={client?.name ? `${client?.name} image` : "agent image"}
          />
        ) : (
          <ImagePlaceholder />
        )}
      </ProfilePictureWrapper>
      <ProfileData>
        <Name>
          {client?.name} {client?.lastname}
        </Name>
        <JobTitle>{client?.current_job}</JobTitle>
        <CreatedDate>{dataCreatedAt}</CreatedDate>
        {!!client?.country && (
          <HeaderLabel>
            {t(LanguageKeys.ScoreTitle)}{" "}
            <span id="score">{CalculateClientScore(client)}</span>
          </HeaderLabel>
        )}

        {!client?.country && (
          <HintContainer>
            <HintInfoIcon />
            <HintContent>
              {/* if the user is the owner of the page the text should be different */}
              {client?._id === userId
                ? t(LanguageKeys.ProfileNotCompletedHint)
                : t(LanguageKeys.UserPageNotCompletedHint)}
            </HintContent>
          </HintContainer>
        )}
        <BoxesSection
          id={client?._id || ""}
          email={client?.email || "defensive"}
        />
      </ProfileData>
      <DescriptionSection client={client} />
    </Container>
  );
}
export default MobileAgentsPage;
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
const HeaderLabelTheme = theme("mode", {
  light: css`
    color: var(--color-gray10);
  `,
  dark: css`
    color: var(--color-gray11);
  `,
});
const HeaderScoreTheme = theme("mode", {
  light: css`
    color: var(--color-secondary2);
  `,
  dark: css`
    color: var(--color-secondary4);
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
  width: 12rem;
  height: 12rem;
  z-index: 1;
  margin-bottom: 4rem;
  position: relative;
`;
const ProfilePicture = styled.img`
  object-fit: contain;
  position: relative !important;
  border-radius: 15px;
  width: 100%;
  height: auto;
  border-radius: 50%;
`;
const ImagePlaceholder = styled(BsPersonCircle)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  color: var(--color-gray11);
`;
const HintContainer = styled.div`
  ${Hint_SecondaryContainer};
  gap: 2rem;
`;
const HintInfoIcon = styled(FiInfo)`
  ${Hint_SecondaryIcon};
`;
const HintContent = styled.h3`
  ${Hint_SecondaryTextStyle};
`;
const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;
const Name = styled.h2`
  ${TitleColor}
  ${layer2A_TitleStyle}
  z-index:1;
`;
const HeaderLabel = styled.h4`
  ${Headline7Style};
  ${HeaderLabelTheme}
  #score {
    ${HeaderScoreTheme};
  }
`;
const JobTitle = styled.h3`
  ${layer2A_Key}
  margin:0;
  width: auto;
`;
const CreatedDate = styled.div`
  ${layer2A_Key}
  margin:0;
  width: auto;
`;
