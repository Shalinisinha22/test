import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React  from "react";
  import { Dimensions } from "react-native";
  const { width } = Dimensions.get("window");
  import { FontAwesome } from "@expo/vector-icons";


const Teams = () => {

    const teams = [
        {
          id: 0,
          name: "Dr Namcy",
          occupation: "General Physician",
          image: require("../assets/team1.jpg"),
        },
        {
          id: 1,
          name: "Dr Namcy",
          occupation: "General Physician",
          image: require("../assets/team1.jpg"),
        },
        {
          id: 2,
          name: "Dr Namcy",
          occupation: "General Physician",
          image: require("../assets/team1.jpg"),
        },
        {
          id: 3,
          name: "Dr Namcy",
          occupation: "General Physician",
          image: require("../assets/team1.jpg"),
        },
      ];



  return (
    <>
       <View
            style={{
              backgroundColor: "whitesmoke",
              marginTop: 15,
              paddingTop: 4,
              paddingBottom: 10,
              borderTopRightRadius: 20,
              borderTopEndRadius: 20,
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Text
                style={{
                  // paddingTop: 10,
                  fontSize: 18,
                  fontWeight: "bold",
                  paddingLeft: 7,
                  fontFamily: "OpenSans",
                }}
              >
                Our Top Doctors
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
                width: width * 0.5,
                marginLeft: 7,
                borderRadius: 5,
              }}
            />

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {teams.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    margin: 8,
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
                    }}
                    source={item.image}
                  />

                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      fontWeight: "600",
                      marginTop: 5,
                      fontFamily: "OpenSans",
                    }}
                  >
                    {item?.name}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 12,
                      fontWeight: "600",
                      marginTop: 5,
                      fontFamily: "OpenSans",
                      color: "#f08080",
                    }}
                  >
                    {item.occupation}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
    </>
  )
}

export default Teams;