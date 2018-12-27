import {StyleSheet, Text, View} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    body: {
        flex: 1,
        borderWidth: 1,
        borderColor: "violet",
        backgroundColor: "white"
    }
});

export const Body = () => {
    return (
        <View style={styles.body}>
            <Text>Body</Text>
        </View>
    );
};

export default Body;
