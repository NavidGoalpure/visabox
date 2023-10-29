import { HTMLAttributes, useEffect } from 'react';
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
  MaraPhone,
  PhoneWrapper,
  Socials,
  Title,
  ViewMoreButton,
  WebsiteTitle,
  WebsiteUrl,
  WebsiteWrapper,
  LogoBackground_layer1,
  LogoBackground_layer2,
  ImageWrapper,
  AgentLogo,
  Wrapper,
  PhoneTitle,
} from '../styledComponents/NormalCard';
import { BLANK_SYMBOL } from 'Consts';

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  website: string | undefined;
  maraNumber: string | undefined;
  slug: string;
  layerContext: '1' | '2';
}
function AgentCard({
  name,
  email,
  phone,
  website,
  maraNumber,
  slug,
  layerContext,
  ...props
}: Props) {
  const { t } = useStaticTranslation(componentStatements);

  useEffect(() => getGsapTimeLine_FadeUp(slug));
  const hasWebsite: boolean = website !== BLANK_SYMBOL;
  const emailToastMessage = t(LanguageKeys.copyEmailToastMessage);
  const phoneToastMessage = t(LanguageKeys.copyPhoneToastMessage);
  return (
    <Container className={slug} {...props}>
      <Wrapper>
        <ImageWrapper layerContext={layerContext}>
          <AgentLogo
            alt={`${slug}`}
            fill
            src={`/Images/placeholder.jpeg`}
            quality={100}
            sizes="96px"
            />
        </ImageWrapper>
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
                <PhoneTitle>
                  {t(LanguageKeys.Phone)}:{!!phone && <CopyIcon />}
                </PhoneTitle>
            <MaraPhone>{!!phone ? phone : BLANK_SYMBOL} </MaraPhone>
          </PhoneWrapper>
          {/* <WebsiteWrapper>
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
          </WebsiteWrapper> */}
        </Socials>
          <ViewMoreButton>{t(LanguageKeys.ViewMore)}</ViewMoreButton> 
        <AgentElement>{t(LanguageKeys.Agent)}</AgentElement>
        <MaraElement>{t(LanguageKeys.Mara)}</MaraElement>
      </Wrapper>
    </Container>
  );
}
export default AgentCard;
