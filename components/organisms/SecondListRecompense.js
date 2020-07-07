import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity, Icon } from "react-native-gesture-handler";
import SimpleText from "../atoms/StyledText";

const Items = (props) => {
  const list = props.list;

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity>
        <View style={styles.contentRecompense}>
          <View style={styles.contentView}>
            <View style={styles.contentImageCadeaux}>
              <Image
                style={styles.imageCadeaux}
                source={require("../../assets/images/cadeaux_2.png")}
              />
            </View>
            <View style={styles.contentProgress}>
              <Text style={styles.text}>{list.title}</Text>
              <View style={styles.description}>
                <Text>150 </Text>
                <View style={styles.progressContainer}>
                  <View style={styles.porgressInner}></View>
                </View>
                <Text style={{ marginLeft: 4 }}>{list.score}</Text>
                <Image
                  source={require("../../assets/images/Vector_2.png")}
                  style={styles.firstIconImage}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Items;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  contentRecompense: {
    backgroundColor: "#8F9298",
    opacity: 0.5,
    height: 70,
    borderRadius: 4,

    shadowOpacity: 0.1,
    marginHorizontal: 20,
  },
  contentView: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },

  delete: {
    marginLeft: 260,
    marginBottom: 50,
  },

  contentImageCadeauxModal: {
    width: 100,
    height: 100,
    justifyContent: "center",
    backgroundColor: "#EDF3FF",
    alignItems: "center",
    borderRadius: 60,
    marginBottom: 100,

    position: "relative",
    bottom: 50,
  },

  DeblockTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",
  },
  contentImageCadeaux: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
    justifyContent: "center",
    backgroundColor: "#545B62",
    opacity: 0.4,
  },
  imageCadeaux: {
    position: "relative",
    bottom: 5,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    left: 10,
  },
  contentProgress: {
    flex: 1,
    width: "100%",

    flexDirection: "column",
  },
  progressContainer: {
    width: "65%",
    height: 10,
    justifyContent: "center",
    backgroundColor: "#979797",
    borderRadius: 20,
  },

  porgressInner: {
    width: 20,
    height: 10,
    backgroundColor: "#545B62",
    borderRadius: 15,
  },
  description: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    width: "100%",
    marginLeft: 25,
    marginTop: 10,
  },
  firstIconImage: {
    marginLeft: 3,
  },
});
