import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import Certificados from "../components/Certificados";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const OverlayCertificados = () => {
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.overlayCertificados}>
        <Text style={styles.aplicarFiltros}>Aplicar filtros</Text>
        <Pressable
          style={[styles.botonLoginParent, styles.botonLayout]}
          onPress={openGroupContainer}
        >
          <View style={[styles.botonLogin, styles.botonLayout]}>
            <Image
              style={[styles.recuadrologinIcon, styles.certificadoLayout]}
              contentFit="cover"
              source={require("../assets/recuadrologin2.png")}
            />
            <Text style={[styles.certificado, styles.certificadoFlexBox]}>
              Certificado
            </Text>
          </View>
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../assets/add.png")}
          />
        </Pressable>
        <View
          style={[
            styles.overlayCertificadosChild,
            styles.navbarVoluntariosIconPosition,
          ]}
        />
        <View style={[styles.botonLogin1, styles.botonLogin1Layout]}>
          <Image
            style={[styles.recuadrologinIcon1, styles.botonLogin1Layout]}
            contentFit="cover"
            source={require("../assets/recuadrologin.png")}
          />
          <Text style={[styles.escribaParaBuscar, styles.botonLogin1Layout]}>
            Escriba para buscar
          </Text>
        </View>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/search1.png")}
        />
        <Image
          style={[
            styles.navbarVoluntariosIcon,
            styles.navbarVoluntariosIconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/navbar-voluntarios3.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <Certificados onClose={closeGroupContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  botonLayout: {
    height: 40,
    width: 374,
    position: "absolute",
  },
  certificadoLayout: {
    width: 304,
    height: 40,
    position: "absolute",
  },
  certificadoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    color: Color.colorBlack,
  },
  navbarVoluntariosIconPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  botonLogin1Layout: {
    height: 57,
    width: 304,
    position: "absolute",
  },
  aplicarFiltros: {
    top: 137,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    textAlign: "left",
    width: 175,
    height: 27,
    color: Color.colorBlack,
    left: 17,
    position: "absolute",
  },
  groupContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  recuadrologinIcon: {
    left: 70,
    borderRadius: Border.br_11xl,
    top: 0,
  },
  certificado: {
    width: 304,
    height: 40,
    position: "absolute",
  },
  botonLogin: {
    left: 0,
    top: 0,
  },
  addIcon: {
    top: 5,
    left: 333,
    width: 30,
    height: 30,
    overflow: "hidden",
    position: "absolute",
  },
  botonLoginParent: {
    top: 180,
    left: -20,
  },
  overlayCertificadosChild: {
    backgroundColor: Color.colorGainsboro_500,
    height: 128,
    top: 0,
  },
  recuadrologinIcon1: {
    borderRadius: Border.br_11xl,
    top: 0,
    left: 0,
  },
  escribaParaBuscar: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    color: Color.colorBlack,
  },
  botonLogin1: {
    left: 57,
    top: 46,
  },
  searchIcon: {
    width: 35,
    height: 38,
    top: 46,
    left: 17,
    position: "absolute",
  },
  navbarVoluntariosIcon: {
    top: 759,
    height: 86,
    display: "none",
  },
  overlayCertificados: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 243,
  },
});

export default OverlayCertificados;
