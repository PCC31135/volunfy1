import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DescripcinVerificado from "./DescripcinVerificado";
import OverlayNoApuntadosVaciaII from "./OverlayNoApuntadosVaciaII";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

export type OverlayNoApuntadosType = {
  onClose?: () => void;
};

const OverlayNoApuntados = ({ onClose }: OverlayNoApuntadosType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [groupIconVisible, setGroupIconVisible] = useState(false);
  const [chevronDownIconVisible, setChevronDownIconVisible] = useState(false);

  const openGroupIcon = useCallback(() => {
    setGroupIconVisible(true);
  }, []);

  const closeGroupIcon = useCallback(() => {
    setGroupIconVisible(false);
  }, []);

  const openChevronDownIcon = useCallback(() => {
    setChevronDownIconVisible(true);
  }, []);

  const closeChevronDownIcon = useCallback(() => {
    setChevronDownIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.overlayNoApuntados}>
        <View style={[styles.overlayNoApuntadosChild, styles.overlayBg]} />
        <Pressable
          style={[styles.tarjeta5Parent, styles.tarjetaParentLayout]}
          onPress={() => navigation.navigate("BancoDeAlimentosEjemplo")}
        >
          <View style={[styles.tarjeta5, styles.tarjeta5Position]}>
            <View style={[styles.tarjeta5Child, styles.childShadowBox]} />
            <Text style={[styles.ttuloTarjeta, styles.noApuntadosFlexBox]}>
              Banco de Alimentos
            </Text>
            <Text style={[styles.bodyTarjeta, styles.bodyTypo]}>
              !Apúntate al banco de alimentos y completa un turno en un
              supermercado de madrid este fin de semana!
            </Text>
            <Image
              style={styles.imagenIcon}
              contentFit="cover"
              source={require("../assets/imagen.png")}
            />
          </View>
          <View style={[styles.filtroPerfil, styles.filtroLayout]}>
            <Text style={[styles.madrid, styles.madridLayout]}>Madrid</Text>
            <Image
              style={styles.golfIcon}
              contentFit="cover"
              source={require("../assets/golf.png")}
            />
          </View>
          <Pressable style={styles.wrapper} onPress={openGroupIcon}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/group-39.png")}
            />
          </Pressable>
        </Pressable>
        <View style={[styles.tarjeta11, styles.tarjetaParentLayout]}>
          <View style={[styles.tarjeta11Child, styles.childShadowBox]} />
          <Text style={[styles.ttuloTarjeta1, styles.madridLayout]}>
            Monitor infantil
          </Text>
          <Text style={[styles.bodyTarjeta, styles.bodyTypo]}>
            ¡Apúntate al banco de alimentos y completa un turno en un
            supermercado de madrid este fin de semana!
          </Text>
          <Image
            style={styles.imagenIcon}
            contentFit="cover"
            source={require("../assets/imagen1.png")}
          />
          <View style={[styles.filtroPerfil1, styles.filtroLayout]}>
            <Text style={[styles.madrid, styles.madridLayout]}>Madrid</Text>
            <Image
              style={styles.golfIcon}
              contentFit="cover"
              source={require("../assets/golf.png")}
            />
          </View>
        </View>
        <View style={[styles.tarjeta12, styles.tarjetaParentLayout]}>
          <View style={[styles.tarjeta12Child, styles.childShadowBox]} />
          <View style={[styles.filtroPerfil2, styles.filtroLayout]}>
            <Text style={[styles.madrid, styles.madridLayout]}>Galicia</Text>
            <Image
              style={styles.golfIcon}
              contentFit="cover"
              source={require("../assets/golf.png")}
            />
          </View>
          <Text style={[styles.ttuloTarjeta1, styles.madridLayout]}>
            Residencia 3ª edad
          </Text>
          <Text style={[styles.bodyTarjeta, styles.bodyTypo]}>
            Acompáñanos a la residencia Francisco Pérez a pasar un día con
            nosotros ayudando en actividades diversas.
          </Text>
          <Image
            style={styles.imagenIcon}
            contentFit="cover"
            source={require("../assets/imagen2.png")}
          />
        </View>
        <View style={[styles.tarjeta13, styles.tarjetaParentLayout]}>
          <View style={[styles.tarjeta13Child, styles.childShadowBox]} />
          <Text style={[styles.ttuloTarjeta1, styles.madridLayout]}>
            Compañía hospital
          </Text>
          <Text style={[styles.bodyTarjeta3, styles.bodyTypo]}>
            Necesitamos voluntarios que jueguen con niños en el hospital puerta
            del hierro area de pediatria en la UCI.
          </Text>
          <Image
            style={styles.imagenIcon}
            contentFit="cover"
            source={require("../assets/imagen3.png")}
          />
          <View style={[styles.filtroPerfil1, styles.filtroLayout]}>
            <Text style={[styles.madrid, styles.madridLayout]}>Madrid</Text>
            <Image
              style={styles.golfIcon}
              contentFit="cover"
              source={require("../assets/golf.png")}
            />
          </View>
        </View>
        <View style={[styles.tarjeta3Parent, styles.tarjetaParentLayout]}>
          <View style={[styles.tarjeta5, styles.tarjeta5Position]}>
            <View style={[styles.tarjeta3Child, styles.childShadowBox]} />
            <Text style={[styles.ttuloTarjeta1, styles.madridLayout]}>
              Reserva Natural
            </Text>
            <Text
              style={[styles.bodyTarjeta3, styles.bodyTypo]}
            >{`Voluntariado en Doñana, Reserva de la Biosfera y Parque Nacional. 
`}</Text>
            <Image
              style={styles.imagenIcon}
              contentFit="cover"
              source={require("../assets/imagen4.png")}
            />
          </View>
          <View style={[styles.filtroPerfil1, styles.filtroLayout]}>
            <Text style={[styles.madrid, styles.madridLayout]}>Huelva</Text>
            <Image
              style={styles.golfIcon}
              contentFit="cover"
              source={require("../assets/golf.png")}
            />
          </View>
        </View>
        <View
          style={[styles.overlayNoApuntadosItem, styles.tarjeta5Position]}
        />
        <Text style={[styles.noApuntados, styles.noApuntadosPosition]}>
          No Apuntados
        </Text>
        <Pressable
          style={[styles.chevronDown, styles.noApuntadosPosition]}
          onPress={openChevronDownIcon}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevrondown.png")}
          />
        </Pressable>
        <Image
          style={[styles.navbarVoluntariosIcon, styles.tarjeta5Position]}
          contentFit="cover"
          source={require("../assets/navbar-voluntarios1.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={groupIconVisible}>
        <View style={styles.groupIconOverlay}>
          <Pressable style={styles.groupIconBg} onPress={closeGroupIcon} />
          <DescripcinVerificado onClose={closeGroupIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={chevronDownIconVisible}>
        <View style={styles.chevronDownIconOverlay}>
          <Pressable
            style={styles.chevronDownIconBg}
            onPress={closeChevronDownIcon}
          />
          <OverlayNoApuntadosVaciaII onClose={closeChevronDownIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  overlayBg: {
    backgroundColor: Color.colorGainsboro_600,
    width: 390,
  },
  tarjetaParentLayout: {
    height: 222,
    width: 332,
  },
  tarjeta5Position: {
    left: 0,
    position: "absolute",
  },
  childShadowBox: {
    borderWidth: 3,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
    height: 222,
    width: 332,
    position: "absolute",
  },
  noApuntadosFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  bodyTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.ralewayRegular,
    fontSize: FontSize.size_sm,
    top: 94,
    left: 176,
    textAlign: "left",
    position: "absolute",
  },
  filtroLayout: {
    opacity: 0.8,
    width: 139,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_5xs,
    height: 26,
    top: 60,
    position: "absolute",
  },
  madridLayout: {
    height: 19,
    textAlign: "left",
    position: "absolute",
  },
  noApuntadosPosition: {
    top: 8,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  overlayNoApuntadosChild: {
    top: 67,
    left: -2,
    height: 593,
    position: "absolute",
  },
  tarjeta5Child: {
    borderColor: Color.colorLightseagreen_100,
    borderWidth: 3,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
  },
  ttuloTarjeta: {
    top: 24,
    left: 18,
    fontSize: FontSize.size_7xl,
    width: 289,
    height: 25,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  bodyTarjeta: {
    width: 125,
    height: 53,
  },
  imagenIcon: {
    width: 128,
    height: 123,
    left: 24,
    top: 60,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  tarjeta5: {
    top: 0,
    left: 0,
    height: 222,
    width: 332,
  },
  madrid: {
    top: 4,
    left: 8,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.spaceMonoBold,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    width: 98,
    fontWeight: "700",
  },
  golfIcon: {
    top: 5,
    left: 113,
    width: 16,
    height: 16,
    overflow: "hidden",
    position: "absolute",
  },
  filtroPerfil: {
    left: 166,
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
  wrapper: {
    left: 288,
    top: 26,
    width: 25,
    height: 26,
    position: "absolute",
  },
  tarjeta5Parent: {
    top: 68,
    left: 29,
    width: 332,
    position: "absolute",
  },
  tarjeta11Child: {
    borderColor: Color.colorLightseagreen_100,
    borderWidth: 3,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
  },
  ttuloTarjeta1: {
    top: 20,
    fontSize: FontSize.size_9xl,
    width: 290,
    left: 24,
    color: Color.colorBlack,
    height: 19,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
  },
  filtroPerfil1: {
    left: 176,
    opacity: 0.8,
    width: 139,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_5xs,
  },
  tarjeta11: {
    top: 801,
    left: 29,
    width: 332,
    position: "absolute",
  },
  tarjeta12Child: {
    borderColor: Color.colorSteelblue_200,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
    borderWidth: 3,
  },
  filtroPerfil2: {
    left: 170,
  },
  tarjeta12: {
    top: 557,
    left: 29,
    width: 332,
    position: "absolute",
  },
  tarjeta13Child: {
    borderColor: Color.colorGold_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
    borderWidth: 3,
  },
  bodyTarjeta3: {
    width: 136,
    height: 89,
  },
  tarjeta13: {
    top: 1045,
    left: 29,
    width: 332,
    position: "absolute",
  },
  tarjeta3Child: {
    backgroundColor: Color.colorGray_200,
    borderColor: Color.colorGold_300,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
    borderWidth: 3,
  },
  tarjeta3Parent: {
    top: 313,
    left: 29,
    width: 332,
    position: "absolute",
  },
  overlayNoApuntadosItem: {
    height: 67,
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro_600,
    width: 390,
  },
  noApuntados: {
    left: 33,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.cabinBold,
    width: 206,
    height: 39,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
  },
  chevronDownIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  chevronDownIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon1: {
    overflow: "hidden",
  },
  chevronDown: {
    left: 321,
    width: 40,
    height: 40,
  },
  navbarVoluntariosIcon: {
    top: 759,
    height: 86,
    display: "none",
    width: 390,
  },
  overlayNoApuntados: {
    backgroundColor: Color.colorWhite,
    height: 661,
    maxWidth: "100%",
    maxHeight: "100%",
    width: 390,
  },
});

export default OverlayNoApuntados;
