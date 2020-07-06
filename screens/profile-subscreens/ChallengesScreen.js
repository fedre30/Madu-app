import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import {
  RectButton,
  FlatList,
  TouchableOpacity,
} from "react-native-gesture-handler";
import CardChallenges from "../../components/molecules/CardChallenges";

import {
  Title,
  ItalicText,
  SimpleText,
  SecondaryTitle,
  SecondaryText,
  ButtonText,
} from "../../components/atoms/StyledText";
import Colors from "../../constants/Colors";
import { ListCard } from "../../components/molecules/Card";
import { Button, Subtitle, Textarea, Form, Content } from "native-base";
let data = [
  {
    uid: 1,
    title: "TOP CHEF",
    image: "./../../assets/images/defis1.png",
    name: "ii",
    day_duration: "6 jours",
    description:
      "Adieu le gaspillage, maintenant on prépare ses petits plats de la semaine en avance.",
    work: "89 personnes ont réalisé ce défi, dont 3 chez Little Cigogne.",
  },
  {
    uid: 2,
    title: "CLEAN MY MAIL",
    image: "./../../assets/images/defis1.png",
    name: "ii",
    day_duration: "3 jours",
    description:
      "Adieu le gaspillage, maintenant on prépare ses petits plats de la semaine en avance.",
    work: "89 personnes ont réalisé ce défi, dont 3 chez Little Cigogne.",
  },
  {
    uid: 3,
    title: "je suis le titre 3",
    image: "../../assets/images/defis1.png",
    name: "ii",
    day_duration: "5 jours",
    description:
      "Adieu le gaspillage, maintenant on prépare ses petits plats de la semaine en avance.",
    work: "89 personnes ont réalisé ce défi, dont 3 chez Little Cigogne.",
  },
];

export default function ChallengesScreen({ navigation }) {
  navigation.setOptions({ headerShown: false });
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Title style={styles.titleChallenges}>On relève le defis, Marie ?</Title>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={({ item }) => (
          <CardChallenges
            title={item.title}
            description={item.description}
            work={item.work}
            dayDuration={item.day_duration}
          />
        )}
        keyExtractor={(item) => item.uid.toString()}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
  },
  titleChallenges: {
    marginTop: 40,
  },
  containerFullCardChallenges: {
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    display: "none",
  },
  contentContainer: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    paddingTop: 30,
  },
  wrapper: {
    width: Dimensions.get("window").width,
    height: 50,
  },
});
