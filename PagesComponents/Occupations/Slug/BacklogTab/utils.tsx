import { BacklogPoints } from 'Interfaces/Documents/occupation';

export function getRowKeyValueBaseonBacklogPoints_Submitted(
  submittedContent: BacklogPoints | undefined
): { rowKey: string; rowValue: string }[] {
  const res = [] as { rowKey: string; rowValue: string }[];
  if (submittedContent?.upper_than_65)
    res.push({ rowKey: '65', rowValue: submittedContent?.upper_than_65 });
  //
  if (submittedContent?.upper_than_70)
    res.push({ rowKey: '70', rowValue: submittedContent?.upper_than_70 });
  //
  if (submittedContent?.upper_than_75)
    res.push({ rowKey: '75', rowValue: submittedContent?.upper_than_75 });
  //
  if (submittedContent?.upper_than_80)
    res.push({ rowKey: '80', rowValue: submittedContent?.upper_than_80 });
  //
  if (submittedContent?.upper_than_85)
    res.push({ rowKey: '85', rowValue: submittedContent?.upper_than_85 });
  //
  if (submittedContent?.upper_than_90)
    res.push({
      rowKey: '90',
      rowValue: submittedContent?.upper_than_90,
    });
  //
  if (submittedContent?.upper_than_95)
    res.push({
      rowKey: '95',
      rowValue: submittedContent?.upper_than_95,
    });
  //
  if (submittedContent?.upper_than_100)
    res.push({
      rowKey: '100',
      rowValue: submittedContent?.upper_than_100,
    });
  //
  if (submittedContent?.upper_than_105)
    res.push({
      rowKey: '105',
      rowValue: submittedContent?.upper_than_105,
    });
  return res;
}
/////////////////////////////////////////////////////////
export function getRowKeyValueBaseonBacklogPoints_Invited(
  invitedContent: BacklogPoints | undefined
): { rowKey: string; rowValue: string }[] {
  const res = [] as { rowKey: string; rowValue: string }[];
  if (invitedContent?.upper_than_65)
    res.push({ rowKey: '65', rowValue: invitedContent?.upper_than_65 });
  //
  if (invitedContent?.upper_than_70)
    res.push({ rowKey: '70', rowValue: invitedContent?.upper_than_70 });
  //
  if (invitedContent?.upper_than_75)
    res.push({ rowKey: '75', rowValue: invitedContent?.upper_than_75 });
  //
  if (invitedContent?.upper_than_80)
    res.push({ rowKey: '80', rowValue: invitedContent?.upper_than_80 });
  //
  if (invitedContent?.upper_than_85)
    res.push({ rowKey: '85', rowValue: invitedContent?.upper_than_85 });
  //
  if (invitedContent?.upper_than_90)
    res.push({
      rowKey: '90',
      rowValue: invitedContent?.upper_than_90,
    });
  //
  if (invitedContent?.upper_than_95)
    res.push({
      rowKey: '95',
      rowValue: invitedContent?.upper_than_95,
    });
  //
  if (invitedContent?.upper_than_100)
    res.push({
      rowKey: '100',
      rowValue: invitedContent?.upper_than_100,
    });
  //
  if (invitedContent?.upper_than_105)
    res.push({
      rowKey: '105',
      rowValue: invitedContent?.upper_than_105,
    });
  return res;
}