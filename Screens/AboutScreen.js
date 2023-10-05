import { View, Text, ImageBackground, Pressable, Image , ScrollView} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";


const AboutScreen = ({ navigation }) => {
  const contact = [
    {
      id: 1,
      icon: <Ionicons name="call" size={35} color="#eb3b5a" />,
      title: "7250446555",
      subtitle: "Have a question?",
      text: "Call Us Now",
    },
    {
      id: 2,
      icon: <Ionicons name="mail" size={35} color="#eb3b5a" />,
      title: "cureofine@gmail.com",
      subtitle: " Need support?",
      text: " Drop us an email",
    },
    {
      id: 3,
      icon: <Ionicons name="alarm" size={35} color="#eb3b5a" />,
      title: "Mon - Sat",
      subtitle: "10.00AM - 06.00PM",
      text: " We are open on",
    },
  ];
  return (
    <ScrollView>

      <ImageBackground
        source={require("../assets/Banner/cbanner1.png")}
        style={{ width: 410, height: 145, resizeMode: "contain" }}
      ></ImageBackground>
        <Text
            style={{
              padding: 10,
              fontSize: 13,
              fontWeight: "bold",
              color:"#eb3b5a"
          
            }}
          >
          
          INTRODUCING
          </Text>
      <Text
            style={{
              padding: 10,
              fontSize: 20,
              fontWeight: "bold",
          
            }}
          >
           About Cure o Fine
          </Text>

      <View style={{marginTop:10, padding:12}}>
    
        <Text style={{textAlign:"justify"}}>
          Cure o fine is a digital Healthcare Application that provide complete
          Health solution through an online application which is designed in a
          user friendly way that can be used by anyone. Our services are very
          much affordable and accessible for Tier 2& Tier 3 cities also. Our
          Unique services include Blood group availability check and blood donor
          registration, E pharmacy with single day medicine delivery, lab test
          at home , physiotherapy at home, video consultation, mental health
          sessions and many more services, we also have physical Telemedicine
          center which acts as a source of connectivity between remote Pateints
          to Specialist Doctors all over India. we are dedicated to provide best
          quality services in given time peeriod, we also provide single day
          medicine delivery PAN India. Our offline Telemedicine centeres helps
          to provide healthy services in remote or Rural areas of India.
          Telemedicine centers also act as medicine delivery point and Lab test
          services. through our Offline centeres pateint can interact with
          specialist Doctors saving money and Time.
        </Text>
      </View>

    
    </ScrollView>
  );
};

export default AboutScreen;
