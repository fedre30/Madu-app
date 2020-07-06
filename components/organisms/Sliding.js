import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");
import ListIndividuel from "../../utils/DataIndividuel";
import Individuel from "./Individuel";
import ListEntreprise from "../../utils/DataEntreprise";
import Entreprise from "./Entreprise";

export default class Sliding extends Component {
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000,
  };

  handleSlide = (type) => {
    let { active, translateX, translateXTabOne, translateXTabTwo } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
        }).start(),
      ]);
    }
  };
  render() {
    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 40,
              marginBottom: 20,
              height: 36,
              position: "relative",
            }}
          >
            <Animated.View
              style={{
                position: "absolute",
                width: "50%",
                height: "100%",
                left: 0,
                top: 0,
                backgroundColor: "#69FFD4",
                borderRadius: 50,
                transform: [
                  {
                    translateX,
                  },
                ],
              }}
            />
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                borderRightWidth: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderWidth: 1,
                borderColor: "#DFDFDF",
              }}
              onLayout={(event) =>
                this.setState({
                  xTabOne: event.nativeEvent.layout.x,
                })
              }
              onPress={() =>
                this.setState({ active: 0 }, () => this.handleSlide(xTabOne))
              }
            >
              <Text
                style={{
                  color: active === 0 ? "#fff" : "#1C1C1C",
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                INDIVIDUEL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                borderLeftWidth: 0,
                borderWidth: 1,
                borderColor: "#DFDFDF",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              onLayout={(event) =>
                this.setState({
                  xTabTwo: event.nativeEvent.layout.x,
                })
              }
              onPress={() =>
                this.setState({ active: 1 }, () => this.handleSlide(xTabTwo))
              }
            >
              <Text
                style={{
                  color: active === 1 ? "#fff" : "#1C1C1C",
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                GROUPE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textTransform: "uppercase",
                fontSize: 20,
                fontWeight: "600",
                marginTop: 30,
                lineHeight: 21,
              }}
            >
              ils ont le moins consommés...
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#818181",
                justifyContent: "flex-end",
                alignSelf: "flex-end",
                marginRight: 30,
                marginTop: 14,
              }}
            >
              Empreinte carbone (CO₂)
            </Text>
          </View>
          <Animated.View
            style={{
              justifyContent: "center",
              alignItems: "center",
              transform: [
                {
                  translateX: translateXTabOne,
                },
              ],
            }}
            onLayout={(event) =>
              this.setState({
                translateY: event.nativeEvent.layout.height,
              })
            }
          >
            <View>
              <FlatList
                data={ListIndividuel}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Individuel ListIndividuel={item} />}
              />
            </View>
          </Animated.View>
          <Animated.View
            style={{
              justifyContent: "center",
              alignItems: "center",
              transform: [
                {
                  translateX: translateXTabTwo,
                },
                {
                  translateY: -translateY,
                },
              ],
            }}
          >
            <View>
              <FlatList
                data={ListEntreprise}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Entreprise ListEntreprise={item} />}
              />
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
  },
});
