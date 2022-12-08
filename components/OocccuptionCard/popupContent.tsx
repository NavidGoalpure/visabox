import { deviceMin } from 'consts/device';
import { Button } from 'elements/Button';
import { ScrollBox } from 'elements/ScrollBox';
import { useLocale } from 'hooks/useLocale';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import { MultiLanguageTextArray } from 'interfaces';
import { Slug } from 'interfaces/Fields';
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
      <Wrapper isPopupOpen={isPopupOpen} heightToRem={30}>
        <h3>{t(LanguageKeys.Tasks)}</h3>
        <ul>
          {tasks?.[locale]?.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
        <StyledButton
          onClick={() => router.push(`/${locale}/occupations/${slug?.current}`)}
        >
          {t(LanguageKeys.ReadMore)}
        </StyledButton>
      </Wrapper>
    </Container>
  );
};

export default PopupContent;
const ContainerHoverCss = css`
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
  pointer-events: none;
  @media ${deviceMin.tabletL} {
    :hover {
      ${ContainerHoverCss}
    }
    pointer-events: all;
  }

  ${({ isPopupOpen }) => isPopupOpen && ContainerHoverCss}
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

const Wrapper = styled(ScrollBox)<{ isPopupOpen: boolean }>`
  opacity: 0;
  padding: 0;
  transform: translateY(-20px);
  width: 100%;
  height: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease;
  padding-right: 1rem;
  #scroll-area-scrollbar {
    // margin-right: -0.5rem;
    // overflow-x: none;
  }
  h3 {
    ${componentSubtitleStyle}
    ${componentTextColor}
    margin-bottom:1rem;
  }
  ul {
    ${componentTextStyle}
    margin-bottom:1rem;
  }

  @media ${deviceMin.tabletL} {
    ${Container}:hover & {
      ${PopupContentContainerHoverCss}
    }
  }
  ${({ isPopupOpen }) => isPopupOpen && PopupContentContainerHoverCss}
`;
const StyledButton = styled(Button)`
  margin: 0 auto;
  margin-bottom: 2rem;
  width: auto;
`;
