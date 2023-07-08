import styled from "styled-components";
import * as ToggleGroup from "../../../../../Elements/ToggleGroup";
import { Input } from "Components/Input";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "./const";
import { WizardContext } from "../../Contexts/Wizard/Context";
import { useContext } from "react";
import {
  ButtonWrapper,
  CalculatorIcon,
  Container,
  InformationIcon,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
  StyledTooltipTag,
  Title,
} from "../StyledComponents";
import { FormDataContext } from "../../Contexts/FormDataContext/Context";
import { ClientDegree, UniSections } from "Interfaces/Database/Client";
import { educations, uniSections, YesOrNo } from "Consts/Client";

const Step5 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient, score } = useContext(FormDataContext);

  return (
    <Container>
      <StyledInput
        required
        label={t(LanguageKeys.FieldOfStudyInputLabel)}
        inputName="field-of-study"
        placeholder={t(LanguageKeys.FieldOfStudyInputPlaceholder)}
        value={client?.field_of_study}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          client &&
            setClient({
              ...client,
              field_of_study: e.target.value,
            });
        }}
      />
      <StyledTitle>{t(LanguageKeys.UniSectionsSectionTitle)} </StyledTitle>
      <ToggleGroupRoot
        type="single"
        value={client?.uni_section}
        onValueChange={(value: UniSections) => {
          client &&
            setClient({
              ...client,
              uni_section: value,
            });
        }}
      >
        {
          <>
            {uniSections.map((uniSection, i) => (
              <ToggleGroup.Item
                key={i}
                text={uniSection}
                value={uniSection.en.toLowerCase()}
              ></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroupRoot>
      <Title>
        {t(LanguageKeys.DegreeOfEducationSectionTitle)}{" "}
        <StyledTooltipTag
          content={
            <>
              <CalculatorIcon />
            </>
          }
          popupContent={t(LanguageKeys.DegreePopupContent)}
        />
      </Title>
      <ToggleGroupRoot
        type="single"
        value={client?.degree}
        onValueChange={(value: ClientDegree) => {
          client &&
            setClient({
              ...client,
              degree: value,
            });
        }}
      >
        {
          <>
            {educations.map((education, i) => (
              <ToggleGroup.Item
                key={i}
                text={education}
                value={education.en.toLowerCase()}
              ></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroupRoot>

      <StyledTitle>
        {t(LanguageKeys.AustralianEducationalQualificationTitle)}{" "}
        <StyledTooltipTag
          content={
            <>
              <CalculatorIcon /> <InformationIcon />
            </>
          }
          popupContent={t(
            LanguageKeys.AustralianEducationalQualificationPopupContent
          )}
        />
      </StyledTitle>
      <ToggleGroupRoot
        type="single"
        value={
          client?.australian_educational_qualification !== null
            ? client?.australian_educational_qualification === true
              ? "yes"
              : "no"
            : undefined
        }
        onValueChange={(value: string) => {
          client &&
            setClient({
              ...client,
              australian_educational_qualification:
                value === "yes" ? true : false,
              //this shouldnt have a value if australian educational qulification === false
              designated_regional_area_study: value === "no" && false,
            });
          console.log("navid value ===", client);
        }}
      >
        {
          <>
            {YesOrNo.map((option, i) => (
              <ToggleGroup.Item
                key={i}
                text={option}
                value={option.en.toLowerCase()}
              ></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroupRoot>
      {client?.australian_educational_qualification && (
        <>
          <StyledTitle>
            {t(LanguageKeys.DesignatedRegionalAreaStudy)}{" "}
            <StyledTooltipTag
              content={
                <>
                  <CalculatorIcon /> <InformationIcon />
                </>
              }
              popupContent={t(
                LanguageKeys.DesignatedRegionalAreaStudyPopupContent
              )}
            />
          </StyledTitle>
          <ToggleGroupRoot
            type="single"
            value={
              client?.designated_regional_area_study !== null
                ? client?.designated_regional_area_study === true
                  ? "yes"
                  : "no"
                : undefined
            }
            onValueChange={(value: string) => {
              client &&
                setClient({
                  ...client,
                  designated_regional_area_study:
                    value === "yes" ? true : false,
                });
            }}
          >
            {
              <>
                {YesOrNo.map((option, i) => (
                  <ToggleGroup.Item
                    key={i}
                    text={option}
                    value={option.en.toLowerCase()}
                  ></ToggleGroup.Item>
                ))}
              </>
            }
          </ToggleGroupRoot>
        </>
      )}

      <StyledTitle>
        {t(LanguageKeys.SpecialistEducationalQualification)}
        <StyledTooltipTag
          content={
            <>
              <CalculatorIcon /> <InformationIcon />
            </>
          }
          popupContent={t(
            LanguageKeys.SpecialistEducationalQualificationPopupContent
          )}
        />
      </StyledTitle>
      <ToggleGroupRoot
        type="single"
        value={
          client?.specialist_educational_qualification !== null
            ? client?.specialist_educational_qualification === true
              ? "yes"
              : "no"
            : undefined
        }
        onValueChange={(value: string) => {
          client &&
            setClient({
              ...client,
              specialist_educational_qualification:
                value === "yes" ? true : false,
            });
        }}
      >
        {
          <>
            {YesOrNo.map((option, i) => (
              <ToggleGroup.Item
                key={i}
                text={option}
                value={option.en.toLowerCase()}
              ></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroupRoot>
      <StyledTitle>
        {t(LanguageKeys.ProfessionalYearInAustralia)}{" "}
        <StyledTooltipTag
          content={
            <>
              <CalculatorIcon /> <InformationIcon />
            </>
          }
          popupContent={t(LanguageKeys.ProfessionalYearInAustraliaPopupContent)}
        />
      </StyledTitle>
      <ToggleGroupRoot
        type="single"
        value={
          client?.professional_year_in_australia !== null
            ? client?.professional_year_in_australia === true
              ? "yes"
              : "no"
            : undefined
        }
        onValueChange={(value: string) => {
          client &&
            setClient({
              ...client,
              professional_year_in_australia: value === "yes" ? true : false,
            });
        }}
      >
        {
          <>
            {YesOrNo.map((option, i) => (
              <ToggleGroup.Item
                key={i}
                text={option}
                value={option.en.toLowerCase()}
              ></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroupRoot>
      <StyledTitle>
        {t(LanguageKeys.AccreditedCommunityLanguage)}{" "}
        <StyledTooltipTag
          content={
            <>
              <CalculatorIcon /> <InformationIcon />
            </>
          }
          popupContent={t(LanguageKeys.AccreditedCommunityLanguagePopupContent)}
        />
      </StyledTitle>
      <ToggleGroupRoot
        type="single"
        value={
          client?.accredited_community_language !== null
            ? client?.accredited_community_language === true
              ? "yes"
              : "no"
            : undefined
        }
        onValueChange={(value: string) => {
          client &&
            setClient({
              ...client,
              accredited_community_language: value === "yes" ? true : false,
            });
        }}
      >
        {
          <>
            {YesOrNo.map((option, i) => (
              <ToggleGroup.Item
                key={i}
                text={option}
                value={option.en.toLowerCase()}
              ></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroupRoot>
      <ButtonWrapper>
        <PrevButton step={step} onClick={() => step > 0 && handleBackPress()}>
          <PrevIcon />
          {t(LanguageKeys.PrevButtonTitle)}
        </PrevButton>

        <NextButton
          step={step}
          onClick={() => {
          console.log("navid score ===", score);
          console.log("navid client ===", client);
            handleNextPress();
          }}
          disabled={
            !client?.field_of_study ||
            !client?.degree ||
            !client?.uni_section ||
            client?.australian_educational_qualification === null ||
            client?.professional_year_in_australia === null ||
            client?.specialist_educational_qualification === null ||
            client?.accredited_community_language === null ||
            // designated regional area study is not required
            // unless australian educational qualification === true
            (client?.australian_educational_qualification === true &&
              (client?.designated_regional_area_study === null ||
                client?.designated_regional_area_study === undefined))
          }
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step5;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
const StyledTitle = styled(Title)`
  margin: 0;
`;
const StyledInput = styled(Input)`
  margin-top: 1rem;
`;
