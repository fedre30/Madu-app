import React, { useState, useContext } from "react";
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
import {
  Button,
  Subtitle,
  Form,
  Item,
  Input,
  Content,
  CheckBox,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { AuthContext } from "../../hooks/auth";

export default function Login({ route, navigation }) {
  navigation.setOptions({ headerShown: false });
  const { dispatch } = useContext(AuthContext);
  const [infos, setInfos] = useState({
    email: "",
    password: "",
    cache: false,
  });
  const [error, setError] = useState(false);

  const updateField = (field, val) => {
    setError(false);
    setInfos({
      ...infos,
      [field]: val,
    });
  };

  const onSubmitLogin = () => {
    //implement API checkin
    if (infos.email === "" || infos.password === "") {
      setError(true);
    } else {
      dispatch({
        type: "LOGIN",
        isLoggedIn: true,
      });
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/madu_logo.png")}
          style={styles.image}
        />
      </View>
      <SecondaryTitle
        style={{ textAlign: "center", marginBottom: 20 }}
        fontSize={20}
      >
        Se connecter
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
            textContentType={"password"}
            secureTextEntry={true}
            placeholder={""}
            rounded
            value={infos.password}
            onChangeText={(text) => updateField("password", text)}
            style={{ color: Colors.grey }}
          />
        </Item>
      </View>
      {error && (
        <SimpleText color={Colors.orange}>
          Adresse email ou mot de passe erroné
        </SimpleText>
      )}
      <View style={styles.checkbox}>
        <CheckBox
          checked={infos.cache}
          onPress={() => updateField("cache", !infos.cache)}
          color={Colors.secondary}
        />
        <SimpleText style={{ marginLeft: 15, marginTop: 10 }}>
          Rester connecté(e)
        </SimpleText>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={[styles.loginButton, { backgroundColor: Colors.secondary }]}
          onPress={onSubmitLogin}
        >
          <ButtonText style={styles.buttonText} transform>
            Se connecter
          </ButtonText>
        </Button>
        <Button
          style={[styles.loginButton, { backgroundColor: Colors.blue }]}
          onPress={() => navigation.navigate("Signin")}
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
    paddingBottom: 30,
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
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
});
