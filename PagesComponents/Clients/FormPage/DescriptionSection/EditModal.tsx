import { Input } from "Components/Input";
import ModalComponent from "Components/ModalComponent";
import { PrimaryButton } from "Elements/Button/Primary";
import ErrorToast from "Elements/Toast/Error";
import SuccessToast from "Elements/Toast/Success";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import {
  AustralianWorkExperience,
  Client,
  ClientDegree,
  ClientMarital,
  IELTSScore,
  UniSections,
  WorkExperience,
} from "Interfaces/Database/Client";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { Headline7Style } from "Styles/Typo";
import { ClientQueryKeys } from "Utils/query/keys";
import * as ToggleGroup from "Elements/ToggleGroup";
import { componentStatements, LanguageKeys } from "./const";
import { EditModalContentKeys } from "./const";
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
import { SupportedCountry } from "Interfaces/Database";

interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  modalContentKeys: EditModalContentKeys | null;
  client: Client;
}
const EditModal: React.FC<Props> = ({
  setIsModalOpen,
  isModalOpen,
  modalContentKeys,
  client,
}) => {
  const [editedClient, setEditedClient] = useState<Client>(client);
  const { t } = useStaticTranslation(componentStatements);
  const FailedToastMessage = t(LanguageKeys.FailedToastMessage);
  const successToastMessage = t(LanguageKeys.SuccessToastText);
  var mydate = editedClient?.birthday
    ? new Date(editedClient?.birthday).toISOString().slice(0, 10)
    : editedClient?.age
    ? new Date(editedClient?.age).toISOString().slice(0, 10)
    : "defensive";
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const mutation = useMutation({
    mutationFn: () => {
      return fetch("/api/clients/edit-profile", {
        method: "POST",
        body: JSON.stringify({ client: editedClient }),
      });
    },
    onSuccess: (res) => {
      if (!res.ok) {
        throw new Error("couldnt patch the user");
      }
      queryClient.refetchQueries({
        queryKey: ClientQueryKeys.detail({
          reqParams: `_id == "${client?._id || "defensive"}"`,
        }),
      });
      setIsModalOpen(false);
      SuccessToast(successToastMessage);
    },
    onError: () => {
      ErrorToast(FailedToastMessage);
    },
  });
  function ContentBasedOnKeys() {
    switch (modalContentKeys) {
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
      case EditModalContentKeys.AUSTRALIAN_EDUCATIONAL_QUALIFICATION:
        return (
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
        );
      case EditModalContentKeys.DESIGNATED_REGIONAL_AREA_STUDY:
        return <div>red</div>;
      case EditModalContentKeys.SPECIALIST_EDUCATIONAL_QUALIFICATION:
        return <div>red</div>;
      case EditModalContentKeys.PROFESSIONAL_YEAR_IN_AUSTRALIA:
        return <div>red</div>;
      case EditModalContentKeys.ACCREDITED_COMMUNITY_LANGUAGE:
        return <div>red</div>;
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
                  // replace will make it so the client?.phone only gets numbers as value
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
                  // replace will make it so the client?.phone only gets numbers as value
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
  function TitleBasedOnKeys() {
    switch (modalContentKeys) {
      case EditModalContentKeys.BIRTH_DATE:
        return t(LanguageKeys.BirthDateLabel);
      case EditModalContentKeys.ENGLISH_SKILL:
        return t(LanguageKeys.EnglishSkillsLabel);
      case EditModalContentKeys.MARRIAGE_STATUS:
        return t(LanguageKeys.MarriageStatusLabel);
      case EditModalContentKeys.COUNTRY:
        return t(LanguageKeys.CountryLabel);
      case EditModalContentKeys.FIELD_OF_STUDY:
        return t(LanguageKeys.FieldOfStudyLabel);
      case EditModalContentKeys.DEGREE:
        return t(LanguageKeys.DegreeLabel);
      case EditModalContentKeys.AUSTRALIAN_EDUCATIONAL_QUALIFICATION:
        return t(LanguageKeys.AustralianEducationalQualificationLabel);
      case EditModalContentKeys.DESIGNATED_REGIONAL_AREA_STUDY:
        return t(LanguageKeys.DesignatedRegionalAreaStudyLabel);
      case EditModalContentKeys.SPECIALIST_EDUCATIONAL_QUALIFICATION:
        return t(LanguageKeys.SpecialistEducationalQualificationLabel);
      case EditModalContentKeys.PROFESSIONAL_YEAR_IN_AUSTRALIA:
        return t(LanguageKeys.ProfessionalYearInAustraliaLabel);
      case EditModalContentKeys.ACCREDITED_COMMUNITY_LANGUAGE:
        return t(LanguageKeys.AccreditedCommunityLanguageLabel);
      case EditModalContentKeys.UNIVERSITY_SECTION:
        return t(LanguageKeys.UniversitySectionLabel);
      case EditModalContentKeys.WORK_EXPERIENCE_OVERSEAS:
        return t(LanguageKeys.WorkExperienceLabel);
      case EditModalContentKeys.AUSTRALIAN_WORK_EXPERIENCE:
        return t(LanguageKeys.AustralianWorkExperienceLabel);
      case EditModalContentKeys.PHONE_NUMBER:
        return t(LanguageKeys.PhoneNumberTitle);
      case EditModalContentKeys.EMAIL:
        return t(LanguageKeys.EmailTitle);

      default:
        return "defensive";
    }
  }
  return (
    <ModalComponent
      doesModalCloseOnOutsideInteraction={true}
      DialogTitleText={TitleBasedOnKeys()}
      setOpen={setIsModalOpen}
      open={isModalOpen}
    >
      {ContentBasedOnKeys()}
      <ButtonWrapper>
        <SaveButton
          isLoading={mutation.isLoading}
          onClick={() => mutation.mutate()}
        >
          {t(LanguageKeys.SaveTitle)} <SaveIcon />
        </SaveButton>
        <BackButton onClick={() => setIsModalOpen(false)}>
          {t(LanguageKeys.BackTitle)}
          <BackIcon />
        </BackButton>
      </ButtonWrapper>
    </ModalComponent>
  );
};
export default EditModal;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  align-items: center;
`;
const BackButton = styled.button`
  ${Headline7Style};
  cursor: pointer;
  color: var(--color-gray10);
  outline: none;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
`;
const SaveButton = styled(PrimaryButton)``;
const SaveIcon = styled(AiOutlineSave)`
  width: auto;
  height: 1rem;
`;
const BackIcon = styled(MdNavigateNext)`
  width: auto;
  height: 1.5rem;
`;
const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
