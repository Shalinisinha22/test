import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Carousel, { PaginationLight } from "react-native-x-carousel";
import { AntDesign } from "@expo/vector-icons";
import { Card} from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import Specialization from "../Components/Specialization";
const { width } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Components/Header";
import Teams from "../Components/Teams";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { Linking } from "react-native";

const Consultation = ({ navigation }) => {
  const DATA = [
    {
      coverImageUri: require("../assets/Banner/consult1.png"),
    },
    {
      coverImageUri: require("../assets/Banner/consult2.png"),
    },
  ];

  const renderItem = (data) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={data.coverImageUri} />
      </View>
    </View>
  );

  const list = [
    {
      id: "0",
      image: require("../assets/video.png"),
      name: "Video Consultation",
      url:"tel:7250446555"
    },
    {
      id: "1",
      image: require("../assets/call.png"),
      name: "Call Consultation",
      url:"tel:7250446555"
    },
    {
      id: "3",
      image: require("../assets/whatsapp.png"),
      name: "Whatsapp Consultation",
      url:"whatsapp://send?text=hello&phone=7250446555"
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "white", paddingBottom:60 }}>


<Header navigation={navigation}></Header>

{/* banner */}

      <ScrollView>
      <View style={styles.container}>
        <Carousel
          pagination={PaginationLight}
          renderItem={renderItem}
          data={DATA}
          loop
          autoplay
        />
      </View>

      {/* consult */}

      <Text
        style={{
          paddingTop: 10,
          fontSize: 12,
          fontWeight: "bold",
          paddingLeft: 7,
          fontFamily: "OpenSans",
          color: "gray",
        }}
      >
       Connect With Us Anytime, Anywhere!
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
         
          Consult Now
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
        scrollEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={item.id}
            style={{
              margin: 8,
              alignItems: "center",
              marginTop: 10,
              padding: 2,
            }}
            onPress={() => Linking.openURL(item.url)}
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

<Text
        style={{
          height: 1,
          borderColor: "#D0D0D0",
          borderWidth: 2,
          marginTop: 15,
        }}
      />

      <Specialization></Specialization>
      <Text
        style={{
          height: 1,
          borderColor: "#D0D0D0",
          borderWidth: 2,
          marginTop: 15,
        }}
      />
      <Teams navigation={navigation}></Teams>
      <Text
        style={{
          height: 1,
          borderColor: "#D0D0D0",
          borderWidth: 2,
          marginTop: 15,
        }}
      />

      <Contact></Contact>
      <Footer></Footer>
      </ScrollView>

    </SafeAreaView>
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
    overflow: "hidden",
  },
  card: {
    height: width * 0.5,
    width: width,
    resizeMode: "contain",
  },

  imgContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Consultation;
