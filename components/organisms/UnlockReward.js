import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  TouchableOpacity,
  Icon,
  BorderlessButton,
} from "react-native-gesture-handler";
import Modal from "react-native-modal";
import Colors from "../../constants/Colors";
import { SimpleText, SecondaryTitle } from "../atoms/StyledText";

export const UnlockReward = (props) => {
  const list = props.list;
  const [isModalVisible, setModalVisible] = useState(false);

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
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "500", color: "#FFF" }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Modal
        isVisible={isModalVisible}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollView
          style={styles.modal}
          contentContainerStyle={styles.modalContentContainer}
        >
          <View style={styles.contentImageCadeauxModalSecond}>
            <Image
              style={styles.imageCadeauxModalSecond}
              source={require("../../assets/images/cadeaux_1.png")}
            />
          </View>

          <SecondaryTitle fontSize={20}>{list.title}</SecondaryTitle>

          <View style={styles.modalContentText}>
            <Text
              style={{
                width: "100%",
                fontWeight: "bold",
                lineHeight: 28,
              }}
            >
              Les déchets en entreprise aussi peuvent être recyclés, et ce n’est
              pas compliqué
            </Text>
            <SimpleText style={styles.modalText}>
              Pour être éco-responsable, limiter sa consommation en énergie et
              en fournitures est un premier pas. il est maintenant important de
              limiter les déchets liés à l’activité des salariés et des
              entreprises.{"\n"} Pour un impact moindre sur l’environnement, le
              tri et le recyclage sont les maîtres mots de l’activité. Pour que
              les gestes soient simples et deviennent automatiques, il est
              essentiel de mettre à disposition des salariés des bacs de tri et
              de travailler avec des services de recyclage pour le papier, le
              plastique, les consommables d’imprimante ou encore le verre.
              {"\n"}Pour la pause café et les déjeuners, privilégier la
              vaisselle réutilisable est important pour limiter les déchets liés
              à l’utilisation de gobelets et cuillères plastique plusieurs fois.
            </SimpleText>
          </View>

          {renderButton("FERMER", () => {
            setModalVisible(false);
          })}
        </ScrollView>
      </Modal>
      <View style={styles.contentRecompense}>
        <View style={styles.contentView}>
          <View style={styles.contentImageCadeaux}>
            <Image
              style={styles.imageCadeaux}
              source={require("../../assets/images/cadeaux_1.png")}
            />
          </View>
          <View style={styles.contentProgress}>
            <Text style={styles.text}>{list.title}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  Text: {
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
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

  modalTitleTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
  },

  modal: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#FFFFFF",
  },

  modalContentContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalContentText: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  modalText: {
    marginTop: 8,
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
    justifyContent: "center",
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    width: "100%",
    marginLeft: 25,
    marginTop: 10,
  },
});
