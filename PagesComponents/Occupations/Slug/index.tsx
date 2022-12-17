import React from 'react';
import ToggleTag from 'Elements/ToggleTag';
import styled from 'styled-components';
import { SidebarPage } from './sideBar';
import { PageTitleStyle } from 'Styles/Theme/Page';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { Occupation } from 'Interfaces/Documents/occupation';
import TooltipTag from 'Elements/TooltipTag';

interface Props {
  occupation: Occupation;
}

const Content: React.FC<Props> = ({ occupation }) => {
  const { dt } = useDynamicTranslation();

  return (
    <Container>
      <TitleContainer>
        <Title>
          {occupation?.code}: {dt(occupation?.title)}
        </Title>
      </TitleContainer>
      <TooltipTag
        content='VETASSESS'
        popupContent='Vocational Education and Training Assessment Services'
      />
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
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 4rem;
`;
