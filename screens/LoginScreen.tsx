import { Image, ScrollView, StyleSheet } from "react-native";
import Button from "../components/Button";
import Icon from "../components/Icon";
import SafeAreaWrapper from "../components/SafeAreaWrapper";
import colors from "../constants/colors";

const LoginScreen = ({ navigation }) => (
  <SafeAreaWrapper>
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/images/theya.png")}
        style={styles.logo}
      />
      <Button text="Login" onPress={() => navigation.navigate("Dashboard")}>
        <Icon name="arrow-forward-circle-outline" color={colors.BLACK} style={styles.icon} />
      </Button>
    </ScrollView>
  </SafeAreaWrapper>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.BLACK_SECONDARY,
  },
  icon: {
    paddingLeft: 12,
  },
  logo: {
    position: "absolute",
    height: 100,
    width: 100,
    top: 48,
  },
});

export default LoginScreen;
