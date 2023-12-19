import { Domain_Langs } from './const';

function AgentLintInCountries(): string[] {
  const res = Domain_Langs.map((domain) => {
    return `
         <url>
            <loc>${domain}/lists/agents?country=IR
         </url>
         <url>
            <loc>${domain}/lists/agents?country=IN
         </url>
         <url>
            <loc>${domain}/lists/agents?country=CN
         </url>

         `;
  });
  return res;
}
export { AgentLintInCountries };
