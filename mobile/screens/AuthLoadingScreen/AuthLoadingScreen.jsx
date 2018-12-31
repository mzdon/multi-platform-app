import React, {Component} from "react";
import {
    ActivityIndicator,
    StatusBar,
    View,
} from "react-native";
import {containers} from "shared-resources";

export class AuthLoadingScreen extends Component {
    componentDidMount() {
        const {userFetched, onFetchUser} = this.props;
        !userFetched && onFetchUser();
    }

    componentDidUpdate() {
        const {userFetched, user, navigation} = this.props;
        if (userFetched) {
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
