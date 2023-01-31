import LawyerCard from "Components/Business/Lawyer/Card";
import { deviceMin } from "Consts/device";
import { MultiLanguageText } from "Interfaces";
import styled from "styled-components";
import VIPLawyerCard from "../../../Components/Business/Lawyer/VIPCard";
import { assssingAuthorities } from "./const";

function Content() {
  return (
    <Container>
      <VIPContainer>
        {assssingAuthorities.map((lawyer) => {
          if (lawyer.isFeatured) {
            return (
              <VIPLawyerCard
                name={lawyer.name}
                desc={lawyer.desc}
                telegram={lawyer.contact.telegram}
                email={lawyer.contact.email}
                phone={lawyer.contact.phone}
                website={lawyer.website}
                slug={lawyer.slug}
              />
            );
          }
        })}
      </VIPContainer>
      <NormalLawyerContainer>
        {assssingAuthorities.map((lawyer) => {
          if (!lawyer.isFeatured)
            return (
              <LawyerCard
                name={lawyer.name}
                email={lawyer.contact.email}
                website={lawyer.website}
                slug={lawyer.slug}
                phone={lawyer.contact.phone}
              />
            );
        })}
      </NormalLawyerContainer>
    </Container>
  );
}
export default Content;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
const VIPContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1rem;
  column-gap: 5rem;
`;
const NormalLawyerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
