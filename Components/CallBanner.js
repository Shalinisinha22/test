import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import RenderHtml from 'react-native-render-html';
import { decode } from 'html-entities';
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import axios from 'axios';


const CallBanner = () => {

    const [pageMenu, setpageMenu] = useState("")
    const [content, setContent] = useState("")


  const getText = async () => {
    const res = await axios.get("https://cureofine-azff.onrender.com/staticText");
    const data = res.data;
  
    setpageMenu(data[0].page_menu)
    setContent(decode(data[0].content))

  }
  useEffect(() => {
    getText()
  }, [])

  const tagsStyles = {

    h1: {
      color: 'white',
      fontSize: 15
    }
  };
  return (
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
                {/* Need a Doctor for Checkup? */}
                {pageMenu}
              </Text>
              <Text style={{ fontWeight: "bold", color: "white", fontSize: 10 }}>
                {/* Just make an Appointment & You're Done! */}


                <RenderHtml tagsStyles={tagsStyles} source={{ html: decode(content) }} contentWidth={width} ></RenderHtml>


              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => Linking.openURL("tel:7250446555")}
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
  )
}


const styles = StyleSheet.create({
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
      }
  
  });
export default CallBanner