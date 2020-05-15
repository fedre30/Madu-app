import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Title } from "../components/atoms/StyledText";
import { CardList } from "../components/molecules/Card";

export default function ListScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View>
        <CardList
          name="Rose Bakery"
          address="Rue de test, 28"
          tags={["vegetarien", "bio", "vegan"]}
          price={2}
          accessibility={true}
          suggestionRate={78}
          greenscore={80}
        />
      </View>
    </ScrollView>
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
  },
});
