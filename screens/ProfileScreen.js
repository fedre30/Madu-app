import * as React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../constants/Colors";
import Sliding from "../components/organisms/Sliding";
import { Thumbnail } from "../components/molecules/ProfileThumbnail";
import { ContentChallenges } from "./profile-subscreens/ContentChallengesScreen";
import { NewAddress } from "./profile-subscreens/NewAddressScreen";
import ConfirmationScreen from "./shops-subscreens/ConfirmationScreen";
import ChallengesScreen from "./profile-subscreens/ChallengesScreen";
// import {jackpotAndRewardsPageName} from "./profile-subscreens/jackpotAndRewardsPageName";

const PointsStack = createStackNavigator();

export const Ranking = () => {
  return <Sliding />;
};

export const Profile = ({ navigation }) => {
  navigation.setOptions({ headerShown: false });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <ScrollView>
        {/* //Données en brute pour afficher dans le profil une image + nom et prenom
        <View style={styles.headerContainer} >
          <Image style={styles.profilePic} source={require('../assets/images/Female-User.png')} />
          <Text style={styles.name}>Marie TE</Text>
          <Text style={styles.institution}>Little cigogne</Text>
        </View> */}

        <View style={styles.profileOption}>
          <Thumbnail
            backgroundColor={"#FDE6E6"}
            imageType="challenges"
            width={207}
            height={129}
            left={96}
            top={10}
            onPress={() => navigation.navigate('Challenges')}
          >
            Mes défis
          </Thumbnail>

          <Thumbnail
            backgroundColor={"#E9F7FF"}
            imageType="jackpotAndRewards"
            width={176}
            height={130}
            left={125}
            top={-12}
            // onPress={() => navigation.navigate('jackpotAndRewardsPageName')}
          >
            Cagnotte et récompenses
          </Thumbnail>

          <Thumbnail
            backgroundColor={"#E3E8FF"}
            imageType="newAddress"
            width={114}
            height={115}
            left={166}
            top={3}
            onPress={() => navigation.navigate("NewAddress")}
          >
            Proposer une nouvelle adresse
          </Thumbnail>

          <Thumbnail
            backgroundColor={"#CCF8F2"}
            imageType="Classement"
            width={207}
            height={129}
            left={96}
            top={10}
            onPress={() => navigation.navigate("Ranking")}
          >
            Classement
          </Thumbnail>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default function ProfileScreen() {
  return (
    <PointsStack.Navigator>
      <PointsStack.Screen name="Profile" component={Profile} />
      <PointsStack.Screen name="ContentChallenges" component={ContentChallenges} />
      {/* <PointsStack.Screen name="jackpotAndRewardsName" component={jackpotAndRewardsPageName} /> */}
      <PointsStack.Screen name="Challenges" component={ChallengesScreen} />
      <PointsStack.Screen name="NewAddress" component={NewAddress} />
      <PointsStack.Screen name="Ranking" component={Ranking} />
      <PointsStack.Screen name="Confirmation" component={ConfirmationScreen} />
    </PointsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },

  contentContainer: {
    justifyContent: "center",
    paddingTop: 30,
    flex: 1,
  },

  /* Profile header*/
  // headerContainer: {
  //   position: "absolute",
  //   width: "auto",
  //   height: "auto",
  //   left: 66,
  //   top: 30,
  // },

  // profilePic: {
  //   position: "absolute",
  //   width: 70,
  //   height: 70,
  //   left: 81,
  //   top: 0,
  // },

  // name: {
  //   position: "absolute",
  //   width: 100,
  //   height: 21,
  //   left: 67,
  //   top: 95,

  //   fontFamily: "gotham-bold",
  //   fontStyle: "normal",
  //   fontWeight: "bold",
  //   fontSize: 20,
  //   lineHeight: 21,

  //   textAlign: "center",
  //   textTransform: "uppercase",

  //   color: Colors.black,
  // },

  // institution: {
  //   position: "absolute",
  //   width: 123,
  //   height: 20,
  //   left: 55,
  //   top: 115,

  //   fontFamily: "gotham-bold",
  //   fontSize: 14,
  //   lineHeight: 20,

  //   textAlign: "center",
  //   textTransform: "uppercase",

  //   color: "#787878",
  // },

  /* Cards */
  profileOption: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: Dimensions.get("window").width,

    /* heigh & top when there is the header */
    //height: 959,
    //top: 201,

    /* heigh & top when there is not the header */
    height: 780,
    top: 20,
  },
});
