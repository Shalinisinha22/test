import {
    View,
    ScrollView,
    Image,
    ImageBackground,
    Pressable,


} from "react-native";
import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../Components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "native-base";
import { ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { decode } from "html-entities";
import RenderHTML from "react-native-render-html";
import AsyncStorage from "@react-native-async-storage/async-storage";
SplashScreen.preventAutoHideAsync();


const DentalInnerScreen = ({ navigation }) => {

    const route = useRoute();

    const [hospitals, setHospitals] = useState("")
    const [surgery, setSurgery] = useState("")
    const [facility, setFacility] = useState("")

    const getSurgeryList = async () => {
        //  const res = await axios.get("https://cureofine-azff.onrender.com/hospitals")
        //  const data= res.data;
        const locationId = JSON.parse(await AsyncStorage.getItem("locationId"));
        console.log("locationId",locationId)
        const res = await axios.get("https://cureofine-azff.onrender.com/dentalList")
        const data = res.data
        //  console.log(route.params.id)
        let newArr = await data.filter((item) => { return item.category == route.params.id && item.location == locationId })
        //  console.log("newarr",newArr)
        setSurgery(newArr)


        //  setHospitals(newArr)
    }

    useEffect(() => {
        getSurgeryList()
    }, [])




    const getSurgeryHospital = async (id) => {
        const res = await axios.get("https://cureofine-azff.onrender.com/hospitals")
        const data = res.data
        let newArr = await data.filter((item) => { return item.hos_id == id })
        // console.log("newarr",newArr)
        setHospitals(newArr)
    }
    useEffect(() => {
        surgery != "" && surgery.map((item) => {
            getSurgeryHospital(item.hospital);
        });
    }, [surgery]);

    const getFacility = async (id) => {
        const res = await axios.get("https://cureofine-azff.onrender.com/facilityType")
        const data = res.data
        let newArr = await data.filter((item) => { return item.fac_id == id })
        // console.log("newarr",newArr)
        return newArr.name
    }

    //  useEffect(() => {    

    //  hospitals!="" && console.log(hospitals[0].facility_type)
    //   let facility = hospitals[0].facility_type.split(",")
    //   console.log(facility[0])

    // //   for(let i=0;i<=hospitals[0].facility_type.length;i++){
    // //    facility.push(getFacility(hospitals[0].facility_type[i])) 
    // //   }
    // //  console.log("facility",facility)
    // //   setFacility(facility)
    //   // hospitals!= "" && hospitals[0].facility_type.map((fid) => {
    //   //   console.log(fid)
    //   //    getFacility(fid);
    //   //  });
    //    }, [hospitals]);

    // https://cureofine-azff.onrender.com/hospitals


    // const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <Header navigation={navigation}></Header>
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
                    {
                        surgery == "" ?
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                {/* <ActivityIndicator color={"#f08080"} size={"large"} /> */}
                                <Text style={{fontSize:20, color:"#103042",fontWight:500}}>Hospitals</Text>
                            </View> :
                            surgery.map((item) => (
                                // getSurgeryHospital(item.hospital)

                                hospitals != "" &&


                                <Card key={item.id} style={{ margin: 10, backgroundColor: "white" }}  >



                                    <View style={{ flexDirection: "row", width: "100%" }}>
                                        <Image source={{ uri: `https://cureofine.com/upload/hospital/${hospitals[0].image}` }} style={{ height: 120, width: 120, resizeMode: "cover" }} />
                                        {
                                            console.log(hospitals[0].image)
                                        }



                                        <View style={{ marginLeft: 5, flexWrap: "wrap", marginTop: 20 }}>

                                            <Card.Content>
                                                <Text style={{ fontWeight: "bold" }}>{decode(hospitals[0].name)}</Text>

                                                <Text variant="bodyMedium">Facilities </Text>
                                                <Text style={{ color: "#f46b78", fontSize: 10, marginTop: 10 }}>Wifi Facility</Text>
                                                <Text style={{ color: "#f46b78", fontSize: 10 }} >Diagonostic</Text>
                                                <Text style={{ color: "#f46b78", fontSize: 10 }}>Pharmacy</Text>

                                                <Text style={{ fontWeight: "bold", marginTop: 10 }}>{item.name}</Text>
                                                <Text variant="bodyMedium" style={{ textDecorationLine: "line-through", color: "gray" }}><FontAwesome name="rupee" size={16} color="gray" /> {item.price}</Text>
                                                <Text variant="bodyMedium" style={{ fontSize: 18, fontWeight: 500 }} ><FontAwesome name="rupee" size={16} color="#103042" /> {item.offer_price}</Text>
                                                {/* <Text style={{textAlign:"justify"}}>{item.details} </Text> */}
                                            </Card.Content>




                                        </View>



                                    </View>

                                    <Card.Actions style={{ marginTop: 10,marginRight:30 }}>


                                        <Button mode="contained" theme={{ colors: { primary: '#f08080' } }} onPress={() => navigation.navigate("Login")}><Text style={{ color: "white" }}>Book Now</Text></Button>
                                        <Button mode="contained" theme={{ colors: { primary: '#f08080' } }} onPress={() => navigation.navigate("Login")}><Text style={{ color: "white" }}>EMI</Text></Button>
                                    </Card.Actions>
                                </Card>


                            ))

                    }
                </View>





            </ScrollView>
        </View>
    )
}

export default DentalInnerScreen


