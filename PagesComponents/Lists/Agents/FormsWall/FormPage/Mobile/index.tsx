import { deviceMin } from "Consts/device";
import styled, { css } from "styled-components";
import Image from "next/image";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import theme from "styled-theming";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
import { Headline4Style, Headline7Style } from "Styles/Typo";
import { FiBox } from "react-icons/fi";
import { Agent } from "Interfaces/Lists/agents";
import { useEffect, useState } from "react";
import { useLocale } from "Hooks/useLocale";
import { copyContent } from "Utils";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { Layer1_TitleStyle } from "Styles/Theme/Layers/layer1/style";
import {
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
  layer2A_TitleStyle,
} from "Styles/Theme/Layers/layer2/style";
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {
  layer2A_Key,
  layer2A_TextColor,
} from "Styles/Theme/Layers/layer2/theme";
import { ClientData } from "Interfaces/Client";
import { useSession } from "next-auth/react";

interface Props {
  ClientData?: ClientData;
}
function MobileAgentsPage({ ClientData }: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const { data: session } = useSession();

  return (
    <Container>
      <StarBackground aria-hidden={true}>
        <Star aria-hidden={true} />
      </StarBackground>
      <ProfilePictureWrapper>
        <ProfilePicture
          fill
          src={session?.user?.image || "/Images/placeholder.jpeg"}
          // navid add profile alt in the languagekeys
          alt={ClientData?.name ? `${ClientData?.name} image` : "client image"}
        />
      </ProfilePictureWrapper>
      <ProfileData>
        <Name>Navid Goalpure</Name>
        <JobTitle>Frontend Developer</JobTitle>
        <CreatedDate>5/10/2023</CreatedDate>
      </ProfileData>
      <FormData>
        <Title>{t(LanguageKeys.About)} </Title>
        <Wrapper>
          <DataWrapper>
            <Label>سن:</Label> <Value>14</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>سطح زبان انگیلیسی:</Label> <Value>Ielts 10</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>وضعیت تاهل:</Label> <Value>متاهل</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>رشته ی تحصیلی:</Label> <Value>کامپیوتر</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>مدرک تحصیلی:</Label> <Value>فوق لیسانس</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>دانشگاه:</Label> <Value>دانشگاه صنعتی شریف</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>شغل الان:</Label> <Value>طراحی وب</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>سابقه کاری:</Label> <Value>1-3 سال</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>سابقه کاری در استرالیا:</Label> <Value>ندارد</Value>
          </DataWrapper>
          <PhoneContainer onClick={() => copyContent("")}>
            <PhoneIcon />
            <PhoneTitle>
              <PhonesRow>(+61) 2 9002 5511</PhonesRow>
            </PhoneTitle>
          </PhoneContainer>
          <GmailContainer onClick={() => copyContent("")}>
            <GmailIcon />
            <GmailTitle>info@shada.com.au</GmailTitle>
          </GmailContainer>
        </Wrapper>
      </FormData>
    </Container>
  );
}
export default MobileAgentsPage;
const StarBackgroundColor = theme("mode", {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray4);
  `,
});
const TitleColor = theme("mode", {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});
const FormDataTheme = theme("mode", {
  light: css`
    background: var(--color-gray13);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});
const LabelTheme = theme("mode", {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});
const Icon = css`
  ${layer2A_TextColor}
  width: 2rem;
  height: auto;
  @media ${deviceMin.tabletS} {
    width: 2rem;
    height: auto;
  }
`;
const SocialsContainerCss = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  cursor: pointer;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 0;
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
const StarBackground = styled.div`
  ${StarBackgroundColor}
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  position: absolute;
  top: -0.5rem;
  left: -0.5rem;
  z-index: 0;
  width: 100vw;
  height: 25rem;
`;
const Star = styled.div`
  ${layer1_BG}
  width: 150%;
  height: 150%;
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  clip-path: polygon(
    50% 0%,
    66% 34%,
    98% 35%,
    71% 56%,
    86% 100%,
    49% 88%,
    13% 100%,
    32% 56%,
    2% 35%,
    37% 35%
  );
`;
const ProfilePictureWrapper = styled.div`
  width: 14rem;
  height: 14rem;
  z-index: 1;
  margin-bottom: 4rem;
  position: relative;
`;
const ProfilePicture = styled(Image)`
  object-fit: cover;
  position: relative !important;
  border-radius: 15px;
`;

const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;
const Name = styled.h2`
  ${TitleColor}
  ${layer2A_TitleStyle}
  z-index:1;
`;

const JobTitle = styled.h3`
  ${layer2A_Key}
  margin:0;
  width: auto;
`;
const CreatedDate = styled.div`
  ${layer2A_Key}
  margin:0;
  width: auto;
`;
const FormData = styled.div`
  ${FormDataTheme};
  width: 100%;
  border-radius: 15px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Title = styled.h3`
  ${Layer1_TitleStyle}
  margin-bottom:1.5rem;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
const DataWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  align-items: flex-start;
`;
const Label = styled.h4`
  ${LabelTheme};
  ${Headline7Style};
  line-height: 20px;
`;
const Value = styled.h4`
  ${layer2A_TextStyle};
  line-height: 20px;
`;
const PhoneContainer = styled.div`
  ${SocialsContainerCss}
  cursor: auto;
`;
const PhoneIcon = styled(FaPhone)`
  ${Icon}
`;
const PhoneTitle = styled.h3`
  ${layer2A_TextColor}
  ${layer2A_SubtitleStyle}
  word-break: break-all;
  display: flex;
  flex-direction: column;
  direction: ltr;
`;
const PhonesRow = styled.div`
  display:flex;
  gap 1rem;
`;
const GmailContainer = styled.div`
  ${SocialsContainerCss}
  cursor: auto;
`;
const GmailIcon = styled(SiGmail)`
  ${Icon}
`;
const GmailTitle = styled(PhoneTitle)``;
