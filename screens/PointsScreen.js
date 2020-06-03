import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Title } from "../components/atoms/StyledText";
import { Row, Item } from "native-base";
import Items from "./ListRecompense";
import data from "./data";

export default function PointsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View>
        <Title>Cagnotte</Title>
      </View>
      <View style={styles.contentView}>
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
      <View style={styles.contentView}>
        <View style={styles.progressContainer}>
          <View style={styles.porgressInner}></View>
        </View>
        <Image
          source={require("../assets/images/Ellipse.png")}
          style={styles.firstIconImage}
        />
      </View>
      <View style={styles.contentView}>
        <Text style={styles.title}>récompenses à débloquer</Text>
      </View>
      <View>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={data}
          renderItem={({ item }) => <Items list={item} />}
        />
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
  contentView: {
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
    marginTop: 10,
    fontSize: 20,
    marginLeft: 30,
  },
  progressContainer: {
    width: 303,
    height: 10,
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
  },
  porgressInner: {
    width: 176,
    height: 10,
    backgroundColor: "#69FFD4",
    borderRadius: 15,
  },
  firstIconImage: {
    position: "relative",
    right: 30,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "500",
  },
});
