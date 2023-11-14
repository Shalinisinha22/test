import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  ImageBackground,
  Dimensions,
  BackHandler,
  Alert
} from "react-native";
import React, { useState , useEffect} from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../Components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProductInfoScreen = ({ navigation }) => {
  const route = useRoute();
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100;


  // useEffect(() => {
  //   const backAction = () => {
    
  //    navigation.goBack();
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <Header navigation={navigation}></Header>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            style={{ width, height, marginTop: 25, resizeMode: "contain" }}
            source={{uri:`${item}`}}
            key={index}
          >
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#C60C30",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 12,
                  }}
                >
                  20% off
                </Text>
              </View>

              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <MaterialCommunityIcons
                  name="share-variant"
                  size={24}
                  color="black"
                />
              </View>
            </View>

            {/* <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: "auto",
                  marginLeft: 20,
                  marginBottom: 20,
                }}
              >
                <AntDesign name="hearto" size={24} color="black" />
              </View> */}
          </ImageBackground>
        ))}
      </ScrollView>

      <View style={{ padding: 10, paddingTop: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>
          {route?.params?.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            padding: 2,
            marginTop: 5,
          }}
        >
          <Text>Session: </Text>
          <Text style={{ color: "#eb3b5a" }}>{route.params.item?.duration} minutes</Text>
        </View>
        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 10,
          }}
        />

        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 2,
          }}
        >
          <Text>Description: </Text>
          <Text style={{ fontSize: 12, textAlign: "justify", color: "gray" }}>
            {route.params.item?.details}
          </Text>
        </View>

        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 10,
          }}
        />

        <View style={{ padding: 8 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginVertical: 5,
              textAlign: "center",
            }}
          >
            Total : {route.params?.price}
          </Text>
        </View>
      </View>

      {/* <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 0.5 }} /> */}

      <TouchableOpacity
        style={{
          backgroundColor: "#f08080",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 15,
          marginVertical: 0,
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({});
