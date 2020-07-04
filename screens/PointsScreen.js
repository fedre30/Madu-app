import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Button } from "native-base";

import { Title } from "../components/atoms/StyledText";
import Items from "../components/organisms/ListRecompense";
import data from "../utils/data";

export default function PointsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
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
        <View style={styles.imageContent}>
          <Image
            source={require("../assets/images/cadeaux_1.png")}
            style={styles.firstIconImage}
          />
        </View>
      </View>
      <View style={styles.contentView}>
        <Text style={styles.title}>récompenses à débloquer</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={data}
        renderItem={({ item }) => <Items list={item} />}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingTop: 40,
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
    width: "80%",
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
  imageContent: {
    width: 50,
    borderRadius: 30,
    height: 50,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.1,
  },
  firstIconImage: {
    width: 30,
    height: 30,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "500",
  },
  buttonStyle: {
    height: 60,
    paddingLeft: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 14,
    borderRadius: 4,
    marginBottom: 45,
  },
  "buttonStyle:last-child": {
    marginBottom: 0,
    backgroundColor: "#FAAAFF",

  },
  buttonImage: {
    position: "absolute",
    height: 75,
    width: 75,
    left: 15,
    bottom: 0,
  },
  buttonTitleStyle: {
    textAlign: "left"
  },
  buttonSubtitleStyle: {
    textAlign: "left"
  },
  titleStyle: {
    marginBottom: 30,
  },



  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    backgroundColor: "rgba(53, 64, 82, 0.41)"
  },
  modalView: {
    position: "relative",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingTop: 103,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalImage: {
    position: "absolute",
    height: 136,
    width: 136,
    top: -68,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
