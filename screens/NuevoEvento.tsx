import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Provincias from "../components/Provincias";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const NuevoEvento = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [rectangle2Visible, setRectangle2Visible] = useState(false);

  const openRectangle2 = useCallback(() => {
    setRectangle2Visible(true);
  }, []);

  const closeRectangle2 = useCallback(() => {
    setRectangle2Visible(false);
  }, []);

  return (
    <>
      <View style={styles.nuevoEvento}>
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
        <Image
          style={styles.nuevoEventoChild}
          contentFit="cover"
          source={require("../assets/ellipse-43.png")}
        />
        <Pressable
          style={styles.nuevoEventoChild}
          onPress={() => navigation.navigate("AjustesConCuenta")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/ellipse-102.png")}
          />
        </Pressable>
        <Pressable style={styles.arrowBack} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrowback.png")}
          />
        </Pressable>
        <Text style={styles.crearUnNuevo}>Crear un nuevo evento</Text>
        <Text style={[styles.ttuloDelEvento, styles.ubicacinTypo]}>
          Título del evento
        </Text>
        <View style={[styles.nuevoEventoItem, styles.rectangleLayout]} />
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupChildBorder]} />
          <Text
            style={[styles.descripcinDelEvento, styles.ubicacinWrapperPosition]}
          >
            Descripción del evento
          </Text>
        </View>
        <View style={[styles.nuevoEventoInner, styles.rectangleGroupLayout]}>
          <View style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
            <Pressable
              style={[styles.groupItem, styles.groupLayout]}
              onPress={openRectangle2}
            />
            <View style={styles.ubicacinWrapperPosition}>
              <Text style={[styles.ubicacin, styles.rectanglePosition]}>
                Ubicación
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text
            style={[styles.descripcinDelEvento, styles.ubicacinWrapperPosition]}
          >
            Fechas
          </Text>
        </View>
        <View style={[styles.groupView, styles.viewLayout]}>
          <View style={[styles.rectangleView, styles.viewLayout]} />
          <Text style={[styles.crearEvento, styles.eventoTypo]}>
            Crear evento
          </Text>
        </View>
        <View style={[styles.insertarImagenParent, styles.groupChild1Layout]}>
          <Text style={[styles.ubicacin, styles.rectanglePosition]}>
            Insertar Imagen
          </Text>
          <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={rectangle2Visible}>
        <View style={styles.rectangle2Overlay}>
          <Pressable style={styles.rectangle2Bg} onPress={closeRectangle2} />
          <Provincias onClose={closeRectangle2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  ubicacinTypo: {
    height: 27,
    fontFamily: FontFamily.ralewayRegular,
    fontSize: FontSize.size_3xl,
    width: 305,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleLayout: {
    width: 331,
    position: "absolute",
  },
  groupChildBorder: {
    left: 0,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_400,
    borderRadius: Border.br_3xs,
  },
  ubicacinWrapperPosition: {
    left: 2,
    top: 0,
    height: 27,
    width: 305,
    position: "absolute",
  },
  rectangleGroupLayout: {
    height: 62,
    width: 331,
    position: "absolute",
  },
  groupLayout: {
    height: 35,
    left: 0,
    width: 331,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_400,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectanglePosition: {
    top: 0,
    left: 0,
  },
  viewLayout: {
    width: 160,
    height: 35,
    position: "absolute",
  },
  eventoTypo: {
    fontFamily: FontFamily.ralewayRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupChild1Layout: {
    width: 324,
    position: "absolute",
  },
  logovolunfy2: {
    left: 85,
    top: 49,
    width: 217,
    height: 65,
    position: "absolute",
  },
  nuevoEventoChild: {
    top: 56,
    left: 302,
    width: 56,
    height: 54,
    position: "absolute",
  },
  icon2: {
    overflow: "hidden",
  },
  arrowBack: {
    left: 34,
    top: 65,
    width: 33,
    height: 34,
    position: "absolute",
  },
  crearUnNuevo: {
    top: 133,
    fontSize: 30,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    height: 76,
    width: 305,
    textAlign: "left",
    color: Color.colorBlack,
    left: 36,
    position: "absolute",
  },
  ttuloDelEvento: {
    top: 227,
    left: 36,
    height: 27,
  },
  nuevoEventoItem: {
    top: 254,
    height: 74,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_400,
    width: 331,
    borderRadius: Border.br_3xs,
    left: 27,
  },
  groupChild: {
    height: 147,
    top: 35,
    width: 331,
    position: "absolute",
  },
  descripcinDelEvento: {
    fontFamily: FontFamily.ralewayRegular,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xl,
    left: 2,
  },
  rectangleParent: {
    top: 506,
    height: 182,
    left: 27,
  },
  rectangle2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 27,
  },
  ubicacin: {
    height: 27,
    fontFamily: FontFamily.ralewayRegular,
    fontSize: FontSize.size_3xl,
    width: 305,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleGroup: {
    top: 0,
    left: 0,
  },
  nuevoEventoInner: {
    top: 344,
    left: 27,
  },
  groupInner: {
    top: 35,
  },
  rectangleContainer: {
    top: 423,
    height: 70,
    left: 27,
  },
  rectangleView: {
    backgroundColor: Color.colorGold_200,
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    width: 160,
  },
  crearEvento: {
    top: 3,
    left: 9,
    fontSize: FontSize.size_5xl,
    width: 143,
    height: 28,
    position: "absolute",
  },
  groupView: {
    top: 790,
    left: 115,
  },
  groupChild1: {
    top: 34,
    left: 0,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_400,
    borderRadius: Border.br_3xs,
    height: 34,
  },
  insertarImagenParent: {
    top: 701,
    height: 68,
    left: 27,
  },
  nuevoEvento: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 854,
    width: "100%",
  },
});

export default NuevoEvento;
