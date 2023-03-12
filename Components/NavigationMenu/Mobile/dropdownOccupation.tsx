import styled, { css } from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import { useRef, useState } from 'react';
import useOnClickOutside from 'Hooks/useOnClickOutside';
import { BsChevronDown } from 'react-icons/bs';
import {
  layer3_SubtitleStyle,
  layer3_TextStyle,
  layer3_TitleStyle,
} from 'Styles/Theme/Layers/layer3/style';
import { layer3_TextColor } from 'Styles/Theme/Layers/layer3/theme';
import theme from 'styled-theming';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys, occupationItems } from '../const';
import Link from 'next/link';
const MobileOccupationDropdown = ({}) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closePopup = () => {
    setIsOpen(false);
  };
  useOnClickOutside(containerRef, closePopup);

  return (
    <Container id={'container'} ref={containerRef}>
      <TriggerContainer onClick={() => setIsOpen((prevState) => !prevState)}>
        <TriggerText>{t(LanguageKeys.Occupations)}</TriggerText>
        <ArrowIcon $isOpen={isOpen} />
      </TriggerContainer>
      {isOpen && (
        <PopupContainer>
          <PopupItem
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link href={occupationItems[0].href}>
              {occupationItems[0].title[locale]}
            </Link>
          </PopupItem>
          <Hr />
          <PopupItem
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link href={occupationItems[1].href}>
              {occupationItems[1].title[locale]}
            </Link>
          </PopupItem>
        </PopupContainer>
      )}
    </Container>
  );
};
export default MobileOccupationDropdown;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TriggerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TriggerText = styled.h4`
  ${layer3_TitleStyle};
  text-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ArrowIcon = styled(BsChevronDown)<{ $isOpen: boolean }>`
  ${layer3_TextColor};
  transition: all 0.3s ease;
  ${({ $isOpen }) => $isOpen && `transform:rotate(180deg);`}
`;

const PopupContainer = styled.div`
  padding: 1rem 0;
  border-radius: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const PopupItem = styled.h4`
  padding: 0 2.125rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  a {
    ${layer3_SubtitleStyle}
  }
`;
///////////////
const hrTheme = theme('mode', {
  light: css`
    background: var(--color-gray12);
  `,
  dark: css`
    background: var(--color-gray3);
  `,
});
const Hr = styled.hr`
  ${hrTheme}
  width: 100%;
  height: 1px;
`;
