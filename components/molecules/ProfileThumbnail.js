import * as React from "react";
import { StyleSheet, TouchableOpacity,  Image, View } from "react-native";
import Colors from "../../constants/Colors";
import { ThumbnailTitle } from "../../components/atoms/StyledText";

const imagesTypes = {
    jackpot: require("../../assets/images/treasure.png"),
    rewards: require("../../assets/images/veggie.png"),
    challenges: require("../../assets/images/glutenfree.png"),
    newAddress: require("../../assets/images/bio.png"),
    quizz: require("../../assets/images/vegan.png"),
    ranking: require("../../assets/images/local.png"),
    infos: require("../../assets/images/local.png"),
    settings: require("../../assets/images/local.png"),
  };

export const Thumbnail = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: props.backgroundColor}]}>
      <TouchableOpacity style={styles.button} > 
        <Image source={imagesTypes[props.imageType]} style={styles.icon} />
        <ThumbnailTitle {...props}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',    
    width: 162,
    height: 162,
    borderRadius: 10,
  },
  button: {
    position: "absolute",
    left: 18,
    top: 22,
  },
  icon: {
    height: 60,
    width: 60,
  }
});