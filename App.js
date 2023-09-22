import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  createBottomTabNavigator,
} from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import QuestionScreen from "./screens/QuestionScreen";
import { auth } from "./firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  SignInWithCredential,
} from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import MainNav from "./MainNav";

const Stack = createNativeStackNavigator();

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    isoClientId:
      "52070670777-l08gl4tcg6516upr16cline0qbp811lm.apps.googleusercontent.com",
    androidClientId:
      "52070670777-9lffbrsp1vcmf8eoqe0hla4dgo3tsein.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type == "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      SignInWithCredential(auth, credential);
    }
  }, [response]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          promptAsync={promptAsync}
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
      </Stack.Navigator>
      <MainNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
