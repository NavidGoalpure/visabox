import { ThemeSet } from 'styled-theming';
import { layer1_BG } from './Theme/Layers/layer1/theme';
import { layer2A_Bg, layer2B_BG } from './Theme/Layers/layer2/theme';
import { layer3_BG } from './Theme/Layers/layer3/theme';


function getSmartBgBaseOnLevel(themeLayer: '1' | '2A' | '2B' | '3'): ThemeSet {
  switch (themeLayer) {
    case '1':
      return layer1_BG;

    case '2A':
      return layer2A_Bg;
    case '2B':
      return layer2B_BG;

    default:
      return layer3_BG;
  }
}
export { getSmartBgBaseOnLevel };
