import AssessingAuthorityCard from "Components/Cards/Type1/AssessingAuthorityCard";
import React from "react";
import styled from "styled-components";
import { layer2A_TextStyle } from "Styles/Theme/Layers/layer2/style";

import { assessingAuthorities } from "./const";
import { AssssingAuthority } from "./interfaces";

const CardsSection: React.FC = () => {
  return (
    <Container>
      {assessingAuthorities?.map((assssingAuthority: AssssingAuthority) => {
        return (
          <AssessingAuthorityCard
            key={assssingAuthority.abv}
            abv={assssingAuthority.abv}
            fullTitle={assssingAuthority.title}
            address={assssingAuthority.address}
            email={assssingAuthority.email}
            website={assssingAuthority.website}
            id={assssingAuthority.abv}
          />
        );
      })}
    </Container>
  );
};

export default CardsSection;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;
const Description = styled.p`
  ${layer2A_TextStyle}
  text-align: center;
  margin: 0;
  overflow: hidden;
  text-align: start;
  white-space: pre-line;
`;
