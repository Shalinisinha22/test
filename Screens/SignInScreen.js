import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import * as SMS from 'expo-sms';

const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handlePhoneNumberSubmit = async () => {
    try {
      // Generate OTP and send it to the provided phone number
      const otp = Math.floor(100000 + Math.random() * 900000);
      await SMS.sendSMSAsync(
        [phoneNumber],
        `Your verification code is ${otp}.`
      );

      // Store OTP for verification
      setOtp(otp.toString());
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  const handleOtpSubmit = () => {
    // Verify the entered OTP
    if (otpInput === otp) { // <-- Corrected the variable name here
      console.log('OTP verification successful!');
    } else {
      console.log('OTP verification failed!');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        style={{ marginBottom: 20, padding: 10, borderColor: 'gray', borderWidth: 1, width: 200 }}
      />
      <Button title="Submit Phone Number" onPress={handlePhoneNumberSubmit} />
      <TextInput
        placeholder="Enter OTP"
        keyboardType="numeric"
        value={otp} // <-- Use the correct state variable here
        onChangeText={(text) => setOtp(text)}
        style={{ marginBottom: 20, padding: 10, borderColor: 'gray', borderWidth: 1, width: 200 }}
      />
      <Button title="Verify OTP" onPress={handleOtpSubmit} />
    </View>
  );
};

export default SignInScreen;


// export default SignInScreen;
