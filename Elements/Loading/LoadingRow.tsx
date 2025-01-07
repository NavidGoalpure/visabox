import { HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Loading } from './Loading';

interface Props extends HtmlHTMLAttributes<HTMLOrSVGElement> {}
const LoadingRow: React.FC<Props> = ({ ...props }) => {
  return (
    <Container {...props}>
      <Loading />
    </Container>
  );
};
export { LoadingRow };

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
