import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Chats = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.chats}>
      <View style={[styles.chatsChild, styles.chatsChildShadowBox]} />
      <Pressable
        style={[styles.chatsItem, styles.chatsItemLayout]}
        onPress={() => navigation.navigate("ChatDavidGonzlez")}
      />
      <Pressable
        style={[styles.chatsItem, styles.chatsItemLayout]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      />
      <Text style={styles.david}>David</Text>
      <Text style={styles.yoIrEn}>Yo iré en coche, no tengo problemas...</Text>
      <Text style={styles.deFeb}>{`4 de feb
`}</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.chatsItemLayout]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      />
      <Pressable
        style={[styles.chatsChild1, styles.chatsChildLayout2]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      />
      <Text style={[styles.mara, styles.ferTypo]}>María</Text>
      <Text style={[styles.noEstoySeguro, styles.perfectoTypo]}>
        No estoy seguro lo tendría que...
      </Text>
      <Text style={[styles.deFeb1, styles.febTypo]}>{`28 de feb
`}</Text>
      <Pressable
        style={[styles.chatsChild2, styles.chatsChildLayout2]}
        onPress={() => navigation.navigate("ChatDavidGonzlez")}
      />
      <Text style={[styles.david1, styles.david1Position]}>David</Text>
      <Text style={[styles.perfectoNos, styles.perfectoTypo]}>
        Perfecto , nos vemos ahi recuerda traer...
      </Text>
      <View style={styles.rectangleView} />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-42.png")}
      />
      <Text style={[styles.deMar, styles.febTypo]}>{`4 de mar
`}</Text>
      <Pressable
        style={[styles.chatsChild3, styles.chatsChildLayout2]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      />
      <Text style={[styles.claudia, styles.ferTypo]}>Claudia</Text>
      <Text style={[styles.perfectoYo, styles.perfectoTypo]}>
        Perfecto , yo pongo la gasolina...
      </Text>
      <Text style={[styles.deEne, styles.eneTypo]}>{`27 de ene
`}</Text>
      <Pressable
        style={[styles.chatsChild4, styles.chatsChildLayout2]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      />
      <Text style={[styles.mateo, styles.ferTypo]}>Mateo</Text>
      <Text style={[styles.realmenteNoSe, styles.perfectoTypo]}>
        Realmente no se cuantos vamos..
      </Text>
      <Text style={[styles.deEne1, styles.eneTypo]}>{`24 de ene
`}</Text>
      <Pressable
        style={[styles.chatsChild5, styles.chatsChildLayout2]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      />
      <Text style={[styles.fer, styles.ferTypo]}>Fer</Text>
      <Text style={[styles.estoyLlegando, styles.perfectoTypo]}>
        Estoy llegando...
      </Text>
      <Image
        style={[styles.chatsChild6, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-25.png")}
      />
      <Text style={[styles.deEne2, styles.eneTypo]}>{`14 de ene
`}</Text>
      <Pressable
        style={[styles.chatsChild7, styles.chatsChildLayout2]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      />
      <Text style={[styles.rodrigo, styles.rodrigoPosition]}>Rodrigo</Text>
      <Text style={[styles.perfectoNos1, styles.rodrigoPosition]}>
        Perfecto , nos vemos ahi recuerda traer...
      </Text>
      <Text style={[styles.deFeb2, styles.febTypo]}>{`18 de feb
`}</Text>
      <Text style={[styles.mensajes, styles.grupos1Typo]}>Mensajes</Text>
      <View style={[styles.chatsChild8, styles.chatsChildShadowBox]} />
      <Pressable
        style={styles.grupos}
        onPress={() => navigation.navigate("Groups")}
      >
        <Text style={[styles.grupos1, styles.grupos1Typo]}>Grupos</Text>
      </Pressable>
      <Image
        style={[styles.chatsChild9, styles.chatsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-221.png")}
      />
      <Image
        style={[styles.chatsChild10, styles.chatsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-222.png")}
      />
      <Image
        style={[styles.chatsChild11, styles.chatsChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-71.png")}
      />
      <Image
        style={[styles.chatsChild12, styles.chatsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-151.png")}
      />
      <Image
        style={[styles.chatsChild13, styles.chatsChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-223.png")}
      />
      <Image
        style={[styles.chatsChild14, styles.chatsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <Text style={[styles.queDivertidoSabes, styles.martaPosition]}>
        Que divertido!!!, sabes donde ...
      </Text>
      <Text style={[styles.marta, styles.martaPosition]}>Marta</Text>
      <Text style={styles.deFeb3}>{`17 de feb
`}</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-41.png")}
      />
      <Pressable
        style={[styles.navbarChats, styles.groupIconPosition]}
        onPress={() => navigation.navigate("Habilitaciones")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/navbar-chats1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  chatsChildShadowBox: {
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
  chatsItemLayout: {
    height: 92,
    borderColor: Color.colorGainsboro_100,
    width: 390,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  chatsChildLayout2: {
    width: 397,
    height: 92,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  ferTypo: {
    width: 116,
    height: 17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  perfectoTypo: {
    width: 287,
    height: 14,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
  },
  febTypo: {
    width: 74,
    height: 19,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    left: 315,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  david1Position: {
    left: 78,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 56,
    width: 59,
    position: "absolute",
  },
  eneTypo: {
    left: 316,
    width: 74,
    height: 19,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rodrigoPosition: {
    left: 76,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  grupos1Typo: {
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
  },
  chatsChildLayout1: {
    width: 56,
    height: 56,
    position: "absolute",
  },
  chatsChildLayout: {
    width: 55,
    height: 56,
    position: "absolute",
  },
  martaPosition: {
    left: 83,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupIconPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  chatsChild: {
    top: 117,
    backgroundColor: "rgba(217, 217, 217, 0.3)",
    width: 396,
    height: 822,
    left: -1,
  },
  chatsItem: {
    top: 562,
    left: -1,
  },
  david: {
    top: 591,
    height: 17,
    left: 74,
    width: 114,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  yoIrEn: {
    top: 608,
    height: 14,
    width: 283,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    left: 74,
    position: "absolute",
  },
  deFeb: {
    top: 580,
    height: 19,
    width: 73,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    left: 315,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectanglePressable: {
    top: 467,
    left: 0,
  },
  chatsChild1: {
    top: 280,
    left: -1,
  },
  mara: {
    top: 311,
    left: 79,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  noEstoySeguro: {
    top: 329,
    left: 78,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  deFeb1: {
    top: 306,
  },
  chatsChild2: {
    top: 187,
    left: -1,
  },
  david1: {
    top: 216,
    width: 116,
    height: 17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  perfectoNos: {
    top: 233,
    left: 79,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleView: {
    top: 735,
    left: -2,
    borderColor: Color.colorWhite,
    width: 395,
    height: 76,
    display: "none",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  ellipseIcon: {
    top: 205,
    left: 7,
  },
  deMar: {
    top: 210,
  },
  chatsChild3: {
    top: 658,
    left: 0,
  },
  claudia: {
    top: 687,
    left: 79,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  perfectoYo: {
    top: 704,
    left: 79,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  deEne: {
    top: 681,
  },
  chatsChild4: {
    top: 754,
    left: 0,
  },
  mateo: {
    top: 783,
    left: 79,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  realmenteNoSe: {
    top: 800,
    left: 81,
    textAlign: "left",
    color: Color.colorBlack,
    width: 287,
    position: "absolute",
  },
  deEne1: {
    top: 777,
  },
  chatsChild5: {
    top: 849,
    left: 0,
  },
  fer: {
    top: 878,
    left: 79,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  estoyLlegando: {
    top: 893,
    left: 79,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  chatsChild6: {
    top: 867,
    left: 8,
  },
  deEne2: {
    top: 872,
  },
  chatsChild7: {
    top: 373,
    left: -1,
  },
  rodrigo: {
    top: 402,
    width: 116,
    height: 17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  perfectoNos1: {
    top: 419,
    width: 287,
    height: 14,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
  },
  deFeb2: {
    top: 393,
  },
  mensajes: {
    top: 142,
    left: 18,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.ralewayBold,
    width: 118,
    height: 27,
    position: "absolute",
  },
  chatsChild8: {
    top: 136,
    left: 284,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGainsboro_100,
    width: 81,
    height: 33,
  },
  grupos1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interBold,
    width: 66,
    height: 23,
  },
  grupos: {
    left: 298,
    top: 144,
    position: "absolute",
  },
  chatsChild9: {
    top: 300,
    left: 9,
  },
  chatsChild10: {
    top: 391,
    left: 10,
  },
  chatsChild11: {
    top: 482,
    left: 9,
  },
  chatsChild12: {
    top: 576,
    left: 9,
  },
  chatsChild13: {
    top: 772,
    left: 8,
  },
  chatsChild14: {
    top: 676,
    left: 9,
  },
  queDivertidoSabes: {
    top: 519,
    height: 18,
    width: 283,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    left: 83,
  },
  marta: {
    top: 502,
    height: 24,
    left: 83,
    width: 114,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  deFeb3: {
    top: 485,
    height: 26,
    width: 73,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    left: 315,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupIcon: {
    top: -21,
    height: 140,
    left: 0,
  },
  icon: {
    height: "100%",
    display: "none",
    width: "100%",
  },
  navbarChats: {
    top: 759,
    height: 86,
    left: 0,
  },
  chats: {
    flex: 1,
    height: 922,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Chats;
