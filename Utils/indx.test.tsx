import { ThemeModes } from 'Interfaces';
import { getThemeFromLocalStorage, setThemeFromLocalStorage } from './index';

test('getThemeFromLocalStorage and setThemeFromLocalStorage', () => {
  // mock localStorage.getItem

  setThemeFromLocalStorage(ThemeModes.DARK);
  expect(getThemeFromLocalStorage()).toEqual(ThemeModes.DARK);

  setThemeFromLocalStorage(ThemeModes.LIGHT);
  expect(getThemeFromLocalStorage()).toEqual(ThemeModes.LIGHT);
});
