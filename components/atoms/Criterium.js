import React from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import { SimpleText, Title, Subtitle, SecondaryText } from "./StyledText";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LeavesCount } from "./LeavesCount";

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
          {props.title}
        </SecondaryText>
        <View style={{ width: 40, flex: 1 }}>
          <LeavesCount rate={props.score} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 50,
  },
  contentContainer: {
    justifyContent: "flex-start",
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
    marginLeft: 20,
  },
  title: {
    textAlign: "center",
    textTransform: "capitalize",
    color: Colors.grey,
  },
});
