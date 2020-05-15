import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../constants/Colors";
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import { SecondaryTitle } from "../atoms/StyledText";

export const CardList = (props) => {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Body>
              <SecondaryTitle>Rose Bakery</SecondaryTitle>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    justifyContent: "center",
    paddingTop: 30,
  },
});
