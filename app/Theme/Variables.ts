/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import {
  ThemeColors,
  ThemeFontSize,
  ThemeMetricsSizes,
  ThemeNavigationColors,
} from '@/Theme/theme.type'

/**
 * Colors
 */
export const Colors: ThemeColors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#89818d',
  white: '#ffffff',
  text: '#264653',
  primary: '#E76F51',
  secondary: '#F4A261',
  backgd: '#cfcdd7',
  paperBg: '#F2EECB',
  success: '#28a745',
  dot: '#3F51B5',
  error: '#dc3545',
}
/* export const Colors: ThemeColors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#89818d',
  white: '#ffffff',
  text: '#212529',
  primary: '#5b5a62',
  secondary: '#d7cabd',
  backgd: '#cfcdd7',
  success: '#28a745',
  error: '#dc3545',
} */

export const Colors2: ThemeColors = {
  sugarHeartsYou: '#fe4365',
  partyConfetti: '#fc9d9a',
  sugarChampagne: '#f9cdad',
  burstsEuphoria: '#c8c8a9',
  happyBalloons: '#83af9b',
}

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
}

/**
 * FontSize
 */
export const FontSize: ThemeFontSize = {
  xsmall: 14,
  small: 16,
  regular: 20,
  large: 40,
}

// export const PRIMARY_FONT_REGULAR = 'NunitoSans-Regular';
// export const PRIMARY_FONT_SEMI = 'NunitoSans-SemiBold';
// export const PRIMARY_FONT_BOLD = 'NunitoSans-Bold';

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
export const MetricsSizes: ThemeMetricsSizes = {
  tiny,
  small,
  regular,
  large,
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
}
