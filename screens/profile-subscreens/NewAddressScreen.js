import React, { useState } from "react";
import { StyleSheet, View} from "react-native";
import { Text, Input, Switch, Button, Item } from 'native-base';
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import axios from "axios";
import global from "../../Global";
import { ButtonText } from "../../components/atoms/StyledText";
import Colors from "../../constants/Colors";

/* test switch button */
//import { ButtonSwitch } from "../../components/molecules/Switch";
//import SwitchButton from 'switch-button-react-native';


export const NewAddress = ({ navigation }) => {
  navigation.setOptions({ headerShown: false });

  const [infos, setInfos] = useState({
    name: "",
    address: "",
    zipcode: "",
    city:"",
  });

  const updateField = (field, val) => {
    setInfos({
      ...infos,
      [field]: val,
    });
  };

  const createProposition = () => {
    let data = infos;
    data.related_user_uid = "9faa1753-e7fb-4928-9a5c-6bffb3a370db";
    data.is_eco = true;
    axios.post(
      `${global.base_api_url}new-address/`, 
      data
    ).then((response) => {
      //TODO: notify succes to user
    }).catch((error) => {
      //TODO: notify failure to user
    })
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <ScrollView>

        <Button
          onPress={() => navigation.goBack()}
          title="Back"
          light
          style={styles.back}
          transparent
        >
          <Ionicons name="md-arrow-round-back" size={20}/>
        </Button>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>Proposer une nouvelle adresse</Text>
        </View>

        <Text style={styles.subText, { marginBottom: 30 }}>
          Une commerce éco-responsable vous a 
          plu ? N’hésitez pas à le faire partager 
          avec nous en proposant cette adresse 
          dans les champs ci-dessous !
        </Text>

        <View>
          <View style={{ marginBottom: 30 }}>
            <Text style={styles.label} >Nom du commerce</Text>
            <Item regular style={styles.input} >
              <Input placeholder="Ex: Le lilas" 
                value={infos.name}
                onChangeText={(text) => updateField("name", text)}
          /> 
            </Item>
          </View>

          <View style={{ marginBottom: 30 }}>
            <Text style={styles.label} >Adresse</Text>
            <Item regular style={styles.input} >
              <Input placeholder="Ex: 21 rue des flandres"
                value={infos.address}
                onChangeText={(text) => updateField("address", text)} /> 
            </Item>
          </View>
          
          <View style={{ marginBottom: 30 }}>
            <Text style={styles.label} >Code postal</Text>
            <Item regular style={styles.input} >
              <Input placeholder="Ex: 75008"
                value={infos.zipcode}
                onChangeText={(text) => updateField("zipcode", text)} /> 
            </Item>
          </View>
          
          <View style={{ marginBottom: 30 }}>
            <Text style={styles.label} >Ville</Text>
            <Item regular style={styles.input} >
              <Input placeholder="Ex: Paris"
                value={infos.city}
                onChangeText={(text) => updateField("city", text)} /> 
            </Item>
          </View>
        </View>

        <Button
          style={styles.addButton}
          onPress={ createProposition }
        >
          <ButtonText 
            style={styles.buttonText} 
            transform
            onPress={() =>
              navigation.navigate("Confirmation", { type: "newAddress" })}
            >
            Ajouter
          </ButtonText>
        </Button>

      </ScrollView>

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
      flex: 1,
    },
    title: {
      marginBottom: 30,

      fontFamily: "gotham-medium",
      fontWeight: "normal",
      fontSize: 20,
      lineHeight: 27,
      textTransform: "uppercase",

      color: Colors.black,

    },
    subText: {      
      fontFamily: "gotham-medium",
      fontSize: 17,
      lineHeight: 25,
      
      color: "#787878",
    },
    label: {
      marginBottom: 13,

      fontFamily: "gotham-medium",
      fontWeight: "normal",
      fontSize: 15,
      lineHeight: 20,

      textTransform: "uppercase",

      color: Colors.black,
    },
    input: {
      /* input border */
      borderWidth: 1,
      borderColor: "#C0C5D2",
      borderRadius: 4,

      /* input float */
      fontStyle: "normal",
      fontFamily: "gotham-medium",
      fontWeight: "normal",
      fontSize: 15,
      lineHeight: 14,

      color: "#C0C5D2",
    },
    addButton: {
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 44,
      width: 125,
      height: 45,
      left: 110,//145,

      borderRadius: 4,

      backgroundColor: Colors.secondary,
    },
    buttonText: {
      paddingTop: 10,
      paddingBottom: 10,

      fontStyle: "normal",
      fontFamily: "gotham-medium",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: 21,

      display: "flex",
      alignItems: "center",
      textTransform: "uppercase",

      color: Colors.white,
    },    
  });