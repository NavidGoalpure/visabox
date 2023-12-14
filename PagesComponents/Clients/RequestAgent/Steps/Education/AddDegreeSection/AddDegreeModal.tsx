import ModalComponent from "Components/ModalComponent";
import { PrimaryButton } from "Elements/Button/Primary";
import ErrorToast from "Elements/Toast/Error";
import SuccessToast from "Elements/Toast/Success";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import {
  Client,
  ClientAllDegrees,
  ClientDegree,
  UniSections,
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
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { Headline7Style } from "Styles/Typo";
import { ClientQueryKeys } from "Utils/query/keys";
import * as ToggleGroup from "Elements/ToggleGroup";
import {
  componentStatements,
  LanguageKeys,
} from "../const";
import { Input } from "Components/Input";
import {
  HintContainer,
  HintText,
  InfoHintIcon,
  Title,
} from "../../StyledComponents";
import { uniSections } from "Consts/Client";
import { FormDataContext } from "PagesComponents/Clients/RequestAgent/Contexts/FormDataContext/Context";
import { SupportedCountry } from "Interfaces/Database";
import { SearchInputComponent } from "Components/SearchInputComponent";
import { Hint_Modal_Bg, Hint_Modal_Icon, Hint_Modal_Text } from "Styles/Theme/elementsInModal/hint";

interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  degreeLabel: string;
}
const EditModal: React.FC<Props> = ({
  setIsModalOpen,
  isModalOpen,
  degreeLabel,
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient } = useContext(FormDataContext);
  const [selectedDegree, setSelectedDegree] = useState<
    ClientAllDegrees | undefined
  >(client?.all_degrees?.filter((el) => el.label === degreeLabel)[0]);
  useEffect(() => {
    setSelectedDegree(
      client?.all_degrees?.filter((el) => el.label === degreeLabel)[0]
    );
  }, [client, degreeLabel]);
  return (
    <ModalComponent
      doesModalCloseOnOutsideInteraction={true}
      setOpen={setIsModalOpen}
      open={isModalOpen}
    >
      <Input
        isInputInModal={true}
        required
        label={t(LanguageKeys.FieldOfStudyInputLabel)}
        inputName="field-of-study"
        placeholder={t(LanguageKeys.FieldOfStudyInputPlaceholder)}
        value={selectedDegree?.field_of_study || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          selectedDegree &&
            setSelectedDegree({
              ...selectedDegree,
              field_of_study: e.target.value,
            });
        }}
      />
      <Title>{t(LanguageKeys.UniSectionsSectionTitle)} </Title>
      <ToggleGroupRoot
        type="single"
        value={selectedDegree?.uni_section || ""}
        onValueChange={(value: UniSections) => {
          selectedDegree &&
            setSelectedDegree({
              ...selectedDegree,
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
      {selectedDegree?.uni_section === UniSections.IDontKnow &&
        client?.country === SupportedCountry.Iran && (
          <>
            <ModalHintContainer>
              <ModalInfoHintIcon />
              <ModalHintText>{t(LanguageKeys.UniInput_HintText)}</ModalHintText>
            </ModalHintContainer>
            <SearchInputComponent
              isInputInModal={true}
              placeholder={t(LanguageKeys.UniInput_Placeholder)}
              theme={"LAYER1"}
              callback={(university) => {
                selectedDegree &&
                  setSelectedDegree({
                    ...selectedDegree,
                    uni_section: university,
                  });
              }}
            />
          </>
        )}
      <Input
        isInputInModal={true}
        required
        label={t(LanguageKeys.GraduationDateLabel)}
        type={"date"}
        inputName="field-of-study"
        placeholder={t(LanguageKeys.FieldOfStudyInputPlaceholder)}
        value={selectedDegree?.graduation_date || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          selectedDegree &&
            setSelectedDegree({
              ...selectedDegree,
              graduation_date: e.target.value.slice(0, 10),
            });
        }}
      />
      <ButtonWrapper>
        <SaveButton
          disabled={
            !selectedDegree?.field_of_study ||
            !selectedDegree?.graduation_date ||
            !selectedDegree?.uni_section
          }
          onClick={() => {
            client &&
              setClient({
                ...client,
                all_degrees: client?.all_degrees?.map((degree) => {
                  if (degree?.label === selectedDegree?.label) {
                    return selectedDegree;
                  }
                  return degree;
                }),
              });
            setIsModalOpen(false);
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
export default EditModal;
const ModalHintContainer = styled(HintContainer)`
  ${Hint_Modal_Bg}
`;
const ModalInfoHintIcon = styled(InfoHintIcon)`
${Hint_Modal_Icon}
`;
const ModalHintText = styled(HintText)`
  ${Hint_Modal_Text}
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
