import * as React from "react";
import { View } from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "native-base";

export const PriceIcon = (props) => {
  return (
    <Ionicons
      name="logo-euro"
      size={20}
      style={{ marginRight: 5 }}
      color={props.focused ? Colors.text : Colors.grey}
    />
  );
};

export const WheelchairIcon = (props) => {
  return (
    <Ionicons
      name="md-body"
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.text : Colors.grey}
    />
  );
};

export const SuggestionIcon = (props) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Ionicons
        name="md-thumbs-up"
        size={30}
        style={{ marginBottom: -3 }}
        color={Colors.text}
      />
      <Text style={{ marginLeft: 10 }}>{props.suggestionRate}%</Text>
    </View>
  );
};
