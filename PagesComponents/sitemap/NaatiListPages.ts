import { Domain_Langs } from './const';

function NaatiListPages(): string[] {
  const res = Domain_Langs.map((lang) => {
    return `
          <url>
            <loc>${lang}/lists/naaties</loc>
          </url>`;
  });
  return res;
}
export { NaatiListPages };
