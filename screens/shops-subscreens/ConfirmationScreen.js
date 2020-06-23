import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Slider,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  SimpleText,
  SecondaryTitle,
  SecondaryText,
  ButtonText,
  HighlightText,
  Subtitle,
} from "../../components/atoms/StyledText";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Button } from "native-base";

export default function ConfirmationScreen({ route, navigation }) {
  navigation.setOptions({ headerShown: false });

  const index = route.params.id;

  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <HighlightText style={{ paddingTop: 40, paddingBottom: 20 }}>
        Merci !
      </HighlightText>
      <Subtitle style={{ marginBottom: 20 }}>
        Nous avons bien pris en compte votre suggestion, elle sera validée sous
        48h.
      </Subtitle>
      {route.params.type === "feedback" && (
        <SimpleText>
          Lorsque ton avis sera validé{" "}
          <Subtitle color={Colors.secondary}>20 leaves</Subtitle> seront ajoutés
          à ta cagnotte.
        </SimpleText>
      )}
      <View
        style={{
          flex: 1,
          width: 300,
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/images/thanks.png")}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "contain",
          }}
        />
      </View>
      <Button
        style={styles.searchButton}
        onPress={() => {
          route.params.type === "feedback"
            ? navigation.navigate("Shop", { id: index })
            : navigation.navigate("Map");
        }}
      >
        <ButtonText style={styles.buttonText} transform>
          {route.params.type === "feedback"
            ? "retourner sur la fiche"
            : "retourner sur la carte"}
        </ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 20,
    justifyContent: "center",
  },
  contentContainer: {
    justifyContent: "center",
  },
  searchButton: {
    justifyContent: "center",
    backgroundColor: Colors.secondary,
    marginTop: 50,
  },
  buttonText: {
    paddingTop: 10,
    alignItems: "center",
    color: Colors.white,
  },
});
