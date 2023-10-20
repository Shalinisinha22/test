import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { TextInput } from "react-native";

const OtpScreen = ({ navigation }) => {
  const [code, setCode] = useState("");

  const onSubmit = async (otp) => {

    try{
      const res = await axios.post("http://192.168.0.164:3000/verify", {
             otp:otp
        })
      
        .then((response) => response.json())
        .then((serverResponse) => console.warn(serverResponse));
     await navigation.navigate("Home");
    }

    catch(err){
         console.log(err);
    }
 
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Image style={styles.img} source={require("../assets/logo.png")} />
        </View>

        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.heading}>Enter Your OTP</Text>
          </View>

          <View>
       <TextInput onChangeText={
        (value)=> setCode(value)
       }
       style={{
        color: "gray",
        marginVertical: 10,
        width: 300,
        fontSize: 16,
        borderBottomWidth:2,
        borderColor:"#f08080",
        marginTop:30,
        padding:40
      }}
       value={code}
       placeholder="Enter your 6-digits code here"
       keyboardType="numeric"
       >

       </TextInput>


       
          </View>

          <View style={{ marginTop: 85 }} />

          <TouchableOpacity style={styles.button} onPress={()=>onSubmit(code)}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Verify
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 70,
  },
  img: {
    width: 200,
    height: 120,
    resizeMode: "contain",
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
    marginTop: 30,
  },
  forgotCont: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    width: 200,
    backgroundColor: "#f08080",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
