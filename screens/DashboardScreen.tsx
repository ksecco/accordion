import { Image, ScrollView, StyleSheet } from "react-native";
import Accordion from "../components/Accordion";
import SafeAreaWrapper from "../components/SafeAreaWrapper";
import colors from "../constants/colors";
import CardQuickActions from "../components/CardQuickActions";
import LoadingIndicator from "../components/LoadingIndicator";

const DashboardScreen = () => (
  <SafeAreaWrapper>
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/images/theya.png")}
        style={styles.logo}
      />
      <Accordion
        title="Quick Actions"
        containerStyle={styles.accordionContainer}
      >
        <CardQuickActions />
      </Accordion>
    </ScrollView>
  </SafeAreaWrapper>
);

const styles = StyleSheet.create({
  accordionContainer: {
    marginVertical: 24,
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.BLACK_SECONDARY,
  },
  logo: {
    height: 100,
    width: 100,
    margin: 24,
    marginTop: 48,
  },
});

export default DashboardScreen;
