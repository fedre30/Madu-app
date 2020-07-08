import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { RewardItem } from "./RewardItem";
import axios from "axios";
import global from "../../Global";

export default function RewardsList() {
  const [userScore, setUserScore] = useState(290);
  const [rewards, setRewards] = useState(null);

  useEffect(() => {
    axios
      .get(`${global.base_api_url}reward/`)
      .then((res) => setRewards(res.data.results));
  }, []);

  if (rewards) {
    return (
      <FlatList
        keyExtractor={(item) => item.uid.toString()}
        data={rewards}
        renderItem={({ item }) => (
          <RewardItem list={item} userScore={userScore} />
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
