import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import {
  layer2A_BodyStyle,
  layer2A_TitleStyle,
} from 'Styles/Theme/Layers/layer2/style';
import { layer2A_Key } from 'Styles/Theme/Layers/layer2/theme';
import DescriptionSection from '../DescriptionSection';
import Image from 'next/image';
import { Client } from 'Interfaces/Database/Client';

interface Props {
  client: Client;
}
function DesktopAgentsPage({ client }: Props) {
  const dataCreatedAt = client?._createdAt?.toString().substring(0, 10);

  return (
    <Container>
      <SmallBox>
        <ProfilePictureWrapper>
          <ProfilePicture
            src={client?.avatar || '/Images/placeholder.jpeg'}
            alt={client?.name ? `${client?.name} image` : 'agent image'}
          />
        </ProfilePictureWrapper>
        <ProfileData>
          <Name>
            {client?.name} {client?.lastname}
          </Name>
          <JobTitle>{client?.current_job}</JobTitle>
          <CreatedDate>{dataCreatedAt}</CreatedDate>
        </ProfileData>
      </SmallBox>
      <DescriptionSection client={client} />
    </Container>
  );
}
export default DesktopAgentsPage;

const TitleColor = theme('mode', {
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
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 4rem 0;
  gap: 1rem;
`;
const SmallBox = styled.header`
  ${layer2A_BodyStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 21rem;
  border-radius: 15px;
  padding: 1.5rem;
  gap: 2rem;
  margin-bottom: 4rem;
`;
const ProfilePictureWrapper = styled.div`
  flex-shrink: 0;
  align-self: center;
  width: 16rem;
  height: 16rem;
  z-index: 1;
  position: relative;
`;
const ProfilePicture = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 15px;
`;
const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
`;
const Name = styled.h2`
  ${TitleColor}
  ${layer2A_TitleStyle}
  z-index:1;
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