import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  Title,
  ItalicText,
  SimpleText,
  SecondaryTitle,
  SecondaryText,
  ButtonText,
} from "../../components/atoms/StyledText";
import { Button, Subtitle, Form, Item, Input, Content } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Tag } from "../../components/atoms/Tag";

export default function Signin({ route, navigation }) {
  navigation.setOptions({ headerShown: false });
  const [infos, setInfos] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
  });

  const updateField = (field, val) => {
    setInfos({
      ...infos,
      [field]: val,
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Button
        onPress={() => navigation.goBack()}
        title="Back"
        light
        style={styles.back}
        transparent
      >
        <Ionicons name="md-arrow-round-back" size={20} />
      </Button>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/madu_logo.png")}
          style={styles.image}
        />
      </View>
      <SecondaryTitle
        fontSize={20}
        style={{ textAlign: "center", marginBottom: 20 }}
      >
        S'inscrire
      </SecondaryTitle>
      <View style={styles.formItem}>
        <SecondaryText>Adresse email</SecondaryText>
        <Item regular bordered>
          <Input
            placeholder={""}
            value={infos.email}
            onChangeText={(text) => updateField("email", text)}
            style={{ color: Colors.grey }}
          />
        </Item>
      </View>
      <View style={styles.formItem}>
        <SecondaryText>Mot de passe</SecondaryText>
        <Item regular bordered>
          <Input
            placeholder={""}
            rounded
            value={infos.password}
            onChangeText={(text) => updateField("password", text)}
            style={{ color: Colors.grey }}
          />
        </Item>
      </View>
      <View style={styles.formItem}>
        <SecondaryText>Confirmation de mot de passe</SecondaryText>
        <Item regular bordered>
          <Input
            placeholder={""}
            rounded
            value={infos.password}
            onChangeText={(text) => updateField("password", text)}
            style={{ color: Colors.grey }}
          />
        </Item>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={[styles.loginButton, { backgroundColor: Colors.secondary }]}
          onPress={() => navigation.navigate("root")}
        >
          <ButtonText style={styles.buttonText} transform>
            S'inscrire
          </ButtonText>
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 30,
  },
  contentContainer: {
    justifyContent: "center",
    paddingBottom: 60,
  },
  formItem: {
    marginBottom: 30,
  },
  loginButton: {
    width: 200,
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    paddingTop: 10,
    alignItems: "center",
    color: Colors.white,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
