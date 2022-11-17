import theme from 'styled-theming';

export const backgroundColor = theme.variants('mode', 'variant', {
  dark: { light: 'red', dark: 'red' },
  light: { light: 'blue', dark: 'darkblue' },
});
