import { AGENCYS } from 'Consts/Lists/agency';
import { Agents } from 'Consts/Lists/agents';
import { FeaturedPlan_Business } from 'Interfaces/Database/Lists';
import { Occupation } from 'Interfaces/Database/Occupation/occupation';
import { getAllOccupationCodes } from 'Queries/sitemap';

const Domain_EN = 'https://marabox.com.au/en';
const Domain_FA = 'https://marabox.com.au/fa';
const Domain_ZH = 'https://marabox.com.au/zh';
const Domain_Langs: String[] = [Domain_EN, Domain_FA, Domain_ZH];

function generateSiteMap(occupations: Pick<Occupation, 'slug'>[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

     <!--The URLs realated to Occupations-->
      ${Domain_Langs.map((lang) => {
        return `
         <url>
           <loc>${lang}/occupations</loc>
         </url>`;
      })}

      ${Domain_Langs.map((lang) => {
        return `
          <url>
          <loc>${lang}/occupations/assssing-authorities</loc>
        </url>`;
      })}


      ${occupations
      .map(({ slug }) => {
        return `
       <url>
           <loc>${`${Domain_EN}/occupations/${slug?.current}`}</loc>
       </url>
        
     `;
      })
      .join('')}

     <!------The URLs realated to Lists------>
     <url>
       <loc>${Domain_FA}/lists/social-pages</loc>
     </url>
     
      ${Domain_Langs.map((lang) => {
        return `
         <url>
           <loc>${lang}/lists/agencies</loc>
         </url>`;
      })}

     
    ${AGENCYS.filter(
        (agency) =>
          agency.featuredPlan === FeaturedPlan_Business.VIP ||
          agency.featuredPlan === FeaturedPlan_Business.FULL_DATA
      )
      .map(({ slug }) => {
        Domain_Langs.map((lang) => {
          return `
       <url>
           <loc>${`${lang}/lists/agencies/${slug}`}</loc>
       </url>`;
        });
      })
      .join('')}
     
      ${Domain_Langs.map((lang) => {
        return `
          <url>
            <loc>${lang}/lists/agents</loc>
          </url>`;
      })}
    
    ${Agents.filter(
      (agency) =>
        agency.featuredPlan === FeaturedPlan_Business.VIP ||
        agency.featuredPlan === FeaturedPlan_Business.FULL_DATA
    )
      .map(({ slug }) => {
        Domain_Langs.map((lang) => {
          return `
       <url>
           <loc>${`${lang}/lists/agents/${slug}`}</loc>
       </url>`;
        });
      })
      .join('')}
     
     ${Domain_Langs.map((lang) => {
       return `
          <url>
            <loc>${lang}/lists/naaties</loc>
          </url>`;
     })}      
  
     <url>
       <loc>${Domain_FA}/lists/exchanges</loc>
     </url>

  <!--The URLs realated to Blogs-->
    <url>
       <loc>${Domain_FA}/blog/assessment-organizations-in-australia</loc>
    </url>

    <url>
       <loc>${Domain_FA}/blog/document-assessment-in-australia</loc>
    </url>

    
    <url>
       <loc>${Domain_FA}/blog/getting-skilled-worker-visa</loc>
    </url>
    <url>
       <loc>${Domain_FA}/blog/Language-score-and-skilled-worker-visa</loc>
    </url>
    <url>
       <loc>${Domain_FA}/blog/what-is-skilled-worker-visa</loc>
    </url>
     
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

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
