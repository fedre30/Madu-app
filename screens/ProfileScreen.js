import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { createStackNavigator } from '@react-navigation/stack';
import { Thumbnail } from "../components/molecules/ProfileThumbnail";

const PointsStack = createStackNavigator();

export const Challenges = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View>
        <Text>Challenges</Text>
      </View>
    </ScrollView>
  );
}


export const Profile = ({navigation}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Thumbnail 
        backgroundColor={"#EBF3FF"} 
        imageType="jackpot"
        onPress={() => navigation.navigate('Challenges')}
      >MA CAGNOTTE</Thumbnail>
      {/* <Thumbnail backgroundColor={"#DCFFF7"} imageType="rewards">MES RÉCOMPENSES</Thumbnail>
      <Thumbnail backgroundColor={"#EEE9FF"} imageType="challenges">MON DÉFI QUOTIDIEN</Thumbnail>
      <Thumbnail backgroundColor={"#FFF1E9"} imageType="newAddress">PROPOSER UNE NOUVELLE ADRESSE</Thumbnail>
      <Thumbnail backgroundColor={"#E9F7FF"} imageType="quizz">LE QUIZ</Thumbnail>
      <Thumbnail backgroundColor={"#FFFCE3"} imageType="ranking">CLASSEMENT</Thumbnail>
      <Thumbnail backgroundColor={"#FFF1E9"} imageType="infos">INFORMATIONS</Thumbnail>
      <Thumbnail backgroundColor={"#FFE9E9"} imageType="settings">PARAMÈTRES</Thumbnail> */}
    </ScrollView>
  );
}

export default function ProfileScreen() {
  return (
    <PointsStack.Navigator>
      <PointsStack.Screen name="Profile" component={Profile} />
      <PointsStack.Screen name="Challenges" component={Challenges} />
    </PointsStack.Navigator>
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
    flex:1,
  },
});
