import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Groups = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.groups}>
      <Pressable
        style={[styles.groupsChild, styles.groupsChildLayout2]}
        onPress={() => navigation.navigate("ChatDavidGonzlez")}
      />
      <View style={[styles.groupsItem, styles.groupsChildPosition1]} />
      <View style={[styles.groupsInner, styles.groupsInnerLayout]} />
      <View style={[styles.rectangleView, styles.groupsInnerLayout]} />
      <Image
        style={[styles.ellipseIcon, styles.groupsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.groupsChild1, styles.groupsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-101.png")}
      />
      <Image
        style={[styles.groupsChild2, styles.groupsChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.groupsChild3, styles.groupsChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <View style={[styles.groupsChild4, styles.groupsChildPosition1]} />
      <Image
        style={[styles.groupsChild5, styles.groupsChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <View style={[styles.groupsChild6, styles.groupsChildPosition1]} />
      <Image
        style={[styles.groupsChild7, styles.groupsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Text style={styles.voluntariadoDeLa}>Voluntariado de la paz</Text>
      <Text style={[styles.bancoDeAlimentos, styles.nataliaTypo]}>
        Banco de alimentos
      </Text>
      <Text style={[styles.monitorInfantil, styles.compaaHospitalTypo]}>
        Monitor infantil
      </Text>
      <Text style={[styles.residenciasTerceraEdad, styles.compaaHospitalTypo]}>
        Residencias tercera edad
      </Text>
      <Text style={[styles.compaaHospital, styles.compaaHospitalTypo]}>
        Compañía hospital
      </Text>
      <Text style={[styles.reservaNatural, styles.compaaHospitalTypo]}>
        Reserva natural
      </Text>
      <Text style={[styles.perfectoNos, styles.siYoLayout]}>
        Perfecto , nos vemos ahi recuerda traer...
      </Text>
      <View style={[styles.groupsChild8, styles.groupsChildLayout]} />
      <View style={[styles.groupsChild9, styles.groupsChildLayout]} />
      <View style={[styles.groupsChild10, styles.groupsChildLayout]} />
      <Text style={[styles.residenciasTerceraEdad1, styles.siYoPosition]}>
        Residencias tercera edad
      </Text>
      <Text style={[styles.natalia, styles.nataliaPosition]}>Natalia</Text>
      <Text style={[styles.mateo, styles.siYoPosition]}>Mateo</Text>
      <Text style={[styles.siYo, styles.siYoPosition]}>
        Si , yo pongo la gasolina , nos v....
      </Text>
      <Text style={[styles.puedeEstarInteresante, styles.siYoPosition]}>
        Puede estar interesante pero yo...
      </Text>
      <Image
        style={styles.groupsChild11}
        contentFit="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Image
        style={[styles.groupsChild12, styles.nataliaPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={[styles.groupsChild13, styles.groupsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Text style={[styles.deMar, styles.marTypo]}>{`4 de mar
`}</Text>
      <Text style={[styles.deMar1, styles.marTypo]}>{`3 de mar
`}</Text>
      <Text style={[styles.deMar2, styles.febTypo]}>{`1 de mar
`}</Text>
      <Text style={[styles.feb, styles.febTypo]}>{`29 feb
`}</Text>
      <Text style={[styles.feb1, styles.febTypo]}>{`28 feb
`}</Text>
      <Text style={[styles.feb2, styles.marTypo]}>{`28 feb
`}</Text>
      <Text style={[styles.grupos, styles.chatsTypo]}>Grupos</Text>
      <Pressable
        style={styles.logovolunfy2}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/logovolunfy-2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Chats")}
      />
      <Text style={[styles.chats, styles.chatsTypo]}>Chats</Text>
      <Pressable style={styles.arrowBack} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowback.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.navbarChats, styles.groupsChildPosition1]}
        onPress={() => navigation.navigate("Habilitaciones")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/navbar-chats.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupsChildLayout2: {
    height: 90,
    width: 395,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    backgroundColor: Color.colorWhite,
  },
  groupsChildPosition1: {
    left: 0,
    position: "absolute",
  },
  groupsInnerLayout: {
    height: 88,
    left: -1,
    width: 395,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupsChildLayout1: {
    height: 50,
    width: 50,
  },
  groupsChildPosition: {
    left: 12,
    height: 50,
    width: 50,
    position: "absolute",
  },
  nataliaTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  compaaHospitalTypo: {
    left: 71,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  siYoLayout: {
    height: 14,
    width: 230,
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
  },
  groupsChildLayout: {
    height: 76,
    width: 395,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  siYoPosition: {
    left: 11,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  nataliaPosition: {
    top: 944,
    position: "absolute",
  },
  marTypo: {
    height: 19,
    width: 74,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  febTypo: {
    left: 331,
    height: 19,
    width: 74,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  chatsTypo: {
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupsChild: {
    top: 166,
    left: 2,
    position: "absolute",
  },
  groupsItem: {
    top: 338,
    height: 90,
    width: 395,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    backgroundColor: Color.colorWhite,
  },
  groupsInner: {
    top: 516,
  },
  rectangleView: {
    top: 601,
  },
  ellipseIcon: {
    top: 360,
    left: 8,
    position: "absolute",
  },
  groupsChild1: {
    left: 322,
    top: 449,
    position: "absolute",
  },
  groupsChild2: {
    top: 534,
  },
  groupsChild3: {
    top: 618,
  },
  groupsChild4: {
    top: 427,
    height: 90,
    width: 395,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    backgroundColor: Color.colorWhite,
  },
  groupsChild5: {
    top: 450,
  },
  groupsChild6: {
    top: 253,
    height: 90,
    width: 395,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    backgroundColor: Color.colorWhite,
  },
  groupsChild7: {
    top: 271,
    left: 9,
    position: "absolute",
  },
  voluntariadoDeLa: {
    fontSize: FontSize.size_sm,
    width: 173,
    height: 17,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 76,
    top: 176,
    position: "absolute",
  },
  bancoDeAlimentos: {
    left: 75,
    width: 116,
    top: 273,
    height: 17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  monitorInfantil: {
    top: 368,
    width: 116,
    height: 17,
  },
  residenciasTerceraEdad: {
    top: 463,
    width: 161,
  },
  compaaHospital: {
    top: 558,
    width: 116,
  },
  reservaNatural: {
    top: 635,
    width: 116,
  },
  perfectoNos: {
    top: 215,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    left: 76,
    width: 230,
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
    position: "absolute",
  },
  groupsChild8: {
    top: 1001,
    left: -12,
    borderColor: Color.colorWhite,
    height: 76,
  },
  groupsChild9: {
    top: 939,
    left: 4,
    height: 76,
    borderColor: Color.colorGainsboro_100,
  },
  groupsChild10: {
    top: 735,
    left: -2,
    display: "none",
    borderColor: Color.colorWhite,
    height: 76,
  },
  residenciasTerceraEdad1: {
    top: 1024,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    height: 20,
    width: 161,
  },
  natalia: {
    left: 63,
    width: 116,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    height: 17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  mateo: {
    top: 956,
    width: 116,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  siYo: {
    top: 982,
    height: 14,
    width: 230,
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
  },
  puedeEstarInteresante: {
    top: 1055,
    height: 14,
    width: 230,
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
  },
  groupsChild11: {
    top: 176,
    left: 12,
    height: 50,
    width: 50,
    position: "absolute",
  },
  groupsChild12: {
    left: 312,
    height: 50,
    width: 50,
  },
  groupsChild13: {
    top: 1021,
    left: 302,
    position: "absolute",
  },
  deMar: {
    top: 199,
    left: 333,
    width: 74,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  deMar1: {
    left: 328,
    top: 273,
  },
  deMar2: {
    top: 369,
  },
  feb: {
    top: 449,
  },
  feb1: {
    top: 538,
  },
  feb2: {
    top: 624,
    left: 333,
    width: 74,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  grupos: {
    top: 123,
    left: 14,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.ralewayBold,
    width: 118,
    height: 27,
  },
  logovolunfy2: {
    left: 77,
    top: 27,
    width: 217,
    height: 65,
    position: "absolute",
  },
  rectanglePressable: {
    top: 117,
    left: 284,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGainsboro_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 81,
    height: 33,
    position: "absolute",
  },
  chats: {
    top: 125,
    left: 299,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interBold,
    width: 66,
    height: 23,
  },
  icon1: {
    overflow: "hidden",
  },
  arrowBack: {
    left: 36,
    top: 44,
    width: 33,
    height: 34,
    position: "absolute",
  },
  icon2: {
    display: "none",
  },
  navbarChats: {
    top: 759,
    width: 390,
    height: 86,
  },
  groups: {
    flex: 1,
    height: 899,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Groups;
