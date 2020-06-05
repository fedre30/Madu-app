import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Individuel extends Component {
  render() {
    console.log(this.props);
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity>
          <View style={styles.contentContainer}>
            <View style={styles.contentIndivue}>
              <Text>DERNIER</Text>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/images/cadeaux_1.png")}
              />
              <Text>year</Text>
              <Text style={{ fontSize: 15, color: "red" }}>
                les heros son beaux
              </Text>
              <Text>year</Text>

              <Image source={require("../../assets/images/cadeaux_1.png")} />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    height: 70,
    borderRadius: 4,
    marginHorizontal: 20,
    marginTop: 20,
  },
});
