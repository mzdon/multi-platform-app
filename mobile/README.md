# Building and running the mobile app on iOS

### React Native

This directory was initialized using the `react-navite init` command.

### Haul Packager

The default packager (Metro) does not support local npm linked packages, so we're using Haul packager.
Haul packager currently has an issue building when react-navigation is installed which is used by the mobile app.
It also doesn't seem to like files with the `.jsx` file extension.
To fix this, the `haul.config.js` file exports a function that accepts CLI options and the default Haul
webpack config and merges in some slight adjustments to deal with these issues.

### Firebase and Cocoapods

Firebase is integrated with the mobile app for authentication and communication with the database.
Firebase was installed using Cocoapods, which is essentially a package manager like npm, but for Objective-C.
The `mobile/ios/Podfile` defines the Pods installed and for which targets.
Firebase is imported and initialized in the `mobile/ios/mobile/AppDelegate.m` file.
