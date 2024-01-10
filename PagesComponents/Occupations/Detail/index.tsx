import React from 'react';
import ToggleTag from 'Elements/ToggleTag';
import styled, { css } from 'styled-components';
import { SidebarPage } from './sideBar';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import TooltipTag from 'Elements/TooltipTag';
import { deviceMin } from 'Consts/device';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { OccupationDetailRes } from 'Queries/occupations/Detail/interface';
import SimilarOccupations from './similarOccupations';
import Link from 'next/link';
import { useLocale } from 'Hooks/useLocale';
import {
  getSmartAssessingAuthorities,
  has189Visa,
  has190Visa,
  has491FamilyVisa,
  has491StateVisa,
} from './utils';
import {
  Layer1_SubtitleStyle,
  Layer1_TextStyle,
} from 'Styles/Theme/Layers/layer1/style';

interface Props {
  occupation: OccupationDetailRes;
}

const Content: React.FC<Props> = ({ occupation }) => {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  //
  const assessing_authority = occupation?.assessing_authority;

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
          <AssessContainer>
            {getSmartAssessingAuthorities({
              code: occupation?.code,
              assessing_authority: assessing_authority,
            }).map((assess, i) => (
              <Link
                key={i}
                href={`/${locale}/occupations/assessing-authorities/#${
                  assess.split('_')[0]
                }`}
                target='_blank'
                scroll={false}
              >
                <TooltipTag
                  content={assess.replaceAll('_', ' ')}
                  // popupContent={
                  //   <a href='https://visaenvoy.com/skills-assessment-and-assessing-authorities/'>
                  //     {t(LanguageKeys.TooltipTagDesc)}
                  //   </a>
                  // }
                />
              </Link>
            ))}
          </AssessContainer>
        ) : null}
      </VetassesContainer>
      <ToggleContainer>
        <StyledToggleTag
          contentKey={'189'}
          isOn={has189Visa(occupation.code)}
          backgroundtheme='PAGE'
        />
        <StyledToggleTag
          contentKey={'190'}
          isOn={has190Visa(occupation.code)}
          backgroundtheme='PAGE'
        />

        <StyledToggleTag
          contentKey={'491'}
          isOn={has491StateVisa(occupation.code)}
          backgroundtheme='PAGE'
        />
        <StyledToggleTag
          contentKey={t(LanguageKeys['491-family'])}
          isOn={has491FamilyVisa(occupation.code)}
          backgroundtheme='PAGE'
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
//there was a bug which the text wasn't vertically aligned in persian so I needed to fix it this way

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2rem;
`;

const Title = styled.h1`
  ${Layer1_TextStyle};
  margin-bottom: 1rem;
  text-align: center;
  direction: ltr;
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
  ${Layer1_SubtitleStyle};
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 400;
  @media ${deviceMin.tabletS} {
    margin-inline-end: 1rem;
  }
`;
const AssessContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  @media ${deviceMin.tabletS} {
    flex-wrap: nowrap;
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
