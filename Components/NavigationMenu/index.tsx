import useDevice from "Hooks/useDevice";
import { useSession } from "next-auth/react";
import { getClientDetail } from "Queries/client";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ClientQueryKeys } from "Utils/query/keys";
import { Desktop } from "./Desktop";
import Mobile from "./Mobile";

const SmartHeader = () => {
  const [screen, setScreen] = useState<"MOBILE" | "DESKTOP">("MOBILE");
  const { isLaptop } = useDevice();
  const { data: session } = useSession();
  const reqParams = `email == "${session?.user?.email || "defensive"}"`;
  const resParams = `
      country
      `;

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
    },
    {
      enabled: !!session?.user?.email,
    }
  );
  useEffect(() => {
    if (isLaptop) setScreen("DESKTOP");
  });
  if (screen === "MOBILE")
    return <Mobile clientCountry={data?.client?.[0]?.country || "defensive"} />;
  return <Desktop clientCountry={data?.client?.[0]?.country || "defensive"} />;
};
export default SmartHeader;
