import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";

const MostBooked = ({ navigation }) => {
  const mostBook = [
  
    {
      id: "1",
      image: require("../assets/MostBook/mostBook1.png"),
      name: "Doctor Consultation",
      url: "Consultation",
   
    },
    {
      id: "2",
      image: require("../assets/MostBook/mostBook7.png"),
      name: "Surgery Appointment",
      url: "Surgery",
    
    },
    {
      id: "3",
      image: require("../assets/MostBook/mostBook6.png"),
      name: "Physiotherapy At Home",
      url: "Physiotherapy",

     
    }
  
  ];
  return (
    <>
      <Text
        style={{
          paddingTop: 20,
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
            fontSize: 18,
            fontWeight: "bold",
            paddingLeft: 7,
            fontFamily: "OpenSans",
          }}
        >
          Most Booked Services
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
          width: width * 0.6,
          marginLeft: 7,
          borderRadius: 5,
        }}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {mostBook.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: 3,
              marginLeft: 3,
            }}
            onPress={() =>
              navigation.navigate(item.url)
            }
          >
            <Image
              style={{ width: 150, height: 150, resizeMode: "contain" }}
              source={item.image}
            />
            <View>
              <Text style={{ fontWeight: 500, fontFamily: "OpenSans" }}>
                {item.name}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "black",
                paddingVertical: 3,
                width: "auto",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 1,
                borderRadius: 2,
                position: "absolute",
                top: 20,
                left: 0,
                paddingHorizontal: 8,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 13,
                  fontWeight: "bold",
                }}
              >
                Book Now
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default MostBooked;
