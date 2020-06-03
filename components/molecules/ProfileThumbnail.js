import * as React from "react";
import { StyleSheet, TouchableOpacity,  Image, View } from "react-native";
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
      <TouchableOpacity style={styles.button} onPress={props.onPress} > 
        <Image source={imagesTypes[props.imageType]} style={styles.icon} />
        <ThumbnailTitle style={styles.title} {...props}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 152,
    height: 152,
    borderRadius: 10,
  },

  button: {
    position: "absolute",
    left: 18,
    top: 22, 
  },

  icon: {
    height: 50,
    width: 50,
  },

  title: {
    top: 15,
  },
});