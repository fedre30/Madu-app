import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { RectButton } from "react-native-gesture-handler";

import {
  Title,
  ItalicText,
  SimpleText,
  SecondaryTitle,
  SecondaryText,
  ButtonText,
} from "../../components/atoms/StyledText";
import Colors from "../../constants/Colors";
import { ListCard } from "../../components/molecules/Card";
import data from "../../utils/poi-api-test.json";
import {
  Button,
  Subtitle,
  Textarea,
  Form,
  Content,
  Switch,
} from "native-base";
export default function ChallengesScreen() {
    return (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View>
            <Title>je tien a toi banane :D </Title>
          </View>
        </ScrollView>
      );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: Colors.white,
        },
        contentContainer: {
          justifyContent: "center",
          paddingTop: 30,
        },
      });
      
