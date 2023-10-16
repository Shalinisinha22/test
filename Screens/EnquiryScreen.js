import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const EnquiryScreen = ({navigation}) => {


  return (
    <SafeAreaView style={{backgroundColor:"white",paddingBottom:50}}>
        <Header navigation={navigation}></Header>
       <ScrollView>
        <View style={styles.safeArea}>
         
  
          <KeyboardAvoidingView>
        
           <View style={{ alignItems: "center",marginTop:10 }}>
              <Text style={{color:"gray",fontSize:10}}>Have any Enquiry? </Text>
              <Text style={{color:"gray",fontSize:15}}>Feel free to contact us </Text>
            </View>

      
          
  
            <View style={{ marginTop: 20 }}>
              <View style={styles.inputBoxCont}>
                <Ionicons
                  name="ios-person"
                  size={24}
                  color="gray"
                  style={{ marginLeft: 8 }}
                />
                <TextInput
                  // value={name}
                  // onChangeText={(text) => setName(text)}
                  autoFocus={true}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize:16,
                  }}
                  placeholder="enter your FullName"
                />
  
              </View>
  
             
              </View>
  
             <View>
                <View style={styles.inputBoxCont}>
                <MaterialIcons
                  style={{ marginLeft: 8 }}
                  name="email"
                  size={24}
                  color="gray"
                />
  
                <TextInput
              
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize:16,
                  }}
                  placeholder="enter your Email"
                />
              </View>
             
            </View>
             
  
         
  
            <View>
              <View style={styles.inputBoxCont}>
              <FontAwesome5 name="phone-alt"  size={24}
                  color="gray"
                  style={{ marginLeft: 8 }} />
  
                <TextInput
              
                  secureTextEntry={true}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize:16,
                  }}
                  placeholder="enter your Phone Number"
                />
              </View>

             
            </View>

            <View>
              <View style={styles.inputBoxCont}>
              <MaterialIcons name="location-city" size={24} color="gray" style={{marginLeft:8}} />
                <TextInput
              
                  secureTextEntry={true}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize:16,
                  }}
                  placeholder="enter your City"
                />
              </View>
              
             
            </View>


            <View>
              <View style={styles.inputBoxCont}>
              <Ionicons name="location-sharp" size={24} color="gray" style={{marginLeft:8}} />
  
                <TextInput
              
                  secureTextEntry={true}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize:16,
                  }}
                  placeholder="enter your Address"
                />
              </View>
              
             
            </View>


            <View>
              <View style={styles.inputBoxCont}>
              <Entypo name="message" size={24} color="gray" style={{marginLeft:8}} />
  
     <TextInput
        editable
        multiline
        numberOfLines={5}
    
    
        placeholder="enter your Message"
      
      />
              </View>
              
             
            </View>
  
       
  
          <View style={{ marginTop: 30 }} />
  
            <TouchableOpacity style={styles.button}>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
              Submit
              </Text>
            </TouchableOpacity>
     
         
          </KeyboardAvoidingView>

     
        </View>
        {/* <Contact></Contact> */}
         <Footer></Footer>
         </ScrollView>
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 15,
  },
  img: {
    width: 200,
    height: 120,
    resizeMode:"contain"
  },
  heading: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10,
    color: "#041E42",
  },
  inputBoxCont: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 15,
  },

  button: {
    width: 150,
    backgroundColor: "#f08080",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    marginBottom:20
  },
});

export default EnquiryScreen