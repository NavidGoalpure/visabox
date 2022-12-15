import { Territories } from 'Interfaces/Documents/occupation';

function getTerritories(): Territories[] {
  const territories: Territories[] = [];

  for (const territory in Territories) {
    territories.push(territory as Territories);
  }
  return territories;
}
export { getTerritories };
