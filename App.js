
import { StyleSheet, Text, View,SafeAreaView, Platform, StatusBar } from "react-native";
import StackNavigator from "./navigation/stacknavigator";
import { ModalPortal } from "react-native-modals";

import AppNavigator from "./navigation/AppNavigator";


export default function App() {
  return (
    <>
      
       {/* <StackNavigator/> */}
     <AppNavigator></AppNavigator>
     <ModalPortal></ModalPortal>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

