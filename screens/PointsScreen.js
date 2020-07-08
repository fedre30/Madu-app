import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  Title,
  SimpleText,
  SecondaryTitle,
  Subtitle,
} from "../components/atoms/StyledText";
import {
  RectButton,
  ScrollView,
  TouchableHighlight,
} from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import RewardsList from "../components/organisms/RewardsList";
import Colors from "../constants/Colors";
import { Button, Spinner } from "native-base";
import NewReward from "../components/organisms/NewReward";
import axios from "axios";
import global from "../Global";
import { UnlockedRewardsList } from "../components/organisms/UnlockedRewardsList";

const PointsStack = createStackNavigator();

export const Infos = ({ navigation }) => {
  navigation.setOptions({ headerShown: false });
  const [currentScore, setCurrentScore] = useState(70);
  const [userScore, setUserScore] = useState(390);
  const [rewards, setRewards] = useState(null);
  const [unlockedRewards, setUnlockedRewards] = useState(null);
  const [nextReward, setNextReward] = useState(null);

  useEffect(() => {
    async function fetchRewards() {
      await axios
        .get(`${global.base_api_url}reward/`)
        .then((res) => setRewards(res.data.results));
    }

    if (rewards) {
      setUnlockedRewards(
        rewards.filter((reward) => reward.leaves_amount < userScore)
      );

      setNextReward(
        rewards.filter((reward) => reward.leaves_amount > userScore)[0]
      );
    }

    if (nextReward) {
      setCurrentScore((userScore * 100) / nextReward.leaves_amount);
    }
    fetchRewards();
  }, [rewards]);

  const InnercurrentScore = ({ width }) => (
    <View
      style={{
        width: `${width}%`,
        height: 10,
        backgroundColor: Colors.secondary,
        borderRadius: 15,
      }}
    ></View>
  );
  const ShowReward = () => {
    if (currentScore === 100) {
      return <NewReward />;
    } else {
      return null;
    }
  };

  const Description = () => {
    if (currentScore === 100) {
      return (
        <SimpleText style={styles.description}>
          Vous pouvez dès à présent débloquer une récompense.
        </SimpleText>
      );
    } else {
      return (
        <SimpleText style={styles.description}>
          <Text style={{ color: Colors.secondary, fontWeight: "bold" }}>
            {nextReward ? nextReward.leaves_amount - userScore : 100} leaves
          </Text>{" "}
          à accumuler avant de pouvoir débloquer la prochaine récompense.
        </SimpleText>
      );
    }
  };
  if (rewards && unlockedRewards && nextReward) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.contentHearder}>
          <View style={styles.contentView}>
            <Text style={styles.number}>{userScore}</Text>
            <View style={{ width: 30, height: 30 }}>
              <Image
                source={require("../assets/images/greenscore-2.png")}
                style={styles.iconImage}
              />
            </View>
            <SecondaryTitle fontSize={20} style={styles.leave}>
              leaves
            </SecondaryTitle>
          </View>
          <View
            style={{
              position: "absolute",
              top: 60,
              width: "80%",
              textAlign: "center",
            }}
          >
            <Description />
          </View>
          <View style={styles.contentcurrentScore}>
            <View style={styles.progressContainer}>
              <InnercurrentScore width={currentScore} />
            </View>

            <View style={styles.imageContent}>
              <Image
                source={require("../assets/images/cadeaux_1.png")}
                style={styles.firstIconImage}
              />
            </View>
          </View>
          <View style={styles.contenTitle}>
            <SecondaryTitle fontSize={20} style={styles.title}>
              récompenses à débloquer
            </SecondaryTitle>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("ShowReward")}>
            <View style={styles.contentRecompense}>
              <SecondaryTitle fontSize={14} style={styles.text}>
                Voir les récompenses {"\n"} déjà débloquées
              </SecondaryTitle>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <ShowReward />
          <RewardsList rewards={rewards} userScore={userScore} />
        </View>
      </View>
    );
  } else {
    return <Spinner color={Colors.secondary} />;
  }
};

export default function PointsScreen() {
  return (
    <PointsStack.Navigator>
      <PointsStack.Screen name="Infos" component={Infos} />
      <PointsStack.Screen name="ShowReward" component={UnlockedRewardsList} />
    </PointsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingTop: 40,
  },
  contentContainer: {
    justifyContent: "center",
  },
  contentHearder: {
    position: "relative",
  },
  subtitle: {
    color: Colors.secondary,
    fontWeight: "bold",
  },
  contentView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "58%",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    marginBottom: 20,
  },
  contenTitle: {
    position: "absolute",
    top: 10,
  },
  contentcurrentScore: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 120,
  },
  number: {
    fontWeight: "600",
    fontSize: 50,
    color: Colors.secondary,
    marginLeft: 50,
  },
  iconImage: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: "contain",
  },
  leave: {
    marginLeft: 20,
    top: 11,
    right: 15,
  },
  description: {
    width: Dimensions.get("window").width - 20,
    fontSize: 20,
    marginLeft: 20,
  },
  progressContainer: {
    width: "80%",
    height: 10,
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
  },
  porgressInner: {
    height: 10,
    backgroundColor: Colors.secondary,
    borderRadius: 15,
  },
  imageContent: {
    width: 50,
    borderRadius: 30,
    height: 50,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.1,
    marginTop: 10,
  },
  firstIconImage: {
    width: 30,
    height: 30,
  },
  title: {
    top: 180,
    marginLeft: 20,
  },
  contentRecompense: {
    backgroundColor: Colors.secondary,
    height: 70,
    borderRadius: 4,
    shadowOpacity: 0.1,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 230,
    marginBottom: 20,
  },
  text: {
    color: "#FFF",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
