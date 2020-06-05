import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, View} from "react-native";//Text, 
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";

export const NewAddress = () => {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text>Proposer une nouvelle adresse</Text>
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
      flex:1,
    },
  });