import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { auth } from "../firebase";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";



const LoginScreen = ({ navigation }) => {

  const [phone, setPhone] = useState("");

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();



  const onSubmit = async (data) => {
    console.log(data);
    // reset();

    const res = await axios.post("http://192.168.0.164:3000/signup", {
      phone: data.phone,
    })
    console.log(res.data)
    //  .then((response) => response.json())
    //  .then((serverResponse) => console.warn(serverResponse));

   await navigation.navigate("OtpScreen");
  };
//   const Submit =  () => {

//  navigation.navigate("OtpScreen");
//   };

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log(errors);
  };
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Image style={styles.img} source={require("../assets/logo.png")} />
        </View>

        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.heading}>Login In to your Account</Text>
          </View>

          <View>
            <View style={styles.inputBoxCont}>
              <FontAwesome5
                name="phone-alt"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    keyboardType="numeric"
                    autoFocus={true}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    style={{
                      color: "gray",
                      marginVertical: 10,
                      width: 300,
                      fontSize: 16,
                    }}
                    placeholder="enter your Phone Number"
                  />
                )}
                name="phone"
                rules={{
                  required: {
                    value: true,
                    message: "This field is required!",
                  },
                }}
              />
            </View>

            {errors.phone && (
              <Text style={{ color: "red" }}>{errors.phone.message}</Text>
            )}
          </View>

          {/* <View style={{ marginTop: 35 }}>
            <View style={styles.inputBoxCont}>
              <MaterialIcons
                style={{ marginLeft: 8 }}
                name="email"
                size={24}
                color="gray"
              />

              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: email ? 16 : 16,
                }}
                placeholder="enter your Email"
              />
            </View>
            {error.email && flag && <Text>{error.email}</Text>}
          </View> */}

          {/* <View style={{ marginTop: 1 }}>
            <View style={styles.inputBoxCont}>
              <AntDesign
                name="lock1"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />

              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: password ? 16 : 16,
                }}
                placeholder="enter your Password"
              />
            </View>
            {error.password && flag && <Text>{error.password}</Text>}
          </View> */}

          {/* <View style={styles.forgotCont}>
            <Text>Keep me logged in</Text>

            <Text style={{ color: "#007FFF", fontWeight: "500" }}>
              Forgot Password
            </Text>
          </View> */}

          <View style={{ marginTop: 85 }} />

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>


          {/* <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Don't have an account? Sign Up
            </Text>
          </Pressable> */}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginScreen;

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
});
