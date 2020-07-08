import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { SecondaryTitle } from "../atoms/StyledText";

import { Button, Spinner } from "native-base";
import axios from "axios";
import global from "../../Global";
import { UnlockReward } from "./UnlockReward";
import Colors from "../../constants/Colors";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export const UnlockedRewardsList = () => {
  const navigation = useNavigation();
  navigation.setOptions({ headerShown: false });
  const [rewards, setRewards] = useState(null);
  const [unlockedRewards, setUnlockedRewards] = useState(null);
  useEffect(() => {
    async function fetchRewards() {
      await axios
        .get(`${global.base_api_url}reward/`)
        .then((res) => setRewards(res.data.results));
    }

    if (rewards) {
      setUnlockedRewards(
        rewards.filter((reward) => reward.leaves_amount < 290)
      );
    }
    fetchRewards();
  }, []);
  if (unlockedRewards) {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigation.goBack()}
          title="Back"
          light
          style={styles.back}
          transparent
        >
          <Ionicons name="md-arrow-round-back" size={20} />
        </Button>
        <View>
          <SecondaryTitle
            style={{
              marginLeft: 20,
              marginTop: 30,
            }}
            fontSize={20}
          >
            récompenses débloquées
          </SecondaryTitle>
        </View>
        <View>
          <FlatList
            keyExtractor={(item) => item.uid.toString()}
            data={unlockedRewards}
            renderItem={({ item }) => (
              <UnlockReward
                uid={item.uid}
                title={item.name}
                description={item.description}
                subtitle={item.subtitle}
              />
            )}
          />
        </View>
      </View>
    );
  } else {
    return <Spinner color={Colors.secondary} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 15,
    paddingTop: 30,
  },
});
