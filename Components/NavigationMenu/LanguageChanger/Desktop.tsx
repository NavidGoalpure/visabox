import React from "react";
import styled from "styled-components";
import { useLocale } from "Hooks/useLocale";
import * as MaraSelect from "Elements/Select";
import { Languages } from "Interfaces";
import BritishFlag from "../Images/BritishFlag.svg";
import IranFlag from "../Images/IranFlag.svg";
import Image from "next/image";
import { useRouter } from "next/router";

function DesktopLanguageChanger() {
  const { locale } = useLocale();
  const router = useRouter();
  const smartTextObj: Record<Languages, string> = {
    en: "English",
    fa: "فارسی",
  };
  function onClickHandler(value:string){
  router.push(router.pathname, router.pathname,{locale:value});
  }
  return (
    <MaraSelect.Root
      triggerText={smartTextObj[locale]}
      onValueChange={onClickHandler}
    >
      <MaraSelect.Item
        icon={
          <FlagWrapper>
            <Flag fill src={BritishFlag} alt={"england flag"} />
          </FlagWrapper>
        }
        text="English"
        value={Languages.en}
      ></MaraSelect.Item>
      <MaraSelect.Item
        text="فارسی"
        value={Languages.fa}
        icon={
          <FlagWrapper>
            <Flag fill src={IranFlag} alt={"iran flag"} />
          </FlagWrapper>
        }
      ></MaraSelect.Item>
    </MaraSelect.Root>
  );
}

export default DesktopLanguageChanger;

const FlagWrapper = styled.div`
  width: 2.25rem;
  height: 2.25rem;
`;
const Flag = styled(Image)`
  position: relative !important;
`;
