import {Text, View} from "react-native";
import React from "react";

export const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    );
};

HomeScreen.navigationOptions = {
    title: "Home"
};

export default HomeScreen;
