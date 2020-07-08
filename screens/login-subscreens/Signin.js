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
  LabelInput,
} from "../../components/atoms/StyledText";
import { Button, Subtitle, Form, Item, Input, Content } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Tag } from "../../components/atoms/Tag";
import { SafeAreaView } from "react-native-safe-area-context";

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
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {/* <Button
        onPress={() => navigation.goBack()}
        title="Back"
        light
        style={styles.back}
        transparent
      >
        <Ionicons name="md-arrow-round-back" size={20} />
      </Button> */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/madu_logo.png")}
          style={styles.image}
        />
      </View>
      <Title
        style={styles.title}
        fontSize={20}
      >
        S'inscrire
      </Title>
      <SafeAreaView style={styles.formItem}>
        <LabelInput style={{marginBottom: 15,}}>Adresse email professionnelle</LabelInput>
        <Item regular bordered bordered style={styles.input}>
          <Input
            placeholder={"Ex: Marie@hetic.net"}
            value={infos.email}
            onChangeText={(text) => updateField("email", text)}
            style={{ color: Colors.grey }}
          />
        </Item>
      </SafeAreaView>
      <View style={styles.formItem}>
        <LabelInput style={{marginBottom: 15,}}>Mot de passe</LabelInput>
        <Item regular bordered bordered style={styles.input}>
          <Input
            textContentType={"password"}
            secureTextEntry={true}
            placeholder={"******"}
            rounded
            value={infos.password}
            onChangeText={(text) => updateField("password", text)}
            style={{ color: Colors.grey }}
          />
        </Item>
      </View>
      <View style={styles.formItem}>
        <LabelInput style={{marginBottom: 15,}}>Confirmation de mot de passe</LabelInput>
        <Item regular bordered bordered style={styles.input}>
          <Input
            placeholder={"******"}
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
  title: {
    marginBottom: 10, 
    fontSize: 20, 
    lineHeight: 21, 
    textAlign: "center", 
    textTransform: "uppercase",
  },
  formItem: {
    marginBottom: 30,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  input: { 
    borderWidth: 1, 
    borderColor:Colors.lightGrey, 
    borderRadius:4,
  },
  loginButton: {
    width: 200,
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    color: Colors.white,
  },
});
