import React, { useState } from "react";
import {
  SafeAreaView,
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

const Items = () => {
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
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible_1, setModalVisible_1] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <TouchableHighlight onPress={() => setModalVisible(true)}>
        <View style={styles.contentRecompense}>
          <View style={styles.contentView}>
            <Modal
              isVisible={isModalVisible}
              onBackdropPress={() => setModalVisible(false)}
              style={{
                flex: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={styles.modal_1}>
                <Image
                  style={styles.iconImage_3}
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
                  Récompense #2
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
                    style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}
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
                {renderButton("SUIVANT", () => setModalVisible_1(true))}
              </View>
              <Modal
                isVisible={isModalVisible_1}
                onBackdropPress={() => setModalVisible_1(false)}
                style={{
                  flex: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={styles.modal_2}>
                  <Image
                    style={styles.iconImage_2}
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
                    Récompense #1
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

                  {renderButton("OK", () => setModalVisible_1(false))}
                </View>
              </Modal>
            </Modal>

            <Image
              style={styles.imageCadeaux}
              source={require("../assets/images/Ellipse1.png")}
            />
            <View style={styles.contentDesciption}>
              <Text style={styles.text}>Réference #2</Text>
              <View style={styles.description}>
                <Text>150</Text>
                <View style={styles.progressContainer}>
                  <View style={styles.porgressInner}></View>
                </View>
                <Text> / 350</Text>
                <Image
                  source={require("../assets/images/Vector_1.png")}
                  style={styles.iconImage1}
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
  modal_1: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    borderRadius: 4,
  },
  modal_2: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 450,
    borderRadius: 4,
    position: "absolute",
  },
  iconImage_2: {
    position: "absolute",
    bottom: 380,
  },
  iconImage_3: {
    position: "absolute",
    bottom: 330,
  },
  imageCadeaux: {
    position: "relative",
    bottom: 5,
    left: 10,
  },
  contentDesciption: {
    flex: 1,
    flexDirection: "column",
  },
  progressContainer: {
    width: 166,
    height: 10,
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
  },

  porgressInner: {
    width: 60,
    height: 10,
    backgroundColor: "#69FFD4",
    borderRadius: 15,
  },
  description: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
    fontSize: 15,
    marginLeft: 18,
    marginTop: 10,
  },
  iconImage1: {
    marginLeft: 3,
  },
});
