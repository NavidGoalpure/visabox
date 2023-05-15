import { deviceMin } from "Consts/device";
import styled from "styled-components";
import { Layer1_TitleStyle } from "Styles/Theme/Layers/layer1/style";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "./const";
import { PrimaryButton } from "Elements/Button/Primary";
import CardDesign from "./CardDesign";
import { useInfiniteQuery } from "react-query";
import { ClientQueryKeys } from "Utils/query/keys";
import { proxySanityClientResponseToCamelCase } from "Utils/query/clients";
import { getClientDetail } from "Queries/client";
import { useEffect, useState } from "react";
import { ClientData } from "Interfaces/Database/Client";
import { ClientData_Sanity } from "Queries/client/interface";

function Content() {
  const { t } = useStaticTranslation(componentStatements);
  // navid change the build of compeleted_form in sanity
  const reqParams = `name != null`;
  const resParams = ` 
      _id,
      _createdAt,
      name,
      lastname,
      age,
      current_job,
      ielts_score,
      `;
  // navid unComment this in the end
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const { data } = useInfiniteQuery(
    ClientQueryKeys.detail({
      reqParams,
      resParams,
    }),
    () => {
      return getClientDetail({
        reqParams,
        resParams,
      });
    }
  );
  console.log("navid data===",data)
  return (
    <Container>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <CardContainer>
        {/* {data?.clientData?.map((client) => {
          const formData = proxySanityClientResponseToCamelCase(
            client || ({} as ClientData_Sanity)
          );
          return <CardDesign formData={formData} />;
        })} */}
      </CardContainer>
      <PrimaryButton style={{ margin: "0 auto" }}>Load More</PrimaryButton>
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
  gap: 4rem;
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
const PageTitle = styled.h1`
  ${Layer1_TitleStyle}
  @media ${deviceMin.tabletS} {
    width: 100%;
    text-align: start;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
