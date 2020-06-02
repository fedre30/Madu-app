import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  Title,
  AddressText,
  SimpleText,
} from "../../components/atoms/StyledText";
import { API_URL } from "../../utils/api";
const data = {
  name: "ma boutique vegan",
  description:
    "boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan",
  address: "26 rue de montreuil",
  zipcode: "93100",
  city: "Montreuil",
  website: "https://www.google.com",
  tags: ["bio", "local", "traditionnelle"],
};

export default function ShopInfoScreen({ navigation }) {
  navigation.setOptions({ headerShown: false });
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <View style={styles.header}>
        <Image source={require("../../assets/images/image_test.png")}></Image>
      </View>
      <View style={styles.infosContainer}>
        <Title>{data.name}</Title>
        <AddressText>{data.address}</AddressText>
        <SimpleText>{data.description}</SimpleText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 10,
  },
  contentContainer: {
    justifyContent: "center",
    paddingTop: 30,
  },
  header: {
    flex: 2,
  },
  infosContainer: {
    flex: 1,
  },
});
