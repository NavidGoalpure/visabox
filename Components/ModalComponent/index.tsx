import * as Dialog from "@radix-ui/react-dialog";
import dynamic from "next/dynamic";
import styled, { keyframes } from "styled-components";
import { Headline5Style, Headline6Style } from "Styles/Typo";
import IranFlag from "public/Images/Flags/IranFlag.svg";
import ChinaFlag from "public/Images/Flags/ChinaFlag.svg";
import IndiaFlag from "public/Images/Flags/IndiaFlag.svg";
import AustraliaFlag from "public/Images/Flags/AustraliaFlag.svg";
import UnknownFlag from "public/Images/Flags/UnknownFlag.svg";
import { deviceMin } from "Consts/device";
import {
  Hint_ModalIcon,
  Hint_ModalTextStyle,
  Hint_SecondaryContainer,
} from "Styles/Theme/Hint/style";
import { FiInfo } from "react-icons/fi";

const ModalComponent = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">Edit profile</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay className="DialogOverlay" />
        <DialogContent className="DialogContent">
          <MobileLine />
          <Wrapper>
            <DialogTitle className="DialogTitle">
              Please select your country
            </DialogTitle>
            <OptionsContainer>
              <Option>
                <FlagWrapper>
                  <Flag
                    fill
                    src={IranFlag}
                    alt={"england flag"}
                    sizes="2.25rem"
                  />
                </FlagWrapper>
                <Optiontext>Iran</Optiontext>
              </Option>
              <Option>
                <FlagWrapper>
                  <Flag
                    fill
                    src={ChinaFlag}
                    alt={"england flag"}
                    sizes="2.25rem"
                  />
                </FlagWrapper>
                <Optiontext>China</Optiontext>
              </Option>
              <Option>
                <FlagWrapper>
                  <Flag
                    fill
                    src={IndiaFlag}
                    alt={"england flag"}
                    sizes="2.25rem"
                  />
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
                  <Flag
                    fill
                    src={UnknownFlag}
                    alt={"england flag"}
                    sizes="2.25rem"
                  />
                </FlagWrapper>
                <Optiontext>Other countries</Optiontext>
              </Option>
            </OptionsContainer>
            <HintContainer>
              {" "}
              <HintInfoIcon />
              <p>
                The content that is displayed to you is categorized according to
                your selected country
              </p>
            </HintContainer>
          </Wrapper>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default ModalComponent;
const OverlayShow = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const DesktopContentShow = keyframes`
from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;
const MobileContentShow = keyframes`
from {
    opacity: 0;
    transform: translate(0, 100%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
`;
const DialogOverlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2.5px);
  position: fixed;
  inset: 0;
  z-index: 1000;
  animation: ${OverlayShow} 300ms cubic-bezier(0.16, 1, 0.3, 1);
`;
const DialogContent = styled(Dialog.Content)`
  z-index: 1000;
  max-height: 80vh;
  width: 100%;
  display: flex;
  border-radius: 30px 30px 0px 0px;
  background-color: var(--color-gray13);
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 3rem 0 1rem;
  animation: ${MobileContentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1);
  @media ${deviceMin.tabletS} {
    padding: 2rem;
    height: fit-content;
    max-height: none;
    border-radius: 15px;
    width: auto;
    max-width: 31.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${DesktopContentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;
const MobileLine = styled.hr`
  position: absolute;
  display: flex;
  height: max-content;
  top: 1rem;
  width: 4.25rem;
  height: 5px;
  background: var(--color-gray8);
  left: 50%;
  border-radius: 15px;
  transform: translateX(-50%);
  @media ${deviceMin.tabletS} {
    display: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  gap: 2rem;
  padding: 0 2rem;
  @media ${deviceMin.tabletS} {
    overflow: unset;
    height: auto;
  }
`;
const DialogTitle = styled(Dialog.Title)`
  ${Headline5Style};
  text-align: center;
`;
const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Option = styled(Dialog.Close)`
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
`;
const HintInfoIcon = styled(FiInfo)`
  ${Hint_ModalIcon};
`;
