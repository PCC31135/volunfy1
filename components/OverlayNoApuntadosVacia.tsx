import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color } from "../GlobalStyles";

export type OverlayNoApuntadosVaciaType = {
  onClose?: () => void;
};

const OverlayNoApuntadosVacia = ({ onClose }: OverlayNoApuntadosVaciaType) => {
  return (
    <View style={styles.overlayNoApuntadosVacia}>
      <View
        style={[
          styles.overlayNoApuntadosVaciaChild,
          styles.navbarVoluntariosIconPosition,
        ]}
      />
      <Image
        style={[
          styles.navbarVoluntariosIcon,
          styles.navbarVoluntariosIconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/navbar-voluntarios2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbarVoluntariosIconPosition: {
    left: 0,
    position: "absolute",
    width: 390,
  },
  overlayNoApuntadosVaciaChild: {
    top: 0,
    backgroundColor: Color.colorGainsboro_600,
    height: 373,
  },
  navbarVoluntariosIcon: {
    top: 759,
    height: 86,
    display: "none",
  },
  overlayNoApuntadosVacia: {
    backgroundColor: Color.colorWhite,
    maxWidth: "100%",
    maxHeight: "100%",
    height: 373,
    width: 390,
  },
});

export default OverlayNoApuntadosVacia;
