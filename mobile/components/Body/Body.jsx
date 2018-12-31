import {HomeScreen, NewPostScreen} from "../../screens";
import {createStackNavigator, createAppContainer} from "react-navigation";
import Header from "../Header";
import React from "react";

// navigation init
const Navigator = createStackNavigator(
    {
        Home: HomeScreen,
        NewPost: NewPostScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "violet"
            },
            headerLeft: <Header.Left />,
            headerRight: <Header.Right />
        }
    }
);
const AppContainer = createAppContainer(Navigator);

export const Body = () => {
    return <AppContainer/>;
};

export default Body;
