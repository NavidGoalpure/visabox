import styled, { css } from "styled-components";
import { useLocale } from "Hooks/useLocale";
import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "Hooks/useOnClickOutside";
import { Languages } from "Interfaces";
import { ImSphere } from "react-icons/im";
import { BsChevronDown } from "react-icons/bs";
import { layer3_TextStyle } from "Styles/Theme/Layers/layer3/style";
import { layer3_TextColor } from "Styles/Theme/Layers/layer3/theme";
import BritishFlag from "../Images/BritishFlag.svg";
import IranFlag from "../Images/IranFlag.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import theme from "styled-theming";
const MobileLanguageChanger = ({}) => {
  const { locale } = useLocale();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closePopup = () => {
    setIsOpen(false);
  };
  useOnClickOutside(containerRef, closePopup);
  const smartTextObj: Record<Languages, string> = {
    en: "English",
    fa: "فارسی",
  };
  const router = useRouter();
  return (
    <Container id={"container"} ref={containerRef}>
      <TriggerContainer onClick={() => setIsOpen((prevState) => !prevState)}>
        <TriggerText>
          <SphereIcon />
          {smartTextObj[locale]}
        </TriggerText>
        <ArrowIcon $isOpen={isOpen} />
      </TriggerContainer>
      {isOpen && (
        <PopupContainer>
          <PopupItem
            onClick={() => {
              setIsOpen(false);
              router.push(router.pathname, router.asPath, {
                locale: Languages.en,
              });
            }}
          >
            <FlagWrapper>
              <Flag
                fill
                src={BritishFlag}
                alt={"england flag"}
                sizes="1.5rem"
              />
            </FlagWrapper>
            {smartTextObj.en}
          </PopupItem>
          <Hr />
          <PopupItem
            onClick={() => {
              setIsOpen(false);
              router.push(router.pathname, router.asPath, {
                locale: Languages.fa,
              });
            }}
          >
            <FlagWrapper>
              <Flag fill src={IranFlag} alt={"iran flag"} sizes="1.5rem" />
            </FlagWrapper>
            {smartTextObj.fa}
          </PopupItem>
        </PopupContainer>
      )}
    </Container>
  );
};
export default MobileLanguageChanger;
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
  ${layer3_TextStyle}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const SphereIcon = styled(ImSphere)`
  width: 1.5rem;
  height: auto;
  margin-bottom: 0.4rem;
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
const popUpTheme = theme("mode", {
  light: css`
    color: var(--color-gray7);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});
const PopupItem = styled.h4`
  ${layer3_TextStyle};
  ${popUpTheme}
  padding: 0 2.125rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
const FlagWrapper = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
`;
const Flag = styled(Image)`
  position: relative !important;
`;
///////////////
const hrTheme = theme("mode", {
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
