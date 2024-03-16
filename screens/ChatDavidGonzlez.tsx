import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const ChatDavidGonzlez = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.chatDavidGonzlez}>
      <View style={styles.chatDavidGonzlezChild} />
      <Text style={styles.porRazonesDe}>
        Por razones de segurida esta conversación esta encriptada.
      </Text>
      <View
        style={[styles.chatDavidGonzlezItem, styles.paperPlaneIconLayout]}
      />
      <View style={styles.chatDavidGonzlezInner} />
      <Text style={[styles.holaComo, styles.holaComoTypo]}>
        Hola , como estás??
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text
        style={[styles.teEsciboPorque, styles.teEsciboPorqueTypo]}
      >{`Te escibo porque he
visto que vas también
al voluntariado y aun
no hay ningún grupo

`}</Text>
      <View
        style={[styles.chatDavidGonzlezChild1, styles.rectangleViewLayout]}
      />
      <Text style={[styles.tengoPensadoIr, styles.teEsciboPorqueTypo]}>
        Tengo pensado ir en coche , no tengo problema en llevar a gente.
      </Text>
      <Text style={[styles.heyMuy, styles.siNoTypo]}>Hey , muy bien</Text>
      <View style={styles.chatDavidGonzlezChild2} />
      <Text style={[styles.siNo, styles.siNoTypo]}>
        Si!! , no se si tienes pensado como ir...
      </Text>
      <Pressable style={styles.arrowBack} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrowback1.png")}
        />
      </Pressable>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text
        style={[styles.davidGonzalezInscritoContainer, styles.holaComoTypo]}
      >
        <Text style={styles.davidGonzalez}>{`David Gonzalez
`}</Text>
        <Text style={styles.inscritoEnVoluntariado}>
          Inscrito en voluntariado de la paz
        </Text>
      </Text>
      <View style={styles.chatDavidGonzlezChild3} />
      <Text style={[styles.escribirUnMensaje, styles.holaComoTypo]}>
        Escribir un mensaje
      </Text>
      <Image
        style={[styles.paperPlaneIcon, styles.paperPlaneIconLayout]}
        contentFit="cover"
        source={require("../assets/paperplane.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paperPlaneIconLayout: {
    height: 31,
    position: "absolute",
  },
  holaComoTypo: {
    color: Color.colorBlack,
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
  teEsciboPorqueTypo: {
    width: 162,
    left: 30,
    height: 85,
    color: Color.colorBlack,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.ralewayRegular,
    position: "absolute",
  },
  siNoTypo: {
    width: 127,
    color: Color.colorWhite,
    fontSize: FontSize.size_smi,
    height: 28,
    textAlign: "left",
    fontFamily: FontFamily.ralewayRegular,
    position: "absolute",
  },
  chatDavidGonzlezChild: {
    top: 148,
    left: 74,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorWhitesmoke,
    width: 242,
    height: 55,
    position: "absolute",
  },
  porRazonesDe: {
    top: 163,
    left: 89,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
    width: 205,
    height: 38,
    textAlign: "left",
    fontFamily: FontFamily.ralewayRegular,
    position: "absolute",
  },
  chatDavidGonzlezItem: {
    top: 408,
    width: 157,
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_sm,
    left: 19,
    height: 31,
  },
  chatDavidGonzlezInner: {
    top: 444,
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
    top: 415,
    width: 152,
    height: 85,
    fontSize: FontSize.size_smi,
    left: 35,
    color: Color.colorBlack,
  },
  rectangleView: {
    top: 498,
    height: 85,
  },
  teEsciboPorque: {
    top: 507,
  },
  chatDavidGonzlezChild1: {
    top: 648,
    height: 77,
  },
  tengoPensadoIr: {
    top: 657,
  },
  heyMuy: {
    top: 451,
    left: 244,
  },
  chatDavidGonzlezChild2: {
    top: 592,
    left: 222,
    height: 48,
    width: 147,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorLightseagreen_200,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  siNo: {
    top: 601,
    left: 240,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowBack: {
    left: 9,
    top: 51,
    width: 38,
    height: 40,
    position: "absolute",
  },
  ellipseIcon: {
    top: 46,
    left: 66,
    width: 49,
    height: 50,
    position: "absolute",
  },
  vectorIcon: {
    top: 115,
    left: 1,
    maxHeight: "100%",
    width: 389,
    position: "absolute",
  },
  davidGonzalez: {
    fontSize: FontSize.size_xl,
  },
  inscritoEnVoluntariado: {
    fontSize: FontSize.size_smi,
  },
  davidGonzalezInscritoContainer: {
    top: 49,
    left: 134,
    width: 248,
    height: 44,
  },
  chatDavidGonzlezChild3: {
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
    top: 795,
    fontSize: FontSize.size_mini,
    width: 351,
    height: 22,
    left: 35,
    color: Color.colorBlack,
  },
  paperPlaneIcon: {
    top: 790,
    left: 348,
    width: 31,
    overflow: "hidden",
  },
  chatDavidGonzlez: {
    flex: 1,
    height: 845,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default ChatDavidGonzlez;
