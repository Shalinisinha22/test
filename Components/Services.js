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
    // {
    //   id: "8",
    //   image: require("../assets/Services/labtest1.png"),
    //   name: "Lab Test",
    //   url: "ServiceInfo",
    //   carouselImages:[
    //     require("../assets/Services/labtest1.png"),
    //     require("../assets/Services/labtest1.png"),
    //     require("../assets/Services/labtest1.png"),
    //   ],
    //   heading:
    //   "Ready to transform your life and achieve your weight loss goals? Look no further than Cure O Fine, your partner in the journey to a healthier you.",
    // subHeading:
    //   "Our app is your gateway to a sustainable, effective weight loss program tailored to your unique needs. Our team of experienced professionals is here to support you every step of the way.",
    // bodyHeading: "**What We Offer:**",
    // body: "Enjoy delicious, nutritious meals designed to fuel your weight loss journey. Get moving with fitness plans that suit your fitness level and preferences. Monitor your progress, track your results, and celebrate your achievements. Book appointments that fit your lifestyle, so you can stay on track. Your journey to a healthier lifestyle is a personal one, and we're committed to keeping it confidential.",
    // conclusion:
    //   "We're here to help you succeed. Your weight loss journey starts now.",
    // },

    // {
    //   id: "5",
    //   image: require("../assets/Services/stress1.png"),
    //   name: "Stress & Anxiety",
    //   url: "ServiceInfo",
    //   carouselImages:[
    //     require("../assets/Services/stress1.png"),
    //     require("../assets/Services/stress1.png"),
    //     require("../assets/Services/stress1.png"),
    //   ],
    //   heading:
    //   "Ready to transform your life and achieve your weight loss goals? Look no further than Cure O Fine, your partner in the journey to a healthier you.",
    // subHeading:
    //   "Our app is your gateway to a sustainable, effective weight loss program tailored to your unique needs. Our team of experienced professionals is here to support you every step of the way.",
    // bodyHeading: "**What We Offer:**",
    // body: "Enjoy delicious, nutritious meals designed to fuel your weight loss journey. Get moving with fitness plans that suit your fitness level and preferences. Monitor your progress, track your results, and celebrate your achievements. Book appointments that fit your lifestyle, so you can stay on track. Your journey to a healthier lifestyle is a personal one, and we're committed to keeping it confidential.",
    // conclusion:
    //   "We're here to help you succeed. Your weight loss journey starts now.",
    // },
    {
      id: "2",
      image: require("../assets/Services/cs4.png"),
      name: "Physiotherapy At Home",
      url: "Physiotherapy",
    },

    // {
    //   id: "9",
    //   image: require("../assets/Services/pharmacy1.png"),
    //   name: "Pharmacy",
    //   url: "ServiceInfo",
    //   carouselImages:[
    //     require("../assets/Services/pharmacy1.png"),
    //     require("../assets/Services/pharmacy1.png"),
    //     require("../assets/Services/pharmacy1.png"),
    //   ],
    //   heading:
    //   "Ready to transform your life and achieve your weight loss goals? Look no further than Cure O Fine, your partner in the journey to a healthier you.",
    // subHeading:
    //   "Our app is your gateway to a sustainable, effective weight loss program tailored to your unique needs. Our team of experienced professionals is here to support you every step of the way.",
    // bodyHeading: "**What We Offer:**",
    // body: "Enjoy delicious, nutritious meals designed to fuel your weight loss journey. Get moving with fitness plans that suit your fitness level and preferences. Monitor your progress, track your results, and celebrate your achievements. Book appointments that fit your lifestyle, so you can stay on track. Your journey to a healthier lifestyle is a personal one, and we're committed to keeping it confidential.",
    // conclusion:
    //   "We're here to help you succeed. Your weight loss journey starts now.",
    // },

    // {
    //   id: "3",
    //   image: require("../assets/Services/cs1.png"),
    //   name: "CureoFine Care",
    //   url: "ServiceInfo",
    //   carouselImages:[
    //     require("../assets/Services/cs1.png"),
    //     require("../assets/Services/cs1.png"),
    //     require("../assets/Services/cs1.png"),
    //   ],
    //   heading:
    //   "Ready to transform your life and achieve your weight loss goals? Look no further than Cure O Fine, your partner in the journey to a healthier you.",
    // subHeading:
    //   "Our app is your gateway to a sustainable, effective weight loss program tailored to your unique needs. Our team of experienced professionals is here to support you every step of the way.",
    // bodyHeading: "**What We Offer:**",
    // body: "Enjoy delicious, nutritious meals designed to fuel your weight loss journey. Get moving with fitness plans that suit your fitness level and preferences. Monitor your progress, track your results, and celebrate your achievements. Book appointments that fit your lifestyle, so you can stay on track. Your journey to a healthier lifestyle is a personal one, and we're committed to keeping it confidential.",
    // conclusion:
    //   "We're here to help you succeed. Your weight loss journey starts now.",
    // },
    // {
    //   id: "7",
    //   image: require("../assets/Services/weight.png"),
    //   name: "Weight loss Program",
    //   url: "ServiceInfo",
    //   carouselImages:[
    //     require("../assets/Services/weight.png"),
    //     require("../assets/Services/weight.png"),
    //     require("../assets/Services/weight.png"),
    //   ],
    //   heading:
    //   "Ready to transform your life and achieve your weight loss goals? Look no further than Cure O Fine, your partner in the journey to a healthier you.",
    // subHeading:
    //   "Our app is your gateway to a sustainable, effective weight loss program tailored to your unique needs. Our team of experienced professionals is here to support you every step of the way.",
    // bodyHeading: "**What We Offer:**",
    // body: "Enjoy delicious, nutritious meals designed to fuel your weight loss journey. Get moving with fitness plans that suit your fitness level and preferences. Monitor your progress, track your results, and celebrate your achievements. Book appointments that fit your lifestyle, so you can stay on track. Your journey to a healthier lifestyle is a personal one, and we're committed to keeping it confidential.",
    // conclusion:
    //   "We're here to help you succeed. Your weight loss journey starts now.",
    // },

    // {
    //   id: "4",
    //   image: require("../assets/Services/ambulance.png"),
    //   name: "Ambulance",
    //   url: "ServiceInfo",
    //   carouselImages:[
    //     require("../assets/Services/ambulance.png"),
    //     require("../assets/Services/ambulance.png"),
    //     require("../assets/Services/ambulance.png"),
    //   ],
    //   heading:
    //   "Ready to transform your life and achieve your weight loss goals? Look no further than Cure O Fine, your partner in the journey to a healthier you.",
    // subHeading:
    //   "Our app is your gateway to a sustainable, effective weight loss program tailored to your unique needs. Our team of experienced professionals is here to support you every step of the way.",
    // bodyHeading: "**What We Offer:**",
    // body: "Enjoy delicious, nutritious meals designed to fuel your weight loss journey. Get moving with fitness plans that suit your fitness level and preferences. Monitor your progress, track your results, and celebrate your achievements. Book appointments that fit your lifestyle, so you can stay on track. Your journey to a healthier lifestyle is a personal one, and we're committed to keeping it confidential.",
    // conclusion:
    //   "We're here to help you succeed. Your weight loss journey starts now.",
    // },
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
