import { NextPage } from "next";
import PageLayout from "Components/Layouts/PageContainer";
import styled from "styled-components";
import Content from "PagesComponents/Terms-Conditions";
import { Layer1_SubtitleStyle, Layer1_TextStyle, Layer1_TitleStyle } from "Styles/Theme/Layers/layer1/style";
import { MultiLanguageText } from "Interfaces";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { layer2A_TitleStyle, layer2A_SubtitleStyle, layer2A_TextStyle, layer2B_SubtitleStyle, layer2B_TextStyle, layer2B_TitleStyle } from "Styles/Theme/Layers/layer2/style";
import { layer3_TitleStyle, layer3_SubtitleStyle, layer3_TextStyle } from "Styles/Theme/Layers/layer3/style";

// navid delete this page

const TestPage: NextPage = () => {
  enum LanguageKeys {
    SeoTitle = "SeoTitle",
    SeoDesc = "SeoDesc",
    layer1Title = "layer1Title",
    layer1Subtitle = "layer1Subtitle",
    layer1Text = "layer1Text",
  }
  const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
    SeoTitle: {
      en: "Request a Call from Immigration Agencies | Mara Box",
      fa: "درخواست تماس از وکلای مهاجرت | مارا باکس",
    },
    SeoDesc: {
      fa: "اطلاعات خود را ارسال کنید و منتظر تماس وکلای مهاجرت باشید",
      en: "Submit your information and wait for a call from immigration agencies",
    },
    layer1Title: {
      en: "Title Style Title Style Title Style Title Style Title Style Title ",
      fa: " تایتل استایل تایتل استایل تایتل استایل تایتل استایل تایتل استایل",
    },
    layer1Subtitle: {
      en: "subTitle style subTitle style subTitle style subTitle style subTitle style",
      fa: " سابتایتل استایل سابتایتل استایل سابتایتل استایل سابتایتل استایل سابتایتل استایل",
    },
    layer1Text: {
      en: "text Style text Style text Style text Style text Style text ",
      fa: " تکست استایل تکست استایل تکست استایل تکست استایل تکست استایل",
    },
  };
  const { t } = useStaticTranslation(componentStatements);
  return (
    <StyledPageLayout>
      <LayoutContainer>
        <Title> Layout 1 </Title>
        <Layer1Title>
          {t(LanguageKeys.layer1Title)}
          <br />
          {t(LanguageKeys.layer1Title)}
        </Layer1Title>
        <Layer1Subtitle>
          {t(LanguageKeys.layer1Subtitle)}
          <br />
          {t(LanguageKeys.layer1Subtitle)}
        </Layer1Subtitle>
        <Layer1Text>
          {t(LanguageKeys.layer1Text)}
          <br />
          {t(LanguageKeys.layer1Text)}
        </Layer1Text>
      </LayoutContainer>
      <LayoutContainer>
        <Title> Layout 2A </Title>
        <Layer2ATitle>
          {t(LanguageKeys.layer1Title)}
          <br />
          {t(LanguageKeys.layer1Title)}
        </Layer2ATitle>
        <Layer2ASubtitle>
          {t(LanguageKeys.layer1Subtitle)}
          <br />
          {t(LanguageKeys.layer1Subtitle)}
        </Layer2ASubtitle>
        <Layer2AText>
          {t(LanguageKeys.layer1Text)}
          <br />
          {t(LanguageKeys.layer1Text)}
        </Layer2AText>
      </LayoutContainer>
      <LayoutContainer>
        <Title> Layout 2B </Title>
        <Layer2BTitle>
          {t(LanguageKeys.layer1Title)}
          <br />
          {t(LanguageKeys.layer1Title)}
        </Layer2BTitle>
        <Layer2BSubtitle>
          {t(LanguageKeys.layer1Subtitle)}
          <br />
          {t(LanguageKeys.layer1Subtitle)}
        </Layer2BSubtitle>
        <Layer2BText>
          {t(LanguageKeys.layer1Text)}
          <br />
          {t(LanguageKeys.layer1Text)}
        </Layer2BText>
      </LayoutContainer>
      <LayoutContainer>
        <Title> Layout 3 </Title>
        <Layer3Title>
          {t(LanguageKeys.layer1Title)}
          <br />
          {t(LanguageKeys.layer1Title)}
        </Layer3Title>
        <Layer3Subtitle>
          {t(LanguageKeys.layer1Subtitle)}
          <br />
          {t(LanguageKeys.layer1Subtitle)}
        </Layer3Subtitle>
        <Layer3Text>
          {t(LanguageKeys.layer1Text)}
          <br />
          {t(LanguageKeys.layer1Text)}
        </Layer3Text>
      </LayoutContainer>
    </StyledPageLayout>
  );
};
export default TestPage;
const StyledPageLayout = styled(PageLayout)`
  max-width: none;
  #PageContainer-content {
    padding: 0;
  }
`;
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;
const Title = styled.h2`
  ${Layer1_TitleStyle};
`;
const Layer1Title = styled.h3`
  ${Layer1_TitleStyle};
`;
const Layer1Subtitle = styled.h3`
  ${Layer1_SubtitleStyle};
`;
const Layer1Text = styled.h3`
  ${Layer1_TextStyle};
`;
const Layer2ATitle = styled.h3`
  ${layer2A_TitleStyle};
`;
const Layer2ASubtitle = styled.h3`
  ${layer2A_SubtitleStyle};
`;
const Layer2AText = styled.h3`
  ${layer2A_TextStyle};
`;
const Layer2BTitle = styled.h3`
  ${layer2B_TitleStyle};
`;
const Layer2BSubtitle = styled.h3`
  ${layer2B_SubtitleStyle};
`;
const Layer2BText = styled.h3`
  ${layer2B_TextStyle};
`;
const Layer3Title = styled.h3`
  ${layer3_TitleStyle};
`;
const Layer3Subtitle = styled.h3`
  ${layer3_SubtitleStyle};
`;
const Layer3Text = styled.h3`
  ${layer3_TextStyle};
`;