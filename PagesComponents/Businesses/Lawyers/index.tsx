import LawyerCard from "Components/Business/Lawyer/Card";
import { MultiLanguageText } from "Interfaces";
import styled from "styled-components/macro";
import VIPLawyerCard from "../../../Components/Business/Lawyer/VIPCard";
import { assssingAuthorities } from "./const";


function Content() {

  return (
    <Container>
      <LawyerCard />
      {assssingAuthorities.map((lawyer, i) => {
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
      })}
    </Container>
  );
}
export default Content;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  // gap: 7.5rem;
  justify-content: center;
`;
