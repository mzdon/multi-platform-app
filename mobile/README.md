# Building and running the mobile app on iOS

### React Native

This directory was initialized using the `react-navite init` command.

### Haul Packager

The default packager (Metro) does not support local npm linked packages, so we're using Haul packager.
Haul packager currently has an issue building when react-navigation is installed which is used by the mobile app.
To fix this, you must manually update the `node_modules/haul/src/utils/makeReactNativeConfig.js` file.
Update the exclusion on line 100 from `exclude: /node_modules(?!.*[\/\\](react|@expo|pretty-format|haul|metro))/,` to
`exclude: /node_modules(?!.*[\/\\](react|@react-navigation|@expo|pretty-format|haul|metro))/,` so
the `@react-navigation` package is excluded from babel transpilation.

### Firebase and Cocoapods

Firebase is integrated with the mobile app for authentication and communication with the database.
Firebase was installed using Cocoapods, which is essentially a package manager like npm, but for Objective-C.
The `mobile/ios/Podfile` defines the Pods installed and for which targets.
Firebase is imported and initialized in the `mobile/ios/mobile/AppDelegate.m` file.
