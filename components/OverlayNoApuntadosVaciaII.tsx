import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color } from "../GlobalStyles";

export type OverlayNoApuntadosVaciaIIType = {
  onClose?: () => void;
};

const OverlayNoApuntadosVaciaII = ({
  onClose,
}: OverlayNoApuntadosVaciaIIType) => {
  return (
    <View style={styles.overlayNoApuntadosVaciaii}>
      <View
        style={[
          styles.overlayNoApuntadosVaciaiiChild,
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
  overlayNoApuntadosVaciaiiChild: {
    top: 0,
    backgroundColor: Color.colorGainsboro_600,
    height: 609,
  },
  navbarVoluntariosIcon: {
    top: 759,
    height: 86,
    display: "none",
  },
  overlayNoApuntadosVaciaii: {
    backgroundColor: Color.colorWhite,
    maxWidth: "100%",
    maxHeight: "100%",
    height: 609,
    width: 390,
  },
});

export default OverlayNoApuntadosVaciaII;
