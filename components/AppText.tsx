import React, { type ReactElement } from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../constants/colors";
import { fontFamilies, fontSizes } from "../constants/font";

export type AppTextProps = {
  children: string | ReactElement;
  style?: {};
};

/**
 * Cascades Text styling to childrean
 * Reference: https://reactnative.dev/docs/text#limited-style-inheritance
 */
const AppText = ({ children, style, ...textProps }: AppTextProps) => (
  <Text style={[styles.textStyle, style]} {...textProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  textStyle: {
    color: colors.GRAY_SECONDARY,
    fontFamily: fontFamilies.DEFAULT,
    fontSize: fontSizes.MD,
  },
});

export default AppText;
