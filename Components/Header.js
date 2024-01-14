import {
  
    View,
    Image,
  
  } from "react-native";
  import React from "react";
  import { AntDesign } from "@expo/vector-icons";


const Header = ({navigation}) => {
  return (
    <View
    style={{
      alignItems: "center",
      // justifyContent:"center",
      flexDirection: "row",
      gap: 53,
      padding: 2,
    }}
  >
    <AntDesign
      name="menu-fold"
      size={34}
      color="#103042"
      onPress={() => navigation.openDrawer()}
      style={{ marginLeft: 18 }}
    />

    <Image
      style={{ width: 180, height: 50, resizeMode: "contain" }}
      source={require("../assets/logo.png")}
    />
  </View>
  )
}

export default Header