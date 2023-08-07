import React from "react";
import type { ReactElement } from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import { fontSizes } from "../constants/font";

// Reference: https://docs.expo.dev/guides/icons/

export type IconProps = {
  color?: string;
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  style?: unknown;
};

const Icon = ({
  color = colors.GRAY_SECONDARY,
  name,
  size = fontSizes.LG,
  style,
}: IconProps): ReactElement => (
  <Ionicons name={name} size={size} color={color} style={style} />
);

export default Icon;
