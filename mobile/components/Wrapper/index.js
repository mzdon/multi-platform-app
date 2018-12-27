import React from "react";
import {StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        top: 30,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: "column"
    }
});

export const Wrapper = ({children}) => {
    return (
        <View style={styles.wrapper}>
            {children}
        </View>
    );
};

export default Wrapper;
