import React, {Component} from "react";
import {
    ActivityIndicator,
    StatusBar,
    View,
} from "react-native";
import {containers} from "shared-resources";

export class AuthLoadingScreen extends Component {
    componentDidMount() {
        this.props.onFetchUser();
    }

    componentDidUpdate() {
        const {loading, user, navigation} = this.props;
        if (!loading) {
            navigation.navigate(user ? "AppStack" : "AuthStack")
        }
    }

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default containers.AuthWrapper(AuthLoadingScreen);
