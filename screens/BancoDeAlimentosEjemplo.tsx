import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const BancoDeAlimentosEjemplo = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.bancoDeAlimentosEjemplo}>
      <Image
        style={styles.bancoDeAlimentosEjemploChild}
        contentFit="cover"
        source={require("../assets/rectangle-128.png")}
      />
      <View style={styles.bancoDeAlimentosEjemploItem} />
      <Text style={[styles.text, styles.textLayout]}>27/03/2024</Text>
      <LinearGradient
        style={styles.bancoDeAlimentosEjemploInner}
        locations={[0, 1]}
        colors={["#ade5cd", "#ade5cd"]}
      />
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.ttuloTarjeta, styles.textLayout]}>
        Banco de Alimentos
      </Text>
      <Image
        style={[styles.image7Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={[styles.image8Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <Text style={styles.neteANuestro}>
        Únete a nuestro equipo como voluntario en el banco de alimentos y ayuda
        a distribuir alimentos a individuos y familias necesitadas en nuestra
        comunidad. Clasifica, embala y distribuye alimentos, participa en
        actividades de sensibilización y educación sobre seguridad alimentaria,
        y contribuye a combatir el hambre y la inseguridad alimentaria
      </Text>
      <Text style={[styles.text1, styles.text1Layout]}>12:00 - 14:00</Text>
      <Image
        style={styles.image9Icon}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildShadowBox]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Pressable
          style={styles.apuntate}
          onPress={() => navigation.navigate("Groups")}
        >
          <Text style={[styles.apuntate1, styles.text1Layout]}>Apuntate!</Text>
        </Pressable>
      </View>
      <Text style={[styles.ong, styles.ongTypo]}>{`ONG:
`}</Text>
      <Text style={[styles.fesbal, styles.ongTypo]}>FESBAL</Text>
      <Image
        style={[styles.groupIcon, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/group-55.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    height: 26,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    height: 72,
    width: 72,
    top: 382,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text1Layout: {
    height: 27,
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupChildShadowBox: {
    height: 54,
    width: 147,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  ongTypo: {
    fontFamily: FontFamily.vartaBold,
    fontSize: FontSize.size_13xl,
    left: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "700",
    position: "absolute",
  },
  bancoDeAlimentosEjemploChild: {
    top: 21,
    left: -1,
    width: 392,
    height: 993,
    position: "absolute",
  },
  bancoDeAlimentosEjemploItem: {
    marginTop: 154.5,
    marginLeft: -171,
    top: "50%",
    left: "50%",
    backgroundColor: "#fffafa",
    height: 41,
    width: 333,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  text: {
    top: 640,
    left: 60,
    fontFamily: FontFamily.ralewayBold,
    width: 110,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  bancoDeAlimentosEjemploInner: {
    top: 669,
    left: 198,
    width: 33,
    height: 3,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  image6Icon: {
    top: 140,
    left: -17,
    width: 444,
    height: 214,
    position: "absolute",
  },
  rectangleView: {
    top: 184,
    left: 69,
    borderRadius: Border.br_11xl,
    backgroundColor: "rgba(217, 217, 217, 0.85)",
    width: 272,
    height: 56,
    position: "absolute",
  },
  ttuloTarjeta: {
    top: 195,
    left: 89,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.creteRoundRegular,
    width: 244,
  },
  image7Icon: {
    left: 211,
  },
  image8Icon: {
    left: 291,
  },
  neteANuestro: {
    top: 481,
    left: 24,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    textAlign: "justify",
    height: 119,
    color: Color.colorBlack,
    width: 333,
    position: "absolute",
  },
  text1: {
    top: 642,
    left: 219,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemiBold,
    width: 131,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  image9Icon: {
    top: 688,
    left: 28,
    height: 173,
    borderRadius: Border.br_3xs,
    width: 333,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorGold_200,
    height: 54,
    width: 147,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  apuntate1: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.zillaSlabBold,
    width: 120,
    fontWeight: "700",
  },
  apuntate: {
    left: 22,
    top: 14,
    position: "absolute",
  },
  rectangleParent: {
    top: 877,
    left: 115,
    position: "absolute",
  },
  ong: {
    top: 373,
    width: 77,
    height: 39,
  },
  fesbal: {
    top: 418,
    width: 151,
    height: 36,
  },
  groupIcon: {
    width: 390,
    height: 140,
  },
  bancoDeAlimentosEjemplo: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 955,
  },
});

export default BancoDeAlimentosEjemplo;
