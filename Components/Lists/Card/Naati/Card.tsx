import { HTMLAttributes, useEffect } from 'react';
import { MultiLanguageText } from 'Interfaces/Database';
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
  fullName: MultiLanguageText;
  email: string | undefined;
  website: string | undefined;
  phone: string[] | undefined;
  slug: string;
}
function NaatiCard({ fullName, email, website, phone, slug, ...props }: Props) {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);

  useEffect(() => getGsapTimeLine_FadeUp(slug));

  return (
    <Container className={slug} {...props}>
      <Wrapper>
        <Title>{dt(fullName)}</Title>
        <Socials>
          <EmailWrapper
            onClick={() =>
              copyContent({
                text: email || '',
                toastMessage: t(LanguageKeys.copyEmailToastMessage),
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
                text: phone?.[0] || '',
                toastMessage: t(LanguageKeys.copyPhoneToastMessage),
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
              as={!!website ? 'a' : 'div'}
              href={
                !!website ? `https://${website?.replace('https://', '')}` : ''
              }
              target={'_blank'}
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
