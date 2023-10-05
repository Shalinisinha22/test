import { View, Text, ScrollView , Dimensions, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import Carousel, { PaginationLight } from "react-native-x-carousel";
const { width } = Dimensions.get("window");
import { AntDesign } from "@expo/vector-icons";
import { Card } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";

const Consultation = ({navigation}) => {
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
        
        },
        {
          id: "1",
          image: require("../assets/call.png"),
          name: "Call Consultation",
        
        },
        {
          id: "3",
          image: require("../assets/whatsapp.png"),
          name: "Whatsapp Consultation",
   
        },
      ];

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
    <ScrollView style={{backgroundColor:"white"}}>
           <View
          style={{
            alignItems: "center",
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
         <View style={styles.container}>
            <Carousel
              pagination={PaginationLight}
              renderItem={renderItem}
              data={DATA}
              loop
              autoplay
            />
          </View>

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
                  style={{ width: 170, height: 130, resizeMode: "contain" }}
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

 
          <Text
            style={{
              paddingTop: 14,
              fontSize: 18,
              fontWeight: "bold",
              paddingLeft: 7,
              fontFamily: "OpenSans",
            }}
          >
            Our Specialization
          </Text>

          <ScrollView vertical showsHorizontalScrollIndicator={false}>
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
                    style={{ width: 300, height: 150, resizeMode: "contain" }}
                    resizeMode="contain"
                    source={item.image}
                  />
                </View>
              </Card>
            ))}
          </ScrollView>

    </ScrollView>
  )
}

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
    }
  
  });

export default Consultation