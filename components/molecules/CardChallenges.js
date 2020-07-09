import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
import { Button, Card, CardItem } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonText, SimpleText, Title } from "../atoms/StyledText";
import { useNavigation } from "@react-navigation/native";

export default function CardChallenges(props) {
  const navigation = useNavigation();

  const challenge = props.challenge;

  return (
    <Card style={{ marginBottom: 40 }}>
      <View style={styles.durationContainer}>
        <SimpleText> {challenge.day_duration} jours restants </SimpleText>
      </View>
      <CardItem cardBody>
        <Image
          source={require("../../assets/images/defis1.png")}
          style={styles.imageChallenge}
        />
      </CardItem>
      <Title style={styles.subtitleChallenges}>{challenge.title}</Title>
      <Text style={styles.descriptionChallenges}>
        {challenge.small_description}
      </Text>
      <SimpleText style={styles.workChallenges}>
        {challenge.description}
      </SimpleText>
      <View style={{ padding: 10 }}>
        <Image
          source={require("../../assets/images/thumb_up.png")}
          style={{ marginBottom: 20 }}
        />
        <SimpleText style={styles.subtext}>
          <Text style={styles.span}>{challenge.done_by_users.length}</Text>{" "}
          personnes ont réalisé ce défi, dont 3 chez Little Cigogne.
        </SimpleText>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          style={styles.searchButton}
          onPress={() =>
            navigation.navigate("ContentChallenges", { id: challenge.uid })
          }
        >
          <ButtonText style={styles.buttonText} transform>
            Je participe
          </ButtonText>
        </Button>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  CardChallenges: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#000000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowColor: "#333",
    padding: 10,
  },
  contentContainer: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  durationContainer: {
    width: 120,
    position: "absolute",
    zIndex: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    top: -20,
    left: -10,
  },
  imageChallenge: {
    width: null,
    height: 100,
    flex: 1,
  },
  challengeContainer: {
    borderRadius: 4,
    width: 354,
    height: 385,
    // left: 30,
    // top: 60,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 4,
  },
  span: {
    fontFamily: "gotham-bold",
    fontWeight: "700",
    marginRight: 5,
  },
  subtitleChallenges: {
    fontSize: 18,
    textTransform: "uppercase",
    color: "#1C1C1C",
    paddingLeft: 20,
    paddingTop: 20,
  },
  descriptionChallenges: {
    fontSize: 17,
    lineHeight: 20,
    paddingLeft: 20,
    paddingTop: 15,
  },
  workChallenges: {
    paddingLeft: 20,
    paddingTop: 15,
  },
  searchButton: {
    justifyContent: "center",
    backgroundColor: "#00DDC0",
    marginTop: 50,
    marginBottom: 40,
    width: 150,
    height: 45,
    alignItems: "center",
  },
  buttonText: {
    paddingTop: 10,
    alignItems: "center",
    color: Colors.white,
  },
  containerFullCardChallenges: {
    marginTop: 80,
  },
});
