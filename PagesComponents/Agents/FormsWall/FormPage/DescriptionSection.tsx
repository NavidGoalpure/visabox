import styled, { css } from "styled-components";
import theme from "styled-theming";
import {
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
} from "Styles/Theme/Layers/layer2/style";
import { maritalStatuses } from "Consts/Client";
import { layer2A_TextColor } from "Styles/Theme/Layers/layer2/theme";
import { Layer1_TitleStyle } from "Styles/Theme/Layers/layer1/style";
import { Headline7Style } from "Styles/Typo";
import { FaPhone } from "react-icons/fa";
import { deviceMin } from "Consts/device";
import { SiGmail } from "react-icons/si";
import { copyContent } from "Utils";
import { Client } from "Interfaces/Database/Client";
import { componentStatements, LanguageKeys } from "./const";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { getMultiLanguageLabels } from "./utils";
import { useLocale } from "Hooks/useLocale";
import { BsCheck } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import TooltipTag from "Elements/TooltipTag";
import { FiInfo } from "react-icons/fi";

interface Props {
  client: Client;
}
function DescriptionSection({ client }: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const data = getMultiLanguageLabels(client);
  const { locale } = useLocale();
  const phoneToastMessage = t(LanguageKeys.copyPhoneToastMessage);
  const gmailToastMessage = t(LanguageKeys.copyEmailToastMessage);
  return (
    <FormData>
      <Title>{t(LanguageKeys.AboutLabel)}</Title>
      <Wrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.BirthDateLabel)}</Label>{" "}
          <Value>{data?.age?.slice(0, 10)}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.EnglishSkillsLabel)}</Label>{" "}
          <Value>{data?.IELTSScore}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.MarriageStatusLabel)}</Label>{" "}
          <Value>
            {data?.marital?.[locale]}{" "}
            {data?.marital?.en === "Married" && (
              <TooltipTag
                popupContent={
                  <>
                    {data?.is_partner_competent_english_speaker !==
                      undefined && (
                      <PartnerPopupContent>
                        <PartnerPopupLabel>
                          {t(LanguageKeys.PartnerAssesmentLabel)}
                        </PartnerPopupLabel>
                        {data?.does_partner_have_assessment ? (
                          <Checkmark />
                        ) : (
                          <CloseIcon />
                        )}
                      </PartnerPopupContent>
                    )}
                    <PartnerPopupContent>
                      <PartnerPopupLabel>
                        {" "}
                        {t(LanguageKeys.PartnerEnglishLabel)}
                      </PartnerPopupLabel>
                      {data?.is_partner_competent_english_speaker ? (
                        <Checkmark />
                      ) : (
                        <CloseIcon />
                      )}
                    </PartnerPopupContent>
                  </>
                }
                content={
                  <>
                    <InformationIcon />
                  </>
                }
              />
            )}
          </Value>
        </DataWrapper>

        {client?.country && (
          <DataWrapper>
            <Label>{t(LanguageKeys.CountryLabel)}</Label>{" "}
            <Value>{data?.country?.[locale]}</Value>
          </DataWrapper>
        )}
        <DataWrapper>
          <Label>{t(LanguageKeys.FieldOfStudyLabel)}</Label>{" "}
          <Value>{data?.fieldOfStudy}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.DegreeLabel)}</Label>{" "}
          <Value>{data?.degree?.[locale]}</Value>
        </DataWrapper>
        {typeof client?.australian_educational_qualification === "boolean" && (
          <DataWrapper>
            <Label>
              {t(LanguageKeys.AustralianEducationalQualificationLabel)}
            </Label>{" "}
            <Value>
              {data?.australian_educational_qualification ? (
                <Checkmark />
              ) : (
                <CloseIcon />
              )}
            </Value>
          </DataWrapper>
        )}
        {typeof client?.designated_regional_area_study === "boolean" &&
          client?.australian_educational_qualification === true && (
            <DataWrapper>
              <Label>{t(LanguageKeys.DesignatedRegionalAreaStudyLabel)}</Label>{" "}
              <Value>
                {data?.designated_regional_area_study ? (
                  <Checkmark />
                ) : (
                  <CloseIcon />
                )}
              </Value>
            </DataWrapper>
          )}
        {typeof client?.specialist_educational_qualification === "boolean" && (
          <DataWrapper>
            <Label>
              {t(LanguageKeys.SpecialistEducationalQualificationLabel)}
            </Label>{" "}
            <Value>
              {data?.specialist_educational_qualification ? (
                <Checkmark />
              ) : (
                <CloseIcon />
              )}
            </Value>
          </DataWrapper>
        )}
        {typeof client?.professional_year_in_australia === "boolean" && (
          <DataWrapper>
            <Label>{t(LanguageKeys.ProfessionalYearInAustraliaLabel)}</Label>{" "}
            <Value>
              {data?.professional_year_in_australia ? (
                <Checkmark />
              ) : (
                <CloseIcon />
              )}
            </Value>
          </DataWrapper>
        )}
        {typeof client?.accredited_community_language === "boolean" && (
          <DataWrapper>
            <Label>{t(LanguageKeys.AccreditedCommunityLanguageLabel)}</Label>{" "}
            <Value>
              {data?.accredited_community_language ? (
                <Checkmark />
              ) : (
                <CloseIcon />
              )}
            </Value>
          </DataWrapper>
        )}
        <DataWrapper>
          <Label>{t(LanguageKeys.UniversitySectionLabel)}</Label>{" "}
          <Value>{data?.uniSection?.[locale]}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.WorkExperienceLabel)}</Label>{" "}
          <Value>{data?.workExperience?.[locale]}</Value>
        </DataWrapper>
        <DataWrapper>
          <Label>{t(LanguageKeys.AustralianWorkExperienceLabel)}</Label>{" "}
          <Value>{data?.australianWorkExperience?.[locale]}</Value>
        </DataWrapper>
        <PhoneContainer
          onClick={() =>
            copyContent({
              text: data.phoneNumber || "",
              toastMessage: phoneToastMessage,
            })
          }
        >
          <PhoneIcon />
          <PhoneTitle>
            <PhonesRow>{data?.phoneNumber}</PhonesRow>
          </PhoneTitle>
        </PhoneContainer>
        <GmailContainer
          onClick={() =>
            copyContent({
              text: data.email || "",
              toastMessage: gmailToastMessage,
            })
          }
        >
          <GmailIcon />
          <GmailTitle>{data?.email}</GmailTitle>
        </GmailContainer>
      </Wrapper>
    </FormData>
  );
}
export default DescriptionSection;

const FormDataTheme = theme("mode", {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});
const FormDataDropshadow = theme("mode", {
  light: css`
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
  `,
  dark: css``,
});
const LabelTheme = theme("mode", {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});
const IconTheme = theme("mode", {
  light: css`
    color: var(--color-primary13);
  `,
  dark: css`
    color: var(--color-primary1);
  `,
});
const Icon = css`
  ${layer2A_TextColor}
  width: 3rem;
  height: 3rem;
  @media ${deviceMin.tabletS} {
    width: 1.5rem;
    height: 1.5rem;
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
  ${FormDataDropshadow};
  border-radius: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1.5rem;
  position: relative;
  @media ${deviceMin.tabletS} {
    border-radius: 15px 15px 0 0;
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
  align-items: center;
`;
const Label = styled.h4`
  ${LabelTheme};
  ${Headline7Style};
  line-height: 20px;
`;
const Value = styled.h4`
  ${layer2A_TextStyle};
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const PartnerPopupContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;
const PartnerPopupLabel = styled.div`
  ${Headline7Style};
`;
const PhoneContainer = styled.div`
  ${SocialsContainerCss};
  cursor: auto;
  @media ${deviceMin.tabletS} {
    ${FormDataTheme};
    border-radius: 0 0 15px 15px;
    padding: 0.5rem;
    position: absolute;
    bottom: 0;
    inset-inline-start: 0;
    transform: translateY(90%);
  }
`;
const PhoneIcon = styled(FaPhone)`
  ${Icon}
`;
const PhoneTitle = styled.h3`
  ${layer2A_TextColor};
  ${layer2A_SubtitleStyle};
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
  @media ${deviceMin.tabletS} {
    ${FormDataTheme};
    border-radius: 0 0 15px 15px;
    padding: 0.5rem;
    position: absolute;
    bottom: 0;
    inset-inline-start: unset;
    inset-inline-end: 0;
    transform: translateY(90%);
  }
`;
const GmailIcon = styled(SiGmail)`
  ${Icon}
`;
const GmailTitle = styled(PhoneTitle)``;
const Checkmark = styled(BsCheck)`
  color: var(--color-primary3);
  height: auto;
  width: 2rem;
`;
const CloseIcon = styled(IoCloseOutline)`
  color: var(--color-fail1);
  width: 1.5rem;
  height: auto;
`;
const InformationIcon = styled(FiInfo)`
  ${IconTheme};
  height: 1.5rem;
  width: auto;
  cursor: pointer;
  margin: 0;
`;
