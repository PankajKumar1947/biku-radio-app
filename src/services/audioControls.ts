import TrackPlayer from "react-native-track-player";
import { setIsPlayingSong, setMutedAudio } from "../slices/playingSongSlice";

export const muteSound = async ({ mutedSound, dispatch }: any) => {
    if (mutedSound) {
        await TrackPlayer.setVolume(1);
        dispatch(setMutedAudio(false));
    } else {
        await TrackPlayer.setVolume(0);
        dispatch(setMutedAudio(true));
    }
}

export const startPlayer = async ({ stationUrl, dispatch }: any) => {
    await TrackPlayer.reset();
    await TrackPlayer.add({
        id: 'trackId',
        url: stationUrl,
    });
    await TrackPlayer.play();
    dispatch(setIsPlayingSong(true));
};

export const stopPlayer = async ({dispatch}:any) => {
    await TrackPlayer.pause();
    dispatch(setIsPlayingSong(false));
};