import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  StatusBar,
  ImageBackground,
  FlatList,
  TouchableHighlight
} from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import { Dimensions } from "react-native";
import Carousel, { PaginationLight } from "react-native-x-carousel";
const { width } = Dimensions.get("window");
import { Foundation } from "@expo/vector-icons";
import { Card } from "@rneui/themed";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Home = ({ navigation }) => {
  //  const navigation=useNavigation()

  const [fontsLoaded] = useFonts({
    OpenSans: require("../assets/fonts/openSans.ttf"),
  });

  // assets\fonts\OpenSans-VariableFont_wdth,wght.ttf

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const list = [
    {
      id: "0",
      image: require("../assets/Services/cs1.png"),
      name: "Doctor Consultation",
      url:"Consultation"
    },
    {
      id: "1",
      image: require("../assets/Services/cs2.png"),
      name: "Surgery Appointment",
      url:"Surgery"
    },
    {
      id: "3",
      image: require("../assets/Services/cs4.png"),
      name: "Physiotherapy At Home",
      url:"Physiotherapy"
    },
  ];

  const DATA = [
    {
      coverImageUri: require("../assets/Banner/cbanner1.png"),
    },
    {
      coverImageUri: require("../assets/Banner/cbanner2.png"),
    },
  ];

  const banner2 = [
    {
      coverImageUri: require("../assets/MidBanner/mb1.png"),
    },
    {
      coverImageUri: require("../assets/MidBanner/mb2.png"),
    },
  ];

  const brands = [
    {
      id: 0,
      img: require("../assets/Brands/p1.png"),
    },
    {
      id: 1,
      img: require("../assets/Brands/p2.png"),
    },
    {
      id: 2,
      img: require("../assets/Brands/p3.png"),
    },
    {
      id: 3,
      img: require("../assets/Brands/p4.png"),
    },
    {
      id: 4,
      img: require("../assets/Brands/p5.png"),
    },
    {
      id: 5,
      img: require("../assets/Brands/p6.png"),
    },
  ];

  const products = [
    {
      id: 1,
      name: "Test",
      price: "Rs 50",
      image: require("../assets/Product/product1.png"),
      session: "45 minutes",
    },
    {
      id: 2,
      name: "Neurological Condition",
      price: "Rs 350",
      image: require("../assets/Product/product2.png"),
      session: "45 minutes",
    },
    {
      id: 3,
      name: "Ligament injuries",
      price: "Rs 350",
      image: require("../assets/Product/product3.png"),
      session: "45 minutes",
    },
    {
      id: 4,
      name: "Foot Massage",
      price: "Rs 350",
      image: require("../assets/Product/product4.png"),
      session: "45 minutes",
    },
    {
      id: 5,
      name: "Sports Massage",
      price: "Rs 999",
      image: require("../assets/Product/product5.png"),
      session: "45 minutes",
    },
    {
      id: 6,
      name: "Muscles Strain",
      price: "Rs 350",
      image: require("../assets/Product/product6.png"),
      session: "45 minutes",
    },
    {
      id: 7,
      name: "Sciatica",
      price: "Rs 350",
      image: require("../assets/Product/product7.png"),
      session: "45 minutes",
    },
    {
      id: 8,
      name: "Disc Problem",
      price: "Rs 350",
      image: require("../assets/Product/product8.png"),
      session: "45 minutes",
    },
    {
      id: 9,
      name: "Frozen Shoulder",
      price: "Rs 350",
      image: require("../assets/Product/product9.png"),
      session: "45 minutes",
    },
    {
      id: 10,
      name: "Joint Pain",
      price: "Rs 350",
      image: require("../assets/Product/product1.png"),
      session: "45 minutes",
    },
  ];

  const contact = [
    {
      id: 1,
      icon: <Feather name="phone-call" size={24} color="#f08080" />,
      title: "7250446555",
      subtitle: "Have a question?",
      text: "Call Us Now",
    },
    {
      id: 2,
      icon: <Feather name="mail" size={24} color="#f08080" />,
      title: "cureofine@gmail.com",
      subtitle: " Need support?",
      text: " Drop us an email",
    },
    {
      id: 3,
      icon: <Ionicons name="alarm-outline" size={24} color="#f08080" />,
      title: "Mon - Sat",
      subtitle: "10.00AM - 06.00PM",
      text: " We are open on",
    },
  ];

  const renderItem = (data) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={data.coverImageUri} />
      </View>
    </View>
  );

  const clinic = [
    {
      id: 0,
      image: require("../assets/clinic/b14.png"),
      heading: "Cureofine Telemedicine center",
      location: "Gaya",
    },
    {
      id: 1,
      image: require("../assets/clinic/b14.png"),
      heading: "Cureofine Telemedicine center",
      location: "JHAJHA ,JAMUI",
    },
    {
      id: 2,
      image: require("../assets/clinic/b14.png"),
      heading: "Cureofine Telemedicine center",
      location: "Patna",
    },
  ];

  const teams=[
    {
      id:0,
      name:"Dr Nancy",
      occupation:"General Physician",
      image:require("../assets/team1.jpg")
    },
    {
      id:1,
      name:"Dr Nancy",
      occupation:"General Physician",
      image:require("../assets/team1.jpg")
    },
    {
      id:2,
      name:"Dr Nancy",
      occupation:"General Physician",
      image:require("../assets/team1.jpg")
    },

  ]

  const specialization =[
    {
        id:0,
        image:require("../assets/physician.png"),
        name:"General Physician"
    },
    {
        id:1,
        image:require("../assets/dental.png"),
        name:"Dental"
    },
    {
        id:2,
        image:require("../assets/ortho.png"),
        name:"Ortho"
    },

  ]
  return (
    <>
      <SafeAreaView
        onLayout={onLayoutRootView}
        style={{
          paddinTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          flex: 1,
          backgroundColor: "white",
          // marginTop:5
        }}
      >
        <StatusBar barStyle="default" animated={true} />
        {/* logo */}
        <View
          style={{
            alignItems: "center",
            // justifyContent:"center",
            flexDirection: "row",
            gap: 60,
            padding: 2,
          }}
        >
          <AntDesign
            name="menu-fold"
            size={34}
            color="black"
            onPress={() => navigation.openDrawer()}
            style={{ marginLeft: 20 }}
          />

          <Image
            style={{ width: 160, height: 50, resizeMode: "contain" }}
            source={require("../assets/logo.png")}
          />
        </View>

        <ScrollView>
          {/* banner slider */}
          <View style={styles.container}>
            <Carousel
              pagination={PaginationLight}
              renderItem={renderItem}
              data={DATA}
              loop
              autoplay
            />
          </View>

          {/* service slider */}
          <Text
            style={{
              paddingTop: 14,
              fontSize: 18,
              fontWeight: "bold",
              paddingLeft: 7,
              fontFamily: "OpenSans",
            }}
          >
            Our Services
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => (
              <Pressable
                key={item.id}
                style={{
                  margin: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}

                onPress={()=>navigation.navigate(item.url)}
              >
                <Image
                  style={{ width: 92, height: 100, resizeMode: "contain" }}
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
              </Pressable>
            ))}
          </ScrollView>

          {/* products */}
          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              padding: 10,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "OpenSans",
            }}
          >
            Our Products
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <Pressable
                key={item.id}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 3,
                  marginLeft: 3,
                }}
              >
                <Image
                  style={{ width: 150, height: 150, resizeMode: "contain" }}
                  source={item.image}
                />
                <View>
                  <Text
                    style={{
                      textAlign: "center",
                      fontFamily: "OpenSans",
                      fontWeight: 500,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 12,
                      fontFamily: "OpenSans",
                      marginTop:2,
                      color:"#f08080"
                    }}
                  >
                    Session: {item.session}
                  </Text>

                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: 400,
                      fontFamily: "OpenSans",
                      marginTop:2
                    }}
                  >
                    {item.price}
                  </Text>
                </View>

                <TouchableHighlight
              underlayColor="white"
                  style={{
                    backgroundColor: "#f08080",
                    paddingVertical: 5,
                    width: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 5,
                    borderRadius: 4,
                   
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                   VIEW
                  </Text>
                </TouchableHighlight>
              </Pressable>
            ))}
          </ScrollView>

          {/* our presence */}
          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 15,
            }}
          />

          <Text
            style={{
              padding: 10,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "OpenSans",
            }}
          >
            Our Presence
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {clinic.map((item, index) => (
              <Card
                key={item.id}
                style={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                <Ionicons
                  name="location-sharp"
                  size={24}
                  color="#f08080"
                  style={{ textAlign: "center" }}
                />
                <Card.Title style={{ fontFamily: "OpenSans", fontSize: 18 }}>
                  {item.heading}
                </Card.Title>
                <Text style={{ textAlign: "center", marginBottom: 2 }}>
                  {item.location}
                </Text>
                <Card.Divider />
                <View style={{ alignItems: "center" }}>
                  <Image
                    style={{ width: 200, height: 100, resizeMode: "contain" }}
                    resizeMode="contain"
                    source={item.image}
                  />
                </View>
              </Card>
            ))}
          </ScrollView>

          {/* offers & deals */}
      
          <View style={styles.container}>
            <Carousel
              pagination={PaginationLight}
              renderItem={renderItem}
              data={banner2}
              loop
              autoplay
            />
          </View>

          {/* brands */}
          <Text
            style={{
              paddingTop: 18,
              fontSize: 18,
              fontWeight: "bold",
              paddingLeft: 7,
              fontFamily: "OpenSans",
            }}
          >
            Our Brands & Partners
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {brands.map((item, index) => (
              <Pressable
                key={item.id}
                style={{
                  margin: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 100, height: 80, resizeMode: "contain" }}
                  source={item.img}
                />
              </Pressable>
            ))}
          </ScrollView>

          {/* teams */}

          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 15,
            }}
          />

          <Text
            style={{
              paddingTop: 18,
              fontSize: 18,
              fontWeight: "bold",
              paddingLeft: 7,
              fontFamily: "OpenSans",
            }}
          >
          Our Top Doctors
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {teams.map((item, index) => (
              <Pressable
                key={item.id}
                style={{
                  margin: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 110, height: 110, resizeMode: "contain", borderRadius:70 }}
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
                    color:"#f08080"
                  }}
                >
                  {item.occupation}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          {/* banner */}
          <ImageBackground
            source={require("../assets/cure.jpg")}
            style={{ width: "100%", height: 180, resizeMode: "cover" }}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 26, color: "white" }}
              >
                Need a Doctor for Checkup?
              </Text>
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Just make an Appointment & You're Done!
              </Text>
              <Pressable style={styles.button}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#f08080",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Explore Services
                </Text>
              </Pressable>
            </View>
          </ImageBackground>


          {/* specialization */}

          <Text
            style={{
              paddingTop: 18,
              fontSize: 18,
              fontWeight: "bold",
              paddingLeft: 7,
              fontFamily: "OpenSans",
            }}
          >
          Our Specialization
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {specialization.map((item, index) => (
              <Card
                key={item.id}
                style={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
              
                <Card.Title style={{ fontSize: 15 }}>
                  {item.name}
                </Card.Title>
          
                <Card.Divider />
                <View style={{ alignItems: "center" }}>
                  <Image
                    style={{ width: 180, height: 130, resizeMode: "contain" }}
                    resizeMode="contain"
                    source={item.image}
                  />
                </View>
              </Card>
            ))}
          </ScrollView>



          {/* contact */}
          {/* <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 15,
            }}
          /> */}
          <Text style={styles.heading}>Contact Us</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {contact.map((item, index) => (
              <Pressable
                key={item.id}
                style={{
                  margin: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 150,
                  borderWidth: 0.2,
                  padding: 8,
                  borderRadius: 8,
                }}
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
                    color:"#f08080" 
                   
                  }}
                >
                  {item.subtitle}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    marginTop: 1,
  },

  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
    // borderRadius: 8,
    overflow: "hidden",
  },
  card: {
    // width: width * 0.9,
    height: width * 0.5,
    width: width,
    resizeMode: "contain",
  },
  cornerLabel: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  imgContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: 200,
    color: "#f08080",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    borderColor: "#f08080",
    borderWidth: 2,
    marginTop: 18,
  },
  heading: {
    paddingTop: 14,
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 7,
    fontFamily: "OpenSans",
  },
});

export default Home;
