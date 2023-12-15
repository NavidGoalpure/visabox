import { HTMLAttributes, useEffect } from 'react';
import { En_FaLanguage, MultiLanguageText } from 'Interfaces/Database';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { copyContent, getGsapTimeLine_FadeUp } from 'Utils';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { BLANK_SYMBOL } from 'Consts';
import {
  Container,
  AgentElement,
  MaraElement,
  Title,
  Wrapper,
  FieldWrapper,
  FieldTitle,
  FieldValue,
  FieldsContainer,
  CopyIconTheme,
} from './styledComponents/NormalCard';
import { componentStatements, LanguageKeys } from '../const';
import styled from 'styled-components';
import { layer2A_TextColor } from 'Styles/Theme/Layers/layer2/theme';
import { Headline6Style } from 'Styles/Typo';
import { IoMdCopy } from 'react-icons/io';

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
  const phoneToastMessage = t(LanguageKeys.copyPhoneToastMessage);
  useEffect(() => getGsapTimeLine_FadeUp(slug), []);

  return (
    <Container className={slug} {...props}>
      <Wrapper>
        <Title>{dt(fullName)}</Title>
        <FieldsContainer>
          <FieldWrapper
            onClick={() =>
              copyContent({
                text: email || '',
                toastMessage: emailToastMessage,
              })
            }
          >
            <FieldTitle>
              {t(LanguageKeys.Email)}:{!!email && <CopyIcon />}
            </FieldTitle>
            <FieldValue>{!!email ? email : BLANK_SYMBOL}</FieldValue>
          </FieldWrapper>
          <FieldWrapper
            onClick={() =>
              copyContent({
                text: phone?.[0] || '',
                toastMessage: phoneToastMessage,
              })
            }
          >
            <FieldTitle>
              {t(LanguageKeys.Phone)}:{!!phone?.[0] && <CopyIcon />}
            </FieldTitle>
            <FieldValue>{!!phone?.[0] ? phone?.[0] : BLANK_SYMBOL}</FieldValue>
          </FieldWrapper>
          <FieldWrapper>
            <FieldTitle>{t(LanguageKeys.Website)}:</FieldTitle>
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
          </FieldWrapper>
        </FieldsContainer>
        <AgentElement>{t(LanguageKeys.Translator)}</AgentElement>
        <MaraElement>{t(LanguageKeys.NAATI)}</MaraElement>
      </Wrapper>
    </Container>
  );
}
export default NaatiCard;
const WebsiteUrl = styled.a<{ $hasWebsite: boolean }>`
  ${layer2A_TextColor};
  ${Headline6Style};
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  ${({ $hasWebsite }) => !$hasWebsite && 'cursor: unset;'}
  direction:ltr;
`;
const CopyIcon = styled(IoMdCopy)`
  ${CopyIconTheme};
  width: 1.5rem;
  height: auto;
`;
