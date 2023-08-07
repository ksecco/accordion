import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import colors from "../constants/colors";

type LoadingIndicatorProps = {
  color?: string;
  containerStyle?: {};
  size?: "small" | "large";
};

const screenDimensions = Dimensions.get("screen");

const LoadingIndicator = ({
  color = colors.WHITE,
  containerStyle = {},
  size = "large",
}: LoadingIndicatorProps) => {
  const [dimensions, setDimensions] = useState(screenDimensions);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions(screen);
      }
    );
    return () => subscription?.remove();
  });

  return (
    <View
      style={[styles.container, { height: dimensions?.height }, containerStyle]}
    >
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});

export default LoadingIndicator;
