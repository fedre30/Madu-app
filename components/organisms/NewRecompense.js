import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import Items from "./FirstListRecompense";

import data from "../../utils/FirstDataRecompense.js";

export default function NewRecompense() {
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={data}
      renderItem={({ item }) => <Items list={item} />}
    />
  );
}
