import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    TextInput,
    ImageBackground,
    Dimensions,
    TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import Header from "../Components/Header";

import { ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { decode } from "html-entities";
import RenderHTML from "react-native-render-html";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
SplashScreen.preventAutoHideAsync();


const AyurvedaInnerScreen = ({ navigation }) => {

    const route = useRoute();

    // console.log(route.params.id)

    const [ayurveda, setAyurveda] = useState('')

    const getAyurveda = async () => {

        const res = await axios.get("https://cureofine-azff.onrender.com/ayurveda")
        const data = res.data
        let newArr = await data.filter((item) => { return item.ayu_id == route.params.id })
        // console.log(newArr)
        setAyurveda(newArr)
    }

    useEffect(() => {
        getAyurveda()
    }, [ayurveda])

    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <Header navigation={navigation}></Header>

            {
                ayurveda == '' ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator color={"#f08080"} size={"large"} />
                </View>

                    :


                    <ScrollView>

                        <Text
                            style={{
                                height: 1,
                                borderColor: "whitesmoke",
                                borderWidth: 2,
                                marginTop: 15,
                            }}
                        />

                        <Text style={{ color: "black", padding: 15, fontSize: 15, paddingBottom: 2 }}>Elevate Your Healthcare Experience -</Text>
                        <Text style={{ color: "#eb3b5a", paddingLeft: 12, fontSize: 12 }}> Explore a Range of Premium Medical Services on our App.</Text>
                        <Text
                            style={{
                                height: 1,
                                borderColor: "whitesmoke",
                                borderWidth: 2,
                                marginTop: 15,
                            }}
                        />


                        <View style={{ marginTop: 20, paddingBottom: 50 }}>

                  
                        <Text style={{ color: "#103042", paddingLeft: 12, fontSize: 18 }}>Ayurveda</Text>

                                <ImageBackground
                                    style={{ width, height:300, marginTop: 25, resizeMode: "contain",margin:2 }}
                                    source={{ uri: `http://cureofine.com/new_demo/upload/ayurveda/${ayurveda[0].image}` }}
                               
                                >



                                </ImageBackground>

                

                            <View style={{ padding: 10, paddingTop: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                                    {ayurveda[0].name}
                                </Text>
                                {/* <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                padding: 2,
                                marginTop: 5,
                            }}
                        >
                            <Text>Session: </Text>
                            <Text style={{ color: "#eb3b5a" }}>{route.params.item?.duration} minutes</Text>
                        </View> */}
                                <Text
                                    style={{
                                        height: 1,
                                        borderColor: "#D0D0D0",
                                        borderWidth: 1,
                                        marginTop: 10,
                                    }}
                                />

                                <View
                                    style={{
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        padding: 2,
                                    }}
                                >
                                    <Text>Description: </Text>
                                    <Text style={{ fontSize: 12, textAlign: "justify", color: "gray" }}>
                                        {ayurveda[0].details}
                                    </Text>
                                </View>

                                <Text
                                    style={{
                                        height: 1,
                                        borderColor: "#D0D0D0",
                                        borderWidth: 1,
                                        marginTop: 10,
                                    }}
                                />

                                <View style={{ padding: 8 }}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            fontWeight: "bold",
                                            marginVertical: 5,
                                            textAlign: "center",
                                        }}
                                    >
                                     <FontAwesome name="rupee" size={16} color="#103042" /> {ayurveda[0].offer_price}
                                    </Text>
                                </View>
                            </View>



                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#f08080",
                                    padding: 10,
                                    borderRadius: 20,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginHorizontal: 15,
                                    marginVertical: 0,
                                }}
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text>Book Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#f08080",
                                    padding: 10,
                                    borderRadius: 20,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginHorizontal: 15,
                                    marginVertical: 0,
                                    marginTop:10
                                }}
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text>EMI</Text>
                            </TouchableOpacity>



                        </View>



                        <Contact></Contact>
            <Footer></Footer>

                    </ScrollView>

            }


        

        </View>
    )
}

export default AyurvedaInnerScreen


