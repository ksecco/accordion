import React from "react";
import { StyleSheet, View } from "react-native";
import { type CardStatus } from "./Accordion";
import AppText from "./AppText";
import Button from "./Button";
import Icon from "./Icon";
import colors from "../constants/colors";
import { fontSizes } from "../constants/font";

type CardQuickActionsProps = {
  cardStatus?: CardStatus;
};

const CardQuickActions = ({ cardStatus }: CardQuickActionsProps) => {
  console.log(cardStatus);
  return (
    <>
      <View style={[styles.row, styles.headerContainer]}>
        <AppText style={styles.headerText}>*****BTC</AppText>
        <Icon
          name="eye-off-outline"
          color={colors.GOLD}
          style={[styles.icon, styles.mirror]}
        />
      </View>
      <View
        style={[
          styles.row,
          styles.buttonContainer,
          { display: cardStatus === "expanded" ? "flex" : "none" },
        ]}
      >
        <Button text="Send BTC" secondary>
          <Icon name="arrow-up-circle-outline" style={styles.icon} />
        </Button>
        <Button text="Receive BTC">
          <Icon
            name="arrow-down-circle-outline"
            color={colors.BLACK}
            style={styles.icon}
          />
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  headerContainer: {
    marginBottom: 60,
    alignItems: "center",
  },
  headerText: {
    color: colors.GRAY_PRIMARY,
    fontSize: fontSizes.LG,
  },
  icon: {
    paddingLeft: 12,
  },
  mirror: {
    transform: [{ scaleY: -1 }],
  },
  row: {
    flexDirection: "row",
  },
});

export default CardQuickActions;
