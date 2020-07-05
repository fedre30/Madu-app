import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Sliding from "../components/organisms/Sliding";
import { RectButton, ScrollView } from "react-native-gesture-handler";
<<<<<<< HEAD
import Items from "../components/organisms/ListRecompense";
import Leave from "../components/organisms/Leaves";
import Recompense from "../components/organisms/Recompense";
=======
import { Title } from "../components/atoms/StyledText";
import { Row, Item } from "native-base";
import Items from "../components/organisms/ListRecompense";
import data from "../utils/data";
import { createStackNavigator } from "@react-navigation/stack";
>>>>>>> b72adf4bc8b9bb11deacb3d73da94e4a7b59419e

import { Button } from "native-base";

const PointsStack = createStackNavigator();

export const Infos = () => {
  return (
    <View style={styles.container}>
      <Leave />
      <Recompense />
    </View>
  );
};
export const Cagnotte = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View>
        <Title>Cagnotte test</Title>
        <Button onPress={() => navigation.navigate("Infos")}>
          <Text>Infos</Text>
        </Button>
      </View>
    </ScrollView>
  );
};
export default function PointsScreen() {
  return (
    <PointsStack.Navigator>
      <PointsStack.Screen name="Cagnotte" component={Cagnotte} />
      <PointsStack.Screen name="Infos" component={Infos} />
    </PointsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
