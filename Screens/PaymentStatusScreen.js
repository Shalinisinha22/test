import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'


const PaymentStatusScreen = ({navigation}) => {
    const route = useRoute()
  return (
    <View style={{marginTop:30,alignItems:"center"}}>
      <Text>PaymentStatusScreen</Text>
      {/* <Text>{route.params.status}</Text> */}
   <TouchableOpacity onPress={()=>navigation.navigate("Home")}><Text>Back to Home</Text></TouchableOpacity>
    </View>
  )
}

export default PaymentStatusScreen