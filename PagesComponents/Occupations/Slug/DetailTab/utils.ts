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
  Object.entries(territorySection).map((territoryObj) => {
    if ((territoryObj[1]?.territory as Territory)?.abv === currentTerritoryAbv)
      return territoryObj[1]?.html_desc;
  });
  return '';
}
