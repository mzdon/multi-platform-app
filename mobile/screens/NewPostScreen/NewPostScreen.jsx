import {Text, View} from "react-native";
import React from "react";

export const NewPostScreen = () => {
    return (
        <View>
            <Text>New Post Screen</Text>
        </View>
    );
};

NewPostScreen.navigationOptions = {
    title: "New Post"
};

export default NewPostScreen;
