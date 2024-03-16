import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import SubmarinismoEjemplo from "../components/SubmarinismoEjemplo";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Habilitaciones = () => {
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.habilitaciones}>
        <View style={styles.habilitacionesChild} />
        <Pressable
          style={[styles.tarjeta3Parent, styles.tarjeta32Layout]}
          onPress={openGroupContainer}
        >
          <View style={[styles.tarjeta3, styles.tarjetaShadowBox]}>
            <View style={[styles.tarjeta3Child, styles.childBorder]} />
            <Text style={styles.ttuloTarjeta}>Submarinismo</Text>
            <View style={[styles.filtroPerfil, styles.filtroBorder]}>
              <Text style={[styles.horas, styles.horasFlexBox]}>70 horas</Text>
              <Image
                style={[styles.hourglassIcon, styles.starIconLayout]}
                contentFit="cover"
                source={require("../assets/hourglass.png")}
              />
            </View>
            <Image
              style={[styles.imagenIcon, styles.imagenIconLayout]}
              contentFit="cover"
              source={require("../assets/imagen11.png")}
            />
          </View>
          <View style={[styles.filtroPerfil1, styles.filtroPosition2]}>
            <Text style={[styles.horas, styles.horasFlexBox]}>Murcia</Text>
            <Image
              style={[styles.golfIcon, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/golf.png")}
            />
          </View>
          <View style={[styles.filtroPerfil2, styles.filtroBorder]}>
            <Text style={[styles.horas, styles.horasFlexBox]}>Dificil</Text>
            <Image
              style={[styles.starIcon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
            <Image
              style={[styles.starIcon1, styles.starIconLayout]}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
            <Image
              style={[styles.starIcon2, styles.starIconLayout]}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
          </View>
        </Pressable>
        <Image
          style={styles.habilitacionesItem}
          contentFit="cover"
          source={require("../assets/group-13.png")}
        />
        <View style={[styles.tarjeta31, styles.tarjetaShadowBox]}>
          <View style={[styles.tarjeta3Item, styles.tarjeta3ShadowBox]} />
          <Text style={[styles.ttuloTarjeta1, styles.horasFlexBox]}>
            Monitor
          </Text>
          <View style={[styles.filtroPerfil3, styles.filtroPosition1]}>
            <Text style={[styles.horas, styles.horasFlexBox]}>25 horas</Text>
            <Image
              style={[styles.hourglassIcon1, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/hourglass.png")}
            />
          </View>
          <Image
            style={[styles.imagenIcon1, styles.imagenIconLayout1]}
            contentFit="cover"
            source={require("../assets/imagen12.png")}
          />
          <View style={[styles.filtroPerfil4, styles.filtroLayout2]}>
            <Text style={[styles.horas, styles.horasFlexBox]}>Medio</Text>
            <Image
              style={[styles.starIcon3, styles.starIconLayout]}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
            <Image
              style={[styles.starIcon4, styles.starIconPosition]}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
          </View>
          <View style={[styles.filtroPerfil5, styles.filtroPosition]}>
            <Text style={[styles.horas, styles.horasFlexBox]}>Teruel</Text>
            <Image
              style={[styles.golfIcon, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/golf.png")}
            />
          </View>
        </View>
        <View style={[styles.tarjeta3Group, styles.tarjetaShadowBox]}>
          <View style={[styles.tarjeta32, styles.tarjetaPosition]}>
            <View style={styles.tarjeta3ShadowBox} />
            <Text style={[styles.ttuloTarjeta2, styles.ttuloTypo]}>
              Primeros auxilios
            </Text>
            <View style={[styles.filtroPerfil6, styles.filtroLayout1]}>
              <Text style={[styles.horas, styles.horasFlexBox]}>65 horas</Text>
              <Image
                style={[styles.hourglassIcon1, styles.iconPosition1]}
                contentFit="cover"
                source={require("../assets/hourglass.png")}
              />
            </View>
            <Image
              style={[styles.imagenIcon2, styles.filtroPosition2]}
              contentFit="cover"
              source={require("../assets/imagen13.png")}
            />
          </View>
          <View style={[styles.filtroPerfil7, styles.filtroLayout]}>
            <Text style={[styles.horas, styles.horasFlexBox]}>Madrid</Text>
            <Image
              style={[styles.golfIcon, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/golf.png")}
            />
          </View>
          <View style={[styles.filtroPerfil8, styles.filtroLayout1]}>
            <Text style={[styles.horas, styles.horasFlexBox]}>Dificil</Text>
            <Image
              style={[styles.starIcon5, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
            <Image
              style={[styles.starIcon1, styles.starIconLayout]}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
            <Image
              style={[styles.starIcon7, styles.starIconLayout]}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent, styles.tarjetaShadowBox]}>
          <View style={[styles.groupChild, styles.tarjeta3ShadowBox]} />
          <Image
            style={[styles.imagenIcon3, styles.imagenIconLayout]}
            contentFit="cover"
            source={require("../assets/imagen14.png")}
          />
          <Text style={[styles.ttuloTarjeta3, styles.ttuloTypo]}>
            Ingles B1
          </Text>
          <View style={[styles.filtroPerfil9, styles.filtroLayout1]}>
            <Text style={[styles.horas, styles.horasFlexBox]}>10 horas</Text>
            <Image
              style={[styles.hourglassIcon, styles.starIconLayout]}
              contentFit="cover"
              source={require("../assets/hourglass.png")}
            />
          </View>
          <View style={[styles.filtroPerfil10, styles.filtroLayout]}>
            <Text style={[styles.horas, styles.horasFlexBox]}>Barcelona</Text>
            <Image
              style={[styles.golfIcon, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/golf.png")}
            />
          </View>
          <View style={[styles.filtroPerfil11, styles.filtroLayout1]}>
            <Text style={[styles.horas, styles.horasFlexBox]}>Fácil</Text>
            <Image
              style={[styles.hourglassIcon, styles.starIconLayout]}
              contentFit="cover"
              source={require("../assets/hourglass1.png")}
            />
            <Image
              style={[styles.hourglassIcon, styles.starIconLayout]}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
          </View>
        </View>
        <View style={[styles.habilitacionesInner, styles.tarjetaShadowBox]}>
          <View style={[styles.tarjeta32, styles.tarjetaPosition]}>
            <View style={[styles.tarjeta32, styles.tarjetaPosition]}>
              <View style={[styles.tarjeta32, styles.tarjetaPosition]}>
                <View
                  style={[styles.rectangleView, styles.tarjeta3ShadowBox]}
                />
                <Text style={[styles.ttuloTarjeta2, styles.ttuloTypo]}>
                  Educador
                </Text>
                <View style={[styles.filtroPerfil12, styles.filtroPosition1]}>
                  <Text style={[styles.horas, styles.horasFlexBox]}>
                    20 horas
                  </Text>
                  <Image
                    style={[styles.starIcon5, styles.iconPosition2]}
                    contentFit="cover"
                    source={require("../assets/hourglass.png")}
                  />
                </View>
                <Image
                  style={[styles.imagenIcon3, styles.imagenIconLayout]}
                  contentFit="cover"
                  source={require("../assets/imagen15.png")}
                />
              </View>
              <View style={[styles.filtroPerfil13, styles.filtroPosition1]}>
                <Text style={[styles.horas, styles.horasFlexBox]}>Madrid</Text>
                <Image
                  style={[styles.golfIcon, styles.iconPosition2]}
                  contentFit="cover"
                  source={require("../assets/golf.png")}
                />
              </View>
              <View
                style={[styles.filtroPerfilWrapper, styles.filtroPosition1]}
              >
                <View style={[styles.filtroPerfil14, styles.filtroLayout2]}>
                  <Text style={[styles.horas, styles.horasFlexBox]}>Medio</Text>
                  <Image
                    style={[styles.starIcon9, styles.starIconLayout]}
                    contentFit="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon10, styles.starIconPosition]}
                    contentFit="cover"
                    source={require("../assets/star.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.groupIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
        <Image
          style={[styles.navbarHabilitacionesIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/navbar-habilitaciones.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <SubmarinismoEjemplo onClose={closeGroupContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  tarjeta32Layout: {
    height: 172,
    width: 336,
    position: "absolute",
  },
  tarjetaShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 172,
    width: 336,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  filtroBorder: {
    opacity: 0.8,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  horasFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  starIconLayout: {
    overflow: "hidden",
    height: 16,
    width: 16,
    position: "absolute",
  },
  imagenIconLayout: {
    height: 100,
    borderRadius: Border.br_5xl,
  },
  filtroPosition2: {
    top: 60,
    position: "absolute",
  },
  iconPosition2: {
    left: 113,
    overflow: "hidden",
    height: 16,
    width: 16,
    position: "absolute",
  },
  iconPosition1: {
    left: 114,
    overflow: "hidden",
    height: 16,
    width: 16,
    position: "absolute",
  },
  tarjeta3ShadowBox: {
    backgroundColor: Color.colorGainsboro_500,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
    height: 172,
    width: 336,
    position: "absolute",
  },
  filtroPosition1: {
    left: 29,
    height: 26,
    width: 139,
    position: "absolute",
  },
  imagenIconLayout1: {
    width: 118,
    position: "absolute",
  },
  filtroLayout2: {
    backgroundColor: Color.colorGold_200,
    height: 26,
    width: 139,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  starIconPosition: {
    left: 98,
    overflow: "hidden",
    height: 16,
    width: 16,
    position: "absolute",
  },
  filtroPosition: {
    left: 28,
    opacity: 0.8,
  },
  tarjetaPosition: {
    left: 0,
    top: 0,
  },
  ttuloTypo: {
    fontSize: FontSize.size_9xl,
    height: 45,
    width: 293,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    position: "absolute",
  },
  filtroLayout1: {
    left: 35,
    opacity: 0.8,
    height: 26,
    width: 139,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  filtroLayout: {
    left: 34,
    opacity: 0.8,
    height: 26,
    width: 139,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  iconPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  habilitacionesChild: {
    top: 120,
    left: -6,
    backgroundColor: Color.colorGainsboro_600,
    width: 396,
    height: 1075,
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
  tarjeta3Child: {
    backgroundColor: "rgba(217, 217, 217, 0.45)",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
    height: 172,
    width: 336,
    position: "absolute",
  },
  ttuloTarjeta: {
    left: 21,
    height: 45,
    width: 293,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    fontSize: FontSize.size_7xl,
    top: 15,
    position: "absolute",
  },
  horas: {
    left: 8,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.spaceMonoBold,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    width: 98,
    height: 19,
    top: 4,
  },
  hourglassIcon: {
    left: 115,
    top: 5,
  },
  filtroPerfil: {
    height: 26,
    width: 139,
    backgroundColor: Color.colorBlack,
    left: 26,
    opacity: 0.8,
    top: 126,
    position: "absolute",
  },
  imagenIcon: {
    left: 190,
    width: 118,
    position: "absolute",
    top: 52,
    height: 100,
  },
  tarjeta3: {
    left: 0,
    top: 0,
  },
  golfIcon: {
    top: 5,
  },
  filtroPerfil1: {
    opacity: 0.8,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    height: 26,
    width: 139,
    backgroundColor: Color.colorBlack,
    left: 26,
  },
  starIcon: {
    top: 4,
  },
  starIcon1: {
    left: 94,
    top: 4,
  },
  starIcon2: {
    left: 74,
    top: 4,
  },
  filtroPerfil2: {
    top: 93,
    backgroundColor: Color.colorRed,
    height: 26,
    width: 139,
    left: 26,
    opacity: 0.8,
    position: "absolute",
  },
  tarjeta3Parent: {
    top: 148,
    left: 27,
  },
  habilitacionesItem: {
    top: 31,
    left: 560,
    width: 52,
    height: 52,
    position: "absolute",
  },
  tarjeta3Item: {
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  ttuloTarjeta1: {
    left: 31,
    width: 105,
    height: 35,
    color: Color.colorBlack,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    fontSize: FontSize.size_7xl,
    textAlign: "left",
    top: 15,
  },
  hourglassIcon1: {
    top: 5,
  },
  filtroPerfil3: {
    top: 124,
    opacity: 0.8,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorBlack,
  },
  imagenIcon1: {
    top: 50,
    left: 192,
    height: 110,
    borderRadius: Border.br_5xl,
    width: 118,
  },
  starIcon3: {
    left: 117,
    top: 5,
  },
  starIcon4: {
    top: 5,
  },
  filtroPerfil4: {
    top: 92,
    left: 28,
    opacity: 0.8,
  },
  filtroPerfil5: {
    top: 60,
    position: "absolute",
    height: 26,
    width: 139,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_5xs,
    left: 28,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  tarjeta31: {
    top: 336,
    left: 25,
  },
  ttuloTarjeta2: {
    left: 15,
    top: 15,
    fontSize: FontSize.size_9xl,
  },
  filtroPerfil6: {
    top: 134,
    backgroundColor: Color.colorBlack,
  },
  imagenIcon2: {
    left: 194,
    width: 114,
    height: 100,
    borderRadius: Border.br_5xl,
  },
  tarjeta32: {
    height: 172,
    width: 336,
    position: "absolute",
  },
  filtroPerfil7: {
    top: 73,
  },
  starIcon5: {
    top: 4,
  },
  starIcon7: {
    left: 75,
    top: 4,
  },
  filtroPerfil8: {
    top: 104,
    backgroundColor: Color.colorRed,
  },
  tarjeta3Group: {
    top: 724,
    left: 27,
  },
  groupChild: {
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  imagenIcon3: {
    left: 204,
    width: 104,
    top: 52,
    height: 100,
    position: "absolute",
  },
  ttuloTarjeta3: {
    top: 18,
    left: 30,
  },
  filtroPerfil9: {
    backgroundColor: Color.colorBlack,
    top: 126,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  filtroPerfil10: {
    top: 63,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  filtroPerfil11: {
    top: 94,
    backgroundColor: Color.colorLimegreen,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  rectangleParent: {
    top: 528,
    left: 27,
  },
  rectangleView: {
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  filtroPerfil12: {
    opacity: 0.8,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorBlack,
    top: 126,
  },
  filtroPerfil13: {
    top: 64,
    opacity: 0.8,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorBlack,
  },
  starIcon9: {
    left: 116,
    top: 4,
  },
  starIcon10: {
    top: 4,
  },
  filtroPerfil14: {
    opacity: 0.7,
    left: 0,
    top: 0,
  },
  filtroPerfilWrapper: {
    top: 95,
  },
  habilitacionesInner: {
    top: 922,
    left: 27,
  },
  groupIcon: {
    top: -16,
    height: 140,
  },
  navbarHabilitacionesIcon: {
    top: 771,
    height: 81,
  },
  habilitaciones: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1151,
  },
});

export default Habilitaciones;
