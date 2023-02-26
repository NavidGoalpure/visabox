import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { Arrow, StyledScrollBox, PopupContainer } from './StyledComponents';

interface Props {
  isPopupOpen: boolean;
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
  content: ReactNode;
}
const Popup: React.FC<Props> = ({ isPopupOpen, setIsPopupOpen, content }) => {
  return (
    <PopupContainer $isPopupOpen={isPopupOpen}>
      <Arrow
        $isPopupOpen={isPopupOpen}
        onClick={() => {
          setIsPopupOpen((prevState) => !prevState);
          return false;
        }}
      />{' '}
      <StyledScrollBox $isPopupOpen={isPopupOpen} heightInRem={30}>
        {content}
      </StyledScrollBox>
    </PopupContainer>
  );
};

export default Popup;
