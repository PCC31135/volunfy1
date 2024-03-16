import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const PaginaEnConstruccion = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.paginaEnConstruccion}>
      <View style={[styles.paginaEnConstruccionChild, styles.paginaPosition]} />
      <Pressable style={styles.arrowBack} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrowback.png")}
        />
      </Pressable>
      <Text style={styles.pginaEnConstruccin}>Página en construcción</Text>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <Image
        style={[styles.paginaEnConstruccionItem, styles.paginaPosition]}
        contentFit="cover"
        source={require("../assets/group-321.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paginaPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  paginaEnConstruccionChild: {
    top: 66,
    backgroundColor: Color.colorBlack,
    height: 1,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowBack: {
    left: 15,
    top: 23,
    width: 33,
    height: 34,
    position: "absolute",
  },
  pginaEnConstruccin: {
    top: 217,
    left: 21,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.cabinBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 317,
    height: 38,
    position: "absolute",
  },
  image3Icon: {
    top: 272,
    left: 48,
    width: 293,
    height: 293,
    position: "absolute",
  },
  paginaEnConstruccionItem: {
    top: 771,
    height: 81,
  },
  paginaEnConstruccion: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    width: "100%",
  },
});

export default PaginaEnConstruccion;
