import * as React from 'react';
import { Animated, StyleSheet } from 'react-native';

import { moderateScale } from 'react-native-size-matters';

import theme from '../../../styles/themes/v3/LightTheme';
import AnimatedText from '../../Typography/AnimatedText';
import type { LabelBackgroundProps } from '../types';

const LabelBackground = ({
  parentState,
  labelProps: {
    placeholderStyle,
    baseLabelTranslateX,
    topPosition,
    hasActiveOutline,
    label,
    backgroundColor,
    roundness,
  },
  labelStyle,
  maxFontSizeMultiplier,
}: LabelBackgroundProps) => {
  const hasFocus = hasActiveOutline || parentState.value;
  const opacity = parentState.labeled.interpolate({
    inputRange: [0, 1],
    outputRange: [hasFocus ? 1 : 0, 0],
  });

  const { isV3 } = theme;

  const labelTranslationX = {
    translateX: parentState.labeled.interpolate({
      inputRange: [0, 1],
      outputRange: [-baseLabelTranslateX, 0],
    }),
  };

  const labelTextScaleY = {
    scaleY: parentState.labeled.interpolate({
      inputRange: [0, 1],
      outputRange: [0.2, 1],
    }),
  };

  const labelTextTransform = [...labelStyle.transform, labelTextScaleY];

  const labelTextWidth = isV3
    ? {
        width:
          parentState.labelLayout.width - placeholderStyle.paddingHorizontal,
      }
    : {
        maxWidth:
          parentState.labelLayout.width -
          2 * placeholderStyle.paddingHorizontal,
      };

  return label
    ? [
        <Animated.View
          key="labelBackground-view"
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            styles.view,
            {
              backgroundColor,
              maxHeight: Math.max(roundness / 3, 2),
              opacity,
              bottom: Math.max(roundness, 2),
              transform: [labelTranslationX],
            },
          ]}
        />,
        <AnimatedText
          key="labelBackground-text"
          style={[
            placeholderStyle,
            labelStyle,
            styles.outlinedLabel,
            isV3 && styles.md3OutlinedLabel,
            {
              top: topPosition + 1,
              backgroundColor,
              opacity,
              transform: labelTextTransform,
            },
            labelTextWidth,
          ]}
          numberOfLines={1}
          maxFontSizeMultiplier={maxFontSizeMultiplier}
        >
          {label}
        </AnimatedText>,
      ]
    : null;
};

export default LabelBackground;

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: moderateScale(6),
    left: moderateScale(10),
    width: theme.spacing.x3,
  },
  outlinedLabel: {
    position: 'absolute',
    left: moderateScale(18),
    paddingHorizontal: 0,
    color: 'transparent',
  },
  md3OutlinedLabel: {
    left: theme.spacing.x2,
  },
});
