import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export type SubmarinismoEjemploType = {
  onClose?: () => void;
};

const SubmarinismoEjemplo = ({ onClose }: SubmarinismoEjemploType) => {
  return (
    <View style={styles.submarinismoEjemplo}>
      <View style={styles.submarinismoEjemploChild} />
      <Text style={[styles.ttuloTarjeta, styles.ttuloTypo]}>Aplicaciones</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={styles.filtroPerfilParent}>
          <View style={[styles.filtroPerfil, styles.filtroLayout1]}>
            <Text style={[styles.horas, styles.horasTypo]}>70 horas</Text>
            <Image
              style={[styles.hourglassIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/hourglass.png")}
            />
          </View>
          <View style={[styles.filtroPerfil1, styles.filtroLayout1]}>
            <Text style={[styles.horas, styles.horasTypo]}>Murcia</Text>
            <Image
              style={[styles.golfIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/golf.png")}
            />
          </View>
          <View style={[styles.filtroPerfil2, styles.filtroLayout1]}>
            <Text style={[styles.horas, styles.horasTypo]}>Dificil</Text>
            <Image
              style={[styles.starIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
            <Image
              style={[styles.starIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
            <Image
              style={[styles.starIcon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
          </View>
          <Image
            style={styles.imagenIcon}
            contentFit="cover"
            source={require("../assets/imagen16.png")}
          />
          <Text style={[styles.ttuloTarjeta1, styles.ttuloTypo]}>
            Submarinismo
          </Text>
        </View>
      </View>
      <View style={[styles.filtroPerfil3, styles.filtroLayout]}>
        <Text style={[styles.precio280, styles.horasTypo]}>Precio: 280€</Text>
        <Image
          style={[styles.hourglassIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/hourglass.png")}
        />
      </View>
      <View style={[styles.filtroPerfil4, styles.filtroLayout]}>
        <Text style={styles.inscribirme}>Inscribirme!</Text>
        <Image
          style={[styles.checkmarkDoneIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/checkmarkdone.png")}
        />
      </View>
      <Text style={styles.bodyTarjeta}>
        Sumérgete en la aventura y conviértete en un buzo certificado.
      </Text>
      <Image
        style={styles.capturaDePantalla20240315}
        contentFit="cover"
        source={require("../assets/captura-de-pantalla-20240315-a-las-2118-1.png")}
      />
      <View style={[styles.tarjeta11Wrapper, styles.tarjeta11Layout]}>
        <View style={[styles.tarjeta11, styles.tarjeta11Layout]}>
          <View style={styles.tarjeta11ShadowBox} />
          <Text style={[styles.bodyTarjeta1, styles.bodyTypo]}>
            Ayuda a fauna marina afectada
          </Text>
        </View>
      </View>
      <View style={[styles.tarjeta11Container, styles.tarjeta11Layout]}>
        <View style={[styles.tarjeta11, styles.tarjeta11Layout]}>
          <View style={styles.tarjeta11ShadowBox} />
          <Text style={[styles.bodyTarjeta1, styles.bodyTypo]}>
            Ayuda a flora marina afectada
          </Text>
        </View>
      </View>
      <View style={[styles.tarjeta11Frame, styles.groupViewPosition]}>
        <View style={[styles.tarjeta11, styles.tarjeta11Layout]}>
          <View style={styles.tarjeta11ShadowBox} />
          <Text style={[styles.bodyTarjeta1, styles.bodyTypo]}>
            Actividades de tiempo libre en el mar
          </Text>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.tarjeta11, styles.tarjeta11Layout]}>
          <View style={styles.tarjeta11ShadowBox} />
          <Text style={[styles.bodyTarjeta4, styles.bodyTypo]}>
            Limpieza de fondos marinos
          </Text>
        </View>
      </View>
      <Image
        style={styles.submarinismoEjemploItem}
        contentFit="cover"
        source={require("../assets/group-411.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ttuloTypo: {
    height: 45,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    fontSize: FontSize.size_7xl,
    position: "absolute",
  },
  filtroLayout1: {
    opacity: 0.8,
    height: 26,
    width: 139,
    borderRadius: Border.br_5xs,
    left: 159,
    position: "absolute",
  },
  horasTypo: {
    height: 19,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceMonoBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 4,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    height: 16,
    width: 16,
    position: "absolute",
  },
  filtroLayout: {
    width: 159,
    top: 783,
    opacity: 0.8,
    height: 26,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  tarjeta11Layout: {
    height: 71,
    width: 156,
    position: "absolute",
  },
  bodyTypo: {
    fontSize: FontSize.size_sm,
    left: 7,
    top: 14,
    color: Color.colorGray_300,
    fontFamily: FontFamily.ralewayRegular,
    width: 141,
    textAlign: "left",
    position: "absolute",
  },
  groupViewPosition: {
    left: 34,
    height: 71,
    width: 156,
    position: "absolute",
  },
  submarinismoEjemploChild: {
    top: 304,
    left: -6,
    backgroundColor: Color.colorGainsboro_600,
    height: 1228,
    position: "absolute",
    width: 390,
  },
  ttuloTarjeta: {
    top: 487,
    left: 108,
    width: 163,
  },
  groupChild: {
    backgroundColor: "rgba(217, 217, 217, 0.7)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
    height: 309,
    width: 336,
    position: "absolute",
  },
  horas: {
    left: 8,
    width: 98,
  },
  hourglassIcon: {
    left: 115,
    top: 5,
    height: 16,
    width: 16,
  },
  filtroPerfil: {
    top: 244,
    backgroundColor: Color.colorBlack,
    opacity: 0.8,
    height: 26,
    width: 139,
    borderRadius: Border.br_5xs,
    left: 159,
  },
  golfIcon: {
    left: 113,
    top: 5,
    height: 16,
    width: 16,
  },
  filtroPerfil1: {
    top: 159,
    backgroundColor: Color.colorBlack,
    opacity: 0.8,
    height: 26,
    width: 139,
    borderRadius: Border.br_5xs,
    left: 159,
  },
  starIcon: {
    left: 114,
    top: 4,
    height: 16,
    width: 16,
  },
  starIcon1: {
    left: 94,
    top: 4,
    height: 16,
    width: 16,
  },
  starIcon2: {
    left: 74,
    top: 4,
    height: 16,
    width: 16,
  },
  filtroPerfil2: {
    top: 201,
    backgroundColor: Color.colorRed,
    opacity: 0.8,
    height: 26,
    width: 139,
    borderRadius: Border.br_5xs,
    left: 159,
  },
  imagenIcon: {
    top: 51,
    height: 94,
    width: 141,
    borderRadius: Border.br_5xl,
    left: 0,
    position: "absolute",
  },
  ttuloTarjeta1: {
    left: 56,
    width: 182,
    top: 0,
  },
  filtroPerfilParent: {
    top: 15,
    left: 21,
    width: 298,
    height: 270,
    position: "absolute",
  },
  rectangleParent: {
    top: 143,
    left: 27,
    height: 309,
    width: 336,
    position: "absolute",
  },
  precio280: {
    left: 10,
    width: 127,
  },
  hourglassIcon1: {
    top: 6,
    left: 133,
  },
  filtroPerfil3: {
    left: 25,
    backgroundColor: Color.colorSteelblue_200,
  },
  inscribirme: {
    top: 3,
    left: 12,
    width: 128,
    height: 19,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.spaceMonoBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  checkmarkDoneIcon: {
    left: 140,
    top: 5,
    height: 16,
    width: 16,
  },
  filtroPerfil4: {
    left: 207,
    backgroundColor: Color.colorGold_200,
  },
  bodyTarjeta: {
    top: 209,
    left: 213,
    color: Color.colorGray_300,
    fontFamily: FontFamily.ralewayRegular,
    width: 128,
    height: 94,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  capturaDePantalla20240315: {
    top: 317,
    left: 47,
    width: 142,
    height: 111,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  tarjeta11ShadowBox: {
    borderWidth: 3,
    borderColor: Color.colorLightseagreen_100,
    borderStyle: "solid",
    height: 71,
    width: 156,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  bodyTarjeta1: {
    height: 39,
  },
  tarjeta11: {
    left: 0,
    top: 0,
  },
  tarjeta11Wrapper: {
    left: 216,
    width: 156,
    top: 557,
  },
  tarjeta11Container: {
    top: 647,
    left: 216,
    width: 156,
  },
  tarjeta11Frame: {
    top: 646,
  },
  bodyTarjeta4: {
    height: 46,
  },
  groupView: {
    top: 557,
  },
  submarinismoEjemploItem: {
    top: -14,
    height: 137,
    left: 0,
    position: "absolute",
    width: 390,
  },
  submarinismoEjemplo: {
    height: 1392,
    maxWidth: "100%",
    maxHeight: "100%",
    width: 390,
    backgroundColor: Color.colorWhite,
  },
});

export default SubmarinismoEjemplo;
