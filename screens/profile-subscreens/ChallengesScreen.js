import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Image, Dimensions } from "react-native";
import { RectButton, FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CardChallenges from  "../../components/molecules/CardChallenges"

import {
  Title,
  ItalicText,
  SimpleText,
  SecondaryTitle,
  SecondaryText,
  ButtonText,
} from "../../components/atoms/StyledText";
import Colors from "../../constants/Colors";
import { ListCard } from "../../components/molecules/Card";
import {
  Button,
  Subtitle,
  Textarea,
  Form,
  Content,
} from "native-base";
let data = [
  {
  uid : 1,
  title : "TOP CHEF",
  image : "./../../assets/images/defis1.png" ,
  name : "ii",
  day_duration : "6 jours",
  description : "Adieu le gaspillage, maintenant on prépare ses petits plats de la semaine en avance."
},
{
  uid : 2,
  title : "CLEAN MY MAIL",
  image : "./../../assets/images/defis1.png" ,
  name : "ii",
  day_duration : "3 jours",
  description : "Adieu le gaspillage, maintenant on prépare ses petits plats de la semaine en avance."
},
{
  uid : 3,
  title : "je suis le titre 3",
  image : "../../assets/images/defis1.png" ,
  name : "ii",
  day_duration : "5 jours",
  description : "Adieu le gaspillage, maintenant on prépare ses petits plats de la semaine en avance."
}
];

export default function ChallengesScreen() {
    return (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View>
            <Title
            style={styles.titleChallenges}
            >On relève le defis, Marie ?</Title>
          </View>
          
          <FlatList
            style={styles.container}
          data={data}
          renderItem={({ item }) => (
            <View
            style={styles.containerFullCardChallenges}>
              <View
              style={styles.durationContainer}
              >
               <Text> {item.day_duration} restants </Text>
              </View>
              <View
              style={styles.challengeContainer}
              >
                <Image
                  source={require("../../assets/images/defis1.png")}
                  style={styles.imageChallenge}
                />
                <Text
                style={styles.subtitleChallenges}
                >{item.title}</Text>
                <Text
                style={styles.descriptionChallenges}
                >{item.description}</Text>
                <TouchableOpacity>
                          <Button
                  style={styles.searchButton}
                  onPress={() =>
                    navigation.navigate("Confirmation", {
                      id: shop.id,
                      type: "greenscore",
                    })
                  }
                >
                  <ButtonText style={styles.buttonText} transform>
                    Je valide
                  </ButtonText>
                </Button>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.uid.toString()}
        ></FlatList>
      
      
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: Colors.white,
        },
        container: {
          
        },
        containerFullCardChallenges : {
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          display: "none",
        },
        contentContainer: {
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          paddingTop: 30,
        },
        titleChallenges: {
          
          width: 354,
          height: 40,
          // left: 30,
          top: 67,
          // fontStyle: "normal",
          fontSize: 25,
          // lineHeight : 20,
          // color : '#000000',
        },
        durationContainer : {
          width: 120,
          height: 40,
          position: "absolute",
          zIndex: 4,
          backgroundColor: "#FFFFFF",
          borderRadius: 4,
        },
        imageChallenge: {
          width: 354,
          height: 150,
        },
        challengeContainer: {
          borderRadius: 4,
          width: 354,
          height: 385,
          // left: 30,
          // top: 60,
          backgroundColor: "#FFFFFF",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          borderRadius: 4,
        },
        subtitleChallenges: {
          fontSize: 18,
          lineHeight: 20,
          textTransform: "uppercase",
          color: "#1C1C1C",
          paddingLeft: 20,
          paddingTop :20,
        },
        descriptionChallenges:{
          fontSize: 17,
          lineHeight: 20,
          paddingLeft: 20,
          paddingTop: 15,

        },
        searchButton: {
          justifyContent: "center",
          backgroundColor: Colors.secondary,
          marginTop: 50,
          marginBottom: 40,
        },
        buttonText: {
          paddingTop: 10,
          alignItems: "center",
          color: Colors.white,
        },
        containerFullCardChallenges: {
          marginTop : 80,
        },
      });
      
