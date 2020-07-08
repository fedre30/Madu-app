import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { RewardInfos } from "./RewardInfos";

import data from "../../utils/FirstDataRecompense.js.js";

export default function NewReward() {
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={data}
      renderItem={({ item }) => <RewardInfos list={item} />}
    />
  );
}
