import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import Constants from "expo-constants";

const Items = (props) => {
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
      <TouchableOpacity onPress={() => setFirstModalVisible(true)}>
        <View style={styles.contentRecompense}>
          <View style={styles.contentView}>
            {isFirstModalVisible && (
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
                  <View style={styles.contentImageCadeauxModal}>
                    <Image
                      style={styles.imageCadeauxModal}
                      source={require("../../assets/images/cadeaux_1.png")}
                    />
                  </View>

                  <Text style={styles.firstModalTitle}>{list.title}</Text>
                  <View style={styles.firstModalDebock}>
                    <Text style={styles.DeblockTitle}>Débloqué !</Text>
                  </View>

                  {renderButton("OK", () => {
                    setFirstModalVisible(false);
                    setSecondModalVisible(false);
                  })}
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
                    <View style={styles.contentImageCadeauxModalSecond}>
                      <Image
                        style={styles.imageCadeauxModalSecond}
                        source={require("../../assets/images/cadeaux_1.png")}
                      />
                    </View>

                    <Text style={styles.secondModalTitle}>{list.title}</Text>
                    <View style={styles.secondModalDeblock}>
                      <Text style={styles.secondDeblockTitle}>Débloqué !</Text>
                    </View>
                    <View style={styles.secondModalContentText}>
                      <Text style={styles.secondModalText}>
                        Nullam convallis tincidunt odio id auctor. In eleifend
                        non arcu a lacinia. Cras et ipsum id leo pharetra
                        lobortis a sed nibh. Morbi ante ligula, vehicula vel est
                        ut, accumsan luctus mi. Nam aliquam, nisl at lobortis
                        viverra, lectus magna rutrum lorem, non ornare ex nibh
                        eget sapien. Praesent est nibh, volutpat et massa et,
                        porttitor posuere elit.
                      </Text>
                    </View>

                    {renderButton("OK", () => {
                      setFirstModalVisible(false);
                      setSecondModalVisible(false);
                    })}
                  </View>
                </Modal>
              </Modal>
            )}
            <View style={styles.contentImageCadeaux}>
              <Image
                style={styles.imageCadeaux}
                source={require("../../assets/images/cadeaux_1.png")}
              />
            </View>

            <View style={styles.contentProgress}>
              <Text style={styles.text}>{list.title}</Text>
              <View style={styles.description}>
                <Text>150 </Text>
                <View style={styles.progressContainer}>
                  <View style={styles.porgressInner}></View>
                </View>
                <Text>{list.score}</Text>
                <Image
                  source={require("../../assets/images/Vector_1.png")}
                  style={styles.firstIconImage}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
    fontSize: 15,
    fontWeight: "bold",
  },
  firstdModal: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    borderRadius: 4,
  },
  firstModalTitle: {
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    top: 90,
  },
  firstModalDebock: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    backgroundColor: "#69FFD4",
    width: 166,
    height: 41,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    bottom: 60,
  },
  DeblockTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",
  },
  bravo: {
    color: "#69FFD4",
    fontSize: 25,
    fontWeight: "bold",
    position: "relative",
    bottom: 20,
  },
  firstModalText: {
    fontSize: 15,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
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
  secondModalTitle: {
    fontSize: 30,
    fontWeight: "bold",
    bottom: 45,
  },
  secondModalDeblock: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    backgroundColor: "#69FFD4",
    width: 166,
    height: 41,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
  },
  secondDeblockTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",
  },
  secondModalContentText: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  secondIconImage: {
    position: "absolute",
    bottom: 380,
  },
  secondModalText: {
    fontSize: 15,
  },
  contentImageCadeauxModal: {
    width: 100,
    height: 100,
    justifyContent: "center",
    backgroundColor: "#EDF3FF",
    alignItems: "center",
    borderRadius: 60,
    marginBottom: 100,
    shadowOpacity: 0.1,
    position: "relative",
    bottom: 50,
  },
  contentImageCadeauxModalSecond: {
    width: 100,
    height: 100,
    justifyContent: "center",
    backgroundColor: "#EDF3FF",
    alignItems: "center",
    borderRadius: 60,
    shadowOpacity: 0.1,
    position: "relative",
    bottom: 70,
  },
  imageCadeauxModal: {
    width: 70,
    height: 70,
  },
  contentImageCadeaux: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
    justifyContent: "center",
    backgroundColor: "#EDF3FF",
    shadowOpacity: 0.1,
  },
  imageCadeaux: {
    position: "relative",
    bottom: 5,
    left: 10,
  },
  contentProgress: {
    flex: 1,
    width: "100%",
    shadowOpacity: (0, 0, 0, 0.1),
    flexDirection: "column",
  },
  progressContainer: {
    width: "65%",
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
    fontWeight: "bold",
    fontSize: 15,
    width: "100%",
    marginLeft: 25,
    marginTop: 10,
  },
  firstIconImage: {
    marginLeft: 3,
  },
});
