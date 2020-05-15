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
        <View style={{ flex: 1, backgroundColor: 'green' }}>
          <Text>Defis realisé</Text>
        </View>
        <View style={{ flex: 3, backgroundColor: 'blue' }}>
          <Text>Options</Text>
          <View style={styles.CagnotteContainer}>
            <Thumbnail style={styles.thumbnailOption1} >Cagnotte</Thumbnail>
          </View>
          <View style={{backgroundColor: "#DCFFF7", width: 162, height: 162}}>
            <Thumbnail >Recompenses</Thumbnail>
          </View>
          <View style={{backgroundColor: "##EEE9FF", width: 162, height: 162}}>
            <Thumbnail style={styles.thumbnailOption1} >Defis</Thumbnail>
          </View>
          <View style={{backgroundColor: "#FFF1E9", width: 162, height: 162}}>
            <Thumbnail >Nouvelle adresse</Thumbnail>
          </View>
          <View style={{backgroundColor: "#FFE9E9", width: 162, height: 162}}>
            <Thumbnail >Parametre</Thumbnail>
          </View>
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
  CagnotteContainer: {
    //backgroundColor: "#EBF3FF", 
    backgroundColor: Colors.tintColor, 
    width: 162, 
    height: 162
  },
  thumbnailOption1:{  
    backgroundColor: Colors.pink,
    borderRadius: 10,
  }
});
