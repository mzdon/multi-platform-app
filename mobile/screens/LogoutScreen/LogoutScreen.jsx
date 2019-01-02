import React, {Component} from "react";
import {Text, View} from "react-native";
import {containers} from "shared-resources";

export class LogoutScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    componentDidMount() {
        this.props.onLogout()
        .then(() => {
            this.props.navigation.navigate("AuthStack")
        })
        .catch(({error}) => {
            this.setState({
                error: error
            });
        });
    }

    render() {
        const {error} = this.state;

        return (
            <View className="Logout">
                <Text>{error ? error : "Logging out..."}</Text>
            </View>
        );
    }
}

export default containers.LogoutWrapper(LogoutScreen);
