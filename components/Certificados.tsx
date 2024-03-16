import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

export type CertificadosType = {
  onClose?: () => void;
};

const Certificados = ({ onClose }: CertificadosType) => {
  return (
    <View style={styles.certificados}>
      <Text
        style={styles.certificadoDeAntecedentes}
      >{`Certificado de antecedentes penales
Certificado de monitor de tiempo libre
Certificado de submarinismo
Certificado de barranquismo
Certificado de educación primaria
Certificado de educación secundaria
Certificado de educación especializada
Certificado en inglés
Certificado de idioma: inglés
Certificado de idioma: francés
`}</Text>
      <View style={styles.groupChildPosition}>
        <View style={styles.groupChildPosition}>
          <View style={styles.groupChildPosition}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <View style={styles.xParent}>
              <Text style={[styles.x, styles.xTypo]}>X</Text>
              <Text style={[styles.cerrar, styles.xTypo]}>Cerrar</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 86,
    left: 0,
    top: 0,
    position: "absolute",
    width: 390,
  },
  xTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  certificadoDeAntecedentes: {
    top: 111,
    left: 21,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 330,
    height: 1286,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lgi,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro_300,
  },
  x: {
    fontSize: FontSize.size_5xl,
    width: 19,
    left: 0,
    top: 0,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  cerrar: {
    top: 3,
    left: 31,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_lgi,
  },
  xParent: {
    top: 36,
    left: 28,
    width: 91,
    height: 29,
    position: "absolute",
  },
  certificados: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    height: 599,
    maxWidth: "100%",
    maxHeight: "100%",
    width: 390,
  },
});

export default Certificados;
