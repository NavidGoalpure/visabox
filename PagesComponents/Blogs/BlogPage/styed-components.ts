import styled from 'styled-components';
import Image from 'next/image';

export const ImageContainer = styled.div`
  position: relative;
  width: 80%;
  margin-bottom: 2rem;
  height: 25rem;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  align-self: center;
`;
export const Images = styled(Image)`
  border-radius: 15px;
  object-fit: cover;
`;
