//import * as React from "react";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

import challenge from "../../utils/challenge-api-test.json";
import { ButtonText } from "../../components/atoms/StyledText";
import Colors from "../../constants/Colors";
import { Button } from "native-base";

export const ContentChallenges = ({ route, navigation }) => {
  navigation.setOptions({ headerShown: false });

  const [data, setData] = useState(null);
  const index = route.params.id;

  useEffect(() => {
    if (index) {
      setData(challenge.find((obj) => obj.id === index));
    }
  }, [index, data]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <ScrollView>
        <Button
          onPress={() => navigation.goBack()}
          title="Back"
          light
          style={styles.back}
          transparent
        >
          <Ionicons name="md-arrow-round-back" size={20} />
        </Button>
        {data && (
          <>
            <View>
              <Image
                style={styles.picture}
                source={require("../../assets/images/Group_323.png")}
              />
            </View>

            <View>
              <Text style={styles.remainingDay}>
                <Text style={styles.span}>{data.days} </Text>
                restants pour réaliser ce défi
              </Text>
            </View>

            <Text style={styles.title}>{data.name}</Text>

            <Text style={styles.subtitle}>{data.description}</Text>

            <Text style={styles.content}> {data.content}</Text>

            <View>
              <Image
                source={require("../../assets/images/thumb_up.png")}
                style={{ marginBottom: 20 }}
              />
              <Text style={styles.subtext}>
                <Text style={styles.span}>89 </Text>
                personnes ont réalisé ce défi, dont 3 chez Little Cigogne.
              </Text>
            </View>
          </>
        )}
        <Button
          style={styles.buttonOk}
          onPress={() =>
            navigation.navigate("Confirmation", {
              id: index,
              type: "challenge",
            })
          }
        >
          <ButtonText style={styles.buttonText}>
            C’est bon pour moi !
          </ButtonText>
        </Button>

        <Button style={styles.buttonMoreTime}>
          <ButtonText style={styles.buttonTextMoreTime}>
            J’ai besoin de plus de temps
          </ButtonText>
        </Button>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 10,
  },
  contentContainer: {
    justifyContent: "center",
    paddingTop: 30,
    flex: 1,
  },
  picture: {
    width: 417,
    height: 232,
  },
  remainingDay: {
    marginTop: 15,

    fontFamily: "gotham-medium",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 21,

    display: "flex",
    alignItems: "center",

    color: "#1C1C1C",
  },
  span: {
    fontFamily: "gotham-bold",
    //fontWeight: "bold",
  },
  title: {
    marginBottom: 20,
    marginTop: 20,

    fontFamily: "gotham-bold",
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 20,

    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",

    color: "#1C1C1C",

    //mix-blend-mode: "normal",
  },
  subtitle: {
    marginBottom: 15,

    fontFamily: "gotham-bold",
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 26,

    color: "#00DDC0",
  },
  content: {
    marginBottom: 15,

    fontFamily: "gotham-medium",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: 17,
    lineHeight: 26,

    color: Colors.black,
  },
  subtext: {
    marginBottom: 15,

    fontFamily: "gotham-medium",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 20,

    color: Colors.black,
  },
  buttonOk: {
    marginTop: 30,
    width: 219,
    height: 45,
    left: 67,
    justifyContent: "center",
    backgroundColor: Colors.secondary,
  },
  buttonText: {
    paddingBottom: 10,
    paddingTop: 10,
    alignItems: "center",
    color: Colors.white,
  },
  buttonMoreTime: {
    marginTop: 30,
    width: 277,
    height: 45,
    left: 35,
    justifyContent: "center",
    backgroundColor: Colors.pureWhite, //"#ffffff",

    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 4,
  },
  buttonTextMoreTime: {
    paddingBottom: 10,
    paddingTop: 10,
    alignItems: "center",
    color: Colors.secondary,
  },
});
