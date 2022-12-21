import { TerritorySection } from 'Interfaces/Documents/occupation';
import { Territory } from 'Interfaces/Documents/territory';

export function getHtml_decsBaseOnAbv({
  territorySection,
  currentTerritoryAbv,
}: {
  territorySection: TerritorySection[] | undefined;
  currentTerritoryAbv: string;
}): string {
  if (!territorySection || territorySection.length === 0) return '';
  let res = '';
  for (let index = 0; index < territorySection.length; index++) {
    const territoryObj = Object.entries(territorySection)[index];
    if (
      (territoryObj[1]?.territory as Territory)?.abv === currentTerritoryAbv
    ) {
      res = territoryObj[1]?.html_desc;
      break;
    }
  }

  return res;
}
