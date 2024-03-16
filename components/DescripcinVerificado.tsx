import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

export type DescripcinVerificadoType = {
  onClose?: () => void;
};

const DescripcinVerificado = ({ onClose }: DescripcinVerificadoType) => {
  const [groupIconVisible, setGroupIconVisible] = useState(false);

  const openGroupIcon = useCallback(() => {
    setGroupIconVisible(true);
  }, []);

  const closeGroupIcon = useCallback(() => {
    setGroupIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.descripcinVerificado}>
        <View style={[styles.botonLoginWrapper, styles.botonLayout]}>
          <View style={[styles.botonLogin, styles.quEsUnPosition]}>
            <Image
              style={styles.recuadrologinIcon}
              contentFit="cover"
              source={require("../assets/recuadrologin3.png")}
            />
            <Text style={[styles.quEsUn, styles.quEsUnLayout]}>
              ¿Qué es un verificado?
            </Text>
            <Text style={styles.tenerLaCuenta}>
              Tener la cuenta verificada significa que esta organización está
              aprobada y se puede acudir frecuentemente a voluntariados en ella.
            </Text>
          </View>
        </View>
        <View
          style={[styles.descripcinVerificadoChild, styles.quEsUnPosition]}
        />
        <Text style={[styles.x, styles.xFlexBox]}>X</Text>
        <Pressable
          style={[styles.wrapper, styles.quEsUnLayout]}
          onPress={openGroupIcon}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-391.png")}
          />
        </Pressable>
        <Image
          style={styles.navbarVoluntariosIcon}
          contentFit="cover"
          source={require("../assets/navbar-voluntarios4.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={groupIconVisible}>
        <View style={styles.groupIconOverlay}>
          <Pressable style={styles.groupIconBg} onPress={closeGroupIcon} />
          <DescripcinVerificado onClose={closeGroupIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  botonLayout: {
    height: 164,
    width: 348,
    position: "absolute",
  },
  quEsUnPosition: {
    top: 0,
    left: 0,
  },
  quEsUnLayout: {
    height: 40,
    position: "absolute",
  },
  xFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  recuadrologinIcon: {
    top: 39,
    left: 44,
    borderRadius: Border.br_11xl,
    width: 304,
    height: 125,
    position: "absolute",
  },
  quEsUn: {
    width: 220,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 0,
    top: 0,
  },
  tenerLaCuenta: {
    top: 45,
    left: 60,
    fontSize: FontSize.size_mini,
    textAlign: "justify",
    width: 266,
    height: 107,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  botonLogin: {
    left: 0,
    height: 164,
    width: 348,
    position: "absolute",
  },
  botonLoginWrapper: {
    top: 55,
    left: 14,
  },
  descripcinVerificadoChild: {
    backgroundColor: Color.colorGainsboro_500,
    height: 53,
    left: 0,
    position: "absolute",
    width: 390,
  },
  x: {
    top: 12,
    left: 3,
    width: 55,
    height: 41,
    position: "absolute",
  },
  groupIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 175,
    top: 7,
    width: 40,
  },
  navbarVoluntariosIcon: {
    top: 759,
    height: 86,
    display: "none",
    left: 0,
    position: "absolute",
    width: 390,
  },
  descripcinVerificado: {
    backgroundColor: Color.colorWhite,
    height: 243,
    maxWidth: "100%",
    maxHeight: "100%",
    width: 390,
  },
});

export default DescripcinVerificado;
