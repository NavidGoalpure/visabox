import { Occupation } from 'Interfaces/Database/Occupation/occupation';
import { Domain_EN } from 'PagesComponents/sitemap/const';

function OccupationLinksPages(
  occupations: Pick<Occupation, 'slug'>[] | undefined
): string {
  if (!occupations) return '';
  const res = occupations
    .map(({ slug }) => {
      return `
       <a href
           <loc>${`${Domain_EN}/occupations/${slug?.current}`}</loc>
       </url>
        
     `;
    })
    .join('');
  return res;
}
export { OccupationLinksPages };
