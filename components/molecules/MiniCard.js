import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../constants/Colors";
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import {
  SecondaryText,
  SecondaryTitle,
  ItalicText,
  TagsText,
} from "../atoms/StyledText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PriceIcon, WheelchairIcon, SuggestionIcon } from "../atoms/CardIcons";
import { useNavigation } from "@react-navigation/native";

export const ListCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Shop", { id: props.id })}
      style={{ position: "relative", marginBottom: 20 }}
    >
      <Card>
        <CardItem cardBody>
          <Image
            source={require("../../assets/images/image_test.png")}
            style={{ height: 100, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <SecondaryTitle>{props.name}</SecondaryTitle>
            <ItalicText>{props.address}</ItalicText>
            <View style={{ flexDirection: "row" }}>
              {props.tags.map((tag, i) => (
                <TagsText key={i} style={{ marginRight: 8 }}>
                  #{tag}
                </TagsText>
              ))}
            </View>
            <View style={styles.infosContainer}>
              <View style={styles.infos}>
                <SecondaryText style={{ textAlign: "center" }}>
                  {props.greenscore}%
                </SecondaryText>
              </View>
              {props.suggestionRate && (
                <View style={styles.infos}>
                  <SuggestionIcon suggestionRate={props.suggestionRate} />
                </View>
              )}
            </View>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  infosContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
    width: Dimensions.get("window").width / 2 - 20,
    height: 100,
  },
  infos: {
    flexDirection: "row",
    marginRight: 30,
  },
});
