import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";

export default function Services({ navigation }) {


  const list = [
    {
      id: "0",
      image: require("../assets/Services/cs1.png"),
      name: "Doctor Consultation",
      url: "Consultation",

    },
    {
      id: "1",
      image: require("../assets/Services/cs2.png"),
      name: "Surgery Appointment",
      url: "Surgery",
    },

    {
      id: "2",
      image: require("../assets/Services/cs4.png"),
      name: "Physiotherapy At Home",
      url: "Physiotherapy",
    },


  ];

  return (
    <>
      <Text
        style={{
          paddingTop: 10,
          fontSize: 12,
          fontWeight: "bold",
          paddingLeft: 7,
          fontFamily: "OpenSans",
          color: "#eb3b5a",
        }}
      >
        EXPLORE IN
      </Text>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text
          style={{
            // paddingTop: 10,
            fontSize: 18,
            fontWeight: "bold",
            paddingLeft: 7,
            fontFamily: "OpenSans",
          }}
        >
          Our Services
        </Text>

        <View>
          <FontAwesome
            name="stethoscope"
            size={20}
            color="#f08080"
            style={{ marginLeft: 7, marginTop: -2 }}
          />
        </View>
      </View>

      <Text
        style={{
          height: 1.5,
          borderColor: "#eb3b5a",
          borderWidth: 1.5,
          marginTop: 10,
          width: width * 0.4,
          marginLeft: 7,
          borderRadius: 5,
        }}
      />

      <FlatList
        data={list}
        horizontal
        showsHorizontalScrollIndicator={false}
        // numColumns={3}
        scrollEnabled={true}
        // columnWrapperStyle={{
        //   flex: 1,
        //   justifyContent: "space-between",
        // }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={item.id}
            style={{
              margin: 8,
              alignItems: "center",
              marginTop: 10,
              padding: 2,
            }}
            onPress={() => navigation.navigate(item.url, {
              id: item.id,
              name: item.name,
              carouselImages: item.carouselImages,
              item: item,
            
            }
            )}
            // onPress={()=> item.url === "ServiceInfo" ? navigation.navigate(item.url) : navigation.navigate()}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                resizeMode: "contain",
                backgroundColor: "whitesmoke",
                borderRadius: 50,
                borderWidth: 2,
              }}
              source={item.image}
            />

            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: "600",
                marginTop: 5,
                fontFamily: "OpenSans",
              }}
            >
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </>
  );
}
