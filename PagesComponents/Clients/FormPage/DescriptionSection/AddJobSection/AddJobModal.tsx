import ModalComponent from "Components/ModalComponent";
import { PrimaryButton } from "Elements/Button/Primary";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import {
  Client,
  ClientAllJobs,
  WorkExperience,
} from "Interfaces/Database/Client";
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
import { componentStatements, LanguageKeys } from "../../const";
import { Input } from "Components/Input";
import { works, YesOrNo } from "Consts/Client";
import { deviceMin } from "Consts/device";
import { Layer1_SubtitleStyle } from "Styles/Theme/Layers/layer1/style";
import ErrorToast from "Elements/Toast/Error";
import SuccessToast from "Elements/Toast/Success";
import { useMutation, useQueryClient } from "react-query";
import { ClientQueryKeys } from "Utils/query/keys";

interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  clickedJobIndex?: number;
  client: Client;
}
const AddJobModal: React.FC<Props> = ({
  setIsModalOpen,
  isModalOpen,
  clickedJobIndex,
  client,
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const [selectedJob, setSelectedJob] = useState<ClientAllJobs>(
    {} as ClientAllJobs
  );
  const [hasUpdatedEditedClient, setHasUpdatedEditedClient] =
    useState<boolean>(false);
  const [editedClient, setEditedClient] = useState<Client>(client);
  const FailedToastMessage = t(LanguageKeys.FailedToastMessage);
  const successToastMessage = t(LanguageKeys.SuccessToastText);
  const updateAllJobs = client?.all_jobs ? [...client?.all_jobs] : [];
  const queryClient = useQueryClient();
  useEffect(() => {
    setEditedClient(client);
  }, [client]);
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
      const reqParams = `_id == "${client?._id || "defensive"}" `;
      setIsModalOpen(false);
      queryClient.refetchQueries({
        queryKey: ClientQueryKeys.detail({
          reqParams: reqParams,
        }),
      });
      setIsModalOpen(false);
      SuccessToast(successToastMessage);
    },
    onError: () => {
      ErrorToast(FailedToastMessage);
    },
  });
  function HandleSaveClicked() {
    if (clickedJobIndex !== undefined) {
      updateAllJobs.splice(clickedJobIndex, 1, selectedJob);
      editedClient && setEditedClient({ ...client, all_jobs: updateAllJobs });
      setHasUpdatedEditedClient(true);
    } else if (clickedJobIndex === undefined) {
      editedClient &&
        setEditedClient({
          ...client,
          all_jobs: [...updateAllJobs, selectedJob],
        });
      setHasUpdatedEditedClient(true);
    }
  }
  useEffect(() => {
    if (hasUpdatedEditedClient) mutation.mutate();
  }, [editedClient]);
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
      <Title>{t(LanguageKeys.ModalWorkExperienceSection)} </Title>
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
                isItemInModal={true}
                key={i}
                text={option}
                value={option.en.toLowerCase()}
              ></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroupRoot>
      <Title>{t(LanguageKeys.CanProvideLegalProofForExperience)} </Title>
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
              isItemInModal={true}
              key={i}
              text={option}
              value={option.en.toLowerCase()}
            ></ToggleGroup.Item>
          ))}
        </>
      </ToggleGroupRoot>
      <Title>{t(LanguageKeys.WasTheJobInAustralia)} </Title>
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
              isItemInModal={true}
              key={i}
              text={option}
              value={option.en.toLowerCase()}
            ></ToggleGroup.Item>
          ))}
        </>
      </ToggleGroupRoot>

      <ButtonWrapper>
        <SaveButton
          isLoading={mutation.isLoading}
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
const Title = styled.h2`
  ${Layer1_SubtitleStyle};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  margin-top: 1rem;
  flex-direction: column;
  @media ${deviceMin.tabletL} {
    flex-direction: row;
  }
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
