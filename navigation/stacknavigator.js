import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AboutScreen from "../Screens/AboutScreen";
import EnquiryScreen from "../Screens/EnquiryScreen";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import ServiceScreen from "../Screens/ServiceScreen";
import RegisterScreen from "../Screens/RegisterScreen.js";
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  // const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="clinic-medical" size={24} color="#eb3b5a" />
              ) : (
                <FontAwesome5 name="clinic-medical" size={24} color="gray" />
              ),
          }}
        />
         <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: "About",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="md-information-circle" size={24} color="#eb3b5a" />
              ) : (
                <Ionicons name="md-information-circle" size={24} color="gray" />
              ),
          }}
        />

        <Tab.Screen
          name="Services"
          component={ServiceScreen}
          options={{
            tabBarLabel: "Services",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Fontisto name="doctor" size={24} color="#eb3b5a" />
              ) : (
                <Fontisto name="doctor" size={24} color="gray" />
              ),
          }}
        />

       
        <Tab.Screen
          name="Enquiry"
          component={EnquiryScreen}
          options={{
            tabBarLabel: "Enquiry",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="file-question" size={24} color="#eb3b5a" />
              
              ) : (
                <MaterialCommunityIcons name="file-question" size={24} color="gray" />
              ),
          }}
        />

      <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Login",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="enter" size={24} color="#eb3b5a" />
              
              ) : (
                <Ionicons name="enter" size={24} color="gray" />
              ),
            
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
          {
  
  }
      
  
      </Stack.Navigator>

   
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});