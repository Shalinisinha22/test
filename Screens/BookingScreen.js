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

const BookingScreen = ({ navigation }) => {
    const route = useRoute()


    const [gender, setGender] = React.useState("");
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
        reset()
        showToast()
        // const res = await axios
        //   .post("https://cureofine-azff.onrender.com/contact", {
        //     name: data.fullname,
        //     email: data.email,
        //     message: data.message,
        //     phone: data.phone,
        //     subject: data.subject,
        //   })
        //   .then((response) => response.json())
        //   .then((serverResponse) => console.warn(serverResponse));


    };



    const showToast = () => {
        Toast.show({
            type: "success",
            text1: "Thank you for booking.",
            text2: "we will get back to you soon!!",
        });

        console.log("toast called");
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
            />
            <ScrollView>
                <View style={styles.safeArea}>
                    <KeyboardAvoidingView>
                        <View style={{ alignItems: "center", marginTop: 5 }}>
                            <Text style={{ color: "gray", fontSize: 15 }}>
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
                                <Text style={{ color: "red" }}>{errors.fullname.message}</Text>
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
                                <Text style={{ color: "red" }}>{errors.email.message}</Text>
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
                                            value={value}
                                        />
                                    )}
                                    name="phone"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Phone number is required!",
                                        },
                                    }}
                                />
                            </View>
                            {errors.phone && (
                                <Text style={{ color: "red" }}>{errors.phone.message}</Text>
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

                        <View style={styles.inputCont}>
                            <Text>Address</Text>

                            <View style={styles.inputBoxCont}>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            autoFocus={true}
                                            editable
                                            multiline
                                            numberOfLines={4}
                                            onBlur={onBlur}
                                            onChangeText={(value) => onChange(value)}
                                            value={value}
                                        />
                                    )}
                                    name="Address"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "This field is required!",
                                        },
                                    }}
                                />
                            </View>
                            {errors.message && (
                                <Text style={{ color: "red" }}>{errors.message.message}</Text>
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
                                <Text style={{ color: "red" }}>{errors.age.message}</Text>
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
