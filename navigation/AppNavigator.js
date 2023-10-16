import {
  View,
  Text,
  Button,
  Pressable,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, UseEffect, useMemo, useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/HomeScreen";
import AboutScreen from "../Screens/AboutScreen";
import EnquiryScreen from "../Screens/EnquiryScreen";
import ServiceScreen from "../Screens/ServiceScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import Presence from "../Screens/Presence";
import Terms from "../Screens/Terms";
import Faq from "../Screens/Faq";
import Privacy from "../Screens/Privacy";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createAppContainer } from "@react-navigation/native";
import Refund from "../Screens/Refund";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Refer from "../Screens/Refer";
import ShareScreen from "../Screens/Share";
import Consultation from "../Screens/Consultation";
import Surgery from "../Screens/Surgery";
import Physiotherapy from "../Screens/Physiotherapy";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductInfoScreen from "../Screens/ProductInfoScreen";
import ServiceInfoScreen from "../Screens/ServiceInfoScreen";
import SurgeryInfoScreen from "../Screens/SurgeryInfoScreen";
import { Linking } from 'react-native';
import * as Sharing from 'expo-sharing';
import { Share } from "react-native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {

  const drawerMenu = [
    {
      id: 0,
      name: "Our Services",
      submenu: [
        { id: 0, name: "Doctor Consultation", url: "Consultation" },
        { id: 1, name: "Surgery Appointment", url: "Surgery" },
        { id: 2, name: "Physiotherapy At Home", url: "Physiotherapy" },
      ],
      icon: <MaterialIcons name="medical-services" size={24} color="white" />,
      dropdownIcon: <AntDesign name="down" size={20} color="white" />,
      url: "Consulation",
    },
    {
      id: 1,
      name: "Our Presence",
      url: "PresenceScreen",
      icon: <Entypo name="location" size={24} color="white" />,
    },
    {
      id: 2,
      name: "Terms & Conditions",
      url: "TermScreen",
      icon: <Foundation name="clipboard-pencil" size={24} color="white" />,
    },
    {
      id: 3,
      name: "Privacy Policy",
      url: "PrivacyScreen",
      icon: <MaterialIcons name="security" size={24} color="white" />,
    },
    {
      id: 4,
      name: "FAQ",
      url: "FaqScreen",
      icon: (
        <MaterialCommunityIcons
          name="comment-question-outline"
          size={24}
          color="white"
        />
      ),
    },
    {
      id: 5,
      name: "Refund Policy",
      url: "RefundScreen",
      icon: (
        <MaterialCommunityIcons name="cash-refund" size={24} color="white" />
      ),
    },
    {
      id: 6,
      name: "Refer a friend",
      url: "ReferScreen",
      icon: <FontAwesome name="slideshare" size={24} color="white" />,
    },
    {
      id: 7,
      name: "Share",
      url: "ShareScreen",
      icon: <Entypo name="share" size={24} color="white" />,
    
    },
  ];
  const onShare = async (url) => {
    try {
      const result = await Share.share({
        message:
          ('Cure O Fine | Healthcare application'+ '\n'+ url )
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const shareToWhatsApp = (text) => {
    // Linking.openURL(`whatsapp://send?text=${text}`);
    const options={
      message:"Download Our app by clicking on this below link",
      url:text
    }
    Share.open(options).then(res=> console.log(res) )
    .catch(err=> console.log(err))
   }

  // #1e272e

  function StackNavigator() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="PresenceScreen" component={Presence} options={{headerShown:false}} />
        <Stack.Screen name="TermScreen" component={Terms} />
        <Stack.Screen name="PrivacyScreen" component={Privacy} />
        <Stack.Screen name="FaqScreen" component={Faq} />
        <Stack.Screen name="RefundScreen" component={Refund} />
        <Stack.Screen name="ReferScreen" component={Refer} />
        <Stack.Screen name="ShareScreen" component={ShareScreen} />
        <Stack.Screen
          name="Consultation"
          component={Consultation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Surgery"
          component={Surgery}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Physiotherapy"
          component={Physiotherapy}
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

        <Stack.Screen
          name="ProductInfo"
          component={ProductInfoScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ServiceInfo"
          component={ServiceInfoScreen}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="SurgeryInfo"
          component={SurgeryInfoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  const DrawerContent = ({ navigation }) => {
    const [submenuVisible, setSubmenuVisible] = useState(false);

    const toggleSubmenu = () => {
      setSubmenuVisible(!submenuVisible);
    };
    return (
      <ScrollView style={{ flex: 1, paddingTop: 5 }}>
        <Entypo
          name="cross"
          size={35}
          color="white"
          onPress={() => navigation.closeDrawer()}
          style={{ marginLeft: 10 }}
        />
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <FlatList
            data={drawerMenu}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View
                key={item.id}
                style={{ justifyContent: "center", gap: 5, padding: 5 }}
              >
                {item.submenu ? (
                  <>
                    <TouchableOpacity
                      onPress={toggleSubmenu}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 15,
                        gap: 12,
                      }}
                    >
                      {item.icon}
                      <Text style={{ fontSize: 17, color: "white" }}>
                        {item.name}
                      </Text>
                      <View style={{ marginLeft: 10 }}>
                        {item.dropdownIcon}
                      </View>
                    </TouchableOpacity>
                    {submenuVisible && (
                      <View style={styles.submenu}>
                        {item.submenu.map((subitem) => (
                          <TouchableOpacity
                            key={subitem.id}
                            onPress={() => navigation.navigate(subitem.url)}
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              padding: 15,
                              gap: 12,
                            }}
                          >
                            <AntDesign
                              name="arrowright"
                              size={24}
                              color="white"
                            />
                            <Text style={{ fontSize: 15, color: "white" }}>
                              {subitem.name}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </>
                ) : (
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 15,
                      gap: 12,
                    }}
                    onPress={() => {item.name=="Share"? onShare(`https://expo.dev/artifacts/eas/phEj8XNNVKndyuuuv4ZTAb.apk`):navigation.navigate(item.url)} }
                  >
                    {item.icon}
                    <Text style={{ fontSize: 17, color: "white" }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}

                <Text
                  style={{
                    height: 1,
                    borderColor: "#ffe4c4",
                    borderWidth: 0.2,
                    marginTop: 0,
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    );
  };

  const BottomNavigator = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "black" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="clinic-medical" size={24} color="#f08080" />
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
          headerShown: false,
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="md-information-circle"
                size={24}
                color="#f08080"
              />
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
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Fontisto name="doctor" size={24} color="#f08080" />
            ) : (
              <Fontisto name="doctor" size={24} color="gray" />
            ),
        }}
      />

      <Tab.Screen
        name="Enquiry"
        component={EnquiryScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Enquiry",
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="file-question"
                size={24}
                color="#f08080"
              />
            ) : (
              <MaterialCommunityIcons
                name="file-question"
                size={24}
                color="gray"
              />
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
              <Ionicons name="enter" size={24} color="#f08080" />
            ) : (
              <Ionicons name="enter" size={24} color="gray" />
            ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#f08080",
            width: 240,
            opacity: 1,
          },
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
  },
  submenu: {
    borderColor: "#ffe4c4",
    borderTopWidth: 0.2,
  },
  submenuItem: {
    padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
  },
});

export default AppNavigator;
