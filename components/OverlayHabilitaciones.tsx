import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

export type OverlayHabilitacionesType = {
  onClose?: () => void;
};

const OverlayHabilitaciones = ({ onClose }: OverlayHabilitacionesType) => {
  return (
    <View style={styles.overlayHabilitaciones}>
      <View style={[styles.overlayHabilitacionesChild, styles.overlayLayout]} />
      <Text style={styles.aplicarFiltros}>Aplicar filtros</Text>
      <View style={[styles.botonLogin, styles.botonLayout]}>
        <Image
          style={[styles.recuadrologinIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/recuadrologin.png")}
        />
        <Text style={[styles.escribaParaBuscar, styles.escribaFlexBox]}>
          Escriba para buscar
        </Text>
      </View>
      <Image
        style={[styles.searchIcon, styles.searchIconLayout]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <View style={[styles.filtroPerfil, styles.filtroLayout]}>
        <Text style={[styles.dificil, styles.dificilPosition]}>Dificil</Text>
        <Image
          style={[styles.starIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={styles.filtroPerfil1}>
        <Text style={[styles.dificil, styles.dificilPosition]}>Medio</Text>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.filtroPerfil2, styles.filtroLayout]}>
        <Text style={[styles.dificil, styles.dificilPosition]}>Fácil</Text>
        <Image
          style={[styles.hourglassIcon, styles.hourglassIconPosition]}
          contentFit="cover"
          source={require("../assets/hourglass1.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View
        style={[styles.overlayHabilitacionesItem, styles.hourglassIconPosition]}
      />
      <View style={[styles.botonLogin1, styles.botonLogin1Position]}>
        <Image
          style={[styles.recuadrologinIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/recuadrologin.png")}
        />
        <Text style={[styles.escribaParaBuscar1, styles.escribaFlexBox]}>
          Escriba para buscar
        </Text>
      </View>
      <Image
        style={[styles.searchIcon1, styles.botonLogin1Position]}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <Image
        style={[styles.navbarVoluntariosIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/navbar-voluntarios.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlayLayout: {
    height: 142,
    backgroundColor: Color.colorGainsboro_500,
    width: 390,
  },
  botonLayout: {
    width: 304,
    height: 57,
  },
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  escribaFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    width: 304,
    height: 57,
    color: Color.colorBlack,
    position: "absolute",
  },
  searchIconLayout: {
    height: 38,
    width: 35,
  },
  filtroLayout: {
    opacity: 0.8,
    height: 26,
    width: 139,
    borderRadius: Border.br_5xs,
    left: 139,
    position: "absolute",
  },
  dificilPosition: {
    top: 4,
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    height: 16,
    width: 16,
  },
  vectorIconLayout1: {
    bottom: "26.07%",
    top: "19.46%",
    width: "10.82%",
    height: "54.47%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIconLayout: {
    bottom: "22.18%",
    top: "23.35%",
    width: "10.82%",
    height: "54.47%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  hourglassIconPosition: {
    top: 5,
    position: "absolute",
  },
  botonLogin1Position: {
    top: 42,
    position: "absolute",
  },
  overlayHabilitacionesChild: {
    top: 211,
    left: -442,
    position: "absolute",
    backgroundColor: Color.colorGainsboro_500,
  },
  aplicarFiltros: {
    top: 159,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.ralewayBold,
    width: 175,
    height: 57,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "700",
    left: 18,
    position: "absolute",
  },
  recuadrologinIcon: {
    borderRadius: Border.br_11xl,
    top: 0,
    left: 0,
    width: 304,
    height: 57,
  },
  escribaParaBuscar: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    justifyContent: "center",
    textAlign: "center",
  },
  botonLogin: {
    left: -371,
    top: 264,
    position: "absolute",
  },
  searchIcon: {
    left: -429,
    top: 264,
    position: "absolute",
  },
  dificil: {
    left: 8,
    fontFamily: FontFamily.spaceMonoBold,
    color: Color.colorWhite,
    width: 98,
    height: 19,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_base,
    top: 4,
    textAlign: "left",
    fontWeight: "700",
  },
  starIcon: {
    left: 114,
    top: 4,
    position: "absolute",
  },
  vectorIcon: {
    right: "20.63%",
    left: "68.54%",
  },
  vectorIcon1: {
    right: "36.51%",
    left: "52.67%",
  },
  filtroPerfil: {
    top: 194,
    backgroundColor: Color.colorRed,
  },
  vectorIcon3: {
    right: "6.2%",
    left: "82.97%",
  },
  vectorIcon4: {
    right: "21.36%",
    left: "67.82%",
  },
  filtroPerfil1: {
    top: 228,
    backgroundColor: Color.colorGold_200,
    opacity: 0.7,
    height: 26,
    width: 139,
    borderRadius: Border.br_5xs,
    left: 139,
    position: "absolute",
  },
  hourglassIcon: {
    left: 115,
    overflow: "hidden",
    height: 16,
    width: 16,
  },
  filtroPerfil2: {
    top: 262,
    backgroundColor: Color.colorLimegreen,
  },
  overlayHabilitacionesItem: {
    left: 1,
    height: 142,
    backgroundColor: Color.colorGainsboro_500,
    width: 390,
  },
  escribaParaBuscar1: {
    fontFamily: FontFamily.interRegular,
  },
  botonLogin1: {
    left: 58,
    width: 304,
    height: 57,
  },
  searchIcon1: {
    height: 38,
    width: 35,
    left: 18,
    top: 42,
  },
  navbarVoluntariosIcon: {
    top: 759,
    height: 86,
    display: "none",
    left: 0,
    width: 390,
  },
  overlayHabilitaciones: {
    backgroundColor: Color.colorWhite,
    height: 361,
    maxHeight: "100%",
    maxWidth: "100%",
    width: 390,
  },
});

export default OverlayHabilitaciones;
