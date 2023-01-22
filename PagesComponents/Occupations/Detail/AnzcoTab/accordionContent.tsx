import styled from 'styled-components/macro';
import { layer2A_TextStyle } from 'Styles/Theme/Layers/style';

interface Props {
  data: string[] | undefined;
  description?: string;
  emptyMessage?: string;
}
const AccordionContent: React.FC<Props> = ({
  data,
  description,
  emptyMessage,
}) => {
  return (
    <AccordionContentContainer>
      <AccordionContentWrapper>
        {data?.[0] && data?.[0] !== '' ? (
          data?.map((title, i) => <AccordionLi key={i}>{title}</AccordionLi>)
        ) : (
          <EmptyMessage>{emptyMessage}</EmptyMessage>
        )}
      </AccordionContentWrapper>
      <AccordionDescription>{description}</AccordionDescription>
    </AccordionContentContainer>
  );
};
export default AccordionContent;

const AccordionContentContainer = styled.div`
  padding: 1rem 1rem;
`;
const AccordionContentWrapper = styled.ul`
  list-style: disc;
  margin-bottom: 1rem;
`;
const AccordionLi = styled.li`
  ${layer2A_TextStyle}
  margin-bottom: 0.5rem;
  :last-child {
    margin: 0;
  }
`;
const EmptyMessage = styled.h3`
  ${layer2A_TextStyle};
  margin: 0;
  text-align: center;
  font-style: italic;
`;
const AccordionDescription = styled.p`
  ${layer2A_TextStyle};
  margin: 0;
  margin-inline-start: -1rem;
  strong {
    font-weight: bold;
  }
`;
