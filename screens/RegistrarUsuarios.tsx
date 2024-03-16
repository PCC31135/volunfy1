import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const RegistrarUsuarios = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.registrarUsuarios}>
      <View style={[styles.recuadrousernameParent, styles.groupParentLayout]}>
        <Image
          style={[styles.recuadrousernameIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/recuadropassword.png")}
        />
        <Text style={styles.correoElectrnico}>Correo electrónico:</Text>
      </View>
      <View style={[styles.recuadropasswordParent, styles.groupParentLayout]}>
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/recuadropassword.png")}
        />
        <Text style={[styles.contrasea, styles.contraseaTypo]}>
          Contraseña:
        </Text>
      </View>
      <View style={[styles.recuadropasswordGroup, styles.groupParentLayout]}>
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/recuadropassword.png")}
        />
        <Text style={[styles.confirmarContrasea, styles.contraseaTypo]}>
          Confirmar contraseña:
        </Text>
      </View>
      <View
        style={[styles.recuadropasswordContainer, styles.groupParentLayout]}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/recuadropassword.png")}
        />
        <Text style={[styles.contrasea, styles.contraseaTypo]}>Provincia:</Text>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/recuadropassword.png")}
        />
        <Text style={[styles.contrasea, styles.contraseaTypo]}>
          Nombre y apellidos:
        </Text>
      </View>
      <Pressable
        style={[styles.recuadrologinParent, styles.groupParentLayout]}
        onPress={() => navigation.navigate("InicioDeSesin")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/recuadrologin1.png")}
        />
        <Text style={[styles.regstrate, styles.continuarFlexBox]}>
          REGÍSTRATE
        </Text>
      </Pressable>
      <Image
        style={styles.logovolunfy2Icon}
        contentFit="cover"
        source={require("../assets/logovolunfy-21.png")}
      />
      <View style={styles.recuadrogoogle} />
      <View style={[styles.recuadrofacebook, styles.recuadroappleLayout]} />
      <View style={[styles.recuadroapple, styles.recuadroappleLayout]} />
      <Image
        style={[styles.logogoogleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/logogoogle.png")}
      />
      <Image
        style={[styles.logofacebookIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/logofacebook.png")}
      />
      <Image
        style={[styles.logoappleIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/logoapple.png")}
      />
      <Text style={[styles.continuarConGoogle, styles.continuarFlexBox]}>
        Continuar con Google
      </Text>
      <Text style={[styles.continuarConFacebook, styles.continuarFlexBox]}>
        Continuar con Facebook
      </Text>
      <Text style={[styles.continuarConApple, styles.continuarFlexBox]}>
        Continuar con Apple
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 57,
    width: 330,
    position: "absolute",
  },
  iconLayout1: {
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    height: 57,
    width: 330,
    position: "absolute",
  },
  contraseaTypo: {
    left: 21,
    height: 31,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  continuarFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  recuadroappleLayout: {
    left: 103,
    height: 41,
    width: 236,
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    width: 40,
  },
  iconPosition: {
    left: 53,
    position: "absolute",
  },
  recuadrousernameIcon: {
    opacity: 0.65,
  },
  correoElectrnico: {
    top: 13,
    left: 22,
    height: 31,
    textAlign: "left",
    width: 130,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  recuadrousernameParent: {
    top: 458,
    left: 30,
    width: 330,
  },
  contrasea: {
    top: 15,
    width: 130,
    left: 21,
  },
  recuadropasswordParent: {
    top: 224,
    left: 30,
    width: 330,
  },
  confirmarContrasea: {
    top: 16,
    width: 151,
  },
  recuadropasswordGroup: {
    top: 302,
    left: 30,
    width: 330,
  },
  recuadropasswordContainer: {
    top: 380,
    left: 30,
    width: 330,
  },
  groupView: {
    top: 146,
    left: 30,
    width: 330,
  },
  regstrate: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: 0,
    top: 0,
    height: 57,
    width: 330,
  },
  recuadrologinParent: {
    top: 556,
    left: 31,
  },
  logovolunfy2Icon: {
    top: 41,
    left: 84,
    width: 222,
    height: 65,
    position: "absolute",
  },
  recuadrogoogle: {
    left: 102,
    height: 41,
    width: 236,
    backgroundColor: Color.colorGainsboro_300,
    top: 640,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  recuadrofacebook: {
    top: 699,
  },
  recuadroapple: {
    top: 758,
  },
  logogoogleIcon: {
    left: 52,
    top: 640,
    height: 40,
    width: 40,
    position: "absolute",
  },
  logofacebookIcon: {
    top: 700,
    height: 40,
    width: 40,
  },
  logoappleIcon: {
    top: 756,
    width: 46,
    height: 46,
  },
  continuarConGoogle: {
    top: 653,
    left: 158,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  continuarConFacebook: {
    top: 711,
    left: 151,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  continuarConApple: {
    top: 771,
    left: 163,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  registrarUsuarios: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default RegistrarUsuarios;
