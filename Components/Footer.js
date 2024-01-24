import { View, Text } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
  
    <View  style={{backgroundColor:"whitesmoke"}}>

<View style={{ padding: 10, alignItems:"flex-start" , paddingLeft:25,marginTop:25}}>
<Text
  style={{
    fontWeight: "500",
    textAlign: "center",
    fontSize: 12,
  }}
>
Making healthcare
</Text>
<Text
  style={{
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    color:"gray"
  }}
>
  Understandable, Accessible & 
</Text>
<Text
  style={{
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    color:"gray"
  }}
>
  Affordable
</Text>
<Text  allowFontScaling={false} style={{ textAlign: "center", fontSize: 10 , marginTop:15}}>
  Made with ❤ by CureOFine
</Text>
</View>
</View>
   
  )
}

export default Footer