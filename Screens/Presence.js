import { View, Text , FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from "react-native";
import Carousel, { PaginationLight } from "react-native-x-carousel";
const { width } = Dimensions.get("window");
import Header from '../Components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Location from '../Components/Location'
import OfferBanner from './OfferBanner';

const Presence = ({navigation}) => {

  const clinic = [
    {
      id: 0,
      image: require("../assets/clinic/b14.png"),
      heading: "Cureofine Telemedicine center",
      location: "GAYA",
    },
    {
      id: 1,
      image: require("../assets/clinic/b14.png"),
      heading: "Cureofine Telemedicine center",
      location: "JHAJHA , JAMUI",
    },
    {
      id: 2,
      image: require("../assets/clinic/b14.png"),
      heading: "Cureofine Telemedicine center",
      location: "PATNA",
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

  const renderItem = (data) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={data.coverImageUri} />
      </View>
    </View>
  );
  return (
 <SafeAreaView style={{backgroundColor:"white",paddingBottom:50}}>


  <Header navigation={navigation}></Header>

  <ScrollView>

        {/* banner slider start */}
        {/* <View style={styles.container}>
            <Carousel
              pagination={PaginationLight}
              renderItem={renderItem}
              data={DATA}
              loop
              autoplay
            />
          </View> */}
          {/* banner slider end */}
       
    <Location navigation={navigation}></Location>
    <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 15,
            marginBottom: 15,
          }}
        />
    <OfferBanner></OfferBanner>
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
  )
}



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
    // borderRadius: 8,
    overflow: "hidden",
  },
  card: {
    // width: width * 0.9,
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

export default Presence