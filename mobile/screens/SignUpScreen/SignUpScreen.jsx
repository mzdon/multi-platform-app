import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, {Component} from "react";
import {containers} from "shared-resources";

export class SignUpScreen extends Component {
    componentDidUpdate() {
        const {navigation, user} = this.props;
        if (user) {
            navigation.navigate("AppStack");
        }
    }

    render() {
        const {
            navigation,
            email,
            password,
            onUpdateEmail,
            onUpdatePassword,
            onSignUp
        } = this.props;
        return (
            <View style={styles.container}>
                <Text>Sign Up</Text>
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => onUpdateEmail(email)}
                    value={email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => onUpdatePassword(password)}
                    value={password}
                />
                <Button title="Sign Up" onPress={onSignUp}/>
                <Button
                    title="Already have an account? Login"
                    onPress={() => navigation.navigate("LoginScreen")}
                />
            </View>
        );
    }
}

SignUpScreen.navigationOptions = {
    title: "Sign Up"
};

export default containers.SignUpWrapper(SignUpScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        height: 40,
        width: "90%",
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 8
    }
});
