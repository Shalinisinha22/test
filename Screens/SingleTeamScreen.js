import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react';
import Header from '../Components/Header';
import HomeBanner from './HomeBanner';
import Teams from '../Components/Teams';
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import { Card } from "@rneui/themed";
import { Image } from 'react-native';
import CallBanner from '../Components/CallBanner';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';


const SingleTeamScreen = () => {
    const teams = [
        {
            id: 0,
            name: "Dr Nancy",
            occupation: "General Physician",
            image: require("../assets/team1.jpg"),
        },
        {
            id: 1,
            name: "Dr Nancy",
            occupation: "General Physician",
            image: require("../assets/team1.jpg"),
        },
        {
            id: 2,
            name: "Dr Nancy",
            occupation: "General Physician",
            image: require("../assets/team1.jpg"),
        },
        {
            id: 3,
            name: "Dr Nancy",
            occupation: "General Physician",
            image: require("../assets/team1.jpg"),
        },
    ];
    return (
        <View style={{ backgroundColor: "white", height: "100%",marginBottom:40 }}>
            <Header></Header>

            <ScrollView>

                <Text
                    style={{
                        height: 1,
                        borderColor: "whitesmoke",
                        borderWidth: 2,
                        marginTop: 15,
                    }}
                />

                <Text  allowFontScaling={false} style={{ color: "black", padding: 15, fontSize: 15, paddingBottom: 2 }}>Elevate Your Healthcare Experience -</Text>
                <Text  allowFontScaling={false} style={{ color: "#eb3b5a", paddingLeft: 12, fontSize: 12 }}> Explore a Range of Premium Medical Services on our App.</Text>
                <Text
                    style={{
                        height: 1,
                        borderColor: "whitesmoke",
                        borderWidth: 2,
                        marginTop: 15,
                    }}
                />



                <View style={{ marginTop: 10 }}></View>
                {/* <HomeBanner></HomeBanner> */}

                <View>

                    <Card
                        style={{
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                        }}
                    >
                        <Card.Title style={{ fontSize: 15 }}>Dr Nancy</Card.Title>
                        <Card.Title style={{ color: "#f08080" }}>General Physician</Card.Title>

                        <Card.Divider />
                        <View style={{ alignItems: "center" }}>
                            <Image
                                style={{ width: 200, height: 180, resizeMode: "contain" }}
                                resizeMode="contain"
                                source={require("../assets/team1.jpg")}
                            />
                        </View>
                        <Text  allowFontScaling={false} style={{ margin: 10, textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id lorem in nibh fermentum lacinia sed eu risus. Nam suscipit eros ut neque mollis rhoncus. Curabitur dapibus tortor vel tellus dapibus posuere. Nullam porttitor ullamcorper hendrerit. Aliquam a sapien nec justo semper interdum at sit amet diam. Proin id dignissim lacus. Curabitur porta blandit eros et mollis. Donec dapibus porttitor porttitor. Quisque bibendum orci at elit sagittis, efficitur pellentesque leo tempus.</Text>
                    </Card>


                </View>

                <Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 18,
            }}
          />

<CallBanner></CallBanner>

<Text
            style={{
              height: 1,
              borderColor: "#D0D0D0",
              borderWidth: 2,
              marginTop: 18,
            }}
          />


          <Contact></Contact>
          <Footer></Footer>

            </ScrollView>
        </View>






    )
}




export default SingleTeamScreen

