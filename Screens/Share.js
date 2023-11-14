import { View, Text, Linking } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'

const Share = () => {


   const shareToWhatsApp = (text) => {
      Linking.openURL(`whatsapp://send?text=${text}`);
     }

  return (
    <View style={{flex:1, alignItems:"center",marginTop:60}}>
      
      {/* <Button onPress={()=>shareToWhatsApp(`https://expo.dev/artifacts/eas/phEj8XNNVKndyuuuv4ZTAb.apk`)}>Share With Whatsapp</Button> */}
    </View>
  )
}

export default Share






