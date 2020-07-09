import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity, Icon } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import Modal from "react-native-modal";
import { SimpleText, SecondaryTitle } from "../atoms/StyledText";

export const RewardInfos = (props) => {
  const list = props.list;
  renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: Colors.secondary,
          width: 120,
          height: 36,
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
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
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setFirstModalVisible(true)}>
        <View style={styles.contentRecompense}>
          <View style={styles.contentView}>
            {isFirstModalVisible && (
              <Modal
                isVisible={isFirstModalVisible}
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
                    <TouchableOpacity
                      onPress={() => setFirstModalVisible(false)}
                    >
                      <View>
                        <Image
                          style={styles.delete}
                          source={require("../../assets/images/delete.png")}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <SecondaryTitle style={styles.firstModalTitle}>
                    {list.title}
                  </SecondaryTitle>
                  <View style={styles.firstModalDebock}>
                    <Text style={styles.DeblockTitle}>Débloqué !</Text>
                  </View>
                  <Text style={styles.bravo}>Bravo !</Text>
                  <SimpleText style={styles.firstModalTex}>
                    Vous avez débloqué un nouveau tips !
                  </SimpleText>
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
                    <View style={styles.contentImageCadeauxModalSecond}>
                      <Image
                        style={styles.imageCadeauxModalSecond}
                        source={require("../../assets/images/cadeaux_1.png")}
                      />
                    </View>

                    <SecondaryTitle style={styles.secondModalTitle}>
                      {list.title}
                    </SecondaryTitle>

                    <View style={styles.secondModalContentText}>
                      <Text
                        style={{
                          width: "100%",
                          fontWeight: "bold",
                          lineHeight: 28,
                        }}
                      >
                        Les déchets en entreprise aussi peuvent être recyclés,
                        et ce n’est pas compliqué !
                      </Text>
                      <SimpleText style={{ marginTop: 8 }}>
                        Pour être éco-responsable, limiter sa consommation en
                        énergie et en fournitures est un premier pas. il est
                        maintenant important de limiter les déchets liés à
                        l’activité des salariés et des entreprises. Pour un
                        impact moindre sur l’environnement, le tri et le
                        recyclage sont les maîtres mots de l’activité. Pour que
                        les gestes soient simples et deviennent automatiques, il
                        est essentiel de mettre à disposition des salariés des
                        bacs de tri et de travailler avec des services de
                        recyclage pour le papier, le plastique, les consommables
                        d’imprimante ou encore le verre. Pour la pause café et
                        les déjeuners, privilégier la vaisselle réutilisable est
                        important pour limiter les déchets liés à l’utilisation
                        de gobelets et cuillères plastique plusieurs fois par
                        jour.
                      </SimpleText>
                    </View>

                    {renderButton("SUIVANT", () => {
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  contentRecompense: {
    backgroundColor: "#FFF",
    height: 70,
    borderRadius: 4,
    shadowOpacity: 0.1,
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
    backgroundColor: Colors.secondary,
    width: 166,
    height: 41,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    bottom: 60,
  },
  secondModalTitleTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 30,
  },
  delete: {
    marginLeft: 260,
    marginBottom: 50,
  },
  bravo: {
    color: Colors.secondary,
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
    width: "110%",
    alignItems: "center",
    justifyContent: "center",
    height: "110%",
    borderRadius: 4,
    position: "absolute",
  },
  secondModalTitle: {
    fontSize: 25,
    fontWeight: "500",
  },

  secondDeblockTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",
  },
  secondModalContentText: {
    width: "90%",
    marginTop: 10,
  },
  secondIconImage: {
    position: "absolute",
    bottom: 380,
  },
  secondModalText: {
    fontSize: 15,
    marginTop: 20,
  },
  contentImageCadeauxModal: {
    width: 100,
    height: 100,
    justifyContent: "center",
    backgroundColor: "#EDF3FF",
    alignItems: "center",
    borderRadius: 60,
    marginBottom: 100,

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
    marginBottom: 20,
  },
  imageCadeauxModal: {
    width: 70,
    height: 70,
    position: "relative",
    top: 35,
  },
  DeblockTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",
  },
  contentImageCadeaux: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
    justifyContent: "center",
    backgroundColor: "#EDF3FF",
  },
  imageCadeaux: {
    position: "relative",
    bottom: 5,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
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
    width: 100,
    height: 10,
    backgroundColor: Colors.secondary,
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