// service.js
import TrackPlayer, { Event } from "react-native-track-player";
import { AppState } from "react-native";

let appState = AppState.currentState;

AppState.addEventListener("change", async (nextAppState) => {
    if (appState.match(/active|background/) && nextAppState === "inactive") {
        // App is being killed or going to the background
        await TrackPlayer.stop();
        await TrackPlayer.destroy();
    }
    appState = nextAppState;
});

module.exports = async function () {
    // Add event listeners for remote events
    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

    TrackPlayer.addEventListener(Event.RemoteStop, async () => {
        await TrackPlayer.stop();
        await TrackPlayer.destroy();
    });
};
