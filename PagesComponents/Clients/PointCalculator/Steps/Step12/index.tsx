import { useContext } from "react";
import styled, { css } from "styled-components";
import { Headline4Style, Headline5Style, Headline6Style } from "Styles/Typo";
import theme from "styled-theming";
import {
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
} from "Styles/Theme/Layers/layer2/style";
import { useRouter } from "next/router";
import { useLocale } from "Hooks/useLocale";
import { PrimaryButton } from "Elements/Button/Primary";
import { deviceMin } from "Consts/device";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { FormDataContext } from "../../Contexts/FormDataContext/Context";
import { componentStatements, LanguageKeys } from "./const";
import { HiOutlineCalculator } from "react-icons/hi2";
import Link from "next/link";
import { Languages } from "Interfaces";

//
const Step12 = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { score } = useContext(FormDataContext);
  const router = useRouter();
  const { locale } = useLocale();
  return (
    <Container>
      <Logo />
      <Title>{t(LanguageKeys.Step12Title)}</Title>
      <Grade>{score}</Grade>
      <Desc>
        {t(LanguageKeys.Step12Desc)} <br />
        {locale === Languages.fa && (
          <>
            اگر میخواهید درباره سابکلاس های ویزا اطلاعات کسب کنید{" "}
            <StyledLink href={"/fa/blog/what-is-skilled-worker-visa"}>
              اینجا
            </StyledLink>{" "}
            کلیک کنید
          </>
        )}
      </Desc>
      <ButtonWrapper>
        <ConfirmButton onClick={() => router.push(`/${locale}/`)}>
          {t(LanguageKeys.ConfirmButtonTitle)}
        </ConfirmButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step12;
const BackgroundTheme = theme("mode", {
  light: css`
    background: linear-gradient(140.49deg, #f5f8fc 53.63%, #dde2eb 99.96%);
    box-shadow: var(--box-shadow-layer2);
  `,
  dark: css`
    background: linear-gradient(
      140.49deg,
      var(--color-gray6) 53.63%,
      var(--color-gray7) 99.96%
    );
  `,
});

const GradeTheme = theme("mode", {
  light: css`
    color: var(--color-secondary2);
  `,
  dark: css`
    color: var(--color-secondary4);
  `,
});
const Container = styled.div`
  ${BackgroundTheme};
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding: 1.5rem 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-sizing: border-box;
  @media ${deviceMin.tabletS} {
    padding: 1.5rem 2.5rem;
    box-sizing: content-box;
  }
`;
const Logo = styled(HiOutlineCalculator)`
  color: white;
  border-radius: 50%;
  background: var(--color-primary4);
  padding: 1rem;
  box-sizing: content-box;
  width: 2.5rem;
  height: auto;
`;
const Title = styled.h1`
  ${Headline6Style};
  white-space: nowrap;
  color: var(--color-primary5);
  @media ${deviceMin.tabletS} {
    ${Headline5Style};
  }
`;
const Grade = styled.h2`
  ${Headline4Style};
  ${GradeTheme};
`;
const Desc = styled.p`
  ${layer2A_TextStyle};
  white-space: pre-line;
  margin-bottom: 1rem;
  @media ${deviceMin.tabletS} {
    ${layer2A_SubtitleStyle};
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ConfirmButton = styled(PrimaryButton)`
  padding: 0 2.5rem;
`;
const StyledLink = styled(Link)``;
