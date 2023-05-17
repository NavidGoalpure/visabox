import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import {
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
} from 'Styles/Theme/Layers/layer2/style';

import { layer2A_TextColor } from 'Styles/Theme/Layers/layer2/theme';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { Headline7Style } from 'Styles/Typo';
import { FaPhone } from 'react-icons/fa';
import { deviceMin } from 'Consts/device';
import { SiGmail } from 'react-icons/si';
import { copyContent } from 'Utils';
import { ClientData } from 'Interfaces/Database/Client';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';

interface Props {
  clientData: ClientData;
}
function DescriptionSection({ clientData }: Props) {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <FormData>
      <Title>{t(LanguageKeys.AboutLabel)}</Title>
      <Wrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.BirthDateLabel)}</Label>{' '}
          <Value>{clientData?.age}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.EnglishSkillsLabel)}</Label>{' '}
          <Value>{clientData?.IELTSScore}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.MarriageStatusLabel)}</Label>{' '}
          <Value>{clientData?.marital}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.FieldOfStudyLabel)}</Label>{' '}
          <Value>{clientData?.fieldOfStudy}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.DegreeLabel)}</Label>{' '}
          <Value>{clientData?.degree}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.UniversitySectionLabel)}</Label>{' '}
          <Value>{clientData?.uniSection}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.CurrentJobLabel)}</Label>{' '}
          <Value>{clientData?.currentJob}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.WorkExperienceLabel)}</Label>{' '}
          <Value>{clientData?.workExperience}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.AustralianWorkExperienceLabel)}</Label>{' '}
          <Value>{clientData?.australianWorkExperience}</Value>
        </DataWrapper>
        <PhoneContainer onClick={() => copyContent(clientData?.phoneNumber)}>
          <PhoneIcon />
          <PhoneTitle>
            <PhonesRow>{clientData?.phoneNumber}</PhonesRow>
          </PhoneTitle>
        </PhoneContainer>
        <GmailContainer onClick={() => copyContent(clientData.email)}>
          <GmailIcon />
          <GmailTitle>{clientData?.email}</GmailTitle>
        </GmailContainer>
      </Wrapper>
    </FormData>
  );
}
export default DescriptionSection;

const FormDataTheme = theme('mode', {
  light: css`
    background: var(--color-gray13);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});
const LabelTheme = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});
const Icon = css`
  ${layer2A_TextColor}
  width: 3rem;
  height: 3rem;
  @media ${deviceMin.tabletS} {
    width: 2rem;
    height: 2rem;
  }
`;
const SocialsContainerCss = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  cursor: pointer;
`;
const FormData = styled.div`
  ${FormDataTheme};
  width: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1.5rem;
  @media ${deviceMin.tabletS} {
    padding: 2rem 5.5rem;
    width: 34.25rem;
  }
`;
const Title = styled.h3`
  ${Layer1_TitleStyle}
  margin-bottom:1.5rem;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
const DataWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  align-items: flex-start;
`;
const Label = styled.h4`
  ${LabelTheme};
  ${Headline7Style};
  line-height: 20px;
`;
const Value = styled.h4`
  ${layer2A_TextStyle};
  line-height: 20px;
`;
const PhoneContainer = styled.div`
  ${SocialsContainerCss}
  cursor: auto;
`;
const PhoneIcon = styled(FaPhone)`
  ${Icon}
`;
const PhoneTitle = styled.h3`
  ${layer2A_TextColor}
  ${layer2A_SubtitleStyle}
  word-break: break-all;
  display: flex;
  flex-direction: column;
  direction: ltr;
`;
const PhonesRow = styled.div`
  display:flex;
  gap 1rem;
`;
const GmailContainer = styled.div`
  ${SocialsContainerCss}
  cursor: auto;
`;
const GmailIcon = styled(SiGmail)`
  ${Icon}
`;
const GmailTitle = styled(PhoneTitle)``;
