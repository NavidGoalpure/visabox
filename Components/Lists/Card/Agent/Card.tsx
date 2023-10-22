import { HTMLAttributes, useEffect } from 'react';
import { MultiLanguageText, En_FaLanguage } from 'Interfaces/Database';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { copyContent, getGsapTimeLine_FadeUp } from 'Utils';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';

import {
  Container,
  CopyIcon,
  EmailTitle,
  EmailUrl,
  EmailWrapper,
  AgentElement,
  MaraElement,
  MaraNumber,
  PhoneWrapper,
  Socials,
  Title,
  WebsiteTitle,
  WebsiteUrl,
  WebsiteWrapper,
  Wrapper,
} from '../styledComponents/NormalCard';
import { BLANK_SYMBOL } from 'Consts';

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string | undefined;
  email: string | undefined;
  website: string | undefined;
  maraNumber: string | undefined;
  slug: string;
}
function AgentCard({
  name,
  email,
  website,
  maraNumber,
  slug,
  ...props
}: Props) {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);

  useEffect(() => getGsapTimeLine_FadeUp(slug));
  const hasWebsite: boolean = website !== BLANK_SYMBOL;
  const emailToastMessage = t(LanguageKeys.copyEmailToastMessage);
  const phoneToastMessage = t(LanguageKeys.copyPhoneToastMessage);
  return (
    <Container className={slug} {...props}>
      <Wrapper>
        <Title>{name}</Title>
        <Socials>
          <EmailWrapper
            onClick={() =>
              copyContent({
                text: email || '',
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
                text: maraNumber?.[0] || '',
                toastMessage: phoneToastMessage,
              })
            }
          >
            <MaraNumber>{maraNumber}</MaraNumber>
          </PhoneWrapper>
          <WebsiteWrapper>
            <WebsiteTitle>{t(LanguageKeys.Website)}:</WebsiteTitle>
            <WebsiteUrl
              as={hasWebsite ? 'a' : 'div'}
              href={
                hasWebsite ? `https://${website?.replace('https://', '')}` : ''
              }
              target={'_blank'}
              $hasWebsite={hasWebsite}
            >
              {!!website ? website : BLANK_SYMBOL}
            </WebsiteUrl>
          </WebsiteWrapper>
        </Socials>
        <AgentElement>{t(LanguageKeys.Agent)}</AgentElement>
        <MaraElement>{t(LanguageKeys.Mara)}</MaraElement>
      </Wrapper>
    </Container>
  );
}
export default AgentCard;
