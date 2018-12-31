import {
    AuthLoadingScreen,
    HomeScreen,
    LoginScreen,
    NewPostScreen
} from "../../screens";
import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer
} from "react-navigation";
import Header from "../Header";
import React from "react";

// navigation init
const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: "violet"
    }
};
const AppStack = createStackNavigator(
    {
        Home: HomeScreen,
        NewPost: NewPostScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            ...defaultNavigationOptions,
            headerLeft: <Header.Left />,
            headerRight: <Header.Right />
        }
    }
);
const AuthStack = createStackNavigator(
    {
        LoginScreen: LoginScreen
    },
    {
        defaultNavigationOptions: defaultNavigationOptions
    }
);
const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: "AuthLoading"
    }
));

export const Body = () => {
    return <AppContainer/>;
};

export default Body;
