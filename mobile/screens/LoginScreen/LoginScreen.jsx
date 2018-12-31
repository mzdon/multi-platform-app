import React, {Component} from "react";
import {AsyncStorage, Button, View} from "react-native";

export class LoginScreen extends React.Component {
    render() {
        return (
            <View>
                <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem("userToken", "abc");
        this.props.navigation.navigate("App");
    };
}

LoginScreen.navigationOptions = {
    title: "Login"
};

export default LoginScreen;
