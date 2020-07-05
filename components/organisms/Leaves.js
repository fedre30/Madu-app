import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Leave() {
  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <Text style={styles.number}>350</Text>
        <Image
          source={require("../../assets/images/Vector.png")}
          style={styles.iconImage}
        />
        <Text style={styles.leave}>LEAVES</Text>
      </View>
      <View>
        <Text style={styles.description}>
          Vous pouvez dès à présent débloquer une récompense.
        </Text>
      </View>
      <View style={styles.contentProgress}>
        <View style={styles.progressContainer}>
          <View style={styles.porgressInner}></View>
        </View>
        <View style={styles.imageContent}>
          <Image
            source={require("../../assets/images/cadeaux_1.png")}
            style={styles.firstIconImage}
          />
        </View>
      </View>
      <View style={styles.contentView}>
        <Text style={styles.title}>récompenses à débloquer</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.contentRecompense}>
          <Text style={styles.text}>Voir les récompenses déjà débloquées</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    justifyContent: "center",
  },
  contentView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    position: "relative",
    top: 50,
  },
  contentProgress: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    position: "relative",
    top: 50,
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
    fontSize: 20,
    marginLeft: 30,
    position: "relative",
    top: 50,
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
    fontSize: 22,
    fontWeight: "500",
    bottom: 50,
  },
  contentRecompense: {
    backgroundColor: "#69FFD4",
    height: 70,
    borderRadius: 4,
    shadowOpacity: 0.1,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "500",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
