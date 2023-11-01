import ModalComponent from "Components/ModalComponent";
import { PrimaryButton } from "Elements/Button/Primary";
import ErrorToast from "Elements/Toast/Error";
import SuccessToast from "Elements/Toast/Success";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { Client } from "Interfaces/Database/Client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { Headline7Style } from "Styles/Typo";
import { ClientQueryKeys } from "Utils/query/keys";
import * as ToggleGroup from "Elements/ToggleGroup";
import { componentStatements, LanguageKeys } from "./const";

interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}
const EditModal: React.FC<Props> = ({ setIsModalOpen, isModalOpen }) => {
  const { t } = useStaticTranslation(componentStatements);
  //   const FailedToastMessage = t(LanguageKeys.FailedToastMessage);
  //   const successToastMessage = t(LanguageKeys.SuccessToastText);
  // if this useEffect was not here the user could make a change then close the popup
  // that would change the editedClient useState which is not ideal since
  // the user did not confirm the change
  return (
    <ModalComponent
      doesModalCloseOnOutsideInteraction={true}
      setOpen={setIsModalOpen}
      open={isModalOpen}
    >
      <ButtonWrapper>
        <SaveButton>
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
