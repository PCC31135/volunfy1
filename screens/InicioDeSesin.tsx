import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const InicioDeSesin = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.inicioDeSesin}>
      <Image
        style={[styles.recuadropasswordIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/recuadropassword.png")}
      />
      <Image
        style={[styles.recuadrousernameIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/recuadropassword.png")}
      />
      <Text style={[styles.changgmailcom, styles.textTypo]}>
        chang@gmail.com
      </Text>
      <Text style={[styles.text, styles.textTypo]}>**********</Text>
      <Text style={styles.noTienesCuenta}>¿No tienes cuenta?</Text>
      <Pressable
        style={styles.regstrate}
        onPress={() => navigation.navigate("RegistrarUsuarios")}
      >
        <Text style={[styles.regstrate1, styles.regstrate1FlexBox]}>
          Regístrate
        </Text>
      </Pressable>
      <Text style={[styles.hasOlvidadoLa, styles.regstrate1FlexBox]}>
        ¿Has olvidado la contraseña?
      </Text>
      <Image
        style={styles.personIcon}
        contentFit="cover"
        source={require("../assets/person1.png")}
      />
      <Image
        style={styles.inicioDeSesinChild}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={[styles.botonLogin, styles.iconLayout1]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.recuadrologinIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/recuadrologin1.png")}
        />
        <Text style={[styles.iniciarSesin, styles.iconPosition]}>
          INICIAR SESIÓN
        </Text>
      </Pressable>
      <Image
        style={styles.logovolunfy2Icon}
        contentFit="cover"
        source={require("../assets/logovolunfy-2.png")}
      />
      <View style={[styles.recuadrofacebook, styles.recuadrofacebookLayout]} />
      <Image
        style={[styles.logofacebookIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/logofacebook.png")}
      />
      <View style={[styles.recuadrogoogleParent, styles.parentLayout]}>
        <View style={[styles.recuadrogoogle, styles.recuadroappleLayout]} />
        <Image
          style={[styles.logogoogleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/logogoogle.png")}
        />
        <Text style={[styles.continuarConGoogle, styles.continuarTypo]}>
          Continuar con Google
        </Text>
      </View>
      <Text style={[styles.continuarConFacebook, styles.continuarTypo]}>
        Continuar con Facebook
      </Text>
      <View style={[styles.recuadroappleParent, styles.logoappleIconLayout]}>
        <View style={[styles.recuadroapple, styles.recuadroappleLayout]} />
        <Image
          style={[styles.logoappleIcon, styles.logoappleIconLayout]}
          contentFit="cover"
          source={require("../assets/logoapple.png")}
        />
        <Text style={[styles.continuarConApple, styles.continuarTypo]}>
          Continuar con Apple
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 57,
    width: 330,
    position: "absolute",
  },
  textTypo: {
    height: 31,
    width: 130,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  regstrate1FlexBox: {
    color: Color.colorSteelblue_100,
    height: 33,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  iconPosition: {
    left: 0,
    top: 0,
  },
  recuadrofacebookLayout: {
    height: 41,
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  parentLayout: {
    width: 286,
    left: 52,
  },
  recuadroappleLayout: {
    left: 50,
    height: 41,
    width: 236,
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  continuarTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  logoappleIconLayout: {
    height: 46,
    position: "absolute",
  },
  recuadropasswordIcon: {
    top: 319,
    borderRadius: Border.br_11xl,
    width: 330,
    left: 30,
  },
  recuadrousernameIcon: {
    top: 235,
    opacity: 0.65,
    borderRadius: Border.br_11xl,
    width: 330,
    left: 30,
  },
  changgmailcom: {
    top: 248,
    left: 42,
  },
  text: {
    top: 334,
    left: 51,
  },
  noTienesCuenta: {
    left: 83,
    width: 164,
    height: 33,
    justifyContent: "center",
    textAlign: "center",
    top: 550,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  regstrate1: {
    width: 74,
  },
  regstrate: {
    left: 215,
    top: 550,
    position: "absolute",
  },
  hasOlvidadoLa: {
    top: 529,
    left: 2,
    width: 388,
    position: "absolute",
  },
  personIcon: {
    top: 138,
    left: 170,
    width: 49,
    height: 47,
    position: "absolute",
    overflow: "hidden",
  },
  inicioDeSesinChild: {
    top: 129,
    left: 161,
    width: 67,
    height: 66,
    position: "absolute",
  },
  recuadrologinIcon: {
    height: 57,
    width: 330,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  iniciarSesin: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    justifyContent: "center",
    left: 0,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    height: 57,
    width: 330,
    position: "absolute",
  },
  botonLogin: {
    top: 440,
    left: 30,
  },
  logovolunfy2Icon: {
    top: 41,
    left: 72,
    width: 217,
    height: 65,
    position: "absolute",
  },
  recuadrofacebook: {
    top: 680,
    left: 102,
    width: 236,
    backgroundColor: Color.colorGainsboro_300,
    height: 41,
    borderRadius: Border.br_11xl,
  },
  logofacebookIcon: {
    top: 681,
    left: 52,
    width: 40,
  },
  recuadrogoogle: {
    top: 0,
    left: 50,
  },
  logogoogleIcon: {
    left: 0,
    top: 0,
  },
  continuarConGoogle: {
    top: 13,
    left: 106,
  },
  recuadrogoogleParent: {
    top: 617,
    height: 41,
    position: "absolute",
  },
  continuarConFacebook: {
    top: 692,
    left: 150,
  },
  recuadroapple: {
    top: 2,
  },
  logoappleIcon: {
    width: 46,
    left: 0,
    top: 0,
  },
  continuarConApple: {
    top: 15,
    left: 110,
  },
  recuadroappleParent: {
    top: 737,
    width: 286,
    left: 52,
  },
  inicioDeSesin: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default InicioDeSesin;
