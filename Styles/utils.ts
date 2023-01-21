import { ThemeSet } from 'styled-theming';
import { layer1_BGColor, layer3_BGColor } from './Theme/Layers/theme';

function getSmartBgBaseOnLevel(themeLayer: '1' | '2' | '3'): ThemeSet {
  switch (themeLayer) {
    case '1':
      return layer1_BGColor;

    case '2':
      return layer1_BGColor;

    default:
      return layer3_BGColor;
  }
}
export { getSmartBgBaseOnLevel };
