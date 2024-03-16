import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

export type ProvinciasType = {
  onClose?: () => void;
};

const Provincias = ({ onClose }: ProvinciasType) => {
  return (
    <View style={styles.provincias}>
      <Text style={styles.lavaArabaAlbacete}>{`Álava (Araba)
Albacete
Alicante
Almería
Asturias
Ávila
Badajoz 
Barcelona
Burgos
Cáceres
Cádiz
Cantabria
Castellón (Castelló)
Ceuta
Ciudad Real
Córdoba
Cuenca
Gerona (Girona)
Granada
Guadalajara
Guipúzcoa (Gipuzkoa)
Huelva
Huesca
Islas Baleares (Illes Balears)
Jaén
La Coruña (A Coruña)
La Rioja
Las Palmas
León 
Lérida (Lleida)
Lugo
Madrid
Málaga
Melilla
Murcia
Navarra (Nafarroa)
Orense (Ourense)
Palencia
Pontevedra
Salamanca
Santa Cruz de Tenerife
Segovia
Sevilla
Soria
Tarragona
Teruel
Toledo
Valencia
Valladolid 
Vizcaya (Bizkaia)
Zamora
Zaragoza





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
  lavaArabaAlbacete: {
    top: 109,
    left: 23,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 361,
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
  provincias: {
    backgroundColor: Color.colorWhite,
    height: 1254,
    maxWidth: "100%",
    maxHeight: "100%",
    width: 390,
  },
});

export default Provincias;
