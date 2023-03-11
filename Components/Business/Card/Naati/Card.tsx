import { HTMLAttributes, useEffect } from 'react';
import { MultiLanguageText } from 'Interfaces';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { copyContent } from 'Utils';

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
import {
  componentStatements,
  getGsapTimeLine_normalCard,
  LanguageKeys,
} from '../const';

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

  useEffect(() => getGsapTimeLine_normalCard(slug));

  return (
    <Container className={slug} {...props}>
      <Wrapper>
        <Title>{dt(fullName)}</Title>
        <Socials>
          <EmailWrapper onClick={() => copyContent(email || BLANK_SYMBOL)}>
            <EmailTitle>
              {t(LanguageKeys.Email)}:{!!email && <CopyIcon />}
            </EmailTitle>
            <EmailUrl>{!!email ? email : BLANK_SYMBOL}</EmailUrl>
          </EmailWrapper>
          <PhoneWrapper onClick={() => copyContent(phone?.[0] || BLANK_SYMBOL)}>
            <PhoneTitle>
              {t(LanguageKeys.Phone)}:{!!phone?.[0] && <CopyIcon />}
            </PhoneTitle>
            <PhoneUrl>{!!phone?.[0] ? phone?.[0] : BLANK_SYMBOL}</PhoneUrl>
          </PhoneWrapper>
          <WebsiteWrapper>
            <WebsiteTitle>{t(LanguageKeys.Website)}:</WebsiteTitle>
            <WebsiteUrl
              as={!!website ? 'a' : 'div'}
              href={!!website ? `https://${website}` : ''}
              target={'_blank'}
              $hasWebsite={!!website}
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
export default NaatiCard;
