import React, { type ReactElement } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from "../constants/colors";

type ButtonProps = {
  children?: ReactElement;
  secondary?: boolean;
  text: string;
};

const Button = ({ children, secondary, text }: ButtonProps) => (
  <TouchableOpacity style={[styles.container, secondary && styles.secondary]}>
    <AppText style={secondary && styles.secondaryText}>{text}</AppText>
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
    backgroundColor: colors.BLACK_SECONDARY,
  },
  secondary: {
    backgroundColor: colors.GOLD,
  },
  secondaryText: {
    color: colors.BLACK,
  },
});

export default Button;
