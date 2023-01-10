import { toTitleCase } from './Utils';

test('Test toTitleCase func', async () => {
  expect(toTitleCase('video editor jobs')).toEqual('Video Editor Jobs');
  expect(toTitleCase('video Editor jobs')).toEqual('Video Editor Jobs');
  expect(toTitleCase('Video editor jobs')).toEqual('Video Editor Jobs');
});
