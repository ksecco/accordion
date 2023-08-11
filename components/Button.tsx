import React, { type ReactElement } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from "../constants/colors";

type ButtonProps = {
  children?: ReactElement;
  onPress?: () => void;
  secondary?: boolean;
  text: string;
};

const Button = ({
  children,
  onPress = () => {},
  secondary,
  text,
}: ButtonProps) => (
  <TouchableOpacity
    style={[styles.container, secondary && styles.secondary]}
    onPress={onPress}
  >
    <AppText style={secondary ? styles.secondaryText : styles.primaryText}>
      {text}
    </AppText>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 149.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    color: colors.BLACK,
    backgroundColor: colors.GOLD,
  },
  primaryText: {
    color: colors.BLACK,
  },
  secondary: {
    backgroundColor: colors.BLACK_SECONDARY,
  },
  secondaryText: {
    color: colors.GRAY_SECONDARY,
  },
});

export default Button;
