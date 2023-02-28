import React from "react";
import styled from "styled-components";
import { useLocale } from "Hooks/useLocale";
import * as MaraSelect from "Elements/Select";
import { Languages } from "Interfaces";
import BritishFlag from "../Images/BritishFlag.svg";
import IranFlag from "../Images/IranFlag.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { ImSphere } from "react-icons/im";

function DesktopLanguageChanger() {
  const { locale } = useLocale();
  const router = useRouter();
  const smartTextObj: Record<Languages, string> = {
    en: "English",
    fa: "Farsi",
  };
  console.log("navid router ===", router);
  function onClickHandler(value: string) {
    router.push(router.asPath, router.asPath, { locale: value });
  }
  return (
    <StyledMaraSelectRoot
      triggerText={smartTextObj[locale]}
      onValueChange={onClickHandler}
      triggerIcon={<SphereIcon />}
    >
      <MaraSelect.Item
        icon={
          <FlagWrapper>
            <Flag fill src={BritishFlag} alt={"england flag"} />
          </FlagWrapper>
        }
        text={smartTextObj.en}
        value={Languages.en}
      ></MaraSelect.Item>
      <MaraSelect.Item
        text={smartTextObj.fa}
        value={Languages.fa}
        icon={
          <FlagWrapper>
            <Flag fill src={IranFlag} alt={"iran flag"} />
          </FlagWrapper>
        }
      ></MaraSelect.Item>
    </StyledMaraSelectRoot>
  );
}

export default DesktopLanguageChanger;
const StyledMaraSelectRoot = styled(MaraSelect.Root)`
  #trigger {
    color: var(--color-gray10);
    background: red;
  }
  #arrow-down {
    color: var(--color-gray10);
  }
`;
const FlagWrapper = styled.div`
  width: 2.25rem;
  height: 2.25rem;
`;
const Flag = styled(Image)`
  position: relative !important;
`;
const SphereIcon = styled(ImSphere)`
  width: 1.5rem;
  height: auto;
  margin-bottom: 0.2rem;
  color: var(--color-gray10);
`;
