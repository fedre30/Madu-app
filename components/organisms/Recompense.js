import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import Items from "./SecondListRecompense";

import data from "../../utils/SencondDataRecompense.js";

export default function Recompense() {
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={data}
      renderItem={({ item }) => <Items list={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
