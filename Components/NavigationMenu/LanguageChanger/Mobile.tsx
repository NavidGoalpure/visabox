import styled, { css } from "styled-components";
import { useLocale } from "Hooks/useLocale";
import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "Hooks/useOnClickOutside";
import { Languages } from "Interfaces";
import { ImSphere } from "react-icons/im";
import { BsChevronDown } from "react-icons/bs";
import { layer3_TextStyle } from "Styles/Theme/Layers/layer3/style";
import { layer3_TextColor } from "Styles/Theme/Layers/layer3/theme";
import BritishFlag from "./Images/BritishFlag.svg";
import Image from "next/image";
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
  return (
    <Container id={"container"} ref={containerRef}>
      <TriggerContainer onClick={() => setIsOpen((prevState) => !prevState)}>
        <TriggerText>
          <SphereIcon />
          {smartTextObj[locale]}
        </TriggerText>
        <ArrowIcon isOpen={isOpen} />
      </TriggerContainer>
      {isOpen && (
        <PopupContainer>
          <PopupItem onClick={() => setIsOpen(false)}>
            {" "}
            <img src={BritishFlag} alt={"england flag"} />
            {smartTextObj.en}
          </PopupItem>
          <PopupItem onClick={() => setIsOpen(false)}>
            <img src={BritishFlag} alt={"iran flag"} />
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
const ArrowIcon = styled(BsChevronDown)<{ isOpen: boolean }>`
  ${layer3_TextColor};
  transition: all 0.3s ease;
  ${({ isOpen }) => isOpen && `transform:rotate(180deg);`}
`;

const DownIcon = styled.p``;
const PopupContainer = styled.div`
  padding: 1rem 1.5rem;
  background: var(--color-gray13);
  border-radius: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PopupItem = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Flag = styled(Image)``;
