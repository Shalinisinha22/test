import {
    Text,
    View,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { Feather } from "@expo/vector-icons";
  import { Dimensions } from "react-native";
  const { width } = Dimensions.get("window");
  import { FontAwesome } from "@expo/vector-icons";
  import { Linking } from "react-native";


const Contact = () => {

    const contact = [
        {
          // #f08080
          id: 1,
          icon: <Feather name="phone-call" size={24} color="#f08080" />,
          title: "7250446555",
          subtitle: "Have a question?",
          text: "Call Us Now",
          url:"tel:7250446555"
        },
        {
          id: 2,
          icon: <Feather name="mail" size={24} color="#f08080" />,
          title: "cureofine@gmail.com",
          subtitle: " Need support?",
          text: " Drop us an email",
          url:"mailto:cureofine@gmail.com"
        },
        {
          id: 3,
          icon: <Ionicons name="alarm-outline" size={24} color="#f08080" />,
          title: "Mon - Sat",
          subtitle: "10.00AM - 06.00PM",
          text: " We are open on",
        },
      ];
  return (
    <>
     <ImageBackground
            source={require("../assets/bg8.png")}
            style={{
              width: "100%",
              height:180,
              resizeMode: "cover",
              marginTop: 15,
            }}
          >
           

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  paddingLeft: 7,
                  fontFamily: "OpenSans",
                }}
              >
                Contact Us
              </Text>

              <View>
                <FontAwesome
                  name="stethoscope"
                  size={20}
                  color="white"
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
              {contact.map((item, index) => (


                <TouchableOpacity
                  key={item.id}
                  style={{
                    margin: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 150,
                    borderWidth: 0.5,
                    padding: 8,
                    borderRadius: 8,
                    backgroundColor: "white",
                    borderColor: "#D0D0D0",
                    marginTop: 12,
                  }}
    onPress={()=>{  item.url && Linking.openURL(item.url)}}   
// 
                  
                >
                  {item.icon}

                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 12,
                      fontWeight: "500",
                      marginTop: 5,
                    }}
                  >
                    {item.title}
                  </Text>

                  {item.text && (
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 10,
                        fontWeight: "500",
                        marginTop: 5,
                      }}
                    >
                      {item.text}
                    </Text>
                  )}

                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 8,
                      fontWeight: "500",
                      marginTop: 5,
                      color: "#f08080",
                    }}
                  >
                    {item.subtitle}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </ImageBackground>
    </>
  )
}

export default Contact