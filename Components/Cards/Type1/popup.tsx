import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import {
  Arrow,
  StyledVerticalScrollBox,
  PopupContainer,
} from './StyledComponents';

interface Props {
  isPopupOpen: boolean;
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
  content: ReactNode;
}
const Popup: React.FC<Props> = ({ isPopupOpen, setIsPopupOpen, content }) => {
  return (
    <PopupContainer isPopupOpen={isPopupOpen}>
      <Arrow
        isPopupOpen={isPopupOpen}
        onClick={() => {
          setIsPopupOpen((prevState) => !prevState);
          return false;
        }}
      />{' '}
      <StyledVerticalScrollBox isPopupOpen={isPopupOpen} heightToRem={30}>
        {content}
      </StyledVerticalScrollBox>
    </PopupContainer>
  );
};

export default Popup;
