import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Dimensions,
} from "react-native";
const { width } = Dimensions.get("window");

export default class Sliding extends Component {
  state = {
    active: 0,
    xTabOne: 0,
    xtabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
  };
  handleSlide = (type) => {
    let {
      active,
      xTabOne,
      xTabTwo,
      translateX,
      translateXTabOne,
      translateXTabTwo,
    } = this.state;
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
      translateXTabTwo,
      translateXTabOne,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 16,
          }}
        >
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
                this.setState({ active: 0 }, this.handleSlide(xTabOne))
              }
            >
              <Text
                style={{
                  color: active === 0 ? "#FFF" : "#000",
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
                this.setState({ active: 1 }, this.handleSlide(xTabTwo))
              }
            >
              <Text
                style={{
                  color: active === 1 ? "#FFF" : "#000",
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                GROUPE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
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
          >
            <Text>Hi i am a cut cat </Text>
          </Animated.View>
          <Animated.View
            style={{
              justifyContent: "center",
              alignItems: "center",
              transform: [
                {
                  translateX: translateXTabTwo,
                },
              ],
            }}
          >
            <Text>Hi i am a bad cat </Text>
          </Animated.View>
        </ScrollView>
      </View>
    );
  }
}
