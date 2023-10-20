import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import Services from "../Components/Services";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Carousel, { PaginationLight } from "react-native-x-carousel";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import Teams from "../Components/Teams";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Components/Header";
import Products from "../Components/Products";
import Deals from "../Components/Deals";

const ServiceScreen = ({ navigation }) => {
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

  const renderItem = (data) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={data.coverImageUri} />
      </View>
    </View>
  );

  const DATA = [
    {
      coverImageUri: require("../assets/Banner/cbanner1.png"),
    },
    {
      coverImageUri: require("../assets/Banner/cbanner2.png"),
    },
  ];

  const DATA1 = [
    {
      coverImageUri: require("../assets/physiotherapy.png"),
    },
    {
      coverImageUri: require("../assets/surgery1.png"),
    },
  ];
  return (
    <SafeAreaView style={{ backgroundColor: "white", paddingBottom: 50 }}>
    <Header navigation={navigation}></Header>

      <ScrollView style={{ backgroundColor: "white" }}>
      <Text
          style={{
            height: 1,
            borderColor: "whitesmoke",
            borderWidth: 2,
            marginTop: 15,
          }}
        />

        <Text style={{color:"black", padding:15,fontSize:15,paddingBottom:2}}>Elevate Your Healthcare Experience -</Text>
        <Text style={{color:"#eb3b5a", paddingLeft:12,fontSize:12}}> Explore a Range of Premium Medical Services on our App.</Text>
        <Text
          style={{
            height: 1,
            borderColor: "whitesmoke",
            borderWidth: 2,
            marginTop: 15,
          }}
        />
        <ImageBackground
          source={require("../assets/bg6.jpg")}
          style={{
            width: "100%",
            height: 160,
            resizeMode: "cover",
            marginTop: 1,
            opacity: 0.9,
          }}
        >
          <FlatList
            data={list}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
           
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
                
                })}
              >
                <Image
                  style={{
                    width: 85,
                    height: 85,
                    resizeMode: "contain",
                    backgroundColor: "whitesmoke",
                    borderRadius: 70,
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
        </ImageBackground>

        <Text
          style={{
            height: 1,
            borderColor: "whitesmoke",
            borderWidth: 2,
            marginTop: 1,
          }}
        />

        {/* banner slider start */}
        <View style={styles.container}>
          <Carousel
            pagination={PaginationLight}
            renderItem={renderItem}
            data={DATA1}
            loop
            autoplay
          />
        </View>
        {/* banner slider end */}

        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 5,
          }}
        />

<Deals navigation={navigation}></Deals>
     <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 5,
          }}
        />

        <Teams></Teams>

        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 15,
          }}
        />

        {/* banner slider start */}
        <View style={styles.container}>
          <Carousel
            pagination={PaginationLight}
            renderItem={renderItem}
            data={DATA}
            loop
            autoplay
          />
        </View>
        {/* banner slider end */}

        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 5,
          }}
        />
        <Contact></Contact>
        {/* <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 15,
          }}
        /> */}

        <Footer></Footer>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    marginTop: 1,
  },

  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: "hidden",
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
    // width: width,
    resizeMode: "contain",
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
});

export default ServiceScreen;
