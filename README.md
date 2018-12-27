# multi-platform-app
An app built using React and React Native to support both web and mobile platforms.

The shared code lives in shared/ and should be linked using npm while working on any code there.
Expose the shared-resources package using the following commands.
`cd shared`
`npm link`

While making changes to shared resources that are then linked to the web and mobile projects, it's good to start the watcher
which will repackage the shared resources when changes are detected.  Start the watcher by running: `npm run dev` from the shared directory.

The mobile app is built using React-Native and uses a packager called Haul to allow loading of npm linked resources.
To link the resources use the following commands.
`cd mobile`
`npm link shared-resources`

To build and run the iOS and Android apps you must have emulators for each respectively.
Start the Haul packager from the mobile directory using the following command:
`npx haul start`
Notice the use of npx instead of npm.

To run the iOS emulator run: `react-native run-ios`.
To run the Android emulator run: `react-native run-android`.

The web app is built using React. To link the local shared-resouces use the following commands.
`cd web`
`npm link shared-resources`

To run the web app using a local webpack-dev-server run: `node server.js` from the web directory.
By default this webserver will be accessible from either localhost:8080 or localhost:9000.

