import * as React from "react";
import { StyleSheet, TouchableOpacity,  Image, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { ThumbnailTitle } from "../../components/atoms/StyledText";

import ChallengesScreen from "../../screens/profile-subscreens/ChallengesScreen";

export const Thumbnail = (props) => {
  //this.props.navigation.navigate(ChallengesScreen)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} > 
        <Image style={styles.logo} source={require('../../assets/images/favicon.png')} />
        <ThumbnailTitle {...props}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    //backgroundColor: '#DDDDDD',
    padding: 10,
    flexDirection: 'row',
  },
    logo: {
    height: 60,
    width: 60,
  }
});