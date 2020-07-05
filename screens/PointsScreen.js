import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Sliding from "../components/organisms/Sliding";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import Items from "../components/organisms/ListRecompense";
import Leave from "../components/organisms/Leaves";
import Recompense from "../components/organisms/Recompense";

export default function PointsScreen() {
  return (
    <View style={styles.container}>
      <Leave />
      <Recompense />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
