## Simple example of cross-platform components

#### Requirements

```
# Should have run automatically after clone
npm run postinstall
```

### Run on Web

```
cd web
npm start
```

### Run on Native
Uses [expo.io](https://expo.io), so you can run it on your own device (make sure to download the Expo app):

```
npm start
```

Or run inside the simulator:
```
npm run ios
npm run android
```

### Notes

* The `components/` directory is mostly irrelevant. Unfortunately, importing modules from anywhere is not supported by React Native (see [here](https://github.com/facebook/react-native/issues/12241) and [here](https://github.com/react-community/create-react-native-app/issues/232)). Providing components as a separate node module on npm/github resolves this issue but seems out of scope for this tutorial.
* In the simulator, if you get a message about an outdated Expo version, simply remove the Expo app installed in the simulator. The `npm run` command will take care of reinstalling it.