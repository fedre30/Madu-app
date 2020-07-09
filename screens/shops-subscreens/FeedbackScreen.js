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
  const [rate, setRate] = useState(true);
  const [comments, setComments] = useState("");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Button
        title="Retour"
        onPress={() => navigation.goBack()}
        style={styles.back}
        transparent
        light
      >
        <Ionicons name="md-arrow-round-back" size={20} />
        <Text style={ styles.goBackText }>Retour</Text>
      </Button>
      <View style={{ marginTop: 10 }}>
        <SecondaryTitle style={{ textAlign: "center" }} fontSize={20}>
          Donner mon avis
        </SecondaryTitle>
      </View>
      <View
        style={{
          marginBottom: 20,
          marginTop: 30,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => setRate(true)}>
          <Ionicons
            name="md-thumbs-up"
            size={30}
            style={{ marginRight: 20 }}
            color={rate ? Colors.secondary : Colors.text}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRate(false)}>
          <Ionicons
            name="md-thumbs-down"
            size={30}
            style={{ marginRight: 20 }}
            color={rate ? Colors.text : "#EB5757"}
          />
        </TouchableOpacity>
      </View>
      <SimpleText style={{ marginBottom: 20 }}>
        Veux-tu t'exprimer sur quelque chose en particulier ? Ou bien
        juste donner ton avis ? Remplis le champ ci-dessous !
      </SimpleText>
      <Textarea
        rowSpan={6}
        bordered
        placeholder="Tapes ton message"
        value={comments}
        onChangeText={(text) => setComments(text)}
      />
      <Button
        style={styles.searchButton}
        onPress={() =>
          navigation.navigate("Confirmation", { id: index, type: "feedback" })
        }
      >
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
    width: 136,
    left: 96,
    justifyContent: "center",
    borderRadius: 4,
  },
  buttonText: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    color: Colors.white,
  },
});
