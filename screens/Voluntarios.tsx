import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import InfoMara from "../components/InfoMara";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Voluntarios = () => {
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.voluntarios}>
        <View style={styles.voluntariosChild} />
        <View style={[styles.tarjeta12, styles.tarjetaShadowBox]}>
          <View style={[styles.tarjeta12Child, styles.childShadowBox]} />
          <View style={[styles.filtroPerfil, styles.filtroBg]}>
            <Text style={styles.lugo}>Lugo</Text>
          </View>
        </View>
        <View style={[styles.voluntariosItem, styles.childLayout]} />
        <View style={[styles.voluntariosInner, styles.voluntariosLayout]} />
        <Text style={[styles.carlosVzquez, styles.adrinPrezTypo]}>
          Carlos Vázquez
        </Text>
        <View style={[styles.tarjeta11, styles.tarjetaShadowBox]}>
          <View style={[styles.tarjeta11Child, styles.childShadowBox]} />
          <View style={[styles.filtroPerfil1, styles.filtroPosition]}>
            <Text style={styles.alicante}>Alicante</Text>
          </View>
        </View>
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <View style={[styles.imagen, styles.imagenIconLayout1]} />
        <View
          style={[styles.voluntariosChild1, styles.voluntariosChildPosition4]}
        />
        <Text style={[styles.alfonsoDaz, styles.carlaYangTypo]}>
          Alfonso Díaz
        </Text>
        <View style={[styles.tarjeta9, styles.tarjetaShadowBox]}>
          <View style={[styles.tarjeta9Child, styles.childShadowBox]} />
          <View style={[styles.filtroPerfil1, styles.filtroPosition]}>
            <Text style={styles.alicante}>Cáceres</Text>
          </View>
        </View>
        <View
          style={[styles.voluntariosChild2, styles.voluntariosChildLayout1]}
        />
        <View style={[styles.imagen1, styles.imagenLayout]} />
        <View
          style={[styles.voluntariosChild3, styles.voluntariosChildPosition3]}
        />
        <Text style={[styles.alfonsoDaz1, styles.alfonsoDaz1Typo]}>
          Alfonso Díaz
        </Text>
        <View style={[styles.tarjeta8, styles.tarjetaShadowBox]}>
          <View style={[styles.tarjeta8Child, styles.childShadowBox]} />
          <View style={[styles.filtroPerfil1, styles.filtroPosition]}>
            <Text style={styles.alicante}>Barcelona</Text>
          </View>
        </View>
        <View
          style={[styles.voluntariosChild4, styles.voluntariosChildLayout1]}
        />
        <View style={[styles.imagen2, styles.imagenIconLayout]} />
        <View
          style={[styles.voluntariosChild5, styles.voluntariosChildPosition3]}
        />
        <Text style={[styles.adrinPrez, styles.adrinPrezTypo]}>
          Adrián Pérez
        </Text>
        <View style={[styles.tarjeta7, styles.imagenIconPosition]}>
          <View style={[styles.tarjeta7Child, styles.childShadowBox]} />
          <View style={[styles.filtroPerfil4, styles.filtroBg]} />
        </View>
        <Text style={styles.madrid}>Madrid</Text>
        <View
          style={[styles.voluntariosChild6, styles.tarjeta3ParentPosition]}
        />
        <View
          style={[styles.voluntariosChild7, styles.voluntariosChildPosition2]}
        />
        <Text style={[styles.martaGarca, styles.martaGarcaTypo]}>
          Marta García
        </Text>
        <Image
          style={[styles.tarjeta4Icon, styles.imagenIconLayout]}
          contentFit="cover"
          source={require("../assets/tarjeta-4.png")}
        />
        <Pressable
          style={[styles.tarjeta3Parent, styles.tarjeta3ParentPosition]}
          onPress={openGroupContainer}
        >
          <View style={[styles.tarjeta3, styles.tarjeta3Position]}>
            <View style={[styles.tarjeta3Child, styles.childShadowBox]} />
            <View style={[styles.filtroPerfil, styles.filtroBg]}>
              <Text style={styles.lugo}>Cádiz</Text>
            </View>
          </View>
          <View style={[styles.groupChild, styles.childLayout]} />
        </Pressable>
        <Image
          style={[styles.imagenIcon, styles.imagenIconPosition]}
          contentFit="cover"
          source={require("../assets/imagen5.png")}
        />
        <View
          style={[styles.voluntariosChild8, styles.voluntariosChildPosition2]}
        />
        <Text style={[styles.maraGutirrez, styles.martaGarcaTypo]}>
          María Gutiérrez
        </Text>
        <Image
          style={[styles.imagenIcon1, styles.imagenIconPosition]}
          contentFit="cover"
          source={require("../assets/imagen6.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-26.png")}
        />
        <View style={[styles.tarjeta10, styles.tarjetaShadowBox]}>
          <View style={[styles.tarjeta10Child, styles.childShadowBox]} />
          <View style={[styles.filtroPerfil6, styles.filtroPosition]}>
            <Text style={styles.lenTypo}>Madrid</Text>
          </View>
        </View>
        <View style={[styles.voluntariosChild9, styles.rectangleViewLayout]} />
        <View
          style={[styles.voluntariosChild10, styles.voluntariosChildPosition4]}
        />
        <Text style={[styles.carlaYang, styles.carlaYangTypo]}>Carla Yang</Text>
        <Image
          style={[styles.imagenIcon2, styles.imagenIconLayout]}
          contentFit="cover"
          source={require("../assets/imagen7.png")}
        />
        <View style={[styles.tarjeta13, styles.tarjetaShadowBox]}>
          <View style={[styles.tarjeta13Child, styles.childShadowBox]} />
          <View style={[styles.filtroPerfil, styles.filtroBg]}>
            <Text style={styles.lenTypo}>León</Text>
          </View>
        </View>
        <View style={[styles.voluntariosChild11, styles.childLayout]} />
        <View style={[styles.voluntariosChild12, styles.voluntariosLayout]} />
        <Text style={[styles.ernestoGmez, styles.alfonsoDaz1Typo]}>
          Ernesto Gómez
        </Text>
        <Image
          style={[styles.imagenIcon3, styles.imagenIconLayout1]}
          contentFit="cover"
          source={require("../assets/imagen8.png")}
        />
        <Image
          style={[styles.image4Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <View style={[styles.tarjeta14, styles.voluntariosChildPosition1]}>
          <View style={[styles.tarjeta14Child, styles.childShadowBox]} />
          <View style={[styles.filtroPerfil1, styles.filtroPosition]}>
            <Text style={styles.alicante}>Sevilla</Text>
          </View>
        </View>
        <View
          style={[styles.voluntariosChild13, styles.voluntariosChildLayout]}
        />
        <View style={[styles.imagen3, styles.imagenIconLayout1]} />
        <View
          style={[styles.voluntariosChild14, styles.voluntariosChildPosition]}
        />
        <Text style={[styles.sergioFernandez, styles.anaSanzTypo]}>
          Sergio Fernandez
        </Text>
        <View style={[styles.tarjeta15, styles.tarjeta15Position]}>
          <View style={[styles.tarjeta15Child, styles.childShadowBox]} />
          <View style={[styles.filtroPerfil9, styles.filtroPosition]}>
            <Text style={styles.lenTypo}>Murcia</Text>
          </View>
        </View>
        <View style={[styles.voluntariosChild15, styles.tarjeta15Position]} />
        <View
          style={[styles.voluntariosChild16, styles.voluntariosChildPosition]}
        />
        <Text style={[styles.anaSanz, styles.anaSanzTypo]}>Ana Sanz</Text>
        <Image
          style={[styles.imagenIcon4, styles.imagenIconLayout1]}
          contentFit="cover"
          source={require("../assets/imagen9.png")}
        />
        <Image
          style={[styles.image5Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        <Image
          style={[styles.imagenIcon5, styles.imagenIconLayout1]}
          contentFit="cover"
          source={require("../assets/imagen10.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../assets/group-45.png")}
        />
        <Image
          style={[styles.voluntariosChild17, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../assets/group-29.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <InfoMara onClose={closeGroupContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  tarjetaShadowBox: {
    height: 156,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  childShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
    height: 156,
    width: 158,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  filtroBg: {
    opacity: 0.8,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  childLayout: {
    height: 127,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_9xl,
  },
  voluntariosLayout: {
    height: 28,
    top: 800,
    backgroundColor: Color.colorMintcream,
    width: 158,
    position: "absolute",
  },
  adrinPrezTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  filtroPosition: {
    top: 125,
    opacity: 0.8,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  rectangleViewLayout: {
    top: 514,
    height: 127,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_9xl,
    width: 158,
    position: "absolute",
  },
  imagenIconLayout1: {
    height: 87,
    borderRadius: Border.br_21xl,
    width: 84,
    position: "absolute",
  },
  voluntariosChildPosition4: {
    top: 613,
    height: 28,
    backgroundColor: Color.colorMintcream,
    width: 158,
    position: "absolute",
  },
  carlaYangTypo: {
    top: 622,
    color: Color.colorBlack,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  voluntariosChildLayout1: {
    top: 332,
    height: 127,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_9xl,
    width: 158,
    position: "absolute",
  },
  imagenLayout: {
    left: 239,
    height: 87,
    borderRadius: Border.br_21xl,
    width: 84,
  },
  voluntariosChildPosition3: {
    top: 431,
    height: 28,
    backgroundColor: Color.colorMintcream,
    width: 158,
    position: "absolute",
  },
  alfonsoDaz1Typo: {
    left: 222,
    color: Color.colorBlack,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  imagenIconLayout: {
    left: 65,
    height: 87,
    width: 84,
  },
  imagenIconPosition: {
    top: 160,
    position: "absolute",
  },
  tarjeta3ParentPosition: {
    top: 155,
    width: 158,
    position: "absolute",
  },
  voluntariosChildPosition2: {
    top: 254,
    height: 28,
    backgroundColor: Color.colorMintcream,
    width: 158,
    position: "absolute",
  },
  martaGarcaTypo: {
    top: 263,
    color: Color.colorBlack,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  tarjeta3Position: {
    left: 0,
    width: 158,
    position: "absolute",
  },
  iconLayout: {
    width: 87,
    height: 87,
    position: "absolute",
  },
  voluntariosChildPosition1: {
    left: 209,
    width: 158,
  },
  voluntariosChildLayout: {
    top: 883,
    height: 127,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_9xl,
  },
  voluntariosChildPosition: {
    top: 982,
    height: 28,
    backgroundColor: Color.colorMintcream,
    position: "absolute",
  },
  anaSanzTypo: {
    top: 991,
    color: Color.colorBlack,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  tarjeta15Position: {
    left: 30,
    width: 158,
    position: "absolute",
  },
  groupIconPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  voluntariosChild: {
    top: 132,
    left: 1,
    backgroundColor: Color.colorGainsboro_600,
    width: 387,
    height: 986,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  tarjeta12Child: {
    backgroundColor: Color.colorMintcream,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
  },
  lugo: {
    width: 40,
    height: 14,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceMonoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 7,
    top: 2,
    position: "absolute",
  },
  filtroPerfil: {
    top: 124,
    width: 56,
    height: 21,
    left: 13,
  },
  tarjeta12: {
    width: 158,
    height: 156,
    left: 28,
    top: 706,
    position: "absolute",
  },
  voluntariosItem: {
    top: 701,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_9xl,
    width: 158,
    position: "absolute",
    left: 28,
  },
  voluntariosInner: {
    left: 28,
  },
  carlosVzquez: {
    left: 43,
    top: 809,
  },
  tarjeta11Child: {
    borderRadius: Border.br_5xl,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  alicante: {
    width: 84,
    height: 14,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceMonoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 7,
    top: 2,
    position: "absolute",
  },
  filtroPerfil1: {
    left: 15,
    width: 83,
    height: 21,
  },
  tarjeta11: {
    left: 207,
    top: 519,
    width: 158,
    height: 156,
    position: "absolute",
  },
  rectangleView: {
    left: 207,
  },
  imagen: {
    left: 244,
    height: 87,
    top: 519,
  },
  voluntariosChild1: {
    left: 207,
  },
  alfonsoDaz: {
    left: 227,
  },
  tarjeta9Child: {
    borderRadius: Border.br_5xl,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  tarjeta9: {
    left: 202,
    top: 337,
    width: 158,
    height: 156,
    position: "absolute",
  },
  voluntariosChild2: {
    left: 202,
  },
  imagen1: {
    top: 337,
    position: "absolute",
  },
  voluntariosChild3: {
    left: 202,
  },
  alfonsoDaz1: {
    top: 440,
  },
  tarjeta8Child: {
    borderRadius: Border.br_5xl,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  tarjeta8: {
    top: 337,
    width: 158,
    height: 156,
    left: 28,
    position: "absolute",
  },
  voluntariosChild4: {
    left: 28,
  },
  imagen2: {
    top: 337,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  voluntariosChild5: {
    left: 28,
  },
  adrinPrez: {
    left: 48,
    top: 440,
  },
  tarjeta7Child: {
    borderRadius: Border.br_5xl,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  filtroPerfil4: {
    top: 123,
    left: 11,
    width: 60,
    height: 23,
  },
  tarjeta7: {
    left: 202,
    height: 156,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 158,
  },
  madrid: {
    top: 286,
    left: 221,
    width: 49,
    height: 14,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceMonoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  voluntariosChild6: {
    left: 202,
    height: 127,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_9xl,
  },
  voluntariosChild7: {
    left: 202,
  },
  martaGarca: {
    left: 213,
  },
  tarjeta4Icon: {
    top: 337,
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
    backgroundColor: Color.colorMintcream,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
  },
  tarjeta3: {
    top: 5,
    height: 156,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupChild: {
    left: 0,
    width: 158,
    position: "absolute",
    top: 0,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_9xl,
  },
  tarjeta3Parent: {
    height: 161,
    left: 28,
  },
  imagenIcon: {
    left: 65,
    height: 87,
    width: 84,
    borderRadius: Border.br_21xl,
  },
  voluntariosChild8: {
    left: 28,
  },
  maraGutirrez: {
    left: 43,
  },
  imagenIcon1: {
    left: 239,
    height: 87,
    borderRadius: Border.br_21xl,
    width: 84,
  },
  ellipseIcon: {
    left: 236,
    top: 337,
  },
  tarjeta10Child: {
    backgroundColor: Color.colorMintcream,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
  },
  lenTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    width: 49,
    height: 14,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceMonoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 7,
    top: 2,
    position: "absolute",
  },
  filtroPerfil6: {
    width: 65,
    height: 22,
    left: 13,
  },
  tarjeta10: {
    top: 519,
    width: 158,
    height: 156,
    left: 28,
    position: "absolute",
  },
  voluntariosChild9: {
    left: 28,
  },
  voluntariosChild10: {
    left: 28,
  },
  carlaYang: {
    left: 43,
  },
  imagenIcon2: {
    borderRadius: Border.br_21xl,
    top: 519,
    position: "absolute",
  },
  tarjeta13Child: {
    backgroundColor: Color.colorMintcream,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
  },
  tarjeta13: {
    left: 207,
    width: 158,
    height: 156,
    top: 706,
    position: "absolute",
  },
  voluntariosChild11: {
    left: 207,
    top: 701,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_9xl,
    width: 158,
    position: "absolute",
  },
  voluntariosChild12: {
    left: 207,
  },
  ernestoGmez: {
    top: 809,
  },
  imagenIcon3: {
    left: 244,
    height: 87,
    top: 706,
  },
  image4Icon: {
    left: 241,
    borderRadius: Border.br_21xl,
    top: 519,
  },
  tarjeta14Child: {
    borderRadius: Border.br_5xl,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  tarjeta14: {
    top: 888,
    height: 156,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  voluntariosChild13: {
    left: 209,
    width: 158,
    position: "absolute",
  },
  imagen3: {
    left: 246,
    top: 888,
  },
  voluntariosChild14: {
    left: 209,
    width: 158,
  },
  sergioFernandez: {
    left: 230,
  },
  tarjeta15Child: {
    backgroundColor: Color.colorMintcream,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xl,
  },
  filtroPerfil9: {
    width: 63,
    height: 21,
    left: 13,
  },
  tarjeta15: {
    top: 888,
    height: 156,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  voluntariosChild15: {
    top: 883,
    height: 127,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_9xl,
  },
  voluntariosChild16: {
    left: 31,
    width: 156,
  },
  anaSanz: {
    left: 51,
  },
  imagenIcon4: {
    left: 67,
    top: 888,
  },
  image5Icon: {
    left: 243,
    top: 888,
    borderRadius: Border.br_21xl,
  },
  imagenIcon5: {
    left: 64,
    top: 706,
  },
  groupIcon: {
    top: -21,
    height: 140,
  },
  voluntariosChild17: {
    top: 771,
    height: 81,
  },
  voluntarios: {
    flex: 1,
    width: "100%",
    height: 1109,
    backgroundColor: Color.colorWhite,
  },
});

export default Voluntarios;
