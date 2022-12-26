import { Territories } from 'Interfaces/Documents/occupation';

/**
 *فانکشنی که روی همه تروریتی های استرالیا مپ زده و یک آرایه از آنها می‌سازد
 *
 * @return {*}  {Territories[]} آرایه ای از تروریتی ها
 */
function getTerritories(): Territories[] {
  const territories: Territories[] = [];

  for (const territory in Territories) {
    territories.push(territory as Territories);
  }
  return territories;
}
export { getTerritories };
