import { Domain_FA, Domain_Langs } from './const';

function BlogsDetailsPages(): string[] {
  const res = Domain_Langs.map(() => {
    return `
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
    </url>`;
  });
  return res;
}
export { BlogsDetailsPages };
