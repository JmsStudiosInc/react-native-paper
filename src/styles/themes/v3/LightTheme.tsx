
import type { MD3Theme } from '../../../types';
import configureFonts from '../../fonts';
import { tokens } from './tokens';

import { moderateScale } from '@jmstechnologiesinc/react-native-size-matters';


const spacing = tokens.md.sys.spacing;

export const MD3LightTheme: MD3Theme = {
  dark: false,
  roundness: moderateScale(4),
  version: 3,
  isV3: true,
  colors: {
    primary: 'rgb(133, 84, 0)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(255, 221, 183)',
    onPrimaryContainer: 'rgb(42, 23, 0)',
    secondary: 'rgb(112, 91, 65)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(252, 222, 188)',
    onSecondaryContainer: 'rgb(40, 24, 5)',
    tertiary: "rgb(112, 93, 0)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 225, 109)",
    onTertiaryContainer: "rgb(34, 27, 0)",
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(255, 251, 255)',
    onBackground: 'rgb(31, 27, 22)',
    surface: 'rgb(255, 251, 255)',
    onSurface: 'rgb(31, 27, 22)',
    surfaceVariant: 'rgb(240, 224, 208)',
    onSurfaceVariant: 'rgb(80, 69, 57)',
    outline: 'rgb(130, 117, 104)',
    outlineVariant: 'rgb(212, 196, 181)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(53, 47, 42)',
    inverseOnSurface: 'rgb(249, 239, 231)',
    inversePrimary: 'rgb(255, 185, 92)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(249, 243, 242)',
      level2: 'rgb(245, 238, 235)',
      level3: 'rgb(242, 233, 227)',
      level4: 'rgb(240, 231, 224)',
      level5: 'rgb(238, 228, 219)',
    },
    surfaceDisabled: 'rgba(31, 27, 22, 0.12)',
    onSurfaceDisabled: 'rgba(31, 27, 22, 0.38)',
    backdrop: 'rgba(56, 47, 36, 0.4)',
  },
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
  spacing,
};