/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import Main from "./src/Main"
// import App from './App';
// import Picker from "./Picker"
// import Checkbox from "./Checkbox"
import Webview from "./Webview"
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Webview);
