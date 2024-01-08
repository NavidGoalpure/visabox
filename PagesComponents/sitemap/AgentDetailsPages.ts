import { Domain_EN } from './const';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';

function AgentsDetailsPages(allAgentsSlug: Pick<MaraAgent, 'slug'>[]): string {
  const res = allAgentsSlug
    .map(({ slug }) => {
      return `
       <url>
           <loc>${`${Domain_EN}/lists/agents/${slug?.current}`}</loc>
       </url>
        
     `;
    })
    .join('');
  return res;
}
export { AgentsDetailsPages };
