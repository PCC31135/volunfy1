import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const AboutUs = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.aboutUs}>
      <View style={[styles.aboutUsChild, styles.aboutPosition]} />
      <Pressable
        style={styles.arrowBack}
        onPress={() => navigation.navigate("AjustesConCuenta")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrowback.png")}
        />
      </Pressable>
      <Text style={styles.sobreNosotros}>Sobre Nosotros</Text>
      <Text style={[styles.quienesSomos, styles.quienesSomosTypo]}>
        Quienes somos
      </Text>
      <Text style={[styles.queNosMotiva, styles.quienesSomosTypo]}>
        Que nos motiva
      </Text>
      <Text style={[styles.aQuienAyudamos, styles.quienesSomosTypo]}>
        A quien ayudamos
      </Text>
      <Text style={[styles.nuestroGrupo, styles.quienesSomosTypo]}>
        Nuestro grupo
      </Text>
      <Text
        style={[styles.somos7Jovenes, styles.somos7JovenesTypo]}
      >{`Somos 7 jovenes, interesados en los vountariados 
pero con grandes limitaciones, la dificultad para 
encontarlos, y una vez encontrados nos cuesta 
mucho encontrar una forma sostenible tanto 
economicamente  como ambiental, como social.`}</Text>
      <Text
        style={[styles.hemosRealizadoVoluntariados, styles.somos7JovenesTypo]}
      >{`Hemos realizado voluntariados y es dificil encontrar
a gente de nuestra edad. Siempre que veiamos un
voluntariado interesante teniamos que tirar la casa
por por la ventana.`}</Text>
      <Text
        style={[styles.ayudamosATodos, styles.somos7JovenesTypo]}
      >{`Ayudamos a todos aquellos futuros volunatrios, a 
todos aquellos negocios locales incitando la 
economia circular ayudamos al planeta promoviendo
los voluntariados sostenibles y el transporte 
sostenible.
`}</Text>
      <Image
        style={[styles.aboutUsItem, styles.aboutPosition]}
        contentFit="cover"
        source={require("../assets/group-31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aboutPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  quienesSomosTypo: {
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    left: 32,
    position: "absolute",
  },
  somos7JovenesTypo: {
    fontFamily: FontFamily.ralewayRegular,
    fontSize: FontSize.size_sm,
    left: 42,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  aboutUsChild: {
    top: 66,
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
    top: 23,
    width: 33,
    height: 34,
    position: "absolute",
  },
  sobreNosotros: {
    top: 103,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.cabinBold,
    textAlign: "left",
    color: Color.colorBlack,
    left: 32,
    position: "absolute",
  },
  quienesSomos: {
    top: 179,
  },
  queNosMotiva: {
    top: 313,
  },
  aQuienAyudamos: {
    top: 430,
  },
  nuestroGrupo: {
    top: 564,
  },
  somos7Jovenes: {
    top: 210,
  },
  hemosRealizadoVoluntariados: {
    top: 344,
  },
  ayudamosATodos: {
    top: 461,
  },
  aboutUsItem: {
    top: 771,
    height: 81,
  },
  aboutUs: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    width: "100%",
  },
});

export default AboutUs;
