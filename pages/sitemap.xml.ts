import { AGENCYS } from 'Consts/Lists/agency';
import { Agents } from 'Consts/Lists/agents';
import { FeaturedPlan_Business } from 'Interfaces/Database/Lists';
import { Occupation } from 'Interfaces/Database/Occupation/occupation';
import { AssessingAuthoritiesListPages } from 'PagesComponents/sitemap/AssessingAuthoritiesListPages';
import { BlogsDetailsPages } from 'PagesComponents/sitemap/BlogsDetailsPages';
import { NaatiListPages } from 'PagesComponents/sitemap/NaatiListPages';
import { OccupationDetailsPages } from 'PagesComponents/sitemap/OccupationDetailsPages';
import { OccupationsSearchPages } from 'PagesComponents/sitemap/OccupationsSearchPage';
import { Domain_FA } from 'PagesComponents/sitemap/const';
import { getAllOccupationCodes } from 'Queries/sitemap';

function generateSiteMap(occupations: Pick<Occupation, 'slug'>[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    ${OccupationsSearchPages()}
    ${AssessingAuthoritiesListPages()}
    ${OccupationDetailsPages(occupations)}
 
    ${NaatiListPages()}      
  
     <url>
       <loc>${Domain_FA}/lists/exchanges</loc>
     </url>

    ${BlogsDetailsPages()}      
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We make an API call to gather the URLs for our site
  const allOccupationcodes: Pick<Occupation, 'slug'>[] =
    await getAllOccupationCodes();
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(allOccupationcodes);
  console.log('*** navid sitemap=', sitemap);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
