import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, Modal } from "react-native";
import OverlayNoApuntados from "../components/OverlayNoApuntados";
import OverlayNoApuntadosVacia from "../components/OverlayNoApuntadosVacia";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DescripcinVerificado from "../components/DescripcinVerificado";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  const [chevronDownIconVisible, setChevronDownIconVisible] = useState(false);
  const [chevronDownIcon1Visible, setChevronDownIcon1Visible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [groupIconVisible, setGroupIconVisible] = useState(false);

  const openChevronDownIcon = useCallback(() => {
    setChevronDownIconVisible(true);
  }, []);

  const closeChevronDownIcon = useCallback(() => {
    setChevronDownIconVisible(false);
  }, []);

  const openChevronDownIcon1 = useCallback(() => {
    setChevronDownIcon1Visible(true);
  }, []);

  const closeChevronDownIcon1 = useCallback(() => {
    setChevronDownIcon1Visible(false);
  }, []);

  const openGroupIcon = useCallback(() => {
    setGroupIconVisible(true);
  }, []);

  const closeGroupIcon = useCallback(() => {
    setGroupIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.home}>
        <Pressable
          style={[styles.chevronDown, styles.chevronLayout]}
          onPress={openChevronDownIcon}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevrondown.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.chevronDown1, styles.chevronLayout]}
          onPress={openChevronDownIcon1}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevrondown.png")}
          />
        </Pressable>
        <View style={[styles.homeChild, styles.homeLayout]} />
        <Pressable
          style={[styles.tarjeta5Parent, styles.tarjetaParentLayout]}
          onPress={() => navigation.navigate("BancoDeAlimentosEjemplo")}
        >
          <View style={[styles.tarjeta5, styles.tarjetaParentLayout]}>
            <View style={[styles.tarjeta5Child, styles.childShadowBox]} />
            <Text style={styles.ttuloTarjeta}>Banco de Alimentos</Text>
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
        <View style={[styles.tarjeta9, styles.tarjetaParentLayout]}>
          <View style={[styles.tarjeta9Child, styles.childShadowBox]} />
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
        <View style={[styles.tarjeta4, styles.tarjetaParentLayout]}>
          <View style={[styles.tarjeta4Child, styles.childShadowBox]} />
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
        <View style={[styles.tarjeta10, styles.tarjetaParentLayout]}>
          <View style={[styles.tarjeta10Child, styles.childShadowBox]} />
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
          <View style={[styles.tarjeta5, styles.tarjetaParentLayout]}>
            <View style={styles.tarjeta3ShadowBox} />
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
        <View style={[styles.tarjeta3Group, styles.tarjetaParentLayout]}>
          <View style={[styles.tarjeta5, styles.tarjetaParentLayout]}>
            <View style={styles.tarjeta3ShadowBox} />
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
        <Text style={[styles.apuntados, styles.apuntadosTypo]}>Apuntados</Text>
        <Text style={[styles.noApuntados, styles.apuntadosTypo]}>
          No Apuntados
        </Text>
        <Image
          style={[styles.homeItem, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/group-42.png")}
        />
        <Image
          style={[styles.navbarhomeIcon, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/navbarhome.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={chevronDownIconVisible}>
        <View style={styles.chevronDownIconOverlay}>
          <Pressable
            style={styles.chevronDownIconBg}
            onPress={closeChevronDownIcon}
          />
          <OverlayNoApuntados onClose={closeChevronDownIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={chevronDownIcon1Visible}>
        <View style={styles.chevronDownIcon1Overlay}>
          <Pressable
            style={styles.chevronDownIcon1Bg}
            onPress={closeChevronDownIcon1}
          />
          <OverlayNoApuntadosVacia onClose={closeChevronDownIcon1} />
        </View>
      </Modal>

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
  chevronLayout: {
    height: 40,
    width: 40,
    left: 318,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  homeLayout: {
    width: 390,
    position: "absolute",
  },
  tarjetaParentLayout: {
    height: 222,
    width: 332,
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
    height: 222,
    width: 332,
    left: 0,
    top: 0,
    position: "absolute",
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
  apuntadosTypo: {
    height: 39,
    fontFamily: FontFamily.cabinBold,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
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
  icon: {
    overflow: "hidden",
  },
  chevronDown: {
    top: 137,
  },
  chevronDownIcon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  chevronDownIcon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  chevronDown1: {
    top: 429,
  },
  homeChild: {
    backgroundColor: Color.colorGainsboro_600,
    left: 0,
    top: 0,
    height: 1920,
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
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
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
    left: 0,
    top: 0,
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
    height: 19,
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
    top: 489,
    left: 29,
    width: 332,
  },
  tarjeta9Child: {
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
    height: 19,
    color: Color.colorBlack,
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
  tarjeta9: {
    top: 1222,
    left: 29,
    width: 332,
  },
  tarjeta4Child: {
    borderColor: Color.colorSteelblue_200,
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
  filtroPerfil2: {
    left: 170,
  },
  tarjeta4: {
    top: 978,
    left: 29,
    width: 332,
  },
  tarjeta10Child: {
    borderColor: Color.colorGold_100,
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
  bodyTarjeta3: {
    width: 136,
    height: 89,
  },
  tarjeta10: {
    top: 1466,
    left: 29,
    width: 332,
  },
  tarjeta3ShadowBox: {
    borderColor: Color.colorGold_300,
    backgroundColor: Color.colorGray_200,
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
    height: 222,
    width: 332,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tarjeta3Parent: {
    top: 734,
    left: 29,
    width: 332,
  },
  tarjeta3Group: {
    top: 187,
    left: 26,
  },
  apuntados: {
    left: 35,
    width: 157,
    top: 137,
  },
  noApuntados: {
    left: 33,
    width: 206,
    top: 429,
  },
  homeItem: {
    top: -14,
    left: 3,
    height: 140,
  },
  navbarhomeIcon: {
    top: 771,
    height: 81,
    left: 0,
  },
  home: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 1920,
    width: "100%",
  },
});

export default Home;
