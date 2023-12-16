import { FeaturedPlan_Business } from 'Interfaces/Database/Lists';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import { Occupation } from 'Interfaces/Database/Occupation/occupation';
import { AgentsDetailsPages } from 'PagesComponents/sitemap/AgentDetailsPages';
import { AssessingAuthoritiesListPages } from 'PagesComponents/sitemap/AssessingAuthoritiesListPages';
import { BlogsDetailsPages } from 'PagesComponents/sitemap/BlogsDetailsPages';
import { NaatiListPages } from 'PagesComponents/sitemap/NaatiListPages';
import { OccupationDetailsPages } from 'PagesComponents/sitemap/OccupationDetailsPages';
import { OccupationsSearchPages } from 'PagesComponents/sitemap/OccupationsSearchPage';
import { Domain_EN, Domain_FA } from 'PagesComponents/sitemap/const';
import { getAllAgentsSlugs } from 'Queries/agents/Detail';
import { getAllOccupationSlugs } from 'Queries/sitemap';

async function generateSiteMap({
  allOccupationSlugs,
  allAgentsSlug,
}: {
  allOccupationSlugs: Pick<Occupation, 'slug'>[] | undefined;
  allAgentsSlug: Pick<MaraAgent, 'slug'>[];
}) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   ${OccupationsSearchPages()}
   ${OccupationDetailsPages(allOccupationSlugs)}
   ${AssessingAuthoritiesListPages()}
   ${NaatiListPages()}      
   <url>
   <loc>${Domain_FA}/lists/exchanges</loc>
   </url>
   ${BlogsDetailsPages()}
    <url>
        <loc>${Domain_EN}/lists/agents
    </url>      
   ${AgentsDetailsPages(allAgentsSlug)}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  try {
    // We make an API call to gather the URLs for our site
    const [allOccupationSlugs, allAgentsSlug] = await Promise.all([
      getAllOccupationSlugs(),
      getAllAgentsSlugs(),
    ]);

    // We generate the XML sitemap with the posts data
    const sitemap = await generateSiteMap({
      allOccupationSlugs,
      allAgentsSlug,
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
