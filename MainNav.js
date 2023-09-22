import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer, TabNavigator } from "@react-navigation/native";

const MainNav = () => {
  return (
    <View>
      <Text>MainNav</Text>
      <NavigationContainer>
        <Tab.Navigator initialRouteName={"Home"}></Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
