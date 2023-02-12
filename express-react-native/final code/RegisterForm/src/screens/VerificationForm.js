import { useState } from "react";
import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

export default function VerificationForm({ navigation, route }) {
    const [code, setCode] = useState("")

    return <View style={styles.container}>
        <View style={styles.regform}>
            <Text style={styles.header}>Phone Verification</Text>

            <TextInput style={styles.textinput}
                placeholder="Enter the code sent to you"
                value={code}
                onChangeText={setCode}
            ></TextInput>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    fetch("http://192.168.1.18:2000/register", {
                        method: "POST",
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: route.params.email,
                            phoneNumber: route.params.phoneNumber,
                            password: route.params.password,
                            code: code
                        })
                    })
                        .then(res => res.json())
                        .then(json => {
                            if (json.success) {
                                navigation.navigate("Dashboard")
                            }
                            else {
                                Alert.alert("Error", "Could not sign up");
                            }
                        })
                        .catch(e => {
                            Alert.alert("Error", "Could not sign up");
                        })
                }}>
                <Text style={styles.btntext}>Submit</Text>
            </TouchableOpacity>
        </View>
    </View >
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#36485f",
        paddingLeft: 60,
        paddingRight: 60
    },
    regform: {
        alignSelf: "stretch"
    },
    header: {
        fontSize: 24,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "#199187",
        borderBottomWidth: 1
    },
    textinput: {
        alignSelf: "stretch",
        height: 40,
        marginBottom: 30,
        color: "#fff",
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1
    },
    button: {
        alignSelf: "stretch",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#59cbbd",
        borderBottomWidth: 1
    },
    btntext: {
        color: "#fff",
        fontWeight: "bold"
    }
})