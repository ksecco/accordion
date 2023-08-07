import React, { useRef, useState, type ReactElement } from "react";
import { Animated, StyleSheet, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";
import Icon, { IconProps } from "./Icon";
import colors from "../constants/colors";

const MAX_CARD_HEIGHT = 217;

export type AccordionProps = {
  cardContainerStyle?: {};
  containerStyle?: {};
  children?: ReactElement;
  headerContainerStyle?: {};
  hideIcon?: boolean;
  icon?: IconProps;
  iconContainerStyle?: {};
  initExpanded?: boolean;
  onPress?: () => unknown;
  title?: string;
};

type CardStatus = "closing" | "collapsed" | "expanded" | "opening";

const Accordion = ({
  cardContainerStyle = {},
  containerStyle = {},
  children,
  headerContainerStyle = {},
  hideIcon = false,
  icon = { name: "chevron-up" as keyof typeof Ionicons.glyphMap },
  iconContainerStyle = {},
  initExpanded = false,
  onPress = () => {},
  title = "",
}: AccordionProps): ReactElement => {
  const initCardStatus = initExpanded ? "expanded" : "collapsed";

  const [isOpen, setIsOpen] = useState(initExpanded);
  const [cardStatus, setCardStatus] = useState(initCardStatus);
  const [iconRotation, setIconRotation] = useState(
    getIconRotation(initCardStatus)
  );

  function getIconRotation(status: CardStatus): string {
    switch (status) {
      case "expanded":
      case "opening":
        return "180deg";
      case "closing":
      case "collapsed":
      default:
        return "90deg";
    }
  }

  const handlePress = () => {
    setIsOpen(!isOpen);
    onPress();
    animate();
  };

  const handleHeaderListener = ({ value }) => {
    let status: CardStatus;

    if (isOpen) {
      status = value === MAX_CARD_HEIGHT ? "expanded" : "opening";
    } else {
      status = value === 0 ? "collapsed" : "closing";
    }

    if (cardStatus !== status) {
      setCardStatus(status);
    }

    const newIconRotation = getIconRotation(status);
    if (iconRotation !== newIconRotation) {
      setIconRotation(newIconRotation);
    }
  };

  const maxHeight = useRef(new Animated.Value(0)).current;
  maxHeight.addListener((value) => handleHeaderListener(value));

  const padding = maxHeight.interpolate({
    inputRange: [0, 8],
    outputRange: [0, 0.68],
  });

  const animate = () => {
    Animated.timing(maxHeight, {
      toValue: isOpen ? 0 : MAX_CARD_HEIGHT,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const headerStyles = [
    styles.headerContainer,
    headerContainerStyle,
    {
      borderBottomLeftRadius: cardStatus === "collapsed" ? 8 : 0,
      borderBottomRightRadius: cardStatus === "collapsed" ? 8 : 0,
    },
  ];

  const cardStyles = [
    styles.cardContainer,
    cardContainerStyle,
    {
      maxHeight,
      paddingTop: padding,
      paddingBottom: padding,
    },
  ];

  const iconStyle = {
    transform: [{ rotate: iconRotation }],
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable style={headerStyles} onPress={handlePress}>
        <AppText>{title}</AppText>
        {!hideIcon && (
          <View style={iconContainerStyle}>
            <Icon {...icon} style={iconStyle} />
          </View>
        )}
      </Pressable>

      <Animated.View style={cardStyles}>{children}</Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardAnimate: {},
  cardContainer: {
    width: 343,
    maxHeight: MAX_CARD_HEIGHT,
    padding: 16,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: colors.BLACK_PRIMARY,
  },
  container: {
    width: 343,
  },
  headerContainer: {
    flexDirection: "row",
    width: 343,
    height: 52,
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 8,
    backgroundColor: colors.BLACK_PRIMARY,
  },
});

export default Accordion;
