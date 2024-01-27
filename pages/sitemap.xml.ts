import { AgentLinkInCountries } from 'PagesComponents/Sitemap/AgentLinkInCountries';
import { AssessingAuthoritiesListPages } from 'PagesComponents/Sitemap/AssessingAuthoritiesListPages';
import { BlogsDetailsPages } from 'PagesComponents/Sitemap/BlogsDetailsPages';
import { NaatiListPages } from 'PagesComponents/Sitemap/NaatiListPages';
import { OccupationsSearchPages } from 'PagesComponents/Sitemap/OccupationsSearchPage';
import { Domain_EN, Domain_FA } from 'PagesComponents/Sitemap/const';
import { MarcyaIntroducePages } from 'PagesComponents/Sitemap/MarcyaIntroducePages';
import { MarcyaChatPages } from 'PagesComponents/Sitemap/MarcyaChatPages';
import { getAllBlogsSlugsAndLang } from 'Queries/blogs/Detail';
import { IBlog } from 'Interfaces/Database/blog';
// import { getAllAgentsSlugs } from 'Queries/agents/Detail';
// import { getAllOccupationSlugs } from 'Queries/sitemap';

interface Props {
  allBlogsSlugsAndLang: IBlog[];
}
async function generateSiteMap({ allBlogsSlugsAndLang }: Props) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${MarcyaIntroducePages()}
    ${MarcyaChatPages()}

    ${OccupationsSearchPages()}
    ${AssessingAuthoritiesListPages()}
    ${NaatiListPages()}
    <url>
    <loc>${Domain_FA}/lists/exchanges</loc>

      <loc>${Domain_EN}/lists/agents</loc>
    </url>
    ${AgentLinkInCountries()}
  ${BlogsDetailsPages({ allBlogsSlugsAndLang })}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  try {
    //اگه بخوایم آدرس صحفه وکلا و آکیوپیشن رو به این لیست اضافه کنیم باید این ها رو آنکامنت کنیم و به لیست اضافه کنیم،
    // اما به نظر میاد گوگل بهمون اونقدر بودجه نمیده که همه این صفحات رو بررسی کنه.
    // پس فعلا کامنت کردم تا صحفات مهم تر از دست نرن

    // const [allOccupationSlugs, allAgentsSlug] = await Promise.all([
    //   getAllOccupationSlugs(),
    //   getAllAgentsSlugs(),
    // ]);
    const allBlogsSlugsAndLang = await getAllBlogsSlugsAndLang();

    // We generate the XML sitemap with the posts data
    const sitemap = await generateSiteMap({ allBlogsSlugsAndLang });

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
