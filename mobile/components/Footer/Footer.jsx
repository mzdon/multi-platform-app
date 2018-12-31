import React, {Component} from "react";
import {Button, View} from "react-native";
import {containers} from "shared-resources";

export const Footer = containers.LogoutWrapper(class extends Component {
    componentDidUpdate() {
        const {navigation, user} = this.props;
        if (!user) {
            navigation.navigate("AuthStack");
        }
    }

    render() {
        const {onLogout} = this.props;
        return (
            <View>
                <Button title="Logout" onPress={onLogout}/>
            </View>
        );
    }
});

export const withFooter = Screen => {
    return props => (
        <View>
            <Screen {...props} />
            <Footer {...props} />
        </View>
    )
};

export default Footer;
