const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Voluntarios from "./screens/Voluntarios";
import AjustesConCuenta from "./screens/AjustesConCuenta";
import AboutUs from "./screens/AboutUs";
import PaginaEnConstruccion from "./screens/PaginaEnConstruccion";
import ChatDavidGonzlez from "./screens/ChatDavidGonzlez";
import Habilitaciones from "./screens/Habilitaciones";
import OverlayHabilitaciones from "./components/OverlayHabilitaciones";
import OverlayNoApuntados from "./components/OverlayNoApuntados";
import OverlayNoApuntadosVacia from "./components/OverlayNoApuntadosVacia";
import OverlayNoApuntadosVaciaII from "./components/OverlayNoApuntadosVaciaII";
import InicioDeSesin from "./screens/InicioDeSesin";
import RegistrarUsuarios from "./screens/RegistrarUsuarios";
import Groups from "./screens/Groups";
import Chats from "./screens/Chats";
import OverlayVoluntarios from "./screens/OverlayVoluntarios";
import OverlayCertificados from "./screens/OverlayCertificados";
import DescripcinVerificado from "./components/DescripcinVerificado";
import Provincias from "./components/Provincias";
import Certificados from "./components/Certificados";
import BancoDeAlimentosEjemplo from "./screens/BancoDeAlimentosEjemplo";
import InfoMara from "./components/InfoMara";
import GrupoVoluntariadoDeLaPaz from "./screens/GrupoVoluntariadoDeLaPaz";
import NuevoEvento from "./screens/NuevoEvento";
import SubmarinismoEjemplo from "./components/SubmarinismoEjemplo";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
    "Raleway-SemiBold": require("./assets/fonts/Raleway-SemiBold.ttf"),
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Black": require("./assets/fonts/Raleway-Black.ttf"),
    "SpaceMono-Bold": require("./assets/fonts/SpaceMono-Bold.ttf"),
    "Cabin-Medium": require("./assets/fonts/Cabin-Medium.ttf"),
    "Cabin-Bold": require("./assets/fonts/Cabin-Bold.ttf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "CreteRound-Regular": require("./assets/fonts/CreteRound-Regular.ttf"),
    "ZillaSlab-Bold": require("./assets/fonts/ZillaSlab-Bold.ttf"),
    "Varta-Bold": require("./assets/fonts/Varta-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Voluntarios"
              component={Voluntarios}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AjustesConCuenta"
              component={AjustesConCuenta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutUs"
              component={AboutUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaginaEnConstruccion"
              component={PaginaEnConstruccion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatDavidGonzlez"
              component={ChatDavidGonzlez}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Habilitaciones"
              component={Habilitaciones}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverlayHabilitaciones"
              component={OverlayHabilitaciones}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverlayNoApuntados"
              component={OverlayNoApuntados}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverlayNoApuntadosVacia"
              component={OverlayNoApuntadosVacia}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverlayNoApuntadosVaciaII"
              component={OverlayNoApuntadosVaciaII}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InicioDeSesin"
              component={InicioDeSesin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegistrarUsuarios"
              component={RegistrarUsuarios}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Groups"
              component={Groups}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chats"
              component={Chats}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverlayVoluntarios"
              component={OverlayVoluntarios}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverlayCertificados"
              component={OverlayCertificados}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DescripcinVerificado"
              component={DescripcinVerificado}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Provincias"
              component={Provincias}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Certificados"
              component={Certificados}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BancoDeAlimentosEjemplo"
              component={BancoDeAlimentosEjemplo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InfoMara"
              component={InfoMara}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GrupoVoluntariadoDeLaPaz"
              component={GrupoVoluntariadoDeLaPaz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NuevoEvento"
              component={NuevoEvento}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SubmarinismoEjemplo"
              component={SubmarinismoEjemplo}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
