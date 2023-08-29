import styled, { css } from "styled-components";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "./const";
import { SmallBox_BG_Textured } from "Styles/Theme/SmallBox/theme";
import { AiOutlinePrinter } from "react-icons/ai";
import { PrimaryButton } from "Elements/Button/Primary";
import { useRouter } from "next/router";
import { PAGE_PARAMS_VERSION_PRINTABLE_VALUE } from "Consts/agents";
import { useLocale } from "Hooks/useLocale";
import theme from "styled-theming";
interface Props {
  id: string;
}
function BoxesSection({ id }: { id: string }) {
  const { t } = useStaticTranslation(componentStatements);
  const router = useRouter();
  const { locale } = useLocale();
  return (
    <Container>
      <SmallBoxesWrapper>
        <PrintSmallBox>
          <PrintTitle>{t(LanguageKeys.PrintBoxTitle)}</PrintTitle>
          <PrintDesc>{t(LanguageKeys.PrintBoxDesc)}</PrintDesc>
          <PrimaryButton
            onClick={() =>
              window.open(
                `/${locale}/agents/forms-wall/${id}?version=${PAGE_PARAMS_VERSION_PRINTABLE_VALUE}`,
                "_blank"
              )
            }
          >
            <PrintIcon />
          </PrimaryButton>
        </PrintSmallBox>
      </SmallBoxesWrapper>
    </Container>
  );
}
export default BoxesSection;
export const TitleTheme = theme("mode", {
  light: css`
    color: var(--color-gray7);
  `,
  dark: css`
    color: var(--color-primary6);
  `,
});
export const DescTheme = theme("mode", {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: white;
  `,
});
const Container = styled.div`
  padding: 0 0 4rem 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
`;

const SmallBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const PrintSmallBox = styled.div`
  ${SmallBox_BG_Textured};
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 1rem 0.75rem;
  gap: 1.5rem;
`;
const PrintTitle = styled.h3`
  ${TitleTheme};
`;
const PrintDesc = styled.p`
  ${DescTheme};
`;
const PrintIcon = styled(AiOutlinePrinter)`
  width: 2rem;
  height: auto;
  color: var(--color-gray13);
  padding: 1rem;
  border-radius: 50%;
  box-sizing: content-box;
`;
