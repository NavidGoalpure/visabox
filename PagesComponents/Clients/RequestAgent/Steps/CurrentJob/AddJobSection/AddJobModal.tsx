import ModalComponent from "Components/ModalComponent";
import { PrimaryButton } from "Elements/Button/Primary";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { ClientAllJobs, WorkExperience } from "Interfaces/Database/Client";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { AiOutlineSave } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import styled from "styled-components";
import { Headline7Style } from "Styles/Typo";
import * as ToggleGroup from "Elements/ToggleGroup";
import { componentStatements, LanguageKeys } from "../const";
import { Input } from "Components/Input";
import {
  HintContainer,
  HintText,
  InfoHintIcon,
  Title,
} from "../../StyledComponents";
import { FormDataContext } from "PagesComponents/Clients/RequestAgent/Contexts/FormDataContext/Context";
import {
  Hint_Modal_Bg,
  Hint_Modal_Icon,
  Hint_Modal_Text,
} from "Styles/Theme/elementsInModal/hint";
import { works, YesOrNo } from "Consts/Client";

interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  clickedJobIndex?: number;
}
const AddJobModal: React.FC<Props> = ({
  setIsModalOpen,
  isModalOpen,
  clickedJobIndex,
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient } = useContext(FormDataContext);
  const [selectedJob, setSelectedJob] = useState<ClientAllJobs>(
    {} as ClientAllJobs
  );
  const updateAllJobs = client?.all_jobs ? [...client?.all_jobs] : [];
  function HandleSaveClicked() {
    if (clickedJobIndex !== undefined) {
      updateAllJobs.splice(clickedJobIndex, 1, selectedJob);
      client && setClient({ ...client, all_jobs: updateAllJobs });
    } else if (clickedJobIndex === undefined) {
      client &&
        setClient({
          ...client,
          all_jobs: [...updateAllJobs, selectedJob],
        });
    }
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (clickedJobIndex !== undefined) {
      setSelectedJob(updateAllJobs?.[clickedJobIndex]);
    }
  }, [clickedJobIndex]);
  useEffect(() => {
    if (!isModalOpen) {
      setSelectedJob({} as ClientAllJobs);
    }
  }, [isModalOpen]);
  return (
    <ModalComponent
      doesModalCloseOnOutsideInteraction={true}
      setOpen={setIsModalOpen}
      open={isModalOpen}
    >
      <Input
        isInputInModal={true}
        required
        label={t(LanguageKeys.SelectedJobTitle)}
        inputName="job-title"
        placeholder={t(LanguageKeys.CurrentJobInputPlaceholder)}
        value={selectedJob?.title || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          selectedJob &&
            setSelectedJob({
              ...selectedJob,
              title: e.target.value,
            });
        }}
      />
      <StyledTitle>{t(LanguageKeys.ModalWorkExperienceSection)} </StyledTitle>
      <ToggleGroupRoot
        type="single"
        value={selectedJob?.work_experience || ""}
        onValueChange={(value: WorkExperience) => {
          selectedJob &&
            setSelectedJob({
              ...selectedJob,
              work_experience: value as WorkExperience,
            });
        }}
      >
        {
          <>
            {works.map((option, i) => (
              <ToggleGroup.Item
                isiteminmodal={true}
                key={i}
                text={option}
                value={option.en.toLowerCase()}
              ></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroupRoot>
      <StyledTitle>
        {t(LanguageKeys.CanProvideLegalProofForExperience)}{" "}
      </StyledTitle>
      <ToggleGroupRoot
        type="single"
        value={
          selectedJob?.is_able_to_provide_legal_proof === undefined
            ? undefined
            : selectedJob?.is_able_to_provide_legal_proof === true
            ? "yes"
            : "no"
        }
        onValueChange={(value: string) => {
          selectedJob &&
            setSelectedJob({
              ...selectedJob,
              is_able_to_provide_legal_proof: value === "yes" ? true : false,
            });
        }}
      >
        <>
          {YesOrNo.map((option, i) => (
            <ToggleGroup.Item
              isiteminmodal={true}
              key={i}
              text={option}
              value={option.en.toLowerCase()}
            ></ToggleGroup.Item>
          ))}
        </>
      </ToggleGroupRoot>
      <StyledTitle>{t(LanguageKeys.WasTheJobInAustralia)} </StyledTitle>
      <ToggleGroupRoot
        type="single"
        value={
          selectedJob?.was_job_in_australia === undefined
            ? undefined
            : selectedJob?.was_job_in_australia === true
            ? "yes"
            : "no"
        }
        onValueChange={(value: string) => {
          selectedJob &&
            setSelectedJob({
              ...selectedJob,
              was_job_in_australia: value === "yes" ? true : false,
            });
        }}
      >
        <>
          {YesOrNo.map((option, i) => (
            <ToggleGroup.Item
              isiteminmodal={true}
              key={i}
              text={option}
              value={option.en.toLowerCase()}
            ></ToggleGroup.Item>
          ))}
        </>
      </ToggleGroupRoot>

      <ButtonWrapper>
        <SaveButton
          disabled={
            !selectedJob?.title ||
            !selectedJob?.work_experience ||
            selectedJob?.was_job_in_australia === undefined ||
            selectedJob?.is_able_to_provide_legal_proof === undefined
          }
          onClick={() => {
            HandleSaveClicked();
          }}
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
export default AddJobModal;
const StyledTitle = styled(Title)`
  color: var(--color-gray7);
`;
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
