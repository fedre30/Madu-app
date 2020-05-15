import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Thumbnail } from "../components/molecules/ProfileThumbnail";
import Colors from "../constants/Colors";

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <Text>Profile</Text>
        </View>
        <View style={{ flex: 3, backgroundColor: 'blue' }}>
          <Text>Options</Text>
          <Thumbnail style={styles.thumbnailCagnotte} >Cagnotte</Thumbnail>
          <Thumbnail style={styles.thumbnailReward} >Recompenses</Thumbnail>
          <Thumbnail style={styles.thumbnailChallenge} >Defis</Thumbnail>
          <Thumbnail style={styles.thumbnailNewAddress} >Nouvelle adresse</Thumbnail>
          <Thumbnail style={styles.thumbnailParameter} >Parametre</Thumbnail>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pink,
  },
  contentContainer: {
    justifyContent: "center",
    paddingTop: 30,
    flex:1,
  },
  thumbnailCagnotte:{  
    backgroundColor: Colors.pink,
    borderRadius: 10,
  }
});
