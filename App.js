import React, { useCallback } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import DashboardScreen from "./screens/DashboardScreen";
import LoginScreen from "./screens/LoginScreen";
import colors from "./constants/colors";
import { fontFamilies } from "./constants/font";

// Reference: https://docs.expo.dev/versions/latest/sdk/font/

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <View style={styles.container} onLayout={onLayoutRootView}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
          </Stack.Navigator>
        </View>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK_SECONDARY,
  },
});
