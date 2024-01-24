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
    Linking
} from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useForm, Controller, resetField, } from "react-hook-form";
import axios from "axios";
import { Select } from "native-base";
// import Toast from 'react-native-simple-toast';
import Toast from 'react-native-toast-message';
import { useRoute } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { WebView } from 'react-native-webview';
const BookingScreen = ({ navigation }) => {
    const [paymentResult, setPaymentResult] = useState(null);
    const userInfo = useSelector(state => state.user.userInfo);
    const route = useRoute()
    // console.log(route.params.price)
    const [service, setService] = useState(route.params.name);
    const [price, setPrice] = useState(route.params.price)
    const [gender, setGender] = React.useState("");

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [time, setTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleTimeChange = (event, selectedTime) => {
        setShowTimePicker(Platform.OS === 'ios');
        if (selectedTime) {
            setTime(selectedTime);
          
        }
    };

    const showTimepicker = () => {
        setShowTimePicker(true);
    };



    const showDatepicker = () => {
        setShowDatePicker(true);
    };



    const onDateChange = (event, selectedDate) => {

        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios'); // Close the date picker on iOS
        setDate(currentDate);
    };


    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log("75", data, gender);

        const transactionId = "T" + Date.now();
        const MUID = "MUID" + Date.now()


        try {
            const res = await axios.post("http://192.168.0.110:3000/bookSurgery", {
                service_id: route.params.cat_id,
                name: data.fullname,
                gender: gender,
                age: data.age,
                address: data.address,
                mobile: userInfo,
                email: data.email,
                service_name: route.params.name,
                service_date: date.toDateString(),
                service_time: time.toLocaleTimeString(),
                amount: route.params.price,
                book_type: route.params.cat_name
            });

            if (res.status === 200 && res.data.message === "Insertion successful") {
                reset();
                showToast();
    
                try {
                    const paymentResponse = await axios.post('http://192.168.0.110:3000/api/payment', {
                        transactionId: transactionId,
                        MUID:MUID,
                        name: data.fullname,
                        mobile: userInfo,
                        amount: route.params.price
                    });
    
                    if (paymentResponse.status === 200) {
                        console.log("119",paymentResponse.data.message);
                        if (paymentResponse.data.result) {
                            setPaymentResult(paymentResponse.data.result);
                        
                         const res1=     await Linking.openURL(paymentResponse.data.result);
                         console.log(res1.data)
                          }
                     
    
                    }
                } catch (error) {
                    console.error("Payment API network error:", error.message);
                }
            }
        } catch (error) {
        
            console.error("Network error:", error.message);
        }
    };
        
 

    const handleRedirect = async (event) => {
        const { url } = event;
        console.log(url)
        // Check if the URL matches your redirect URL pattern
        if (url.startsWith('http://192.168.0.110:3000/api/status/')) {
          // Extract transactionId from the URL (You may need to parse the URL accordingly)
          const transactionId = url.split('/').pop();
          console.log('Transaction ID:', transactionId);
          // Call your backend to check the payment status
          try {
            const statusResponse = await axios.post(`http://192.168.0.110:3000/api/status/${transactionId}`);
            // Handle the payment status (statusResponse.data.status)
            console.log('Payment Status:', statusResponse.data.status);
            navigation.navigate("PaymentStatusScreen",{status:statusResponse.data.status})

            // if(statusResponse.data.status){
            // }
          } catch (error) {
            console.error('Error checking payment status:', error);
          }
        }
      };


  


    const showToast = () => {
        Toast.show({
            type: "success",
            text1: "Thank you for booking.",
            text2: "we will get back to you soon!!",
        });

        // console.log("toast called");
    };

    const EMAIL_REGEX =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    return (
        <SafeAreaView style={{ backgroundColor: "white", paddingBottom: 50 }}>
            <Header navigation={navigation}></Header>
            <Text
                style={{
                    height: 1,
                    borderColor: "whitesmoke",
                    borderWidth: 2,
                    marginTop: 15,
                }}
            ></Text>
            <ScrollView>
                <View style={styles.safeArea}>
                    <KeyboardAvoidingView>
                        <View style={{ alignItems: "center", marginTop: 5 }}>
                            <Text allowFontScaling={false} style={{ color: "gray", fontSize: 15 }}>
                                Book Now
                            </Text>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text>Patient FullName*</Text>
                            <View style={styles.inputBoxCont}>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            autoFocus={true}
                                            style={{
                                                color: "gray",
                                                marginVertical: 5,
                                                width: 300,
                                                fontSize: 16,
                                            }}

                                            onBlur={onBlur}
                                            onChangeText={(value) => onChange(value)}
                                            value={value}
                                        />
                                    )}
                                    name="fullname"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "This field is required!",
                                        },
                                    }}
                                />
                            </View>
                            {errors.fullname && (
                                <Text allowFontScaling={false} style={{ color: "red" }}>{errors.fullname.message}</Text>
                            )}
                        </View>

                        <View style={styles.inputCont}>
                            <Text>Email Id*</Text>
                            <View style={styles.inputBoxCont}>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            style={{
                                                color: "gray",
                                                marginVertical: 5,
                                                width: 300,
                                                fontSize: 16,
                                            }}

                                            onBlur={onBlur}
                                            onChangeText={(value) => onChange(value)}
                                            value={value}
                                        />
                                    )}
                                    name="email"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Email is required!",
                                            pattern: {
                                                value: EMAIL_REGEX,
                                                message: "Not a valid email",
                                            },
                                        },
                                    }}
                                />
                            </View>
                            {errors.email && (
                                <Text allowFontScaling={false} style={{ color: "red" }}>{errors.email.message}</Text>
                            )}
                        </View>

                        <View style={styles.inputCont}>
                            <Text>Mobile Number*</Text>
                            <View style={styles.inputBoxCont}>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            keyboardType="numeric"
                                            autoFocus={true}
                                            style={{
                                                color: "gray",
                                                marginVertical: 5,
                                                width: 300,
                                                fontSize: 16,
                                            }}
                                            // placeholder="enter your Phone Number"
                                            onBlur={onBlur}
                                            onChangeText={(value) => onChange(value)}
                                            value={userInfo}
                                        />
                                    )}
                                    name="phone"

                                />
                            </View>
                            {errors.phone && (
                                <Text allowFontScaling={false} style={{ color: "red" }}>{errors.phone.message}</Text>
                            )}
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text>Service Name</Text>
                            <View style={styles.inputBoxCont}>

                                <TextInput
                                    autoFocus={true}
                                    style={{
                                        color: "gray",
                                        marginVertical: 5,
                                        width: 300,
                                        fontSize: 16,
                                    }}



                                    value={route.params.name}
                                />



                            </View>

                        </View>

                        {/* {console.log(route.params.price)} */}

                        <View style={styles.inputCont}>
                            <Text>Surgery Cost</Text>
                            <View style={styles.inputBoxCont}>
                                <TextInput
                                    autoFocus={true}

                                    style={{
                                        color: "gray",
                                        marginVertical: 5,
                                        width: 300,
                                        fontSize: 16,
                                    }}
                                    value={`Rs ${route.params.price}`}
                                />

                            </View>

                        </View>

                        <View style={styles.inputCont}>
                            <Text>Address</Text>

                            <View style={styles.inputBoxCont}>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            autoFocus={true}

                                            multiline
                                            numberOfLines={4}
                                            // onBlur={onBlur}
                                            onChangeText={(value) => onChange(value)}
                                            value={value}
                                        />
                                    )}
                                    name="address"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "This field is required!",
                                        },
                                    }}
                                />
                            </View>
                            {errors.message && (
                                <Text allowFontScaling={false} style={{ color: "red" }}>{errors.message.message}</Text>
                            )}
                        </View>

                        <View style={styles.inputCont}>
                            <Text>Age</Text>
                            <View style={styles.inputBoxCont}>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            keyboardType="numeric"
                                            autoFocus={true}
                                            style={{
                                                color: "gray",
                                                marginVertical: 5,
                                                width: 300,
                                                fontSize: 16,
                                            }}

                                            onBlur={onBlur}
                                            onChangeText={(value) => onChange(value)}
                                            value={value}
                                        />
                                    )}
                                    name="age"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Enter your age",
                                        },
                                    }}
                                />
                            </View>
                            {errors.age && (
                                <Text allowFontScaling={false} style={{ color: "red" }}>{errors.age.message}</Text>
                            )}
                        </View>

                        <View style={styles.inputCont}>
                            <Text>Gender</Text>
                            <Select style={{ backgroundColor: "#D0D0D0" }} selectedValue={gender} minWidth="200" accessibilityLabel="Select Gender" placeholder="Select Gender" _selectedItem={{
                                bg: "#D0D0D0"
                                // endIcon: <CheckIcon size="5"/>
                            }} mt={1} onValueChange={itemValue => setGender(itemValue)}>
                                <Select.Item label="Male" value="male" />
                                <Select.Item label="Female" value="female" />

                            </Select>
                        </View>

                        <View style={styles.inputCont}>
                            <Text>Schedule Date</Text>
                            <View style={[styles.inputBoxCont, { padding: 20 }]}>

                                <Text style={{ margin: 10 }}><EvilIcons name="calendar" size={24} color="black" onPress={() => showDatepicker()} /></Text>

                                {showDatePicker && (
                                    <DateTimePicker
                                        value={date}
                                        mode="date"
                                        display="default"
                                        onChange={onDateChange}
                                    />
                                )}
                                <Text>{date.toDateString()}</Text>

                            </View>

                        </View>


                        <View style={styles.inputCont}>
                            <Text>Schedule Time</Text>
                            <View style={[styles.inputBoxCont, { padding: 20 }]}>

                                <Text style={{ margin: 10 }}><EvilIcons name="calendar" size={24} color="black" onPress={() => showTimepicker()} /></Text>
                                {showTimePicker && (
                                    <DateTimePicker
                                        value={time}
                                        mode="time"
                                        is24Hour={true}
                                        display="default"
                                        onChange={handleTimeChange}
                                    />
                                )}
                                <Text>Selected Time: {time.toLocaleTimeString()}</Text>


                            </View>

                        </View>


                        <View style={{ marginTop: 30 }} />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmit(onSubmit)}
                        // onPress={showToast}

                        >
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    fontSize: 16,
                                    fontWeight: "bold",
                                }}
                            >
                                Submit
                            </Text>
                        </TouchableOpacity>

                        <Toast
                            position='bottom'
                            bottomOffset={80}
                        />

                    </KeyboardAvoidingView>

                </View>


                <Contact></Contact>
                <Footer></Footer>
            </ScrollView>


            {paymentResult && (
        <WebView
          source={{ uri: paymentResult }}
          onNavigationStateChange={handleRedirect}
        />
      )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 15,
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
        marginTop: 5,
        marginBottom: 2,
        paddingLeft: 10,
    },

    button: {
        width: 350,
        backgroundColor: "#f08080",
        borderRadius: 6,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
        marginBottom: 20,
    },
    inputCont: {
        marginTop: 10,
    },
});

export default BookingScreen;
{/* <View>
<Button onPress={showTimepicker} title="Open Time Picker" />
{showTimePicker && (
  <DateTimePicker
    value={time}
    mode="time"
    is24Hour={true}
    display="default"
    onChange={handleTimeChange}
  />
)}
{Platform.OS === 'ios' && (
  <Button onPress={() => setShowTimePicker(false)} title="Done" />
)}
<Text>Selected Time: {time.toLocaleTimeString()}</Text>
</View> */}