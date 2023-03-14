import { HTMLAttributes, useEffect } from 'react';
import { MultiLanguageText } from 'Interfaces';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { copyContent, getGsapTimeLine_FadeUp } from 'Utils';
import { componentStatements, LanguageKeys } from '../const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';

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
import { BLANK_SYMBOL } from 'Consts';

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: MultiLanguageText;
  email: string | undefined;
  website: string | undefined;
  phone: string[] | undefined;
  slug: string;
}
function AgentCard({ name, email, website, phone, slug, ...props }: Props) {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);

  useEffect(() => getGsapTimeLine_FadeUp(slug));
  const hasWebsite: boolean = website !== BLANK_SYMBOL;

  return (
    <Container className={slug} {...props}>
      <Wrapper>
        <Title>{dt(name)}</Title>
        <Socials>
          <EmailWrapper onClick={() => copyContent(email || '')}>
            <EmailTitle>
              {t(LanguageKeys.Email)}:{!!email && <CopyIcon />}
            </EmailTitle>
            <EmailUrl>{!!email ? email : BLANK_SYMBOL}</EmailUrl>
          </EmailWrapper>
          <PhoneWrapper onClick={() => copyContent(phone?.[0] || '')}>
            <PhoneTitle>
              {t(LanguageKeys.Phone)}:<CopyIcon />
            </PhoneTitle>
            <PhoneUrl>{!!phone?.[0] ? phone?.[0] : BLANK_SYMBOL}</PhoneUrl>
          </PhoneWrapper>
          <WebsiteWrapper>
            <WebsiteTitle>{t(LanguageKeys.Website)}:</WebsiteTitle>
            <WebsiteUrl
              as={hasWebsite ? 'a' : 'div'}
              href={hasWebsite ? `https://${website}` : ''}
              target={'_blank'}
              $hasWebsite={hasWebsite}
            >
              {!!website ? website : BLANK_SYMBOL}
            </WebsiteUrl>
          </WebsiteWrapper>
        </Socials>
        <AgentElement>Agent</AgentElement>
        <MaraElement>Mara</MaraElement>
      </Wrapper>
    </Container>
  );
}
export default AgentCard;
