import * as React from "react";
import { StyleSheet, TouchableOpacity,  Image, View } from "react-native";
import { ThumbnailTitle } from "../../components/atoms/StyledText";

const imagesTypes = {
    jackpotAndRewards: require("../../assets/images/gifts.png"),
    challenges: require("../../assets/images/defis.png"),
    newAddress: require("../../assets/images/meeting.png"),
  };

export const Thumbnail = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: props.backgroundColor}]}>
      <TouchableOpacity style={styles.button} onPress={props.onPress} > 
        <ThumbnailTitle style={styles.title} {...props}/>
        <Image 
          source={imagesTypes[props.imageType]} 
          style={{
            width: props.width || 100, 
            height: props.height || 100, 
            left: props.left || 190, 
            top: props.top || 15 
          }}
          />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 354,
    height: 160,
    margin: 9,
    justifyContent: "space-around",
    borderRadius: 10,
  },

  button: {
    position: "absolute",
    left: 25,
    top: 0,
  },

  title: {
    top: 60
  },
});