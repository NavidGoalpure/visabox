import { useLocale } from 'Hooks/useLocale';
import { MultiLanguageText, MultiLanguageTextArray } from 'Interfaces';
import { useState } from 'react';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import PopupContent from './popupContent';
import { Container, Wrapper, Code, Title } from '../StyledComponents';
import Popup from '../popup';
import { AssessingAuthorityAbv } from 'Interfaces/Documents/occupation';
import {
  componentSubtitleStyle,
  componentTextStyle,
  KeyValue_Key,
  KeyValue_Value,
} from 'Styles/Theme/Component';
import styled from 'styled-components/macro';
import { GoLinkExternal } from 'react-icons/go';

interface Props {
  abv: AssessingAuthorityAbv;
  title: MultiLanguageText;
  address: string;
  email: string;
  website: string;
}
function AssessingAuthorityCard({
  abv,
  title,
  address,
  email,
  website,
}: Props) {
  const { dt } = useDynamicTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <Container style={{ cursor: 'initial' }}>
      <Wrapper>
        <Code>{abv}</Code>
        <Title>{title.en}</Title>
        <Contacts>
          <Column>
            <Key>Email:</Key>
            <Value>{email}</Value>
          </Column>
          <LinkColumn href={website} target='_blank' rel='noopener noreferrer'>
            <Row>
              <Key>Website:</Key>
              <GoLinkExternal />
            </Row>
            <Value>{website}</Value>
          </LinkColumn>
        </Contacts>
      </Wrapper>

      <Popup
        content={<PopupContent address={address} />}
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
    </Container>
  );
}

export default AssessingAuthorityCard;
const Contacts = styled.div`
  ${componentTextStyle}
  width:100%;
  text-align: center;
  margin: 0;
  overflow: hidden;
  text-align: start;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const LinkColumn = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const Row = styled.div`
  display: flex;
`;
const Value = styled.h5`
  ${componentTextStyle}
  ${KeyValue_Value}
  margin:0;
`;

const Key = styled.h6`
  ${componentTextStyle}
  ${KeyValue_Key}
  margin-inline-end: 0.5rem;
`;
