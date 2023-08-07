import React, { type ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Reference: https://reactnavigation.org/docs/handling-safe-area

export type SafeAreaWrapperProps = {
  children: ReactElement;
  style?: {};
};

const SafeAreaWrapper = ({ children, style }: SafeAreaWrapperProps) => {
  const {
    bottom: paddingBottom,
    left: paddingLeft,
    right: paddingRight,
    top: paddingTop,
  } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SafeAreaWrapper;
