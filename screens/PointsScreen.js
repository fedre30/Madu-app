import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View, Image, Strong } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Title } from "../components/atoms/StyledText";
import { Row } from "native-base";

export default function PointsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View>
        <Title>Cagnotte</Title>
      </View>
      <View style={styles.header}>
        <Text style={styles.number}>150</Text>
        <Image
          source={require("../assets/images/Vector.png")}
          style={styles.iconImage}
        />
        <Text style={styles.leave}>LEAVES</Text>
      </View>
      <View>
        <Text style={styles.description}>
          200 leafs à accumuler avant de pouvoir débloquer la prochaine
          récompense.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    justifyContent: "center",
    paddingTop: 40,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
  },
  number: {
    fontWeight: "500",
    fontSize: 48,
    color: "#69FFD4",
  },
  iconImage: {
    marginLeft: 10,
    marginTop: 10,
  },
  leave: {
    fontSize: 25,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: 10,
    textTransform: "uppercase",
  },
  description: {
    marginTop: 18,
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 30,
  },
});
