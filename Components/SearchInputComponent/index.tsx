import { ScrollBox } from 'Elements/ScrollBox';
import { ChangeEvent, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Headline7Style } from 'Styles/Typo';
import { iran } from 'Consts/Occupations/university';
import { Card } from './Card';
import { Loading } from 'Elements/Loading';
import { IoCloseOutline } from 'react-icons/io5';
import { UniSections } from 'Interfaces/Database/Client';
import {
  search_Input_Modal_Bg,
  search_Input_Modal,
} from 'Styles/Theme/elementsInModal/searchInput';
interface Props {
  theme: 'LAYER1' | 'LAYER2';
  isInputInModal?: boolean;
  callback?: (university: UniSections) => void;
  placeholder: string;
}
export const SearchInputComponent: React.FC<Props> = ({
  theme,
  callback,
  placeholder,
  isInputInModal = false,
}) => {
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
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
            isInputInModal={isInputInModal}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            value={inputValue}
            $theme={theme}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setInputValue(event?.target?.value);
            }}
          />
        </InputWrapper>

        <StyledScrollBox
          isInputInModal={isInputInModal}
          isVisible={isInputFocus}
          height={'15rem'}
        >
          {inputValue.length < 3 ? (
            <LoadingContainer>
              <StyledLoading />
              <LoadingTitle>حداقل سه حرف وارد کنید ...</LoadingTitle>
            </LoadingContainer>
          ) : SearchedUniversities.length !== 0 ? (
            SearchedUniversities.map((uni, i) => {
              return (
                <Card
                  isInputInModal={isInputInModal}
                  key={i}
                  setInputValue={setInputValue}
                  university={uni}
                  callback={callback}
                />
              );
            })
          ) : (
            <NotFoundContainer>
              <CloseIcon />
              <NotFoundTitle>نتیجه ای یافت نشد.</NotFoundTitle>
            </NotFoundContainer>
          )}
        </StyledScrollBox>
      </InputContainer>
    </Container>
  );
};
const inputLayer1Theme = theme('mode', {
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
const inputLayer2Theme = theme('mode', {
  light: css`
    background: var(--color-gray12);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    color: var(--color-gray4);
    :focus {
      background: var(--color-gray13);
    }
  `,
  dark: css`
    background: var(--color-gray4);
    color: var(--color-gray13);
    color-scheme: dark;
    :focus {
      background: var(--color-gray4);
    }
  `,
});
const inputPlaceHolderTheme = theme('mode', {
  light: css`
    color: var(--color-gray9);
  `,
  dark: css`
    color: var(--color-gray8);
  `,
});
const ScrollBoxBgTheme = theme('mode', {
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
const InputStyle = css<{
  $theme: 'LAYER1' | 'LAYER2';
  isInputInModal: boolean;
}>`
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
  ///////////theme///////////////
  ${({ $theme }) => ($theme === 'LAYER1' ? inputLayer1Theme : inputLayer2Theme)}
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
  ${({ isInputInModal }) => isInputInModal && `${search_Input_Modal}`}
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
const StyledScrollBox = styled(ScrollBox)<{
  isVisible: boolean;
  isInputInModal: boolean;
}>`
  ${ScrollBoxBgTheme};

  // do not touch the transition delay it messes with revaluation of uni_section
  // by clicking on the option
  transition: all 0.3s 0.1s ease;
  transform-origin: top;
  box-sizing: border-box;
  flex-shrink: 0;
  ${({ isVisible }) =>
    isVisible
      ? css`
          height: 15rem;
        `
      : css`
          height: 0rem;
        `}
  ${({ isInputInModal }) => isInputInModal && `${search_Input_Modal_Bg}`}
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
