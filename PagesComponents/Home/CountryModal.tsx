import { Dialog } from "@radix-ui/react-dialog";
import ModalComponent from "Components/ModalComponent";
import dynamic from "next/dynamic";
import { FiInfo } from "react-icons/fi";
import styled from "styled-components";
import {
  Hint_SecondaryContainer,
  Hint_ModalTextStyle,
  Hint_ModalIcon,
} from "Styles/Theme/Hint/style";
import { Headline6Style } from "Styles/Typo";
import IranFlag from "public/Images/Flags/IranFlag.svg";
import ChinaFlag from "public/Images/Flags/ChinaFlag.svg";
import IndiaFlag from "public/Images/Flags/IndiaFlag.svg";
import AustraliaFlag from "public/Images/Flags/AustraliaFlag.svg";
import UnknownFlag from "public/Images/Flags/UnknownFlag.svg";
import { useEffect, useState } from "react";
import { getLocalStorage } from "Utils";
import { LocalStorageKeys } from "Interfaces";
import { deviceMin } from "Consts/device";

const CountryModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    if (!getLocalStorage(LocalStorageKeys.Country)) {
      setIsOpen(true);
    }
  }, [window]);
  return (
    <ModalComponent
      open={isOpen}
      DialogTitleText="
              Please select your country
    
    "
    >
      <OptionsContainer>
        <Option>
          <FlagWrapper>
            <Flag fill src={IranFlag} alt={"england flag"} sizes="2.25rem" />
          </FlagWrapper>
          <Optiontext>Iran</Optiontext>
        </Option>
        <Option>
          <FlagWrapper>
            <Flag fill src={ChinaFlag} alt={"england flag"} sizes="2.25rem" />
          </FlagWrapper>
          <Optiontext>China</Optiontext>
        </Option>
        <Option>
          <FlagWrapper>
            <Flag fill src={IndiaFlag} alt={"england flag"} sizes="2.25rem" />
          </FlagWrapper>
          <Optiontext>India</Optiontext>
        </Option>
        <Option>
          <FlagWrapper>
            <Flag
              fill
              src={AustraliaFlag}
              alt={"england flag"}
              sizes="2.25rem"
            />
          </FlagWrapper>
          <Optiontext>Australia</Optiontext>
        </Option>
        <Option>
          <FlagWrapper>
            <Flag fill src={UnknownFlag} alt={"england flag"} sizes="2.25rem" />
          </FlagWrapper>
          <Optiontext>Other countries</Optiontext>
        </Option>
      </OptionsContainer>
      <HintContainer>
        {" "}
        <HintInfoIcon />
        <p>
          The content that is displayed to you is categorized according to your
          selected country
        </p>
      </HintContainer>
    </ModalComponent>
  );
};
export default CountryModal;
const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 45%;
  gap: 0.5rem;
  cursor: pointer;
`;
const FlagWrapper = styled.div`
  position: relative;
  width: 2.25rem;
  height: 2.25rem;
`;
//
const DYImage = dynamic(() => import("next/image"));
const Flag = styled(DYImage)`
  position: relative !important;
`;
const Optiontext = styled.h4`
  ${Headline6Style};
  color: var(--color-gray4);
`;
const HintContainer = styled.div`
  ${Hint_SecondaryContainer};
  ${Hint_ModalTextStyle};
  align-items: center;
  gap: 1rem;
  @media ${deviceMin.tabletS} {
    ${Hint_SecondaryContainer};
  }
`;
const HintInfoIcon = styled(FiInfo)`
  ${Hint_ModalIcon};
`;
