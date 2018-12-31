import React from "react";
import {StyledFirebaseAuth} from "react-firebaseui";
import {containers as Containers} from "shared-resources";
import firebase from "firebase";

const initUiConfig = (onLogin, onFailLogin) => {
    return {
        callbacks: {
            signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                onLogin(authResult.user);
            },
            signInFailure: (error) => {
                onFailLogin(error)
            }
        },
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        tosUrl: "/tos",
        privacyPolicyUrl: "/privacy"
    };
};
let uiConfig = null;

export const LoginScreen = ({onLogin, onFailLogin}) => {
    if (!uiConfig) {
        uiConfig = initUiConfig(onLogin, onFailLogin);
    }
    return (
        <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
        />
    );
};

export default Containers.LoginWrapper(LoginScreen);
