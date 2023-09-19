import PageLayout from "Components/Layouts/PageContainer";
import { useLocale } from "Hooks/useLocale";
import Seo from "Components/Seo";
import Content from "PagesComponents/Occupations/UniversitySectionTracker";
import { ClientQueryKeys } from "Utils/query/keys";
import { getClientDetail } from "Queries/client";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import { LocalStorageKeys } from "Interfaces";
import { SupportedCountry } from "Interfaces/Database";
import { getLocalStorage } from "Utils";
import { Loading } from "Elements/Loading";
import NotFound from "pages/404";

const UniversitySection = () => {
  const { locale } = useLocale();
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
  const clientCountry = data?.client?.[0]?.country;
  //
  if (
    clientCountry === SupportedCountry.Iran ||
    getLocalStorage(LocalStorageKeys.Country) === SupportedCountry.Iran
  )
    return (
      <PageLayout>
        <Seo
          title={"جستجوی سکشن دانشگاه" + " | Mara Box"}
          description={`با استفاده از این ابزار می توانید بفهمید دانشگاهی که در آن درس خوانده
        اید از نظر اداره مهاجرت استرالیا دارای چه سکشنی می باشد.`}
          canonical={`https://www.marabox.com/${locale}/occupations/university-section-search`}
        />
        <Content />
      </PageLayout>
    );
  return <NotFound />;
};

export default UniversitySection;
