import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>ProfileScreen</Text>
      <View>
        <Text>Navigation bar</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
