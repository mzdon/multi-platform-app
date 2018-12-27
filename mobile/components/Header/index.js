import {View, StyleSheet, Text} from "react-native";
import React from "react";
import {containers as Containers} from "shared-resources";

const styles = StyleSheet.create({
    header: {
        backgroundColor: "violet",
        height: 30,
        flexDirection: "row"
    },
    font: {
        fontSize: 17,
        fontWeight: "bold",
        flex: 1
    },
    title: {
        textAlign: "center"
    },
    left: {
        marginLeft: 1
    },
    right: {
        marginRight: 1
    }
});

export const Header = ({page, onAddPost, onGoHome}) => {
    return (
        <View style={styles.header}>
            <Text
                style={[styles.left, styles.font]}
                onPress={onGoHome}>
                Home Icon
            </Text>
            <Text style={[styles.title, styles.font]}>{page}</Text>
            <Text
                style={[styles.right, styles.font]}
                onPress={onAddPost}>
                Plus Icon
            </Text>
        </View>
    );
};

export default Containers.Header(Header);
