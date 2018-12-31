import React, {Component} from "react";
import {AsyncStorage, Button, View} from "react-native";

export class LoginScreen extends React.Component {
    render() {
        return (
            <View>
                <Button title="Sign in!" onPress={this._signInAsync} />
                <Button title="No account? Sign up!" onPress={this._signUp} />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem("userToken", "abc");
        this.props.navigation.navigate("AppStack");
    };

    _signUp = () => {
        this.props.navigation.navigate("SignUp");
    };
}

LoginScreen.navigationOptions = {
    title: "Login"
};

export default LoginScreen;
