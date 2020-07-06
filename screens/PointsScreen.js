import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Title } from "../components/atoms/StyledText";
import {
  RectButton,
  ScrollView,
  TouchableHighlight,
} from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Recompense from "../components/organisms/Recompense";
import Items from "../components/organisms/DeblockRecompense";
import data from "../utils/FirstDataRecompense.js";
import { Button } from "native-base";
import NewRecompense from "../components/organisms/NewRecompense";

const PointsStack = createStackNavigator();

export const ShowRecompense = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 25,
            textTransform: "uppercase",
            marginLeft: 20,
            marginTop: 30,
          }}
        >
          récompenses débloquées
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={data}
          renderItem={({ item }) => <Items list={item} />}
        />
      </View>
    </View>
  );
};

export const Infos = ({ navigation }) => {
  const [Progress, setProgress] = useState(20);
  const InnerProgress = ({ width }) => (
    <View
      style={{
        width: `${width}%`,
        height: 10,
        backgroundColor: "#69FFD4",
        borderRadius: 15,
      }}
    ></View>
  );
  const ShowRecompense = () => {
    if (Progress === 100) {
      return <NewRecompense />;
    } else {
      return null;
    }
  };

  const Number = () => {
    if (Progress === 100) {
      return <Text style={styles.number}>350</Text>;
    } else {
      return <Text style={styles.number}>150</Text>;
    }
  };
  const LEAVES = () => {
    if (Progress === 20) {
      return (
        <Text style={{ color: "#69FFD4", fontWeight: "500" }}>200 leafs</Text>
      );
    } else if (Progress === 40) {
      return (
        <Text style={{ color: "#69FFD4", fontWeight: "500" }}>150 leafs</Text>
      );
    } else if (Progress === 60) {
      return (
        <Text style={{ color: "#69FFD4", fontWeight: "500" }}>100 leafs</Text>
      );
    } else if (Progress === 80) {
      return (
        <Text style={{ color: "#69FFD4", fontWeight: "500" }}>50 leafs</Text>
      );
    } else {
      return null;
    }
  };
  const Description = () => {
    if (Progress === 100) {
      return (
        <Text style={styles.description}>
          Vous pouvez dès à présent débloquer une récompense.
        </Text>
      );
    } else {
      return (
        <Text style={styles.description}>
          <LEAVES /> à accumuler avant de pouvoir débloquer la prochaine
          récompense.
        </Text>
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentHearder}>
        <View style={styles.contentView}>
          <Number />
          <Image
            source={require("../assets/images/Vector_1.png")}
            style={styles.iconImage}
          />
          <Text style={styles.leave}>LEAVES</Text>
        </View>
        <View style={{ position: "absolute", top: 60 }}>
          <Description />
        </View>
        <View style={styles.contentProgress}>
          <View style={styles.progressContainer}>
            <InnerProgress width={Progress} />
          </View>

          <View style={styles.imageContent}>
            <Image
              source={require("../assets/images/cadeaux_1.png")}
              style={styles.firstIconImage}
            />
          </View>
        </View>
        <TouchableOpacity
          progress={Progress}
          onPress={() => {
            Progress < 100 ? setProgress(Progress + 20) : setProgress(20);
          }}
          style={{ alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "#69FFD4",
              width: 120,
              height: 36,
              borderRadius: 4,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "500", color: "#FFF" }}>
              Progress
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.contentView}>
          <Text style={styles.title}>récompenses à débloquer</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ShowRecompense")}>
          <View style={styles.contentRecompense}>
            <Text style={styles.text}>
              Voir les récompenses déjà débloquées
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <ShowRecompense />
        <Recompense />
      </View>
    </View>
  );
};
export const Cagnotte = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View>
        <Title>Cagnotte test</Title>
        <Button onPress={() => navigation.navigate("Infos")}>
          <Text>Infos</Text>
        </Button>
      </View>
    </ScrollView>
  );
};
export default function PointsScreen() {
  return (
    <PointsStack.Navigator>
      <PointsStack.Screen name="Cagnotte" component={Cagnotte} />
      <PointsStack.Screen name="Infos" component={Infos} />
      <PointsStack.Screen name="ShowRecompense" component={ShowRecompense} />
    </PointsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    justifyContent: "center",
  },
  contentHearder: {
    position: "relative",
  },
  contentView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    position: "absolute",
    top: 10,
  },
  contentProgress: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    position: "absolute",
    top: 120,
  },
  number: {
    fontWeight: "500",
    fontSize: 48,
    color: "#69FFD4",
  },
  iconImage: {
    marginLeft: 10,
    marginTop: 10,
  },
  leave: {
    fontSize: 25,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: 10,
    textTransform: "uppercase",
  },
  description: {
    fontSize: 20,
    marginLeft: 30,
  },
  progressContainer: {
    width: "80%",
    height: 10,
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
  },
  porgressInner: {
    height: 10,
    backgroundColor: "#69FFD4",
    borderRadius: 15,
  },
  imageContent: {
    width: 50,
    borderRadius: 30,
    height: 50,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.1,
  },
  firstIconImage: {
    width: 30,
    height: 30,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "500",
    position: "absolute",
    top: 170,
  },
  contentRecompense: {
    backgroundColor: "#69FFD4",
    height: 70,
    borderRadius: 4,
    shadowOpacity: 0.1,
    marginHorizontal: 20,
    justifyContent: "center",
    marginTop: 230,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "500",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
