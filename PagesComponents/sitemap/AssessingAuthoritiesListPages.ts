import { Domain_Langs } from './const';

function AssessingAuthoritiesListPages(): string[] {
  const res = Domain_Langs.map((lang) => {
    return `
          <url>
          <loc>${lang}/occupations/assssing-authorities</loc>
        </url>`;
  });
  return res;
}
export { AssessingAuthoritiesListPages };
