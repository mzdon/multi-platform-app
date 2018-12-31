import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, {Component} from "react";
import {containers} from "shared-resources";

export class LoginScreen extends Component {
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
            onLogin
        } = this.props;
        return (
            <View style={styles.container}>
                <Text>Login</Text>
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
                <Button title="Login" onPress={onLogin}/>
                <Button
                    title="Don't have an account? Sign Up"
                    onPress={() => navigation.navigate("SignUpScreen")}
                />
            </View>
        );
    }
}

LoginScreen.navigationOptions = {
    title: "Login"
};

export default containers.LoginWrapper(LoginScreen);

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
