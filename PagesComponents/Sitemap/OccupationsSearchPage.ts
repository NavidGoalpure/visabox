import { Domain_Langs } from './const';

function OccupationsSearchPages(): string[] {
  const res = Domain_Langs.map((lang) => {
    return `
         <url>
           <loc>${lang}/occupations</loc>
         </url>`;
  });
  return res;
}
export { OccupationsSearchPages };
