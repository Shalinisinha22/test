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


const ServiceInfoScreen = ({navigation}) => {
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
        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 15,
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
            {route.params.item?.heading}
          </Text>
          <Text style={{ fontSize: 12, textAlign: "justify", color: "gray" }}>
            {route.params.item?.subHeading}
          </Text>

          <Text style={{ fontSize: 12, textAlign: "justify", color: "#f08080" }}>
            {route.params.item?.bodyHeading}
          </Text>
          <Text style={{ fontSize: 12, textAlign: "justify", color: "gray" }}>
            {route.params.item?.body}
          </Text>
          <Text style={{ fontSize: 11, textAlign: "justify", color: "black", marginTop:5 }}>
            {route.params.item?.conclusion}
          </Text>

        </View>

      </View>

 

      <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />

      <View style={{ padding: 8 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginVertical: 5, textAlign:"center" }}>
          Total : Rs 1000
        </Text>

        {/* <Text style={{ color: "#00CED1" }}>
            FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins
          </Text> */}

        {/* <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
              alignItems: "center",
              gap: 5,
            }}
          >
            <Ionicons name="location" size={24} color="black" />
  
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Deliver To Sujan - Bangalore 560019
            </Text>
          </View> */}
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
      >
        <Text>Book Now</Text>
      </TouchableOpacity>
    
    </ScrollView>
  );
};

export default ServiceInfoScreen;

const styles = StyleSheet.create({});
