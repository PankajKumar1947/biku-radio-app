import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import TrackPlayer from "react-native-track-player";
import { store } from "./src/reducers";
import service from "./service";

AppRegistry.registerComponent(appName, () => App);

// Register the playback service and pass the dispatch
TrackPlayer.registerPlaybackService(() => {
    return () => service(store.dispatch);
});
