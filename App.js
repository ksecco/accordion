import React, { useCallback } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import DashboardSreen from "./screens/DashboardScreen";
import colors from "./constants/colors";
import { fontFamilies } from "./constants/font";

// Reference: https://docs.expo.dev/versions/latest/sdk/font/

const App = () => {
  const [fontsLoaded] = useFonts({
    [fontFamilies.DEFAULT]: require(`./assets/fonts/Avenir-Black.otf`),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <DashboardSreen />
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK_SECONDARY,
  },
});
