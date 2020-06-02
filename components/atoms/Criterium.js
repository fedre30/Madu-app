import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SimpleText, Title, Subtitle, SecondaryText } from "./StyledText";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const imagesTypes = {
  veggie: require("../../assets/images/tag-veggie.png"),
  glutenfree: require("../../assets/images/tag-glutenfree.png"),
  bio: require("../../assets/images/bio.png"),
  vegan: require("../../assets/images/vegan.png"),
  local: require("../../assets/images/local.png"),
  fish: require("../../assets/images/tag-pesci.png"),
  lactosefree: require("../../assets/images/tag-lactosefree.png"),
  plasticfree: require("../../assets/images/tag-plastic.png"),
};

export const Criterium = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.container,
        {
          borderColor: props.focused ? Colors.secondary : "transparent",
        },
      ]}
      contentContainerStyle={styles.contentContainer}
    >
      {props.imageType && (
        <Image source={imagesTypes[props.imageType]} style={styles.image} />
      )}

      <SecondaryText style={styles.title} size={13}>
        {props.title}
      </SecondaryText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    maxWidth: "auto",
    height: 90,
    minWidth: 130,
  },
  contentContainer: {
    justifyContent: "center",
    paddingTop: 30,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    textTransform: "capitalize",
    color: Colors.grey,
  },
});
