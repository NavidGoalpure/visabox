import { AgentLinkInCountries } from 'PagesComponents/sitemap/AgentLinkInCountries';
import { AssessingAuthoritiesListPages } from 'PagesComponents/sitemap/AssessingAuthoritiesListPages';
import { BlogsDetailsPages } from 'PagesComponents/sitemap/BlogsDetailsPages';
import { NaatiListPages } from 'PagesComponents/sitemap/NaatiListPages';
import { OccupationsSearchPages } from 'PagesComponents/sitemap/OccupationsSearchPage';
import { Domain_EN, Domain_FA } from 'PagesComponents/sitemap/const';
import { MarcyaIntroducePages } from 'PagesComponents/sitemap/MarcyaIntroducePages';
import { MarcyaChatPages } from 'PagesComponents/sitemap/MarcyaChatPages';
import { OccupationDetailsPages } from 'PagesComponents/sitemap/OccupationDetailsPages';
import { getAllOccupationSlugs } from 'Queries/sitemap';
import { Occupation } from 'Interfaces/Database/Occupation/occupation';
// import { getAllAgentsSlugs } from 'Queries/agents/Detail';
// import { getAllOccupationSlugs } from 'Queries/sitemap';

interface Props {
  occupationSlugs: Occupation[];
}
async function generateSiteMap({ occupationSlugs }: Props) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  ${OccupationDetailsPages(occupationSlugs)}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  try {
    // اگه بخوایم آدرس صحفه وکلا و آکیوپیشن رو به این لیست اضافه کنیم باید این ها رو آنکامنت کنیم و به لیست اضافه کنیم،
    // اما به نظر میاد گوگل بهمون اونقدر بودجه نمیده که همه این صفحات رو بررسی کنه.
    // پس فعلا کامنت کردم تا صحفات مهم تر از دست نرن

    // const [allOccupationSlugs, allAgentsSlug] = await Promise.all([
    //   getAllOccupationSlugs(),
    // getAllAgentsSlugs(),
    // ]);
    const allOccupationSlugs = await getAllOccupationSlugs();

    // We generate the XML sitemap with the posts data
    const sitemap = await generateSiteMap({
      occupationSlugs: allOccupationSlugs,
    });

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error('Error generating sitemap:', error);

    return {
      props: {
        error: 'Error generating sitemap',
      },
    };
  }
}

export default SiteMap;

//
