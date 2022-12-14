import { MultiLanguageText, MultiLanguageTextArray } from "interfaces";
import styled from "styled-components/macro";
import { componentTextStyle } from "Styles/Theme/Component";

interface Props {
  data: string[] | undefined;
  title?: string;
  description?: string;
  emptyMessage?:string;
}
const AccordionContent: React.FC<Props> = ({ data, title, description,emptyMessage }) => {
  return (
    <AccordionContentContainer>
      <AccordionContentWrapper>
        {data?.[0] ? (
          data?.map((title, i) => <AccordionLi key={i}>{title}</AccordionLi>)
        ) : (
          <EmptyMessage>{emptyMessage}</EmptyMessage>
        )}
      </AccordionContentWrapper>
      <AccordionDescription>
        <strong> {title}</strong> {description}
      </AccordionDescription>
    </AccordionContentContainer>
  );
};
export default AccordionContent;

const AccordionContentContainer = styled.div``;
const AccordionContentWrapper = styled.ul`
  list-style: disc;
  margin-bottom: 1rem;
`;
const AccordionLi = styled.li`
  ${componentTextStyle}
  margin-bottom: 0.5rem;
  :last-child {
    margin: 0;
  }
`;
const EmptyMessage = styled.h3`
  ${componentTextStyle};
  margin: 0;
  text-align: center;
  font-style: italic;
`;
const AccordionDescription = styled.p`
  ${componentTextStyle};
  margin: 0;
  strong {
    font-weight: bold;
  }
`;
