import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  Title,
  AddressText,
  SimpleText,
  SecondaryTitle,
  SecondaryText,
} from "../../components/atoms/StyledText";
import { API_URL } from "../../utils/api";
import { Button, Subtitle } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Tag } from "../../components/atoms/Tag";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Criterium } from "../../components/atoms/Criterium";
const data = {
  name: "ma boutique vegan",
  description:
    "boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan boutique vegan",
  address: "26 rue de montreuil",
  zipcode: "93100",
  city: "Montreuil",
  website: "https://www.google.com",
  tags: ["bio", "local", "traditionnelle"],
  criteria: ["bio", "local", "lactosefree", "glutenfree"],
  greenscore: "89",
};

export default function ShopInfoScreen({ navigation }) {
  navigation.setOptions({ headerShown: false });
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Button onPress={() => navigation.goBack()} light style={styles.back}>
          <Ionicons name="md-arrow-round-back" size={20} />
        </Button>
        <Image
          source={require("../../assets/images/image_test.png")}
          style={{
            flex: 1,
            width: null,
            height: 200,
            resizeMode: "cover",
          }}
        />
      </View>
      <View style={styles.infosContainer}>
        <View style={styles.greenscore}>
          <Image
            source={require("../../assets/images/greenscore-2.png")}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "contain",
            }}
          />
          <SecondaryText style={{ marginTop: 5 }}>
            {data.greenscore}%
          </SecondaryText>
        </View>
        <SecondaryTitle style={{ textAlign: "center" }}>
          {data.name}
        </SecondaryTitle>
        <AddressText style={{ textAlign: "center", marginBottom: 20 }}>
          {data.address}
        </AddressText>
        <SimpleText>{data.description}</SimpleText>
        <View style={[styles.tagsContainer, { marginBottom: 50 }]}>
          {data.tags.map((tag, idx) => (
            <Tag title={tag} key={idx} />
          ))}
        </View>
        <SecondaryTitle style={{ textAlign: "center", marginBottom: 10 }}>
          Critères de sélection
        </SecondaryTitle>
        <View style={styles.tagsContainer}>
          {data.criteria.map((criterium, idx) => (
            <Criterium title={criterium} imageType={criterium} />
          ))}
        </View>
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
  },
  header: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: 250,
    position: "relative",
  },
  back: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 1,
    padding: 20,
  },
  infosContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    padding: 15,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "transparent",
    marginTop: -20,
    backgroundColor: Colors.white,
    justifyContent: "center",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 30,
    marginTop: 20,
    width: Dimensions.get("window").width,
  },
  greenscore: {
    width: 70,
    flexDirection: "row",
    marginBottom: 20,
    alignSelf: "center",
  },
});
