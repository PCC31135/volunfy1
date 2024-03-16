import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import Provincias from "../components/Provincias";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const OverlayVoluntarios = () => {
  const [botonLoginContainerVisible, setBotonLoginContainerVisible] =
    useState(false);

  const openBotonLoginContainer = useCallback(() => {
    setBotonLoginContainerVisible(true);
  }, []);

  const closeBotonLoginContainer = useCallback(() => {
    setBotonLoginContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.overlayVoluntarios}>
        <Text style={styles.aplicarFiltros}>Aplicar filtros</Text>
        <View style={[styles.botonLoginParent, styles.botonLayout]}>
          <Pressable
            style={[styles.botonLogin, styles.botonLayout]}
            onPress={openBotonLoginContainer}
          >
            <Image
              style={[styles.recuadrologinIcon, styles.recuadrologinIconLayout]}
              contentFit="cover"
              source={require("../assets/recuadrologin2.png")}
            />
            <Text style={[styles.provincia, styles.provinciaFlexBox]}>
              Provincia
            </Text>
          </Pressable>
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../assets/add.png")}
          />
        </View>
        <View
          style={[styles.overlayVoluntariosChild, styles.voluntariosPosition]}
        />
        <View style={[styles.botonLogin1, styles.searchIconPosition]}>
          <Image
            style={[styles.recuadrologinIcon1, styles.recuadrologinIconLayout]}
            contentFit="cover"
            source={require("../assets/recuadrologin.png")}
          />
          <Text style={[styles.escribaParaBuscar, styles.provinciaFlexBox]}>
            Escriba para buscar
          </Text>
        </View>
        <Image
          style={[styles.searchIcon, styles.searchIconPosition]}
          contentFit="cover"
          source={require("../assets/search1.png")}
        />
        <Image
          style={[styles.navbarVoluntariosIcon, styles.voluntariosPosition]}
          contentFit="cover"
          source={require("../assets/navbar-voluntarios3.png")}
        />
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={botonLoginContainerVisible}
      >
        <View style={styles.botonLoginContainerOverlay}>
          <Pressable
            style={styles.botonLoginContainerBg}
            onPress={closeBotonLoginContainer}
          />
          <Provincias onClose={closeBotonLoginContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  botonLayout: {
    width: 374,
    height: 40,
    position: "absolute",
  },
  recuadrologinIconLayout: {
    borderRadius: Border.br_11xl,
    width: 304,
    top: 0,
    position: "absolute",
  },
  provinciaFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    width: 304,
    left: 0,
    top: 0,
    color: Color.colorBlack,
    position: "absolute",
  },
  voluntariosPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  searchIconPosition: {
    top: 37,
    position: "absolute",
  },
  aplicarFiltros: {
    top: 159,
    left: 18,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    textAlign: "left",
    width: 175,
    height: 57,
    color: Color.colorBlack,
    position: "absolute",
  },
  botonLoginContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  botonLoginContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  recuadrologinIcon: {
    left: 70,
    width: 304,
    height: 40,
  },
  provincia: {
    height: 40,
  },
  botonLogin: {
    left: 0,
    top: 0,
    height: 40,
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
    top: 199,
    left: -20,
    height: 40,
  },
  overlayVoluntariosChild: {
    backgroundColor: Color.colorGainsboro_500,
    height: 142,
    top: 0,
  },
  recuadrologinIcon1: {
    width: 304,
    left: 0,
    height: 57,
  },
  escribaParaBuscar: {
    height: 57,
  },
  botonLogin1: {
    left: 57,
    width: 304,
    height: 57,
  },
  searchIcon: {
    left: 17,
    width: 35,
    height: 38,
  },
  navbarVoluntariosIcon: {
    top: 759,
    height: 86,
    display: "none",
  },
  overlayVoluntarios: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 283,
  },
});

export default OverlayVoluntarios;
