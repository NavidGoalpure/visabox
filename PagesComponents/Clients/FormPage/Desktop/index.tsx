import styled, { css } from "styled-components";
import theme from "styled-theming";
import {
  layer2A_BodyStyle,
  layer2A_TitleStyle,
} from "Styles/Theme/Layers/layer2/style";
import { layer2A_Key } from "Styles/Theme/Layers/layer2/theme";
import { Client } from "Interfaces/Database/Client";
import { Headline7Style } from "Styles/Typo";
import { CalculateClientScore } from "PagesComponents/Clients/PointCalculator/Contexts/FormDataContext/utils";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import {
  componentStatements,
  EditModalContentKeys,
  LanguageKeys,
} from "../const";
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
  ScoreWrapper,
} from "../StyledComponents";
interface Props {
  client: Client;
  userId: string | undefined;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setEditModalContentKey: Dispatch<SetStateAction<EditModalContentKeys | null>>;
}
function DesktopAgentsPage({
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
      {!!client && !!userId && client?.completed_forms?.length === 0 && (
        <HintContainer>
          <HintInfoIcon />
          <HintContent>
            {client?._id === userId
              ? t(LanguageKeys.ProfileNotCompletedHint)
              : t(LanguageKeys.UserPageNotCompletedHint)}
          </HintContent>
        </HintContainer>
      )}
      <Wrapper>
        <SmallBoxesWrapper>
          <ProfileBox>
            <ProfilePictureWrapper>
              {client?.avatar ? (
                <ProfilePicture
                  src={client?.avatar}
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
                {isViewerOwner && <EditButton>[edit]</EditButton>}
              </Name>
              <JobTitle
                onClick={() =>
                  isViewerOwner &&
                  EditClickHandler(EditModalContentKeys.CURRENT_JOB)
                }
              >
                {client?.current_job}
                {isViewerOwner && <EditButton>[edit]</EditButton>}
              </JobTitle>
              <CreatedDate>{dataCreatedAt}</CreatedDate>
              {client?.country && (
                <ScoreWrapper>
                  <HeaderLabel>
                    {t(LanguageKeys.ScoreTitle)}{" "}
                    <span id="score">{CalculateClientScore(client)}</span>
                  </HeaderLabel>
                </ScoreWrapper>
              )}
            </ProfileData>
          </ProfileBox>
          <BoxesSection
            is_sharable={client?.is_sharable}
            id={client?._id || "defensive"}
            email={client?.email || "defensive"}
          />
        </SmallBoxesWrapper>
        <DescriptionSection
          client={client}
          setEditModalContentKey={setEditModalContentKey}
          setIsModalOpen={setIsModalOpen}
          isMobile={false}
        />
      </Wrapper>
    </Container>
  );
}
export default DesktopAgentsPage;

const HeaderBackground = theme("mode", {
  light: css`
    background-image: url("/Images/Patterns/LightPattern.svg");
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
  `,
  dark: css`
    background-image: url("/Images/Patterns/DarkPattern.svg");
  `,
});

const Container = styled.div`
  padding: 0 0 4rem 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  gap: 1rem;
`;
const SmallBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
const ProfileBox = styled.header`
  ${layer2A_BodyStyle};
  ${HeaderBackground};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 18rem;
  border-radius: 15px;
  padding: 1.5rem;
  gap: 2rem;
  box-shadow: unset;
`;
