import {
    AuthLoadingScreen,
    HomeScreen,
    LoginScreen,
    NewPostScreen,
    SignUpScreen
} from "../../screens";
import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer
} from "react-navigation";
import Header from "../Header";
import {withFooter} from "../Footer";
import React from "react";

// navigation init
const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: "violet"
    }
};
const AppStack = createStackNavigator(
    {
        Home: withFooter(HomeScreen),
        NewPost: withFooter(NewPostScreen)
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            ...defaultNavigationOptions,
            headerRight: <Header.Right />
        }
    }
);
const AuthStack = createStackNavigator(
    {
        SignUpScreen: SignUpScreen,
        LoginScreen: LoginScreen
    },
    {
        initialRouteName: "SignUpScreen",
        defaultNavigationOptions: defaultNavigationOptions
    }
);
const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        AppStack: AppStack,
        AuthStack: AuthStack
    },
    {
        initialRouteName: "AuthLoading"
    }
));

export const Body = () => {
    return <AppContainer/>;
};

export default Body;
