import React from 'react';
import ToggleTag from 'Elements/ToggleTag';
import styled from 'styled-components';
import { SidebarPage } from './sideBar';
import { PageSubtitleStyle, PageTitleStyle } from 'Styles/Theme/Page';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import TooltipTag from 'Elements/TooltipTag';
import { deviceMin } from 'Consts/device';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { OccupationDetailRes } from 'Queries/occupations/Detail/interface';
import SimilarOccupations from './similarOccupations';
import Link from 'next/link';

interface Props {
  occupation: OccupationDetailRes;
}

const Content: React.FC<Props> = ({ occupation }) => {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);
  //
  const assessing_authority = occupation?.assessing_authority;

  //
  return (
    <Container>
      <TitleContainer>
        <Title>
          {occupation?.code}: {dt(occupation?.title)}
        </Title>
      </TitleContainer>
      <VetassesContainer>
        <VetassesTitle>{t(LanguageKeys.AssessingAuthorityAbv)}</VetassesTitle>
        {assessing_authority ? (
          <Link href={`/occupations/assssing-authorities`}>
            <TooltipTag
              content={assessing_authority.replaceAll('_', ' ')}
              // popupContent={
              //   <a href='https://visaenvoy.com/skills-assessment-and-assessing-authorities/'>
              //     {t(LanguageKeys.TooltipTagDesc)}
              //   </a>
              // }
            />
          </Link>
        ) : null}
      </VetassesContainer>
      <ToggleContainer>
        <StyledToggleTag
          contentKey={'189'}
          isOn={
            !!occupation?.backlog_section?.submited_189 ||
            !!occupation?.backlog_section?.invited_189
          }
          backgroundTheme='PAGE'
        />
        <StyledToggleTag
          contentKey={'190'}
          isOn={
            !!occupation?.backlog_section?.submited_190 ||
            !!occupation?.backlog_section?.invited_190
          }
          backgroundTheme='PAGE'
        />

        <StyledToggleTag
          contentKey={'491'}
          isOn={
            !!occupation?.backlog_section?.submited_491 ||
            !!occupation?.backlog_section?.invited_491
          }
          backgroundTheme='PAGE'
        />
        <StyledToggleTag
          contentKey={t(LanguageKeys['491-family'])}
          isOn={
            !!occupation?.backlog_section?.submited_491_family ||
            !!occupation?.backlog_section?.invited_491_family
          }
          backgroundTheme='PAGE'
          style={{ marginInlineEnd: '0' }}
        />
      </ToggleContainer>

      {/*  */}
      {/*********** SideBar ***************/}
      {occupation && <SidebarPage occupation={occupation} />}
      {/**********Similar Occupation***** */}
      {occupation.similarOccupations && (
        <SimilarOccupations
          similarOccupations={occupation.similarOccupations}
          currentCode={occupation?.code}
        />
      )}
    </Container>
  );
};

export default Content;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2rem;
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
    margin-inline-end: 1rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
`;
const StyledToggleTag = styled(ToggleTag)`
  margin-inline-end: 2rem;
`;
