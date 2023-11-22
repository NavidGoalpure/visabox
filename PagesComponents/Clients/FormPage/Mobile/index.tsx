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
import { CalculateClientScore } from "PagesComponents/Clients/PointCalculator/Contexts/FormDataContext/utils";
import {
  componentStatements,
  EditModalContentKeys,
  LanguageKeys,
} from "../const";
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
import DescriptionSection from "../DescriptionSection";
import { Dispatch, SetStateAction } from "react";
import { useSession } from "next-auth/react";
import {
  CreatedDate,
  EditButton,
  EditIcon,
  HeaderLabel,
  HintContainer,
  HintContent,
  HintInfoIcon,
  ImagePlaceholder,
  JobTitle,
  Name,
  ProfileData,
  ProfilePicture,
  ProfilePictureWrapper,
} from "../StyledComponents";

interface Props {
  client: Client;
  userId: string | undefined;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setEditModalContentKey: Dispatch<SetStateAction<EditModalContentKeys | null>>;
}
function MobileAgentsPage({
  client,
  userId,
  setEditModalContentKey,
  setIsModalOpen,
}: Props) {
  const dataCreatedAt = client?._createdAt?.toString().substring(0, 10);
  const { t } = useStaticTranslation(componentStatements);
  const { data: session } = useSession();
  const isViewerOwner = client?.email === session?.user?.email;
  function EditClickHandler(key: EditModalContentKeys) {
    setIsModalOpen(true);
    setEditModalContentKey(key);
  }
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
        <Name
          onClick={() =>
            isViewerOwner && EditClickHandler(EditModalContentKeys.NAME)
          }
        >
          {client?.name} {client?.lastname}{" "}
          {isViewerOwner && (
            <EditButton>
              <EditIcon />
            </EditButton>
          )}
        </Name>
        <JobTitle
          onClick={() =>
            isViewerOwner && EditClickHandler(EditModalContentKeys.CURRENT_JOB)
          }
        >
          {client?.current_job}{" "}
          {isViewerOwner && (
            <EditButton>
              <EditIcon />
            </EditButton>
          )}
        </JobTitle>
        <CreatedDate>{dataCreatedAt}</CreatedDate>
        {client?.completed_forms?.length === 1 && (
          <HeaderLabel>
            {t(LanguageKeys.ScoreTitle)}{" "}
            <span id="score">{CalculateClientScore(client)}</span>
          </HeaderLabel>
        )}

        {!!client && !!userId && client?.completed_forms?.length !== 1 && (
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
          is_sharable={
            client?.is_sharable ||
            // defensive
            undefined
          }
          id={client?._id || "defensive"}
          email={client?.email || "defensive"}
        />
      </ProfileData>
      <DescriptionSection
        client={client}
        setEditModalContentKey={setEditModalContentKey}
        setIsModalOpen={setIsModalOpen}
        isMobile={true}
      />
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
