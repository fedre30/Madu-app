import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  Title,
  AddressText,
  SimpleText,
  SecondaryTitle,
} from "../../components/atoms/StyledText";
import { API_URL } from "../../utils/api";
import { Button, Subtitle } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Tag } from "../../components/atoms/Tag";
import { Colors } from "react-native/Libraries/NewAppScreen";
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
        <SecondaryTitle style={{ textAlign: "center" }}>
          {data.name}
        </SecondaryTitle>
        <AddressText style={{ textAlign: "center", marginBottom: 20 }}>
          {data.address}
        </AddressText>
        <SimpleText>{data.description}</SimpleText>
        <View style={styles.tagsContainer}>
          {data.tags.map((tag, idx) => (
            <Tag title={tag} key={idx} />
          ))}
        </View>
        <View>
          <SecondaryTitle style={{ textAlign: "center" }}>
            Critères de sélection
          </SecondaryTitle>
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
    height: Dimensions.get("window").height,
    padding: 15,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "transparent",
    marginTop: -20,
    backgroundColor: Colors.white,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 30,
    marginTop: 10,
  },
});
