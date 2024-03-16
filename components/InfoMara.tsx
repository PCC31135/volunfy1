import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

export type InfoMaraType = {
  onClose?: () => void;
};

const InfoMara = ({ onClose }: InfoMaraType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.infoMara}>
      <Text
        style={[styles.maraGutierrez, styles.cadizFlexBox]}
      >{`María Gutierrez


`}</Text>
      <View style={styles.filtroPerfil}>
        <Text style={[styles.cadiz, styles.cadizFlexBox]}>Cadiz</Text>
        <Image
          style={[styles.golfIcon, styles.cerrarLayout]}
          contentFit="cover"
          source={require("../assets/golf.png")}
        />
      </View>
      <Text style={styles.bodyTarjeta}>maria.voluntariado@gmail.com</Text>
      <View style={[styles.rectangleParent, styles.groupChildShadowBox]}>
        <View style={[styles.groupChild, styles.xPosition]} />
        <Pressable
          style={styles.enviarMensaje}
          onPress={() => navigation.navigate("Chats")}
        >
          <Text style={[styles.enviarMensaje1, styles.xTypo]}>
            Enviar Mensaje
          </Text>
        </Pressable>
      </View>
      <Text
        style={[styles.soyUnaMujer, styles.cadizFlexBox]}
      >{`Soy una mujer apasionada
por el voluntariado.
Desde pequeña siempre he
sentido la necesidad de
ayudar a los demás y de
hacer del mundo un lugar
mejor.`}</Text>
      <View style={styles.groupItemPosition}>
        <View style={styles.groupItemPosition}>
          <View style={styles.groupItemPosition}>
            <View style={[styles.groupItem, styles.groupItemPosition]} />
            <View style={[styles.xParent, styles.xLayout]}>
              <Text style={[styles.x, styles.xLayout]}>X</Text>
              <Text style={[styles.cerrar, styles.cerrarLayout]}>Cerrar</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cadizFlexBox: {
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  cerrarLayout: {
    height: 16,
    position: "absolute",
  },
  groupChildShadowBox: {
    height: 54,
    width: 186,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  xPosition: {
    left: 0,
    top: 0,
  },
  xTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "700",
  },
  groupItemPosition: {
    height: 58,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  xLayout: {
    height: 20,
    position: "absolute",
  },
  maraGutierrez: {
    top: 137,
    fontSize: FontSize.size_9xl,
    width: 383,
    height: 42,
    textAlign: "justify",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 17,
  },
  cadiz: {
    top: 6,
    left: 15,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spaceMonoBold,
    color: Color.colorWhite,
    width: 98,
    height: 19,
    textAlign: "left",
    fontWeight: "700",
  },
  golfIcon: {
    top: 5,
    left: 113,
    width: 16,
    overflow: "hidden",
  },
  filtroPerfil: {
    top: 152,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorBlack,
    width: 139,
    height: 32,
    opacity: 0.8,
    left: 17,
    position: "absolute",
  },
  bodyTarjeta: {
    top: 123,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.ralewayRegular,
    color: Color.colorGray_300,
    width: 205,
    height: 24,
    textAlign: "left",
    left: 17,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorGold_200,
    height: 54,
    width: 186,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  enviarMensaje1: {
    fontFamily: FontFamily.zillaSlabBold,
    width: 165,
    height: 27,
  },
  enviarMensaje: {
    left: 10,
    top: 13,
    position: "absolute",
  },
  rectangleParent: {
    top: 410,
    left: 75,
  },
  soyUnaMujer: {
    top: 206,
    left: 21,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    width: 292,
    height: 145,
    textAlign: "justify",
    display: "flex",
    color: Color.colorBlack,
  },
  groupItem: {
    backgroundColor: Color.colorGainsboro_300,
  },
  x: {
    width: 19,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "700",
    left: 0,
    top: 0,
    fontFamily: FontFamily.interBold,
  },
  cerrar: {
    top: 2,
    left: 31,
    fontSize: FontSize.size_lgi,
    width: 60,
    textAlign: "left",
    color: Color.colorBlack,
    height: 16,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  xParent: {
    top: 24,
    left: 28,
    width: 91,
  },
  infoMara: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    width: 343,
    height: 508,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default InfoMara;
