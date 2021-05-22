import {StyleSheet} from 'react-native';

// we can fetch these parameters from backend service also to make this app flexible
export const THEME_COLOR = '#0F990C';
export const THEME_COLOR_DARK = '#215607';
export const THEME_COLOR_LIGHT = '#FFFFFF';
export const APP_BACKGROUND = '#FFFFFF';
export const THEME_TEXT_COLOR = 'white';
export const THEME_CONTRAST_COLOR = 'white';
export const PRODUCT_CARD_COLOR = 'white';
export const DRAWER_WIDTH = 300;
export const SCROLL_EVENT_THROTTLE = 16;
export const HIDE_SCROLL_INDICATOR = false;
export const APP_NAME = 'Dailyish';
export const APP_NAME_CAPS = 'DAILYISH';
export const WHITE_BACKGROUND = 'white';
export const BLUE_COLOR = '#315AEE';



export const GLOBAL_STYLES = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  headerStyle: {
    backgroundColor: THEME_COLOR,
    height: 50,
  },
});
