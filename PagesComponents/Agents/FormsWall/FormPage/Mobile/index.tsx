import { deviceMin } from 'Consts/device';
import styled, { css } from 'styled-components';
import { layer1_BG } from 'Styles/Theme/Layers/layer1/theme';
import theme from 'styled-theming';
import { layer2A_TitleStyle } from 'Styles/Theme/Layers/layer2/style';
import {
  layer2A_Key,
} from 'Styles/Theme/Layers/layer2/theme';
import { Client } from 'Interfaces/Database/Client';
import DescriptionSection from '../DescriptionSection';

interface Props {
  client: Client;
}
function MobileAgentsPage({ client }: Props) {
  const dataCreatedAt = client?._createdAt?.toString().substring(0, 10);

  return (
    <Container>
      <StarBackground aria-hidden={true}>
        <Star aria-hidden={true} />
      </StarBackground>
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
      <DescriptionSection client={client} />
    </Container>
  );
}
export default MobileAgentsPage;
const StarBackgroundColor = theme('mode', {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray4);
  `,
});
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
const ProfilePicture = styled.img`
  object-fit: contain;
  position: relative !important;
  border-radius: 15px;
  width: 100%;
  height: auto;
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