import styled, { css } from "styled-components";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "./const";
import { SmallBox_BG_Textured } from "Styles/Theme/SmallBox/theme";
import { AiOutlinePrinter } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { BiShareAlt } from "react-icons/bi";
import { PrimaryButton } from "Elements/Button/Primary";
import { useRouter } from "next/router";
import { PAGE_PARAMS_VERSION_PRINTABLE_VALUE } from "Consts/agents";
import { useLocale } from "Hooks/useLocale";
import theme from "styled-theming";
import { useSession } from "next-auth/react";
import { copyContent } from "Utils";
import useDevice from "Hooks/useDevice";
import SuccessToast from "Elements/Toast/Success";
import ErrorToast from "Elements/Toast/Error";
import { useMutation, useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import { ClientQueryKeys } from "Utils/query/keys";
import MaraSwitch from "Elements/MaraSwitch";
interface Props {
  id: string;
  email: string;
  is_sharable: boolean | undefined;
}
function BoxesSection({ id, email, is_sharable }: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const router = useRouter();
  const { data: session } = useSession();
  const { locale } = useLocale();
  const { isLaptop } = useDevice();
  const queryClient = useQueryClient();
  const ShareToastMessage = t(LanguageKeys.copyShareToastMessage);
  const showDataMessage = t(LanguageKeys.ShowDataToast);
  const hideDataMessage = t(LanguageKeys.HideDataToast);
  const FailedToastMessage = t(LanguageKeys.FailedToastMessage);
  const [isSharableChecked, setIsSharableChecked] = useState<
    boolean | undefined
  >(undefined);
  const mutation = useMutation({
    mutationFn: () => {
      return fetch("/api/clients/is-sharable", {
        method: "POST",
        body: JSON.stringify({
          is_sharable: !isSharableChecked,
          _id: id,
        }),
      });
    },
    onSuccess: (res) => {
      if (!res.ok) {
        throw new Error("couldnt patch the user");
      }
      setIsSharableChecked((prevState) => !prevState);
      if (isSharableChecked === true) {
        SuccessToast(hideDataMessage);
      } else {
        SuccessToast(showDataMessage);
      }
      queryClient.removeQueries(
        ClientQueryKeys.detail({
          reqParams: `email == "${session?.user?.email || "defensive"}"`,
        })
      );
    },
    onError: () => {
      ErrorToast(FailedToastMessage);
    },
  });
  useEffect(() => {
    setIsSharableChecked(is_sharable);
  }, [is_sharable,id]);
  return (
    <Container>
      <SmallBoxesWrapper>
        {session?.user?.email === email && (
          <>
            <SmallBox onClick={() => mutation.mutate()}>
              <ShareTitle>{t(LanguageKeys.ShowFormTitle)}</ShareTitle>
              <ShareDesc>{t(LanguageKeys.ShowFormDesc)}</ShareDesc>
              <MaraSwitch
                isChecked={isSharableChecked}
                isLoading={mutation.isLoading}
              />
            </SmallBox>
          </>
        )}
        {isLaptop && (
          <SmallBox
            onClick={() =>
              window.open(
                `/${locale}/clients/${id}?version=${PAGE_PARAMS_VERSION_PRINTABLE_VALUE}`,
                "_blank"
              )
            }
          >
            <PrintTitle>{t(LanguageKeys.PrintBoxTitle)}</PrintTitle>
            <PrintDesc>{t(LanguageKeys.PrintBoxDesc)}</PrintDesc>
            <PrimaryButton
              onClick={() =>
                window.open(
                  `/${locale}/clients/${id}?version=${PAGE_PARAMS_VERSION_PRINTABLE_VALUE}`,
                  "_blank"
                )
              }
            >
              <PrintIcon />
            </PrimaryButton>
          </SmallBox>
        )}
        {session?.user?.email === email && (
          <>
            <SmallBox
              onClick={() =>
                copyContent({
                  text: `www.marabox.com/${locale}/clients/${id}`,
                  toastMessage: ShareToastMessage,
                })
              }
            >
              <ShareTitle>{t(LanguageKeys.ShareBoxTitle)}</ShareTitle>
              <ShareDesc>{t(LanguageKeys.ShareBoxDesc)}</ShareDesc>
              <PrimaryButton>
                <ShareIcon />
              </PrimaryButton>
            </SmallBox>
          </>
        )}
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
  align-items: center;
  width: 100%;
`;

const SmallBoxesWrapper = styled.div`
  width: 18rem;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  gap: 1rem;
`;

const SmallBox = styled.div`
  ${SmallBox_BG_Textured};
  cursor: pointer;
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
const EditTitle = styled(PrintTitle)``;
const EditDesc = styled(PrintDesc)``;
const ShareTitle = styled(PrintTitle)``;
const ShareDesc = styled(PrintDesc)``;
const PrintIcon = styled(AiOutlinePrinter)`
  width: 2rem;
  height: auto;
  color: var(--color-gray13);
  padding: 1rem;
  border-radius: 50%;
  box-sizing: content-box;
`;
const EditIcon = styled(MdOutlineEdit)`
  width: 2rem;
  height: auto;
  color: var(--color-gray13);
  padding: 1rem;
  border-radius: 50%;
  box-sizing: content-box;
`;
const ShareIcon = styled(BiShareAlt)`
  width: 2rem;
  height: auto;
  color: var(--color-gray13);
  padding: 1rem;
  border-radius: 50%;
  box-sizing: content-box;
`;
