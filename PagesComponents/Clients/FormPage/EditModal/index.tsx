import ModalComponent from 'Components/ModalComponent';
import { PrimaryButton } from 'Elements/Button/Primary';
import ErrorToast from 'Elements/Toast/Error';
import SuccessToast from 'Elements/Toast/Success';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { Client } from 'Interfaces/Database/Client';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AiOutlineSave } from 'react-icons/ai';
import { MdNavigateNext } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { Headline7Style } from 'Styles/Typo';
import { ClientQueryKeys } from 'Utils/query/keys';
import * as ToggleGroup from 'Elements/ToggleGroup';
import {
  componentStatements,
  LanguageKeys,
  EditModalContentKeys,
  profileResParams,
} from '../const';

import { ContentBasedOnKeys } from './Content';

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
  const queryClient = useQueryClient();
  useEffect(() => {
    setEditedClient(client);
  }, [client]);
  const mutation = useMutation({
    mutationFn: () => {
      return fetch('/api/clients/edit-profile', {
        method: 'POST',
        body: JSON.stringify({ client: editedClient }),
      });
    },
    onSuccess: (res) => {
      if (!res.ok) {
        throw new Error('couldnt patch the user');
      }
      queryClient.refetchQueries({
        queryKey: ClientQueryKeys.detail({
          reqParams: `_id == "${client?._id || 'defensive'}"`,
        }),
      });
      setIsModalOpen(false);
      SuccessToast(successToastMessage);
    },
    onError: () => {
      ErrorToast(FailedToastMessage);
    },
  });

  function TitleBasedOnKeys() {
    switch (modalContentKeys) {
      case EditModalContentKeys.NAME:
        return t(LanguageKeys.FullNameLabel);
      case EditModalContentKeys.CURRENT_JOB:
        return t(LanguageKeys.CurrentJobLabel);
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
        return '';
    }
  }
  // if this useEffect was not here the user could make a change then close the popup
  // that would change the editedClient useState which is not ideal since
  // the user did not confirm the change
  useEffect(() => {
    if (!isModalOpen) {
      setEditedClient(client);
    }
  });
  return (
    <ModalComponent
      doesModalCloseOnOutsideInteraction={true}
      DialogTitleText={TitleBasedOnKeys()}
      setOpen={setIsModalOpen}
      open={isModalOpen}
    >
      <ContentBasedOnKeys
        setEditedClient={setEditedClient}
        editedClient={editedClient}
        modalContentKeys={modalContentKeys}
      />
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
