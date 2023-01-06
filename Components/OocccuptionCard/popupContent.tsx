import { deviceMin } from 'Consts/device';
import { Button } from 'Elements/Button';
import { VerticalScrollBox } from 'Elements/VerticalScrollBox';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { MultiLanguageTextArray } from 'Interfaces';
import { Slug } from 'Interfaces/Fields';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';
import {
  componentSubtitleStyle,
  componentTextColor,
  componentTextStyle,
} from 'Styles/Theme/Component';
import { componentStatements, LanguageKeys } from './const';
import { IoIosArrowDown } from 'react-icons/io';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';

interface Props {
  slug?: Slug;
  tasks: MultiLanguageTextArray;
  isPopupOpen: boolean;
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
}
const PopupContent: React.FC<Props> = ({
  slug,
  tasks,
  isPopupOpen,
  setIsPopupOpen,
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { dtArray, isMultiLanguageTextArrayIsEmpty } = useDynamicTranslation();

  const router = useRouter();
  const { locale } = useLocale();

  return (
    <Container isPopupOpen={isPopupOpen}>
      <Arrow
        isPopupOpen={isPopupOpen}
        onClick={() => {
          setIsPopupOpen((prevState) => !prevState);
          return false;
        }}
      />{' '}
      <StyledVerticalScrollBox isPopupOpen={isPopupOpen} heightToRem={30}>
        <Title>{t(LanguageKeys.Tasks)}</Title>
        {isMultiLanguageTextArrayIsEmpty(tasks) ? (
          <ul>
            {dtArray(tasks)?.map((task, i) => (
              <>
                <li key={i}>{task}</li>
                <br />
              </>
            ))}
          </ul>
        ) : (
          <p>{t(LanguageKeys.NoTask)}</p>
        )}
        <StyledButton
          onClick={() => router.push(`/${locale}/occupations/${slug?.current}`)}
        >
          {t(LanguageKeys.ReadMore)}
        </StyledButton>
      </StyledVerticalScrollBox>
    </Container>
  );
};

export default PopupContent;

const ContainerHoverColor = theme('mode', {
  light: css`
    background-color: var(--color-gray13);
  `,
  dark: css`
    background-color: var(--color-gray8);
  `,
});
const ContainerHoverCss = css`
  ${ContainerHoverColor}
  transition-delay: 0s;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  padding-inline-start: 1rem;
  padding-inline-end: 0.25rem;
  height: 100%;
  border-radius: 15px;
`;

const PopupContentContainerHoverCss = css`
  transition-delay: 0.3s;
  transform: translateY(0);
  opacity: 1;
`;
const ContainerColor = theme('mode', {
  light: css`
    background-color: var(--color-gray12);
  `,
  dark: css`
    background-color: var(--color-gray8);
  `,
});

const Container = styled.div<{ isPopupOpen: boolean }>`
  ${ContainerColor}
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10%;
  border-radius: 0 0 15px 15px;
  transition: all 0.4s ease, border-radius 0.4s 0.1s ease;
  transition-delay: 0.3s;
  @media ${deviceMin.tabletL} {
    :hover {
      ${ContainerHoverCss}
      pointer-events: all;
    }
  }

  ${({ isPopupOpen }) => isPopupOpen && ContainerHoverCss}
`;

const StyledVerticalScrollBox = styled(VerticalScrollBox)<{
  isPopupOpen: boolean;
}>`
  opacity: 0;
  padding: 0;
  transform: translateY(-20px);
  width: 100%;
  height: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease;
  padding-inline-end: 1rem;
  pointer-events: none;
  @media ${deviceMin.tabletL} {
    ${Container}:hover & {
      ${PopupContentContainerHoverCss}
      pointer-events: all;
    }
  }
  ul {
    ${componentTextStyle}
    margin-bottom:1rem;
  }
  p {
    ${componentTextStyle}
    margin-bottom:1rem;
  }
  ${({ isPopupOpen }) =>
    isPopupOpen &&
    `
    ${PopupContentContainerHoverCss}
    pointer-events: all;`}
`;

const ArrowHoverCss = css`
  transition-delay: 0s;
  transform: translateX(-50%) rotate(0deg);
`;
const Arrow = styled(IoIosArrowDown)<{ isPopupOpen: boolean }>`
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
  fill: white;
  background-color: var(--color-primary4);
  width: 3rem;
  height: auto;
  border-radius: 50px;
  padding: 0.5rem;
  transition: all 0.4s ease;
  transition-delay: 0.3s;
  pointer-events: all;
  z-index: 1;

  @media ${deviceMin.tabletS} {
    top: -1rem;
    width: 2rem;
  }
  @media ${deviceMin.tabletL} {
    top: -1rem;
    width: 2rem;
    ${Container}:hover & {
      ${ArrowHoverCss}
    }
  }
  ${({ isPopupOpen }) => isPopupOpen && ArrowHoverCss}
`;
const Title = styled.h3`
  ${componentSubtitleStyle}
  ${componentTextColor}
    margin-bottom:1rem;
`;
const StyledButton = styled(Button)`
  margin: 0 auto;
  margin-bottom: 2rem;
  width: auto;
`;
