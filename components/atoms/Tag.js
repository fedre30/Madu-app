import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Tag = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.container,
        {
          backgroundColor: props.focused ? Colors.secondary : "transparent",
        },
      ]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text
        style={[
          styles.title,
          { color: props.focused ? Colors.white : Colors.secondary },
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderColor: Colors.secondary,
    borderWidth: 1,
    minWidth: 50,
    height: 30,
    borderRadius: 3,
    margin: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: 5,
    fontSize: 15,
  },
});
