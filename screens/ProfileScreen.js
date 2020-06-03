import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
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
  navigation.setOptions({ headerShown: false });
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <ScrollView>
        <View style={styles.headerContainer} >
          <Image style={styles.profilePic} source={require('../assets/images/Female-User.png')} />
          <Image style={styles.trophy} source={require('../assets/images/clover.png')} />
          <Image style={styles.editProfile} source={require('../assets/images/edit-pencil.png')} />
          <Text style={styles.name}>Marie TE</Text>
          <Text style={styles.institution}>Little cigogne</Text>
        </View>
      
        <View style={styles.profileOption} >
          <Thumbnail 
            backgroundColor={"#EBF3FF"} 
            imageType="jackpot"
            onPress={() => navigation.navigate('Challenges')}
          >MA CAGNOTTE
          </Thumbnail>
              
          <Thumbnail 
            backgroundColor={"#DCFFF7"} 
            imageType="rewards"
            onPress={() => navigation.navigate('Challenges')}
          >Mes récompenses
          </Thumbnail>
            
          <Thumbnail 
            backgroundColor={"#EEE9FF"} 
            imageType="challenges"
            onPress={() => navigation.navigate('Challenges')}
          >Mon défi quotidien
          </Thumbnail>
            
          <Thumbnail 
            backgroundColor={"#FFF1E9"} 
            imageType="newAddress"
            onPress={() => navigation.navigate('Challenges')}
          >Proposer une nouvelle adresse
          </Thumbnail>
            
          <Thumbnail 
            backgroundColor={"#E9F7FF"} 
            imageType="quizz"
            onPress={() => navigation.navigate('Challenges')}
          >Le quiz
          </Thumbnail>
            
          <Thumbnail 
            backgroundColor={"#FFFCE3"} 
            imageType="ranking"
            onPress={() => navigation.navigate('Challenges')}
          >Classement
          </Thumbnail>
            
          <Thumbnail 
            backgroundColor={"#FFF1E9"} 
            imageType="infos"
            onPress={() => navigation.navigate('Challenges')}
          >Informations
          </Thumbnail>
            
          <Thumbnail 
            backgroundColor={"#FFE9E9"} 
            imageType="settings"
            onPress={() => navigation.navigate('Challenges')}
          >Paramètres
          </Thumbnail>
        </View>
        
      </ScrollView>

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
    flex: 1,
  },
  
  headerContainer: {
    position: "absolute",
    width: "auto",
    height: "auto",
    left: 66,
    top: 30,

    backgroundColor: "#fda",//"#075",
  },

  profilePic: {
    position: "absolute",
    width: 100,
    height: 100,
    left: 61,
    top: 0,
  },
  
  trophy: {
    position: "absolute",
    width: 50,
    height: 50,
    left: 0,
    top: 55,
  },
  
  editProfile: {
    position: "absolute",
    width: 50,
    height: 50,
    left: 131,
    top: 45,
    
//     shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 6,
// },
// shadowOpacity: 0.37,
// shadowRadius: 7.49,

// elevation: 12,
  },
  
  name: {
    position: "absolute",
    width: 100,
    height: 21,
    left: 62,
    top: 126,

    fontFamily: "gotham-bold",
    fontSize: 20,
    lineHeight: 21,

    textAlign: "center",
    textTransform: "uppercase",
    
    color: "#000000",
  },
  
  institution: {
    position: "absolute",
    width: 123,
    height: 20,
    left: 50,
    top: 155,

    fontFamily: "gotham-bold",
    fontSize: 14,
    lineHeight: 20,

    textAlign: "center",
    textTransform: "uppercase",

    color: "#787878",
  },

  profileOption: {
    top: 251,
    paddingLeft: 15,
    flexDirection: "row",
    width: Dimensions.get("window").width,
    height: 709,
    


    backgroundColor: "#ab0",
  },
});
