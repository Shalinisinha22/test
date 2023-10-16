import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { Dimensions } from "react-native";
  const { width } = Dimensions.get("window");
  import { FontAwesome } from "@expo/vector-icons";


const Categories = () => {

    const category = [
        {
          id: 0,
          image: require("../assets/shop/pc1.png"),
          name: "Personal Care",
        },
        {
          id: 1,
          image: require("../assets/shop/diabetes1.png"),
          name: "Diabetes",
        },
        {
          id: 2,
          image: require("../assets/shop/healthcare1.png"),
          name: "Heathcare Devices",
        },
        {
          id: 3,
          image: require("../assets/shop/healthcare1.png"),
          name: "Healthcare Conditions",
        },
        {
          id: 4,
          image: require("../assets/shop/logo.png"),
          name: "CureoFine Featured Products",
        },
        {
          id: 5,
          image: require("../assets/shop/covid1.png"),
          name: "Covid Essentials",
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
              Shop By Category
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
            {category.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={{
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Image
                  style={{
                    width: 95,
                    height: 95,
                    resizeMode: "contain",
                    borderRadius: 60,
                    // borderColor:"black",
                    backgroundColor: "whitesmoke",
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
            ))}
          </ScrollView>
    </>
  )
}

export default Categories