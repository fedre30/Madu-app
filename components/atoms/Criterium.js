import React from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import { SimpleText, Title, Subtitle, SecondaryText } from "./StyledText";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const imagesTypes = {
  food: require("../../assets/images/food.png"),
  equipment: require("../../assets/images/equipment.png"),
  social: require("../../assets/images/social.png"),
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
        <View style={styles.imageContainer}>
          <Image source={imagesTypes[props.imageType]} style={styles.image} />
        </View>
      )}
      <View style={styles.textContainer}>
        <SecondaryText style={styles.title} size={13}>
          {props.title} -
        </SecondaryText>
        <SecondaryText style={styles.title} size={13} color={Colors.secondary}>
          {props.score}%
        </SecondaryText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentContainer: {
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    textTransform: "capitalize",
    color: Colors.grey,
    marginRight: 15,
  },
});
