import React, { useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native"
import { CheckBox } from "react-native-elements"
import FoodieButton from "../Components/FoodieButton"
import FoodieInput from "../Components/FoodieInput"
import Label from "../Components/Label"
import Navbar from "../Components/Navbar"
import SignUp from "../Hooks/SignUp"

export default function SignUpScreen() {
    const [isChecked, setIsChecked] = useState(false)
    const [res, setRes] = useState("")

    const handleSignUp = () => {
        setRes(SignUp())
        Alert.alert("API Response", res)
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.1, width: "100%" }}>
                <Navbar text="Sign Up" />
            </View>
            <View style={{ flex: 0.8, width: "100%" }}>
                <Label text="Email" />
                <FoodieInput
                    placeholder="E-mail"
                    haveIcon={false}
                    keyboardType="default"
                />
                <Label text="Name" />
                <FoodieInput
                    placeholder="Full Name"
                    haveIcon={false}
                    keyboardType="default"
                />
                <Label text="Password" />
                <FoodieInput
                    placeholder="Create Password"
                    haveIcon={false}
                    keyboardType="default"
                />
                <Label text="Confirm Password" />
                <FoodieInput
                    placeholder="Confirm Password"
                    haveIcon={false}
                    keyboardType="default"
                />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        marginTop: -15,
                        marginBottom: 10,
                    }}
                >
                    <CheckBox
                        style={{
                            flex: 0.1,
                            alignSelf: "flex-start",
                        }}
                        checked={isChecked}
                        onPress={() => setIsChecked(!isChecked)}
                    />
                    <TouchableOpacity
                        style={{
                            flex: 0.9,
                            alignSelf: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#5A5B5E",
                            }}
                        >
                            I accept the{" "}
                            <Text style={{ fontWeight: "bold" }}>
                                Terms of Use{" "}
                            </Text>
                            and{" "}
                            <Text style={{ fontWeight: "bold" }}>
                                Privacy Policy
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
                <FoodieButton text="Create Account" onclick={handleSignUp} />
                <TouchableOpacity>
                    <Text
                        style={{
                            alignSelf: "center",
                            marginBottom: 22,
                            fontSize: 12,
                            color: "#5A5B5E",
                        }}
                    >
                        Or sign up with
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{ flex: 0.2, width: "100%", justifyContent: "flex-end" }}
            >
                <TouchableOpacity>
                    <Text
                        style={{
                            alignSelf: "center",
                            marginBottom: 22,
                            fontSize: 12,
                            color: "#5A5B5E",
                        }}
                    >
                        Already on Foodie Moodie? Sign in
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 26,
        flex: 1,
        width: "100%",
    },
    font: {
        fontSize: 26,
    },
})
