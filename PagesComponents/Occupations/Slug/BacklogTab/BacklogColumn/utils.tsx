import { BacklogPoints } from 'Interfaces/Documents/occupation';

export function getRowKeyValueBaseonBacklogPoints(
  obj: BacklogPoints | undefined
): { rowKey: string; rowValue: string }[] {
  const res = [] as { rowKey: string; rowValue: string }[];
  if (obj?.upper_than_65)
    res.push({ rowKey: '65', rowValue: obj?.upper_than_65 });
  //
  if (obj?.upper_than_70)
    res.push({ rowKey: '70', rowValue: obj?.upper_than_70 });
  //
  if (obj?.upper_than_75)
    res.push({ rowKey: '75', rowValue: obj?.upper_than_75 });
  //
  if (obj?.upper_than_80)
    res.push({ rowKey: '80', rowValue: obj?.upper_than_80 });
  //
  if (obj?.upper_than_85)
    res.push({ rowKey: '85', rowValue: obj?.upper_than_85 });
  //
  if (obj?.upper_than_90)
    res.push({
      rowKey: '90',
      rowValue: obj?.upper_than_90,
    });
  //
  if (obj?.upper_than_95)
    res.push({
      rowKey: '95',
      rowValue: obj?.upper_than_95,
    });
  //
  if (obj?.upper_than_100)
    res.push({
      rowKey: '100',
      rowValue: obj?.upper_than_100,
    });
  //
  if (obj?.upper_than_105)
    res.push({
      rowKey: '105',
      rowValue: obj?.upper_than_105,
    });
  return res;
}
