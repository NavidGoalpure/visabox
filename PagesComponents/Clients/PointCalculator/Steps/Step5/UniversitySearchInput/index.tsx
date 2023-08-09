import { ScrollBox } from "Elements/ScrollBox";
import { ChangeEvent, useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { Headline7Style } from "Styles/Typo";
import { iran } from "Consts/Occupations/university";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import { UniCard } from "./UniversityCard";
import { Loading } from "Elements/Loading";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";

export const UniversitySearchInput = () => {
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const { t } = useStaticTranslation(componentStatements);
  const SearchedUniversities = iran.filter(
    (university) =>
      university.title.en.toLowerCase().includes(inputValue.toLowerCase()) ||
      university?.title?.fa?.toLowerCase().includes(inputValue.toLowerCase()) ||
      university.city.en.toLowerCase() === inputValue.toLowerCase() ||
      university?.city?.fa?.toLowerCase() === inputValue.toLowerCase()
  );
  const handleFocus = () => {
    setIsInputFocus(true);
  };

  const handleBlur = () => {
    setIsInputFocus(false);
  };
  return (
    <Container>
      <InputContainer>
        <InputWrapper>
          <SearchIcon />
          <StyledInput
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={t(LanguageKeys.UniInput_Placeholder)}
            value={inputValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setInputValue(event?.target?.value);
            }}
          />
        </InputWrapper>

        <StyledScrollBox isVisible={isInputFocus} height={"15rem"}>
          {inputValue.length < 3 ? (
            <LoadingContainer>
              <StyledLoading />
              <LoadingTitle>حداقل سه حرف وارد کنید ...</LoadingTitle>
            </LoadingContainer>
          ) : SearchedUniversities.length !== 0 ? (
            SearchedUniversities.map((uni) => {
              return <UniCard university={uni} />;
            })
          ) : (
            <NotFoundContainer>
              <CloseIcon />
              <NotFoundTitle>حداقل سه حرف وارد کنید ...</NotFoundTitle>
            </NotFoundContainer>
          )}
        </StyledScrollBox>
      </InputContainer>
    </Container>
  );
};
const inputTheme = theme("mode", {
  light: css`
    background: var(--color-gray13);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    color: var(--color-gray6);
    :focus {
      background: white;
    }
  `,
  dark: css`
    background: var(--color-gray6);
    color: var(--color-gray13);
    color-scheme: dark;
    :focus {
      background: var(--color-gray7);
    }
  `,
});
const inputPlaceHolderTheme = theme("mode", {
  light: css`
    color: var(--color-gray9);
  `,
  dark: css`
    color: var(--color-gray8);
  `,
});
const ScrollBoxBgTheme = theme("mode", {
  light: css`
    background: var(--color-gray12);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  overflow: hidden;
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    bottom: 50%;
    inset-inline-end: 1rem;
    transform: translateY(50%);
  }
`;
const InputStyle = css`
  ${inputTheme};
  ${Headline7Style};
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 1rem;
  padding-inline-end: 3rem;
  box-sizing: border-box;
  transition: all 0.3s 0.3s ease;
  -webkit-appearance: none;
  /////////focus////////
  :focus {
    transition: all 0.3s ease;
    border-radius: 15px 15px 0 0;
  }
  /////////placeholder//////////////
  ::placeholder {
    ${Headline7Style};
    ${inputPlaceHolderTheme};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: var(--color-gray10);
  }
`;
const StyledInput = styled.input`
  ${InputStyle};
`;
const SearchIcon = styled(CiSearch)`
  ${inputPlaceHolderTheme};
  width: 1.5rem;
  height: 1.5rem;
  margin-inline-end: 0.5rem;
`;
const StyledScrollBox = styled(ScrollBox)<{ isVisible: boolean }>`
  ${ScrollBoxBgTheme};
  transition: all 0.3s ease;
  transform-origin: top;
  background: var(--color-gray6);
  ${({ isVisible }) =>
    isVisible
      ? css`
          height: 15rem;
        `
      : css`
          height: 0;
        `}
`;
const LoadingContainer = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledLoading = styled(Loading)``;
const LoadingTitle = styled.h4`
  ${Headline7Style};
  color: var(--color-gray9);
`;
const NotFoundContainer = styled(LoadingContainer)`
  gap: 1rem;
`;
const CloseIcon = styled(IoCloseOutline)`
  color: white;
  background: var(--color-fail1);
  border-radius: 50%;
  padding: 0.2rem;
  box-sizing: content-box;
  width: 1.5rem;
  height: auto;
`;
const NotFoundTitle = styled(LoadingTitle)``;
