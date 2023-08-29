import styled from "styled-components";
import Image from "next/image";
import { Client } from "Interfaces/Database/Client";
import { Headline7Style } from "Styles/Typo";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { useLocale } from "Hooks/useLocale";
import { getMultiLanguageLabels } from "../utils";
import { directionStyles } from "Styles/Theme";
import { CalculateClientScore } from "PagesComponents/Clients/PointCalculator/Contexts/FormDataContext/utils";
interface Props {
  client: Client;
}
function PrintablePage({ client }: Props) {
  const dataCreatedAt = client?._createdAt?.toString().substring(0, 10);
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const data = getMultiLanguageLabels(client);
  return (
    <Container>
      <Wrapper>
        <Logo
          alt={"Logo"}
          width={86}
          height={100}
          src={"/Images/Agents/SiteLogoBlur.png"}
        />
        <Section1>
          <StrechedDataWrapper>
            <StyledLabel>{t(LanguageKeys.FullNameLabel)}</StyledLabel>
            <StyledValue>
              {data?.name} {data?.lastname}
            </StyledValue>
          </StrechedDataWrapper>
          <CreatedAt>{dataCreatedAt}</CreatedAt>
        </Section1>
        <Section2>
          <DataWrapper>
            <Label>{t(LanguageKeys.ScoreTitle)}</Label>
            <Value>{CalculateClientScore(client)}</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>{t(LanguageKeys.BirthDateLabel)}</Label>
            <Value>
              {data?.birthday
                ? data?.birthday?.slice(0, 10)
                : data?.age?.slice(0, 10)}
            </Value>
          </DataWrapper>
          <DataWrapper>
            <Label>{t(LanguageKeys.EnglishSkillsLabel)}</Label>
            <Value>{data?.IELTSScore}</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>{t(LanguageKeys.CountryLabel)}</Label>
            <Value>{data?.country?.[locale]}</Value>
          </DataWrapper>
        </Section2>
        <Section3>
          <DataWrapper>
            <Label>{t(LanguageKeys.MarriageStatusLabel)}</Label>
            <Value>{data?.marital?.[locale]} </Value>
          </DataWrapper>
          {data?.marital?.en === "Married" && (
            <>
              <DataWrapper>
                <Label>{t(LanguageKeys.PartnerEnglishLabel)}</Label>
                <Value>
                  {data?.is_partner_competent_english_speaker
                    ? t(LanguageKeys.YesText)
                    : t(LanguageKeys.NoText)}
                </Value>
              </DataWrapper>
              <DataWrapper>
                <Label>{t(LanguageKeys.PartnerAssesmentLabel)}</Label>
                <Value>
                  {data?.does_partner_have_assessment
                    ? t(LanguageKeys.YesText)
                    : t(LanguageKeys.NoText)}
                </Value>
              </DataWrapper>
            </>
          )}
        </Section3>
        <Section4>
          <DataWrapper>
            <Label>{t(LanguageKeys.FieldOfStudyLabel)}</Label>
            <Value>{data?.fieldOfStudy} </Value>
          </DataWrapper>
          <DataWrapper>
            <Label>{t(LanguageKeys.DegreeLabel)}</Label>
            <Value>{data?.degree?.[locale]}</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>
              {t(LanguageKeys.AustralianEducationalQualificationLabel)}
            </Label>{" "}
            <Value>
              {data?.australian_educational_qualification
                ? t(LanguageKeys.YesText)
                : t(LanguageKeys.NoText)}
            </Value>
          </DataWrapper>
          <DataWrapper>
            <Label>{t(LanguageKeys.DesignatedRegionalAreaStudyLabel)}</Label>{" "}
            <Value>
              {data?.designated_regional_area_study
                ? t(LanguageKeys.YesText)
                : t(LanguageKeys.NoText)}
            </Value>
          </DataWrapper>
          <DataWrapper>
            <Label>
              {t(LanguageKeys.SpecialistEducationalQualificationLabel)}
            </Label>{" "}
            <Value>
              {data?.specialist_educational_qualification
                ? t(LanguageKeys.YesText)
                : t(LanguageKeys.NoText)}
            </Value>
          </DataWrapper>
          <DataWrapper>
            <Label>{t(LanguageKeys.ProfessionalYearInAustraliaLabel)}</Label>{" "}
            <Value>
              {data?.professional_year_in_australia
                ? t(LanguageKeys.YesText)
                : t(LanguageKeys.NoText)}
            </Value>
          </DataWrapper>
          <DataWrapper>
            <Label>{t(LanguageKeys.AccreditedCommunityLanguageLabel)}</Label>{" "}
            <Value>
              {data?.accredited_community_language
                ? t(LanguageKeys.YesText)
                : t(LanguageKeys.NoText)}
            </Value>
          </DataWrapper>
        </Section4>
        <Section5>
          <DataWrapper>
            <Label>{t(LanguageKeys.UniversitySectionLabel)}</Label>{" "}
            <Value>{data?.uniSection?.[locale]}</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>{t(LanguageKeys.AustralianWorkExperienceLabel)}</Label>{" "}
            <Value>{data?.australianWorkExperience?.[locale]}</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>{t(LanguageKeys.WorkExperienceLabel)}</Label>{" "}
            <Value>{data?.workExperience?.[locale]}</Value>
          </DataWrapper>
        </Section5>
        <Section6>
          <StrechedDataWrapper>
            <StyledLabel>{t(LanguageKeys.PhoneNumberTitle)}</StyledLabel>{" "}
            <StyledValue>{data?.phoneNumber}</StyledValue>
          </StrechedDataWrapper>
          <StrechedDataWrapper>
            <StyledLabel>{t(LanguageKeys.EmailTitle)}</StyledLabel>{" "}
            <StyledValue>{data?.email}</StyledValue>
          </StrechedDataWrapper>
        </Section6>
      </Wrapper>
    </Container>
  );
}
export default PrintablePage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
`;
const Wrapper = styled.div`
  ${directionStyles};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 36rem;
  height: 52rem;
  border: 1px solid var(--color-gray10);
  padding: 1rem;
`;
const Logo = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
const Section1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section2 = styled(Section1)``;
const Section3 = styled(Section1)`
  flex-wrap: wrap;
  row-gap: 1.5rem;
`;
const Section4 = styled(Section1)`
  flex-wrap: wrap;
  row-gap: 1.5rem;
`;
const Section5 = styled(Section1)`
  flex-wrap: wrap;
  row-gap: 1.5rem;
`;
const Section6 = styled(Section1)`
  flex-wrap: wrap;
  row-gap: 1.5rem;
`;
const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 1;
  gap: 0.5rem;
`;
const StrechedDataWrapper = styled(DataWrapper)`
  width: 100%;
`;

const Label = styled.h3`
  ${Headline7Style};
  color: var(--color-gray6);
`;
const Value = styled.h3`
  ${Headline7Style};
  color: var(--color-gray5);
  border-bottom: 1px solid var(--color-gray11);
`;
const StyledLabel = styled(Label)`
  flex-shrink: 0;
`;
const StyledValue = styled(Value)`
  flex-shrink: 1;
  width: 100%;
`;
const CreatedAt = styled.h3`
  ${Headline7Style};
  flex-shrink: 0;
  color: var(--color-gray5);
  border-bottom: 1px solid var(--color-gray11);
`;
