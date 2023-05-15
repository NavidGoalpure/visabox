import useDevice from "Hooks/useDevice";
import { Agent } from "Interfaces/Lists/agents";
import { useState, useEffect } from "react";
import DesktopAgentsPage from "./Desktop";
import MobileAgentsPage from "./Mobile";
import { useQuery } from "react-query";
import { getClientDetail } from "Queries/client";
import { ClientQueryKeys } from "Utils/query/keys";
import { useSession } from "next-auth/react";
import { proxySanityClientResponseToCamelCase } from "Utils/query/clients";
import { ClientData_Sanity } from "Queries/client/interface";
import { ClientData } from "Interfaces/Client";

function Content() {
  const [screen, setScreen] = useState<"MOBILE" | "DESKTOP">("MOBILE");
  const { isLaptop } = useDevice();
  const { data: session } = useSession();
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const resParams = ` 
      _id,
      name,
      lastname,
      age,
      phone,
      marital,
      field_of_study,
      degree,
      current_job,
      work_experience,
      australian_work_experience,
      ielts_score,
      is_sharable,
      uni_section,
      `;
  // navid unComment this in the end
  // const reqParams = `email == "${session?.user?.email || "defensive"}"`;
  const reqParams = `email == "farzamfara85@gmail.com"`;

  const { data } = useQuery(
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
  useEffect(() => {
    if (isLaptop) setScreen("DESKTOP");
  });
  useEffect(() => {
    setClientData(
      proxySanityClientResponseToCamelCase(
        data?.clientData?.[0] || ({} as ClientData_Sanity)
      )
    );
  }, [data]);

  if (screen === "MOBILE")
    return <MobileAgentsPage ClientData={clientData || ({} as ClientData)} />;
  return <DesktopAgentsPage ClientData={clientData || ({} as ClientData)} />;
}
export default Content;
