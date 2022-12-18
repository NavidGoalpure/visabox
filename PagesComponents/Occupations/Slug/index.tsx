import React from 'react';
import ToggleTag from 'Elements/ToggleTag';
import styled from 'styled-components';
import { SidebarPage } from './sideBar';
import { PageSubtitleStyle, PageTitleStyle } from 'Styles/Theme/Page';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { Occupation } from 'Interfaces/Documents/occupation';
import TooltipTag from 'Elements/TooltipTag';
import { deviceMin } from 'Consts/device';

interface Props {
  occupation: Occupation;
}

const Content: React.FC<Props> = ({ occupation }) => {
  const { dt } = useDynamicTranslation();
  console.log('navid occupation=', occupation);
  const assessing_authority = occupation?.assessing_authority;
  return (
    <Container>
      <TitleContainer>
        <Title>
          {occupation?.code}: {dt(occupation?.title)}
        </Title>
      </TitleContainer>
      <VetassesContainer>
        <VetassesTitle>Assessing Authority</VetassesTitle>
        {assessing_authority ? (
          <TooltipTag
            content={assessing_authority.replaceAll('_', ' ')}
            // popupContent='Vocational Education and Training Assessment Services'
          />
        ) : null}
      </VetassesContainer>
      <ToggleContainer>
        <ToggleTag content={'190'} isOn={true} />
        <ToggleTag content={'189'} isOn={false} />
        <ToggleTag content={'491'} isOn={true} />
        <ToggleTag content={'491 (family)'} isOn={false} />
      </ToggleContainer>
      {occupation && <SidebarPage occupation={occupation} />}
    </Container>
  );
};

export default Content;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  ${PageTitleStyle};
  margin-bottom: 1rem;
  text-align: center;
`;

const VetassesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
  @media ${deviceMin.tabletS} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h1 {
      margin-bottom: 0;
    }
  }
`;
const VetassesTitle = styled.h1`
  ${PageSubtitleStyle};
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 400;
  @media ${deviceMin.tabletS} {
    margin-right: 2rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

// const ToggleTag = styled(ToggleTag)``

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin-bottom: 3rem;
  @media ${deviceMin.tabletS} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    div {
      margin-right: 2rem;
    }
    > * {
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
