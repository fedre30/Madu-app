import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { RewardItem } from "./RewardItem";

export default function RewardsList(props) {
  if (props.rewards) {
    return (
      <FlatList
        keyExtractor={(item) => item.uid.toString()}
        data={props.rewards}
        renderItem={({ item }) => (
          <RewardItem list={item} userScore={props.userScore} />
        )}
      />
    );
  } else {
    return <View></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
