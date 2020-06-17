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
  Title,
  ItalicText,
  SimpleText,
  SecondaryTitle,
  SecondaryText,
  ButtonText,
} from "../../components/atoms/StyledText";
import { Button, Subtitle, Textarea } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export default function FeedbackScreen({ route, navigation }) {
  navigation.setOptions({ headerShown: false });

  const index = route.params.id;
  const [rate, setRate] = useState(1);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Button
        onPress={() => navigation.goBack()}
        light
        style={styles.back}
        transparent
      >
        <Ionicons name="md-arrow-round-back" size={20} />
      </Button>
      <View style={{ marginTop: 10 }}>
        <SecondaryTitle style={{ textAlign: "center" }} fontSize={20}>
          Donner votre avis
        </SecondaryTitle>
      </View>
      <View
        style={{ marginBottom: 20, marginTop: 30, justifyContent: "center" }}
      >
        <Slider
          minimumValue={0}
          maximumValue={5}
          step={1}
          minimumTrackTintColor={Colors.secondary}
          maximumTrackTintColor={Colors.primary}
        />
      </View>
      <SimpleText style={{ marginBottom: 20 }}>
        Vous voulez vous exprimer sur quelque chose en particulier ? Ou bien
        juste donner votre avis ? Remplissez le champ ci-dessous !
      </SimpleText>
      <Textarea rowSpan={6} bordered placeholder="Tapez votre message" />
      <Button style={styles.searchButton} onPress={() => {}}>
        <ButtonText style={styles.buttonText} transform>
          Je valide
        </ButtonText>
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 20,
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
