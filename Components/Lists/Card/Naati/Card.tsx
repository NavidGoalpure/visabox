import { HTMLAttributes, useEffect } from 'react';
import { En_FaLanguage, MultiLanguageText } from 'Interfaces/Database';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { copyContent, getGsapTimeLine_FadeUp } from 'Utils';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { BLANK_SYMBOL } from 'Consts';
import {
  Container,
  CopyIcon,
  EmailTitle,
  EmailUrl,
  EmailWrapper,
  AgentElement,
  MaraElement,
  PhoneTitle,
  PhoneUrl,
  PhoneWrapper,
  Socials,
  Title,
  WebsiteTitle,
  WebsiteUrl,
  WebsiteWrapper,
  Wrapper,
} from '../styledComponents/NormalCard';
import { componentStatements, LanguageKeys } from '../const';

interface Props extends HTMLAttributes<HTMLDivElement> {
  fullName: En_FaLanguage;
  email: string | undefined;
  website: string | undefined;
  phone: string[] | undefined;
  slug: string;
}
function NaatiCard({ fullName, email, website, phone, slug, ...props }: Props) {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);
const emailToastMessage = t(LanguageKeys.copyEmailToastMessage);
const phoneToastMessage =t(LanguageKeys.copyPhoneToastMessage);
  useEffect(() => getGsapTimeLine_FadeUp(slug));

  return (
    <Container className={slug} {...props}>
      <Wrapper>
        <Title>{dt(fullName)}</Title>
        <Socials>
          <EmailWrapper
            onClick={() =>
              copyContent({
                text: email || "",
                toastMessage: emailToastMessage,
              })
            }
          >
            <EmailTitle>
              {t(LanguageKeys.Email)}:{!!email && <CopyIcon />}
            </EmailTitle>
            <EmailUrl>{!!email ? email : BLANK_SYMBOL}</EmailUrl>
          </EmailWrapper>
          <PhoneWrapper
            onClick={() =>
              copyContent({
                text: phone?.[0] || "",
                toastMessage: phoneToastMessage,
              })
            }
          >
            <PhoneTitle>
              {t(LanguageKeys.Phone)}:{!!phone?.[0] && <CopyIcon />}
            </PhoneTitle>
            <PhoneUrl>{!!phone?.[0] ? phone?.[0] : BLANK_SYMBOL}</PhoneUrl>
          </PhoneWrapper>
          <WebsiteWrapper>
            <WebsiteTitle>{t(LanguageKeys.Website)}:</WebsiteTitle>
            <WebsiteUrl
              as={!!website ? "a" : "div"}
              href={
                !!website ? `https://${website?.replace("https://", "")}` : ""
              }
              target={"_blank"}
              $hasWebsite={!!website}
            >
              {!!website ? website : BLANK_SYMBOL}
            </WebsiteUrl>
          </WebsiteWrapper>
        </Socials>
        <AgentElement>{t(LanguageKeys.Translator)}</AgentElement>
        <MaraElement>{t(LanguageKeys.NAATI)}</MaraElement>
      </Wrapper>
    </Container>
  );
}
export default NaatiCard;
