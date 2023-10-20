import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Image,
  StatusBar,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Pressable,
  Alert,
  TextInput,
  Button,
  Linking
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import Carousel, { PaginationLight } from "react-native-x-carousel";
const { width } = Dimensions.get("window");
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Header from "../Components/Header";
import Services from "../Components/Services";
import Products from "../Components/Products";
import MostBooked from "../Components/MostBooked";
import Categories from "../Components/Categories";
import Specialization from "../Components/Specialization";
import Brands from "../Components/Brands";
import Teams from "../Components/Teams";
import Location1 from "../Components/Location";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import GetLocation from "./GetLocation";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
import { Entypo } from "@expo/vector-icons";
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import SelectDropdown from "react-native-select-dropdown";
import { SelectList } from "react-native-dropdown-select-list";
import { Foundation } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useToast } from 'native-base';

SplashScreen.preventAutoHideAsync();

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [address, setAdd] = useState("");

  const toast = useToast();

  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

  const [selected, setSelected] = React.useState("");

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Wait, we are fetching you location..."
  );

  const handleAddress = async (address) => {
     setModalVisible(!modalVisible);
    if (address.length > 0) {
      setDisplayCurrentAddress(address);
      const res = await AsyncStorage.setItem("user", JSON.stringify(address));
    } else {
      toast.show({
        description: "Please Enter Your Address"
      
    })

   
  };
}

  const data = [
    { key: "1", value: "Andhra Pradesh" },
    { key: "2", value: "Arunachal Pradesh" },
    { key: "3", value: "Assam" },
    { key: "4", value: "Bihar" },
    { key: "5", value: "Chandigarh (UT)" },
    { key: "6", value: "Chhattisgarh" },
    { key: "7", value: "Dadra and Nagar Haveli (UT)" },
    { key: "8", value: "Daman and Diu (UT)" },
    { key: "9", value: "Delhi (NCT)" },
    { key: "10", value: "Goa" },
    { key: "11", value: "Gujarat" },
    { key: "12", value: "Haryana" },
    { key: "13", value: "Himachal Pradesh" },
    { key: "14", value: "Jammu and Kashmir" },
    { key: "15", value: "Jharkhand" },
    { key: "16", value: "Karnataka" },
    { key: "17", value: "Kerala" },
    { key: "18", value: "Lakshadweep (UT)" },
    { key: "19", value: "Madhya Pradesh" },
    { key: "20", value: "Maharashtra" },
    { key: "21", value: "Manipur" },
    { key: "22", value: "Meghalaya" },
    { key: "23", value: "Mizoram" },
    { key: "24", value: "Nagaland" },
    { key: "25", value: "Odisha" },
    { key: "26", value: "Puducherry (UT)" },
    { key: "27", value: "Punjab" },
    { key: "28", value: "Rajasthan" },
    { key: "29", value: "Sikkim" },
    { key: "30", value: "Tamil Nadu" },
    { key: "31", value: "Telangana" },
    { key: "32", value: "Tripura" },
    { key: "33", value: "Uttarakhand" },
    { key: "34", value: "Uttar Pradesh" },
    { key: "35", value: "West Bengal" },
  ];

  const district = [
    // {Arwal,	 Patna,	 Nalanda,
    //   Rohtas,	 Bhabhua,	 Bhojpur,	 Buxar,	 Gaya,	 Jehanabad,	 Nawada,	 Siwan,	 Gopalganj,
    //   Sitamarhi,	 Muzaffarpur,	 Shivahar,	 West	 Champaran,	 East	 Champaran,	 Vaishali,
    //   Darbhanga,	 Madhubani,	 Samastipur,	 Saharsa,	 Supaul,	 Madhepura,	 Purnia,	 Araria,
    //   Kishanganj,	 Katihar,	 Banka,	 Bhagalpur,	 Munger,	 Lakhisarai,	 Aurangabad,	 Saran,
    //   Shekhpura,	Jamui,	Khagaria	and,	Begusarai}

    { key: "1", value: "Arwal" },
    { key: "2", value: "Patna" },
    { key: "3", value: "Nalanda" },
    { key: "4", value: "Rohtas" },
    { key: "5", value: "Bhabhua" },
    { key: "6", value: "Bhojpur" },
    { key: "7", value: "Buxar" },
    { key: "8", value: "Gaya" },
    { key: "9", value: "Jehanabad" },
    { key: "10", value: "Nawada" },
    { key: "11", value: "Siwan" },
    { key: "12", value: "Gopalganj" },
    { key: "13", value: "Sitamarhi" },
    { key: "14", value: "Muzaffarpur" },
    { key: "15", value: "Shivahar" },
    { key: "16", value: "West Champaran" },
    { key: "17", value: "East Champaran" },
    { key: "18", value: "vaishali" },
    { key: "19", value: "Darbhanga" },
    { key: "20", value: "Madhubani" },
    { key: "21", value: "Samastipur" },
    { key: "22", value: "Saharsa" },
    { key: "23", value: "Supaul" },
    { key: "24", value: "Madhepura" },
    { key: "25", value: "Purnia" },
    { key: "26", value: "Araria" },
    { key: "27", value: "Kishanganj" },
    { key: "28", value: "Katihar" },
    { key: "29", value: "Banka" },
    { key: "30", value: "Bhagalpur" },
    { key: "31", value: "Munger" },
    { key: "32", value: "Lakhisarai" },
    { key: "33", value: "Aurangabad" },
    { key: "34", value: "Saran" },
    { key: "35", value: "Shekhpura" },
    { key: "36", value: "Jamui" },
    { key: "37", value: "Khagaria" },
    { key: "38", value: "Begusarai" },
    { key: "39", value: "Lucknow" },
    { key: "40", value: "Ranchi" },
    { key: "41", value: "Jhansi" },
    { key: "42", value: "North Goa" },
    { key: "43", value: "South Goa" },
  ];

  const getAddress = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem("user"));
      if (!userData) {
        CheckIfLocationEnabled();
        GetCurrentLocation();
      } else {
        setDisplayCurrentAddress(userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
     getAddress()
  });

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location Service not enabled",
        "Please enable your location services to continue",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        // console.log(item)
        let address = ` ${item.street}, ${item.postalCode}, ${item.city}`;

        setDisplayCurrentAddress(address);

        // if (address.length > 0) {
        //   setTimeout(() => {
        //     navigation.navigate('Home', { item: address });
        //   }, 2000);
        // }
      }
    }
  };

  const route = useRoute();

  const [fontsLoaded] = useFonts({
    OpenSans: require("../assets/fonts/openSans.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

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

  const renderItem = (data) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={data.coverImageUri} />
      </View>
    </View>
  );

  const footerBanner = [
    // {
    //   coverImageUri: require("../assets/Banner/consult1.png"),
    // },

    // {
    //   coverImageUri: require("../assets/physiotherapy.png"),
    // },
    {
      coverImageUri: require("../assets/surgery1.png"),
    },
  ];

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
        <StatusBar
          backgroundColor={"white"}
          barStyle={"dark-content"}
          translucent={false}
        />

        {/* header */}
        <Header navigation={navigation}></Header>
        {/* header */}

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 3,
            padding: 10,
            backgroundColor: "#ffe4e1",
            paddingLeft: 15,
            flexWrap: "wrap",
          }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Ionicons name="location-outline" size={20} color="gray" />

          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text style={{ color: "black", fontSize: 12, textAlign: "center" }}>
              {displayCurrentAddress}
            </Text>
          </Pressable>

          <MaterialIcons name="keyboard-arrow-down" size={24} color="gray" />
        </TouchableOpacity>

        <ScrollView>
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

          {/* service section start */}
          <Services navigation={navigation}></Services>
          {/* service section end */}

          {/* products section start */}
          <Products navigation={navigation}></Products>
          {/* products section end */}

          {/* offers & deals start */}
          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 18,
            }}
          />

          <View style={styles.container}>
            <Carousel
              pagination={PaginationLight}
              renderItem={renderItem}
              data={banner2}
              loop
              autoplay
            />
          </View>

          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 18,
            }}
          />
          {/* offers & deals end */}

          {/* most booked services section start */}

          <MostBooked navigation={navigation}></MostBooked>

          {/* most booked services section end */}

          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 15,
            }}
          />

          {/* shop by category start */}

          <Categories></Categories>

          {/* shop by category end */}

          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 15,
            }}
          />

          {/* specialization section start */}
          <Specialization></Specialization>
          {/* specialization section end */}

          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 18,
            }}
          />

          {/* brands */}
          <Brands></Brands>
          {/* brands */}

          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 15,
            }}
          />

          {/* footer banner */}
          <FlatList
            data={footerBanner}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image
                source={item.coverImageUri}
                style={{
                  width: Dimensions.get("screen").width * 1,
                  height: 180,
                  borderRadius: 10,

                  resizeMode: "contain",
                }}
              ></Image>
            )}
          ></FlatList>

          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 10,
            }}
          />

          {/* teams */}

          <Teams></Teams>
          {/* teams */}

          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 18,
            }}
          />

          {/* banner */}
          <ImageBackground
            source={require("../assets/cure.jpg")}
            style={{
              width: "100%",
              height: 200,
              resizeMode: "cover",
              marginTop: 15,
            }}
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
              <TouchableOpacity style={styles.button}
                onPress={()=>Linking.openURL("tel:7250446555")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#f08080",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Call Us Now
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <Text
            style={{
              height: 3,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 15,
            }}
          />

          {/* our presence */}
          <Location1></Location1>
          {/* our presence */}

          <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 15,
            }}
          />

          {/* contact */}
          <Contact></Contact>
          {/* contact */}

      
          <Footer></Footer>
        </ScrollView>
      </SafeAreaView>

      <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 250 }}>
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              Choose your Location
            </Text>
          </View>

          <View>
            <View style={styles.inputBoxCont}>
              <Foundation
                name="address-book"
                size={24}
                color="gray"
                style={{ marginLeft: 10 }}
              />

              <TextInput
           
                editable
                multiline
                numberOfLines={3}
                maxLength={50}
                onChangeText={(text) => setAdd(text)}
                value={address}
                style={{
                  color: "gray",
                  alignItems: "flex-start",
                  width: 300,
                  fontSize: 15,
                }}
                placeholder="enter your Address"
              />
            </View>
          </View>

          <View style={{ marginTop: 30 }} />

          {/* <Pressable
            style={styles.button1}
            onPress={() => {
              handleAddress(address);
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
              onPress={() => {
                handleAddress(address);
              }}
            >
              Add
            </Text>
          </Pressable> */}


          <Button
           onPress={()=>handleAddress(address)}
           title="Add your address"
           color="#f08080"
           
          />



          {/*<View style={{ flexDirection: "column", gap: 7, marginTop: 10 }}>
          <Text style={{ marginTop: 5, fontSize: 16, color: "gray" }}>
              Select Your State
            </Text>

        <SelectList 
        setSelected={(val) =>{ 
          setSelected(val) 
          setState(val)}} 
        data={data} 
        />
          </View>

          <View style={{marginTop:10}}>
          <Text style={{ marginTop: 5, fontSize: 16, color: "gray" }}>
              Select Your District
            </Text>

            
       <SelectList 
        setSelected={(val) =>{
           setSelected(val)
           setdistrict(val)} } 
        data={district} 
        />
          </View> */}
        </ModalContent>
      </BottomModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    marginTop: 0,
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
  heading: {
    paddingTop: 14,
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 7,
    fontFamily: "OpenSans",
  },

  cardContainer1: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper1: {
    borderRadius: 10,
    overflow: "hidden",
  },
  card1: {
    width: width * 1,
    height: width * 0.5,
    resizeMode: "contain",
  },
  inputBoxCont: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#D0D0D0",
    borderRadius: 5,
    marginTop: 15,
    paddingVertical: 10,
    alignItems: "center",
  },
  button1: {
    width: 120,
    backgroundColor: "#f08080",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    marginBottom: 20,
  },
});

export default Home;
