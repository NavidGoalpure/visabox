import { MultiLanguageText, MultiLanguageTextArray } from "interfaces";
import styled from "styled-components/macro";
import { componentTextStyle } from "Styles/Theme/Component";

interface Props {
  data: string[];
  title: string;
  description: string;
}
const AccordionContent:React.FC<Props> = ({data,title,description}) =>{
    return (
      <AccordionContentContainer>
        <AccordionContentWrapper>
          {data.map(
            (title, i) => (
              <AccordionLi key={i}>{title}</AccordionLi>
            )
          )}
        </AccordionContentWrapper>
        <AccordionDescription>
          <strong> {title}</strong> {description}
        </AccordionDescription>
      </AccordionContentContainer>
    );
}
export default AccordionContent;

const AccordionContentContainer = styled.div``;
const AccordionContentWrapper = styled.ul`
  list-style: disc;
  margin-bottom: 2rem;
`;
const AccordionLi = styled.li`
  margin-bottom: 0.5rem;
  :last-child {
    margin: 0;
  }
`;
const AccordionDescription = styled.p`
  ${componentTextStyle};
  margin: 0;
  strong {
    font-weight: bold;
  }
`;
