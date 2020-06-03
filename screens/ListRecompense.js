import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import Constants from "expo-constants";

const Items = (props) => {
  const shadowStyle = {
    shadowOpacity: (0, 0, 0, 0.1),
  };
  const list = props.list;
  renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: "#69FFD4",
          width: 120,
          height: 36,
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "500", color: "#FFF" }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const [isFirstModalVisible, setFirstModalVisible] = useState(false);
  const [isSecondModalVisible, setSecondModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <TouchableHighlight onPress={() => setFirstModalVisible(true)}>
        <View style={styles.contentRecompense}>
          <View style={styles.contentView}>
            <Modal
              isVisible={isFirstModalVisible}
              onBackdropPress={() => setFirstModalVisible(false)}
              style={{
                flex: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={styles.firstdModal}>
                <Image
                  style={styles.threeIconImage}
                  source={require("../assets/images/Ellipse2.png")}
                />
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    position: "absolute",
                    top: 100,
                  }}
                >
                  {list.title}
                </Text>
                <View
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#FFF",
                    backgroundColor: "#69FFD4",
                    width: 166,
                    height: 41,
                    borderRadius: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 110,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      color: "#FFF",
                    }}
                  >
                    Débloqué !
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#69FFD4",
                    fontSize: 25,
                    fontWeight: "bold",
                    marginTop: 30,
                  }}
                >
                  Bravo !
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    marginTop: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Vous avez débloqué un nouveau tips !
                </Text>
                {renderButton("SUIVANT", () => setSecondModalVisible(true))}
              </View>
              <Modal
                isVisible={isSecondModalVisible}
                style={{
                  flex: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={styles.secondModal}>
                  <Image
                    style={styles.secondIconImage}
                    source={require("../assets/images/Ellipse2.png")}
                  />
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      position: "absolute",
                      top: 100,
                    }}
                  >
                    {list.title}
                  </Text>
                  <View
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "#FFF",
                      backgroundColor: "#69FFD4",
                      width: 166,
                      height: 41,
                      borderRadius: 40,
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 100,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "#FFF",
                      }}
                    >
                      Débloqué !
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "90%",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                      }}
                    >
                      Nullam convallis tincidunt odio id auctor. In eleifend non
                      arcu a lacinia. Cras et ipsum id leo pharetra lobortis a
                      sed nibh. Morbi ante ligula, vehicula vel est ut, accumsan
                      luctus mi. Nam aliquam, nisl at lobortis viverra, lectus
                      magna rutrum lorem, non ornare ex nibh eget sapien.
                      Praesent est nibh, volutpat et massa et, porttitor posuere
                      elit.
                    </Text>
                  </View>

                  {renderButton("OK", () => {
                    setSecondModalVisible(false);
                    setFirstModalVisible(false);
                  })}
                </View>
              </Modal>
            </Modal>

            <Image
              style={styles.imageCadeaux}
              source={require("../assets/images/Ellipse1.png")}
            />
            <View style={(styles.contentProgress, shadowStyle)}>
              <Text style={styles.text}>{list.title}</Text>
              <View style={styles.description}>
                <Text>150 </Text>
                <View style={styles.progressContainer}>
                  <View style={styles.porgressInner}></View>
                </View>
                <Text>{list.score}</Text>
                <Image
                  source={require("../assets/images/Vector_1.png")}
                  style={styles.firstIconImage}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
};

export default Items;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  contentRecompense: {
    backgroundColor: "#FFFFFF",
    height: 70,
    borderRadius: 4,
    marginHorizontal: 20,
  },
  contentView: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    fontSize: 5,
  },
  firstdModal: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    borderRadius: 4,
  },
  secondModal: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 450,
    borderRadius: 4,
    position: "absolute",
  },
  secondIconImage: {
    position: "absolute",
    bottom: 380,
  },
  threeIconImage: {
    position: "absolute",
    bottom: 330,
  },
  imageCadeaux: {
    position: "relative",
    bottom: 5,
    left: 10,
  },
  contentProgress: {
    flex: 1,
    flexDirection: "column",
  },
  progressContainer: {
    width: 140,
    height: 10,
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
  },

  porgressInner: {
    width: 20,
    height: 10,
    backgroundColor: "#69FFD4",
    borderRadius: 15,
  },
  description: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  text: {
    fontWeight: "500",
    fontSize: 15,
    marginLeft: 18,
    marginTop: 10,
  },
  firstIconImage: {
    marginLeft: 3,
  },
});
