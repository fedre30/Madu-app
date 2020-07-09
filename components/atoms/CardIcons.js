import * as React from "react";
import { View ,Image} from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "native-base";
import { SimpleText } from "./StyledText";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const PriceIcon = (props) => {
  return (
    <Ionicons
      name="logo-euro"
      size={props.size ? props.size : 20}
      style={{ marginRight: 5 }}
      color={props.focused ? Colors.text : Colors.grey}
    />
  );
};

export const WheelchairIcon = (props) => {
  return (
    <Ionicons
      name="md-body"
      size={props.size ? props.size : 30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.text : Colors.grey}
    />
  );
};

export const SuggestionIcon = (props) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", left: 30, }}>
      <Ionicons
        name="md-thumbs-up"
        size={props.size ? props.size : 30}
        style={{ marginBottom: -3 }}
        color={props.color ? props.color : Colors.text}
      />

      <SimpleText style={{ marginLeft: 10, marginTop: 10 }}>
        {props.suggestionRate ? props.suggestionRate : 89}%
      </SimpleText>
    </View>
  );
};
