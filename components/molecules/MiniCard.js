import * as React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
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

export const MiniCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Shop", { id: props.id })}
      style={{ marginBottom: 20, width: 160, marginRight: 10 }}
    >
      <Card>
        <CardItem cardBody>
          <Image
            source={require("../../assets/images/abattoirveg.jpg")}
            style={{ height: 100, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <SecondaryTitle>{props.name}</SecondaryTitle>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {props.tags.map((tag, i) => (
                <TagsText key={i} style={{ marginRight: 8 }}>
                  #{tag.name}
                </TagsText>
              ))}
            </View>
            <View style={styles.infosContainer}>
              <View style={styles.infos}>
                <View style={styles.greenscore}>
                  <View style={{ width: 40, height: 30, flex: 1 }}>
                    <Image
                      source={require("../../assets/images/greenscore-2.png")}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "contain",
                      }}
                    />
                  </View>
                </View>
                {/* <SecondaryText style={{ textAlign: "center" }}>
                  {props.greenscore}%
                </SecondaryText> */}
              </View>
              {props.suggestionRate && (
                <View style={styles.infos}>
                  <SuggestionIcon
                    suggestionRate={props.suggestionRate}
                    color={Colors.secondary}
                  />
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
    alignItems: "center",
    flex: 1,
  },
  infos: {
    flex: 1,
    flexDirection: "row",
    marginRight: 30,
  },
});
