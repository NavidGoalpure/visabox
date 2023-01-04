import { Occupation } from 'Interfaces/Documents/occupation';
import { getAllOccupationCodes } from 'Queries/sitemap';

const OccupatopnsPage_EN = 'https://marabox.com/en/occupations';
const OccupatopnsPage_FA = 'https://marabox.com/fa/occupations';

function generateSiteMap(occupations: Pick<Occupation, 'slug'>[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${OccupatopnsPage_EN}</loc>
     </url>
     <url>
       <loc>${OccupatopnsPage_FA}</loc>
     </url>
 
     ${occupations
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${OccupatopnsPage_EN}/${slug}`}</loc>
       </url>
        <url>
           <loc>${`${OccupatopnsPage_FA}/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
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
