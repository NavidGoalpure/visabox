import { MultiLanguageText } from 'Interfaces';
import { HTMLAttributes, useState } from 'react';
import PopupContent from './popupContent';
import {
  Container,
  Wrapper,
  Code,
  Title,
  Key,
  Value,
} from '../StyledComponents';
import Popup from '../popup';
import { AssessingAuthorityAbv } from 'Interfaces/Documents/occupation';

import styled from 'styled-components';
import { GoLinkExternal } from 'react-icons/go';
import { scrollbarStyles } from 'Styles/Theme';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { layer2A_TextStyle } from 'Styles/Theme/Layers/layer2/style';

interface Props extends HTMLAttributes<HTMLDivElement> {
  abv: AssessingAuthorityAbv;
  fullTitle: MultiLanguageText;
  address: string;
  email: string;
  website: string;
}
function AssessingAuthorityCard({
  abv,
  fullTitle,
  address,
  email,
  website,
  ...props
}: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <Container {...props} style={{ cursor: 'initial' }}>
      <Wrapper>
        <Code>{abv}</Code>
        <Title>{fullTitle.en}</Title>
        <Contacts>
          <LinkColumn href={website} target='_blank' rel='noopener noreferrer'>
            <Row>
              <Key>{t(LanguageKeys.Website)}</Key>
              <GoLinkExternal />
            </Row>
            <Value>{website}</Value>
          </LinkColumn>
        </Contacts>
      </Wrapper>

      <Popup
        content={<PopupContent address={address} email={email} />}
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
    </Container>
  );
}

export default AssessingAuthorityCard;
const Contacts = styled.div`
  ${layer2A_TextStyle}
  ${scrollbarStyles}

  width: 100%;
  text-align: center;
  margin: 0;
  overflow: hidden;
  text-align: start;
  overflow: auto;
`;

const LinkColumn = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: absolute;
  bottom: 3rem;
  width: calc(100% - 2rem);
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
