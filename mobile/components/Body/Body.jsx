import {
    AuthLoadingScreen,
    HomeScreen,
    LoginScreen,
    LogoutScreen,
    NewPostScreen,
    SignUpScreen
} from "../../screens";
import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from "react-navigation";
import Header from "../Header";
import Nav from "../Nav";
import React from "react";
import {Dimensions} from "react-native";

// navigation init
const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: "violet"
    }
};
const NavDrawer = createDrawerNavigator(
    {
        HomeScreen: {
            screen: HomeScreen
        },
        NewPostScreen: {
            screen: NewPostScreen
        },
        LogoutScreen: {
            screen: LogoutScreen
        }
    },
    {
        contentComponent: Nav,
        drawerWidth: Dimensions.get('window').width - 120,
    }
);
const AppStack = createStackNavigator(
    {
        AppStack: {
            screen: NavDrawer
        }
    },
    {
        headerMode: "float",
        defaultNavigationOptions: {
            ...defaultNavigationOptions,
            headerLeft: <Header.Left />,
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
        initialRouteName: "AuthLoading",
        headerMode: "none"
    }
));

export const Body = () => {
    return <AppContainer/>;
};

export default Body;
