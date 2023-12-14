import { Input } from "Components/Input";
import {
  componentStatements,
  EditModalContentKeys,
  LanguageKeys,
} from "../const";
import * as ToggleGroup from "Elements/ToggleGroup";
import {
  australianWorks,
  Countries,
  educations,
  IELTSScores,
  maritalStatuses,
  uniSections,
  works,
  YesOrNo,
} from "Consts/Client";
import {
  AustralianWorkExperience,
  Client,
  ClientDegree,
  ClientMarital,
  IELTSScore,
  UniSections,
  WorkExperience,
} from "Interfaces/Database/Client";
import { SupportedCountry } from "Interfaces/Database";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { deviceMin } from "Consts/device";
import { Headline6Style } from "Styles/Typo";
export function ContentBasedOnKeys({
  modalContentKeys,
  editedClient,
  setEditedClient,
}: {
  modalContentKeys: EditModalContentKeys | null;
  editedClient: Client;
  setEditedClient: Dispatch<SetStateAction<Client>>;
}) {
  var mydate = editedClient?.birthday
    ? new Date(editedClient?.birthday).toISOString().slice(0, 10)
    : editedClient?.age
    ? new Date(editedClient?.age).toISOString().slice(0, 10)
    : "defensive";
  const { t } = useStaticTranslation(componentStatements);
  switch (modalContentKeys) {
    case EditModalContentKeys.NAME:
      return (
        <>
          {/* //////////name-input//////////// */}
          <Input
            isInputInModal={true}
            required
            label={t(LanguageKeys.NameInputLabel)}
            inputName="name"
            placeholder={t(LanguageKeys.NameInputPlaceholder)}
            value={editedClient?.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              editedClient &&
                setEditedClient({
                  ...editedClient,
                  name: e.target.value,
                });
            }}
          />
          {/* //////////last-name-input//////////// */}
          <Input
            isInputInModal={true}
            required
            label={t(LanguageKeys.LastNameInputLabel)}
            inputName="lname"
            value={editedClient?.lastname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              editedClient &&
              setEditedClient({
                ...editedClient,
                lastname: e.target.value,
              })
            }
            placeholder={t(LanguageKeys.LastNameInputPlaceholder)}
          />
        </>
      );
    case EditModalContentKeys.CURRENT_JOB:
      return (
        <Input
          isInputInModal={true}
          required
          label={t(LanguageKeys.CurrentJobLabel)}
          inputName="current-job"
          placeholder={t(LanguageKeys.CurrentJobInputPlaceholder)}
          value={editedClient?.current_job}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            editedClient &&
              setEditedClient({
                ...editedClient,
                current_job: e.target.value,
              });
          }}
        />
      );
    case EditModalContentKeys.BIRTH_DATE:
      return (
        <Input
          isInputInModal={true}
          type={"date"}
          inputName="age"
          value={mydate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEditedClient({
              ...editedClient,
              birthday: e.target.value.slice(0, 10),
            });
          }}
          id={"date-input"}
        />
      );
    case EditModalContentKeys.ENGLISH_SKILL:
      return (
        <ToggleGroupRoot
          type="single"
          value={editedClient?.ielts_score}
          onValueChange={(value) => {
            editedClient &&
              setEditedClient({
                ...editedClient,
                ielts_score: value as IELTSScore,
              });
          }}
        >
          {
            <>
              {IELTSScores.map((IELTSScore, i) => (
                <ToggleGroup.Item
                  isItemInModal={true}
                  key={i}
                  text={IELTSScore}
                  value={IELTSScore.en.toLowerCase()}
                ></ToggleGroup.Item>
              ))}
            </>
          }
        </ToggleGroupRoot>
      );
    case EditModalContentKeys.MARRIAGE_STATUS:
      return (
        <>
          <ToggleGroupRoot
            type="single"
            value={editedClient?.marital}
            onValueChange={(value) =>
              editedClient &&
              setEditedClient({
                ...editedClient,
                marital: value as ClientMarital,
                is_partner_competent_english_speaker:
                  value === ClientMarital.Single && undefined,
                does_partner_have_assessment:
                  value === ClientMarital.Single && undefined,
              })
            }
          >
            {
              <>
                {maritalStatuses.map((maritalStatus, i) => (
                  <ToggleGroup.Item
                    isItemInModal={true}
                    key={i}
                    text={maritalStatus}
                    value={maritalStatus.en.toLowerCase()}
                  ></ToggleGroup.Item>
                ))}
              </>
            }
          </ToggleGroupRoot>
          {editedClient?.marital === ClientMarital.Married && (
            <>
              <Title>{t(LanguageKeys.PartnerEnglishLabel)} </Title>
              <ToggleGroupRoot
                type="single"
                value={
                  editedClient?.is_partner_competent_english_speaker ===
                  undefined
                    ? undefined
                    : editedClient?.is_partner_competent_english_speaker ===
                      true
                    ? "yes"
                    : "no"
                }
                onValueChange={(value: string) => {
                  editedClient &&
                    setEditedClient({
                      ...editedClient,
                      is_partner_competent_english_speaker:
                        value === "yes" ? true : false,
                      does_partner_have_assessment: value === "no" && undefined,
                    });
                }}
              >
                {
                  <>
                    {YesOrNo.map((option, i) => (
                      <ToggleGroup.Item
                        isItemInModal={true}
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
          {editedClient?.marital === ClientMarital.Married &&
            editedClient?.is_partner_competent_english_speaker && (
              <>
                <Title>{t(LanguageKeys.PartnerAssesmentLabel)} </Title>
                <ToggleGroupRoot
                  type="single"
                  value={
                    editedClient?.does_partner_have_assessment !== undefined
                      ? editedClient?.does_partner_have_assessment === true
                        ? "yes"
                        : "no"
                      : undefined
                  }
                  onValueChange={(value: string) => {
                    editedClient &&
                      setEditedClient({
                        ...editedClient,
                        does_partner_have_assessment:
                          value === "yes" ? true : false,
                      });
                  }}
                >
                  {
                    <>
                      {YesOrNo.map((option, i) => (
                        <ToggleGroup.Item
                          isItemInModal={true}
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
        </>
      );
    case EditModalContentKeys.COUNTRY:
      return (
        <ToggleGroupRoot
          type="single"
          value={editedClient?.country}
          onValueChange={(value) => {
            editedClient &&
              setEditedClient({
                ...editedClient,
                country: value as SupportedCountry,
              });
          }}
        >
          {
            <>
              {Countries.map((option, i) => (
                <ToggleGroup.Item
                  isItemInModal={true}
                  key={i}
                  text={option}
                  value={option.en.toLowerCase()}
                ></ToggleGroup.Item>
              ))}
            </>
          }
        </ToggleGroupRoot>
      );
    case EditModalContentKeys.FIELD_OF_STUDY:
      return (
        <Input
          isInputInModal={true}
          required
          inputName="field-of-study"
          placeholder={t(LanguageKeys.FieldOfStudyLabel)}
          value={editedClient?.field_of_study}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            editedClient &&
              setEditedClient({
                ...editedClient,
                field_of_study: e.target.value,
              });
          }}
        />
      );
    case EditModalContentKeys.DEGREE:
      return (
        <ToggleGroupRoot
          type="single"
          value={editedClient?.degree}
          onValueChange={(value: ClientDegree) => {
            editedClient &&
              setEditedClient({
                ...editedClient,
                degree: value,
              });
          }}
        >
          {
            <>
              {educations.map((education, i) => (
                <ToggleGroup.Item
                  isItemInModal={true}
                  key={i}
                  text={education}
                  value={education.en.toLowerCase()}
                ></ToggleGroup.Item>
              ))}
            </>
          }
        </ToggleGroupRoot>
      );
    case EditModalContentKeys.AUSTRALIAN_EDUCATIONAL_QUALIFICATION_RELATED:
      return (
        <>
          <Title>
            {t(LanguageKeys.AustralianEducationalQualificationLabel)}{" "}
          </Title>
          <ToggleGroupRoot
            type="single"
            value={
              editedClient?.australian_educational_qualification !== null
                ? editedClient?.australian_educational_qualification === true
                  ? "yes"
                  : "no"
                : undefined
            }
            onValueChange={(value: string) => {
              editedClient &&
                setEditedClient({
                  ...editedClient,
                  australian_educational_qualification:
                    value === "yes" ? true : false,
                  //this shouldnt have a value if australian educational qulification === false
                  designated_regional_area_study: value === "no" && false,
                  specialist_educational_qualification: value === "no" && false,
                });
            }}
          >
            {
              <>
                {YesOrNo.map((option, i) => (
                  <ToggleGroup.Item
                    isItemInModal={true}
                    key={i}
                    text={option}
                    value={option.en.toLowerCase()}
                  ></ToggleGroup.Item>
                ))}
              </>
            }
          </ToggleGroupRoot>
          {editedClient?.australian_educational_qualification && (
            <>
              <Title>{t(LanguageKeys.DesignatedRegionalAreaStudyLabel)} </Title>
              <ToggleGroupRoot
                type="single"
                value={
                  editedClient?.designated_regional_area_study !== null
                    ? editedClient?.designated_regional_area_study === true
                      ? "yes"
                      : "no"
                    : undefined
                }
                onValueChange={(value: string) => {
                  editedClient &&
                    setEditedClient({
                      ...editedClient,
                      designated_regional_area_study:
                        value === "yes" ? true : false,
                    });
                }}
              >
                {
                  <>
                    {YesOrNo.map((option, i) => (
                      <ToggleGroup.Item
                        isItemInModal={true}
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
          {editedClient?.australian_educational_qualification && (
            <>
              <Title>
                {t(LanguageKeys.SpecialistEducationalQualificationLabel)}
              </Title>
              <ToggleGroupRoot
                type="single"
                value={
                  editedClient?.specialist_educational_qualification !== null
                    ? editedClient?.specialist_educational_qualification ===
                      true
                      ? "yes"
                      : "no"
                    : undefined
                }
                onValueChange={(value: string) => {
                  editedClient &&
                    setEditedClient({
                      ...editedClient,
                      specialist_educational_qualification:
                        value === "yes" ? true : false,
                    });
                }}
              >
                {
                  <>
                    {YesOrNo.map((option, i) => (
                      <ToggleGroup.Item
                        isItemInModal={true}
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
        </>
      );
    case EditModalContentKeys.PROFESSIONAL_YEAR_IN_AUSTRALIA:
      return (
        <ToggleGroupRoot
          type="single"
          value={
            editedClient?.professional_year_in_australia !== null
              ? editedClient?.professional_year_in_australia === true
                ? "yes"
                : "no"
              : undefined
          }
          onValueChange={(value: string) => {
            editedClient &&
              setEditedClient({
                ...editedClient,
                professional_year_in_australia: value === "yes" ? true : false,
              });
          }}
        >
          {
            <>
              {YesOrNo.map((option, i) => (
                <ToggleGroup.Item
                  isItemInModal={true}
                  key={i}
                  text={option}
                  value={option.en.toLowerCase()}
                ></ToggleGroup.Item>
              ))}
            </>
          }
        </ToggleGroupRoot>
      );
    case EditModalContentKeys.ACCREDITED_COMMUNITY_LANGUAGE:
      return (
        <ToggleGroupRoot
          type="single"
          value={
            editedClient?.accredited_community_language !== null
              ? editedClient?.accredited_community_language === true
                ? "yes"
                : "no"
              : undefined
          }
          onValueChange={(value: string) => {
            editedClient &&
              setEditedClient({
                ...editedClient,
                accredited_community_language: value === "yes" ? true : false,
              });
          }}
        >
          {
            <>
              {YesOrNo.map((option, i) => (
                <ToggleGroup.Item
                  isItemInModal={true}
                  key={i}
                  text={option}
                  value={option.en.toLowerCase()}
                ></ToggleGroup.Item>
              ))}
            </>
          }
        </ToggleGroupRoot>
      );
    case EditModalContentKeys.UNIVERSITY_SECTION:
      return (
        <ToggleGroupRoot
          type="single"
          value={editedClient?.uni_section}
          onValueChange={(value: UniSections) => {
            editedClient &&
              setEditedClient({
                ...editedClient,
                uni_section: value,
              });
          }}
        >
          {
            <>
              {uniSections.map((uniSection, i) => (
                <ToggleGroup.Item
                  isItemInModal={true}
                  key={i}
                  text={uniSection}
                  value={uniSection.en.toLowerCase()}
                ></ToggleGroup.Item>
              ))}
            </>
          }
        </ToggleGroupRoot>
      );
    case EditModalContentKeys.WORK_EXPERIENCE_OVERSEAS:
      return (
        <ToggleGroupRoot
          type="single"
          value={editedClient?.work_experience}
          onValueChange={(value) => {
            editedClient &&
              setEditedClient({
                ...editedClient,
                work_experience: value as WorkExperience,
              });
          }}
        >
          {
            <>
              {works.map((work, i) => (
                <ToggleGroup.Item
                  isItemInModal={true}
                  key={i}
                  text={work}
                  value={work.en.toLowerCase()}
                ></ToggleGroup.Item>
              ))}
            </>
          }
        </ToggleGroupRoot>
      );
    case EditModalContentKeys.AUSTRALIAN_WORK_EXPERIENCE:
      return (
        <ToggleGroupRoot
          type="single"
          value={editedClient?.australian_work_experience}
          onValueChange={(value) => {
            editedClient &&
              setEditedClient({
                ...editedClient,
                australian_work_experience: value as AustralianWorkExperience,
              });
          }}
        >
          {
            <>
              {australianWorks.map((australianWork, i) => (
                <ToggleGroup.Item
                  isItemInModal={true}
                  key={i}
                  text={australianWork}
                  value={australianWork.en.toLowerCase()}
                ></ToggleGroup.Item>
              ))}
            </>
          }
        </ToggleGroupRoot>
      );
    case EditModalContentKeys.PHONE_NUMBER:
      return (
        <Input
          isInputInModal={true}
          value={editedClient?.phone}
          isNumberOnly={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            editedClient &&
              setEditedClient({
                ...editedClient,
                // replace will make it so the editedClient?.phone only gets numbers as value
                phone: e.target.value.replace(/[^\d]/g, ""),
              });
          }}
          inputName="phoneNumber"
          id={"phone-input"}
          placeholder={t(LanguageKeys.PhoneNumberTitle)}
        />
      );
    case EditModalContentKeys.EMAIL:
      return (
        <Input
          isInputInModal={true}
          value={editedClient?.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            editedClient &&
              setEditedClient({
                ...editedClient,
                // replace will make it so the editedClient?.phone only gets numbers as value
                email: e.target.value,
              });
          }}
          inputName="email"
          id={"email-input"}
          placeholder={t(LanguageKeys.EmailTitle)}
        />
      );

    default:
      return null;
  }
}
const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
const Title = styled.h2`
  ${Headline6Style};
  display: flex;
  align-items: center;
  text-align: start;
  width: 100%;
  gap: 0.5rem;
  margin: 0;
  flex-direction: column;
  color: var(--color-gray7);
  @media ${deviceMin.tabletL} {
    flex-direction: row;
  }
`;
