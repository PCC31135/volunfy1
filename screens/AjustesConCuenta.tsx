import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AjustesConCuenta = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.ajustesConCuenta}>
      <Pressable
        style={[styles.bodyTarjeta, styles.bodyPosition]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      >
        <Text style={styles.preferenciasDeLaCuenta}>
          Preferencias de la cuenta
        </Text>
      </Pressable>
      <Image
        style={[styles.shieldIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/shield.png")}
      />
      <Text style={styles.bodyTarjeta1}>@helpingChan_1974</Text>
      <Pressable
        style={[styles.bodyTarjeta2, styles.bodyPosition]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      >
        <Text style={styles.preferenciasDeLaCuenta}>
          Inicio de sesion y seguridad
        </Text>
      </Pressable>
      <Image
        style={[styles.keyIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/key.png")}
      />
      <Pressable
        style={[styles.bodyTarjeta3, styles.bodyPosition]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      >
        <Text style={styles.preferenciasDeLaCuenta}>Servicios de Volunfy</Text>
      </Pressable>
      <Pressable
        style={[styles.bodyTarjeta4, styles.bodyPosition]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      >
        <Text style={styles.preferenciasDeLaCuenta}>Notificaciones</Text>
      </Pressable>
      <Pressable
        style={[styles.bodyTarjeta5, styles.bodyPosition]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      >
        <Text style={styles.preferenciasDeLaCuenta}>Privacidad de datos</Text>
      </Pressable>
      <Pressable
        style={[styles.bodyTarjeta6, styles.bodyPosition]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      >
        <Text style={styles.preferenciasDeLaCuenta}>Datos de publicidad</Text>
      </Pressable>
      <Pressable
        style={[styles.bodyTarjeta7, styles.bodyPosition]}
        onPress={() => navigation.navigate("PaginaEnConstruccion")}
      >
        <Text style={styles.preferenciasDeLaCuenta}>Visibilidad</Text>
      </Pressable>
      <Image
        style={[styles.eyeIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/eye.png")}
      />
      <Text style={styles.configuracin}>Configuración</Text>
      <View style={[styles.ajustesConCuentaChild, styles.ajustesPosition]} />
      <Pressable
        style={[styles.arrowBack, styles.bodyIconLayout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrowback.png")}
        />
      </Pressable>
      <Image
        style={[styles.personIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/person.png")}
      />
      <Image
        style={[styles.todayIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/today.png")}
      />
      <Image
        style={[styles.bodyIcon, styles.bodyIconLayout]}
        contentFit="cover"
        source={require("../assets/body.png")}
      />
      <Image
        style={[styles.notificationsIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/notifications.png")}
      />
      <Text style={[styles.centroDeAyuda, styles.versin100Typo]}>
        Centro de ayuda
      </Text>
      <Text style={[styles.polticasParaLa, styles.versin100Typo]}>
        Políticas para la comunidad profesional
      </Text>
      <Text style={[styles.polticaDePrivacidad, styles.versin100Typo]}>
        Política de privacidad
      </Text>
      <Text style={[styles.contratoDeLicencia, styles.versin100Typo]}>
        Contrato de licencia para el usuario final
      </Text>
      <Text style={[styles.cerrarSesin, styles.versin100Typo]}>
        Cerrar sesión
      </Text>
      <Text style={[styles.versin100, styles.versin100Typo]}>
        Versión: 1.0.0
      </Text>
      <Text style={[styles.condicionesDeUso, styles.versin100Typo]}>
        Condiciones de uso
      </Text>
      <Text style={[styles.accesibilidad, styles.versin100Typo]}>
        Accesibilidad
      </Text>
      <Text style={[styles.transparenciaDeLas, styles.versin100Typo]}>
        Transparencia de las recomendaciones
      </Text>
      <Image
        style={styles.ajustesConCuentaItem}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Pressable
        style={styles.help}
        onPress={() => navigation.navigate("AboutUs")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/help.png")}
        />
      </Pressable>
      <Image
        style={[styles.ajustesConCuentaInner, styles.ajustesPosition]}
        contentFit="cover"
        source={require("../assets/group-32.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyPosition: {
    left: 103,
    position: "absolute",
  },
  iconLayout1: {
    height: 33,
    overflow: "hidden",
    width: 33,
    left: 36,
    position: "absolute",
  },
  iconPosition: {
    left: 36,
    overflow: "hidden",
  },
  ajustesPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  bodyIconLayout: {
    height: 34,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    overflow: "hidden",
    left: 36,
    position: "absolute",
  },
  versin100Typo: {
    opacity: 0.6,
    color: Color.colorGray_100,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  preferenciasDeLaCuenta: {
    fontSize: FontSize.size_base,
    fontWeight: "900",
    fontFamily: FontFamily.ralewayBlack,
    width: 227,
    height: 29,
    textAlign: "left",
    color: Color.colorGray_300,
  },
  bodyTarjeta: {
    top: 277,
  },
  shieldIcon: {
    top: 435,
    overflow: "hidden",
  },
  bodyTarjeta1: {
    top: 222,
    left: 123,
    fontFamily: FontFamily.ralewayRegular,
    width: 143,
    fontSize: FontSize.size_sm,
    height: 29,
    textAlign: "left",
    color: Color.colorGray_300,
    position: "absolute",
  },
  bodyTarjeta2: {
    top: 331,
  },
  keyIcon: {
    top: 325,
    width: 35,
    height: 35,
    overflow: "hidden",
    position: "absolute",
  },
  bodyTarjeta3: {
    top: 547,
  },
  bodyTarjeta4: {
    top: 601,
  },
  bodyTarjeta5: {
    top: 439,
  },
  bodyTarjeta6: {
    top: 493,
  },
  bodyTarjeta7: {
    top: 385,
  },
  eyeIcon: {
    top: 383,
    width: 31,
    height: 31,
    overflow: "hidden",
    position: "absolute",
  },
  configuracin: {
    top: 72,
    left: 94,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.cabinBold,
    color: Color.colorBlack,
    width: 249,
    height: 39,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  ajustesConCuentaChild: {
    top: 67,
    backgroundColor: Color.colorBlack,
    height: 1,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowBack: {
    left: 15,
    top: 24,
    width: 33,
    height: 34,
  },
  personIcon: {
    top: 273,
    overflow: "hidden",
  },
  todayIcon: {
    top: 492,
  },
  bodyIcon: {
    top: 546,
    width: 34,
    overflow: "hidden",
    left: 36,
  },
  notificationsIcon: {
    top: 600,
  },
  centroDeAyuda: {
    top: 672,
    left: 38,
    color: Color.colorGray_100,
    fontFamily: FontFamily.ralewayBold,
  },
  polticasParaLa: {
    top: 701,
    left: 38,
    color: Color.colorGray_100,
    fontFamily: FontFamily.ralewayBold,
  },
  polticaDePrivacidad: {
    top: 730,
    left: 38,
    color: Color.colorGray_100,
    fontFamily: FontFamily.ralewayBold,
  },
  contratoDeLicencia: {
    top: 846,
    left: 38,
    color: Color.colorGray_100,
    fontFamily: FontFamily.ralewayBold,
  },
  cerrarSesin: {
    top: 875,
    left: 40,
  },
  versin100: {
    top: 904,
    left: 38,
    color: Color.colorGray_100,
    fontFamily: FontFamily.ralewayBold,
  },
  condicionesDeUso: {
    top: 817,
    left: 38,
    color: Color.colorGray_100,
    fontFamily: FontFamily.ralewayBold,
  },
  accesibilidad: {
    top: 759,
    left: 38,
    color: Color.colorGray_100,
    fontFamily: FontFamily.ralewayBold,
  },
  transparenciaDeLas: {
    top: 788,
    left: 38,
    color: Color.colorGray_100,
    fontFamily: FontFamily.ralewayBold,
  },
  ajustesConCuentaItem: {
    top: 130,
    left: 143,
    width: 89,
    height: 88,
    position: "absolute",
  },
  help: {
    left: 332,
    top: 27,
    width: 27,
    height: 27,
    position: "absolute",
  },
  ajustesConCuentaInner: {
    top: 771,
    height: 81,
  },
  ajustesConCuenta: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 1075,
    width: "100%",
  },
});

export default AjustesConCuenta;
