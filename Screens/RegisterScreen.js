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
  import { useNavigation } from "@react-navigation/native";
  import { firestore } from "../firebase";
  import { auth } from "../firebase";
  
  const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigation = useNavigation();
    const [error, setErr] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [user, setUser] = useState("");
    const [flag,setFlag]=useState(false)
  
  
    useEffect(() => {
      validateForm();
    }, [email, password, name]);
  
    const validateForm = () => {
      let errors = {};
  
      // Validate name field
      if (!name) {
        errors.name = "Name is required.";
      }
  
      // Validate email field
      if (!email) {
        errors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid.";
      }
  
      // Validate password field
      if (!password) {
        errors.password = "Password is required.";
      } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters.";
      }
  
      // Set the errors and update form validity
      setErr(errors);
      setIsFormValid(Object.keys(errors).length === 0);
    };
  
    const handleSubmit = () => {
    
      if (isFormValid) {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            setUser(user);
            const ref = await firestore.collection("users").doc(user.uid).set({
              name: name,
              email: email,
              password: password
              
            });
            console.log(user);
            if (user !== null) {
              alert("Register successfully 🎉!");
              setEmail("");
              setPassword("");
              navigation.replace("Main");
            }
          })
          .catch((error) => {
            // Handle login errors here
            const errorMessage = error.message;
            console.error(errorMessage);
            setErr(errorMessage);
          });
      } else {
          setFlag(true)
        alert("Form has errors. Please correct them.");
      }
    };
  
    return (
      <ScrollView style={{backgroundColor:"white"}}>
        <SafeAreaView style={styles.safeArea}>
          <View>
            <Image style={styles.img} source={require("../assets/logo.png")} />
          </View>
  
          <KeyboardAvoidingView>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.heading}>Register to your Account</Text>
            </View>
          
  
            <View style={{ marginTop: 40 }}>
              <View style={styles.inputBoxCont}>
                <Ionicons
                  name="ios-person"
                  size={24}
                  color="gray"
                  style={{ marginLeft: 8 }}
                />
                <TextInput
                  value={name}
                  onChangeText={(text) => setName(text)}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize: name ? 16 : 16,
                  }}
                  placeholder="enter your name"
                />
  
              </View>
  
              {error.name  && flag && <Text style={{color:"red"}}>{error.name}</Text>}
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
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize: password ? 16 : 16,
                  }}
                  placeholder="enter your Email"
                />
              </View>
              {error.email && flag && <Text style={{color:"red"}}>{error.email}</Text>}
            </View>
             
  
         
  
            <View>
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
                    fontSize: email ? 16 : 16,
                  }}
                  placeholder="enter your Password"
                />
              </View>
              {error.password && flag && <Text style={{color:"red"}}>{error.password}</Text>}
            </View>
  
            <View style={styles.forgotCont}>
              <Text>Keep me logged in</Text>
  
              <Text style={{ color: "#007FFF", fontWeight: "500" }}>
                Forgot Password
              </Text>
            </View>
  
            <View style={{ marginTop: 60 }} />
  
            <Pressable style={styles.button}
                
                  onPress={handleSubmit}
                 
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Register
              </Text>
            </Pressable>
  
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginTop: 15 }}
            >
              <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
                Already have an account? Sign In
              </Text>
            </Pressable>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    );
  };
  
  export default RegisterScreen;
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      marginTop: 40,
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
      marginTop: 20,
    },
    forgotCont: {
      marginTop: 14,
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
  