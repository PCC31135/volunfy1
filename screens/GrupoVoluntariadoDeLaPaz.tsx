import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const GrupoVoluntariadoDeLaPaz = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.grupoVoluntariadoDeLaPaz}>
      <View style={styles.grupoVoluntariadoDeLaPazChild} />
      <Text style={styles.porRazonesDe}>
        Por razones de segurida esta conversación esta encriptada.
      </Text>
      <View style={styles.grupoVoluntariadoDeLaPazItem} />
      <View style={styles.grupoVoluntariadoDeLaPazInner} />
      <Text style={styles.holaComo}>Hola , como estás??</Text>
      <Text style={[styles.carla, styles.carlaTypo]}>Carla</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.holaATodos, styles.holaATodosTypo]}>
        Hola a todos!!!
      </Text>
      <View
        style={[
          styles.grupoVoluntariadoDeLaPazChild1,
          styles.rectangleViewLayout,
        ]}
      />
      <Text style={[styles.tengoPensadoIr, styles.holaATodosTypo]}>
        Tengo pensado ir en coche , no tengo problema en llevar a gente. 🚗
      </Text>
      <Text style={[styles.heyMuy, styles.heyMuyTypo]}>Hey , muy bien</Text>
      <View style={styles.grupoVoluntariadoDeLaPazChild2} />
      <Text style={[styles.comoVaisHasta, styles.heyMuyTypo]}>
        Como vais hasta el sitio??
      </Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Text style={[styles.adrin, styles.carlaTypo]}>Adrián</Text>
      <Text style={[styles.carla1, styles.carlaTypo]}>Carla</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={[styles.voluntariadoDeLa, styles.pressablePosition]}>
        Voluntariado de la paz
      </Text>
      <Pressable
        style={[styles.pressable, styles.pressablePosition]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.text, styles.textTypo]}>{`< `}</Text>
      </Pressable>
      <View style={styles.grupoVoluntariadoDeLaPazChild3} />
      <Text style={[styles.escribirUnMensaje, styles.paperPlaneIconPosition]}>
        Escribir un mensaje
      </Text>
      <Image
        style={[styles.paperPlaneIcon, styles.paperPlaneIconPosition]}
        contentFit="cover"
        source={require("../assets/paperplane1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carlaTypo: {
    width: 41,
    left: 121,
    height: 20,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.ralewayRegular,
    position: "absolute",
  },
  rectangleViewLayout: {
    width: 154,
    left: 22,
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  holaATodosTypo: {
    height: 85,
    width: 162,
    color: Color.colorBlack,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.ralewayRegular,
    position: "absolute",
  },
  heyMuyTypo: {
    width: 127,
    color: Color.colorWhite,
    fontSize: FontSize.size_smi,
    height: 28,
    textAlign: "left",
    fontFamily: FontFamily.ralewayRegular,
    position: "absolute",
  },
  pressablePosition: {
    top: 49,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.ralewayRegular,
  },
  paperPlaneIconPosition: {
    top: 795,
    position: "absolute",
  },
  grupoVoluntariadoDeLaPazChild: {
    top: 334,
    left: 73,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorWhitesmoke,
    width: 242,
    height: 55,
    position: "absolute",
  },
  porRazonesDe: {
    top: 343,
    left: 92,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
    width: 205,
    height: 38,
    textAlign: "left",
    fontFamily: FontFamily.ralewayRegular,
    position: "absolute",
  },
  grupoVoluntariadoDeLaPazItem: {
    top: 419,
    width: 157,
    height: 48,
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_sm,
    left: 19,
    position: "absolute",
  },
  grupoVoluntariadoDeLaPazInner: {
    top: 472,
    left: 223,
    height: 28,
    width: 147,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorLightseagreen_200,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  holaComo: {
    top: 443,
    width: 152,
    height: 20,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    left: 35,
    textAlign: "left",
    fontFamily: FontFamily.ralewayRegular,
    position: "absolute",
  },
  carla: {
    top: 423,
    color: Color.colorIndianred,
    width: 41,
    left: 121,
  },
  rectangleView: {
    top: 528,
    height: 56,
  },
  holaATodos: {
    top: 556,
    left: 32,
  },
  grupoVoluntariadoDeLaPazChild1: {
    top: 664,
    height: 89,
  },
  tengoPensadoIr: {
    top: 685,
    left: 30,
  },
  heyMuy: {
    top: 479,
    left: 244,
  },
  grupoVoluntariadoDeLaPazChild2: {
    top: 620,
    left: 222,
    width: 147,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorLightseagreen_200,
    borderWidth: 1,
    borderStyle: "solid",
    height: 48,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  comoVaisHasta: {
    top: 629,
    left: 240,
  },
  ellipseIcon: {
    top: 42,
    left: 63,
    width: 50,
    height: 50,
    position: "absolute",
  },
  adrin: {
    top: 536,
    color: "#379256",
    width: 41,
    left: 121,
  },
  carla1: {
    top: 668,
    color: Color.colorIndianred,
    width: 41,
    left: 121,
  },
  vectorIcon: {
    top: 115,
    left: 1,
    maxHeight: "100%",
    width: 389,
    position: "absolute",
  },
  voluntariadoDeLa: {
    left: 134,
    fontSize: FontSize.size_xl,
    width: 248,
    height: 44,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.ralewayRegular,
  },
  text: {
    fontSize: 50,
    display: "flex",
    alignItems: "center",
    width: 20,
    height: 35,
  },
  pressable: {
    left: 16,
  },
  grupoVoluntariadoDeLaPazChild3: {
    top: 787,
    borderRadius: Border.br_mini,
    borderColor: Color.colorBlack,
    width: 320,
    height: 37,
    borderWidth: 1,
    borderStyle: "solid",
    left: 19,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  escribirUnMensaje: {
    fontSize: FontSize.size_mini,
    width: 351,
    height: 22,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.ralewayRegular,
    left: 35,
    top: 795,
  },
  paperPlaneIcon: {
    left: 344,
    width: 31,
    height: 31,
    overflow: "hidden",
  },
  grupoVoluntariadoDeLaPaz: {
    flex: 1,
    width: "100%",
    height: 845,
    backgroundColor: Color.colorWhite,
  },
});

export default GrupoVoluntariadoDeLaPaz;
