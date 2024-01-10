import { Domain_Langs } from './const';

function AgentLintInCountries(): string[] {
  const res = Domain_Langs.map((domain) => {
    return `
         <url>
            <loc>${domain}/lists/agents?country=IR</loc>
         </url>
         <url>
            <loc>${domain}/lists/agents?country=IN</loc>
         </url>
         <url>
            <loc>${domain}/lists/agents?country=CN</loc>
         </url>

         `;
  });
  return res;
}
export { AgentLintInCountries };
