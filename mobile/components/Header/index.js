import {StyleSheet, Text} from "react-native";
import React from "react";
import {withNavigation} from "react-navigation";

const styles = StyleSheet.create({
    font: {
        fontSize: 17,
        fontWeight: "bold",
        flex: 1
    },
    left: {
        marginLeft: 1
    },
    right: {
        marginRight: 1
    }
});

export const Left = ({navigation}) => {
    return (
        <Text
            style={[styles.left, styles.font]}
            onPress={() => {navigation.navigate("Home")}}>
            Home Icon
        </Text>
    );
};

export const Right = ({navigation}) => {
    return (
        <Text
            style={[styles.right, styles.font]}
            onPress={() => {navigation.navigate("NewPost")}}>
            Plus Icon
        </Text>
    );
};

export default {Left: withNavigation(Left), Right: withNavigation(Right)};
