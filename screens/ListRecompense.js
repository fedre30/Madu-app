import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Items = (props) => {
  const list = props.list;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentRecompense}>
        <View style={styles.contentView}>
          <Image
            style={styles.imageCadeaux}
            source={require("../assets/images/Ellipse1.png")}
          />
          <View style={styles.contentDesciption}>
            <Text style={styles.text}>{list.title}</Text>
            <View style={styles.description}>
              <Text>150</Text>
              <View style={styles.progressContainer}>
                <View style={styles.porgressInner}></View>
              </View>
              <Text>{list.score}</Text>
              <Image
                source={require("../assets/images/Vector_1.png")}
                style={styles.iconImage1}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Items;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  contentRecompense: {
    backgroundColor: "#FFFFFF",
    height: 70,
    borderRadius: 4,
    marginHorizontal: 20,
  },
  contentView: {
    flex: 1,
    flexDirection: "row",
  },
  imageCadeaux: {
    position: "relative",
    bottom: 5,
    left: 10,
  },
  contentDesciption: {
    flex: 1,
    flexDirection: "column",
  },
  progressContainer: {
    width: 190,
    height: 10,
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
  },
  porgressInner: {
    width: 100,
    height: 10,
    backgroundColor: "#69FFD4",
    borderRadius: 15,
  },
  description: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "500",
    fontSize: 15,
    marginLeft: 18,
    marginTop: 10,
  },
  iconImage1: {
    marginLeft: 10,
  },
});
