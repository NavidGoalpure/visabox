import TooltipTag from "elements/TooltipTag";
import { Occupation } from "interfaces/Documents/Occupation";
import React from "react";
import ToggleTag from "elements/ToggleTag";
import styled from "styled-components";
import { SidebarPage } from "./SideBar";
import { PageTitleStyle } from "Styles/Theme/Page";
import { useDynamicTranslation } from "hooks/useDynamicTraslation";

interface Props {
  occupation: Occupation;
}
const Content: React.FC<Props> = ({ occupation }) => {
  const { dt } = useDynamicTranslation();
  return (
    <Container>
      <TitleContainer>
        <Title>
          {occupation?.code}: {dt(occupation?.title)}
        </Title>
        
        <TooltipTag
          content={
            occupation?.anzsco_section?.priority_list
              ? occupation?.anzsco_section?.priority_list[0]?.future_demend ||
                ""
              : ""
          }
          popupContent={"occupation."}
        />
      </TitleContainer>
      <ToggleContainer>
        <ToggleTag content={"190"} isOn={true} />
        <ToggleTag content={"189"} isOn={false} />
      </ToggleContainer>
      <SidebarPage occupation={occupation} />
    </Container>
  );
};

export default Content;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  ${PageTitleStyle};
  margin: 0;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const ToggleContainer = styled.div`
  display: flex;
`;
