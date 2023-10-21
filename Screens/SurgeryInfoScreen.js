import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    TextInput,
    ImageBackground,
    Dimensions,
  } from "react-native";
  import React, { useState } from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import Header from "../Components/Header";
  import { TouchableOpacity } from "react-native-gesture-handler";
  
  
  const SurgeryInfoScreen = ({navigation}) => {
    const route = useRoute();
    const { width } = Dimensions.get("window");
    // const navigation = useNavigation();
  
    const height = (width * 100) / 100;
  
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
      >
         <Header navigation={navigation}></Header>
  
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {route.params.carouselImages.map((item, index) => (
            <ImageBackground
              style={{ width: width  , height, marginTop: 25, resizeMode: "contain" }}
              source={item}
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
            </ImageBackground>
          ))}
        </ScrollView>
  
        <View style={{ padding: 10, paddingTop: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            {route?.params?.name}
          </Text>
       
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
              {route.params?.desc}
            </Text>
          
  
          </View>
  


   
          <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 ,marginTop:10}} />
  
  <View style={{ padding: 8 }}>
    <Text style={{ fontSize: 15, fontWeight: "bold", marginVertical: 5, textAlign:"center" }}>
      Total : Rs 3000
    </Text>
    </View>
      </View>
  
        <TouchableOpacity
          style={{
            backgroundColor: "#f08080",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Book Now</Text>
        </TouchableOpacity>
      
      </ScrollView>
    );
  };
  
  export default SurgeryInfoScreen;
  
  const styles = StyleSheet.create({});
  