import { Occupation } from 'Interfaces/Database/Occupation/occupation';
import { Domain_EN } from './const';

function OccupationDetailsPages(
  occupations: Pick<Occupation, 'slug'>[]
): string {
  const res = occupations
    .map(({ slug }) => {
      return `
       <url>
           <loc>${`${Domain_EN}/occupations/${slug?.current}`}</loc>
       </url>
        
     `;
    })
    .join('');
  return res;
}
export { OccupationDetailsPages };
