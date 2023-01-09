import React, { ReactNode } from 'react';

interface Props {
  address: ReactNode;
}
const PopupContent: React.FC<Props> = ({ address }) => {
  return <p style={{ marginTop: '6rem' }}>{address}</p>;
};

export default PopupContent;
