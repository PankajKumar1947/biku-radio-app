import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import AntIcons from 'react-native-vector-icons/AntDesign';
import OctIcons from 'react-native-vector-icons/Octicons';
import TrackPlayer, { Event, State, Capability, AppKilledPlaybackBehavior } from 'react-native-track-player';
import { useDispatch, useSelector } from 'react-redux';
import { muteSound, startPlayer, stopPlayer } from '../services/audioControls';
import { addFavouriteSong, FavouriteSongState } from '../slices/favouriteSongSlice';
import Snackbar from 'react-native-snackbar';
import { useNavigation } from '@react-navigation/native';

const PlayerScreen = ({ route }: any) => {
    const playingSong = useSelector((state: any) => state.playingSong);
    const dispatch = useDispatch();
    const [favorited, setFavorited] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const mutedSound = playingSong?.mutedAudio;
    const stationId = playingSong?.playingSongId;
    const stationName = playingSong?.playingSongName;
    const stationUrl = playingSong?.playingSongUrl;
    const isPlaying = playingSong?.isPlayingSong;
    const navigation = useNavigation();

    const favouriteSongList = useSelector((state: any) => state.favouriteSong?.favouriteSong);

    TrackPlayer.updateOptions({
        // Media controls capabilities
        capabilities: [
            Capability.Play,
        ],

        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [Capability.Play],

        // App killed playback behavior
        android: {
            appKilledPlaybackBehavior:
                AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        },
    });

    TrackPlayer.updateNowPlayingMetadata({
        title: stationName,
        artist: 'Biku Radio',
        album: 'Biku Radio',
        artwork: require('../assets/songicon.jpg'),
    })

    useEffect(() => {
        const handlePlaybackState = async (state: State) => {
            if (state === State.Playing) {
                setIsLoading(false);
            }
        };

        startPlayer({ stationUrl, dispatch });
        // Add event listener for playback state
        const playbackListener = TrackPlayer.addEventListener(Event.PlaybackState, (data) => {
            handlePlaybackState(data.state);
        });

        // Cleanup listener
        return () => {
            playbackListener.remove();
        };
    }, []);

    const addFavourite = () => {
        const payLoad = {
            stationuuid: stationId,
            name: stationName,
            url_resolved: stationUrl,
            navigation: navigation
        }

        dispatch(addFavouriteSong(payLoad));
        setFavorited(!favorited);
        
    }
    return (
        <View style={styles.container}>
            {
                isLoading ? (
                    <LottieView
                        style={styles.loader}
                        source={require('../assets/animation/playerloader.json')}
                        autoPlay
                        loop
                    />
                ) : (
                    <>
                        <Image
                            style={styles.playingImg}
                            source={require('../assets/songicon.jpg')} />
                        <View>
                            <Text style={styles.stationName}>{stationName}</Text>
                        </View>
                        <LottieView style={styles.lottieStyle} source={require('../assets/animation/musicwave.json')} autoPlay loop />
                        <View style={styles.playerBtn}>
                            <TouchableOpacity onPress={() => muteSound({ mutedSound, dispatch })}>
                                <OctIcons name={mutedSound ? 'mute' : 'unmute'} size={40} color="#D7007D" />
                            </TouchableOpacity>
                            <Icons name="backward" size={40} color="#D7007D" />
                            <TouchableOpacity onPress={isPlaying ? () => stopPlayer({ dispatch }) : () => startPlayer({ stationUrl, dispatch })}>
                                <Icons name={isPlaying ? 'pause' : 'play'} size={40} color="#D7007D" />
                            </TouchableOpacity>

                            <Icons name="forward" size={40} color="#D7007D" />
                            <TouchableOpacity onPress={addFavourite}>
                                <AntIcons name={
                                    favouriteSongList?.some((song: FavouriteSongState) => song?.stationuuid === stationId)
                                        ? 'heart' : 'hearto'
                                } size={40} color="#D7007D" />
                            </TouchableOpacity>
                        </View>
                    </>
                )}
        </View>
    );
};

export default PlayerScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        flex: 1,
        alignItems: "center",
        position: 'relative',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        height: 230,
        width: 230
    },
    playingImg: {
        height: '45%',
        width: '80%',
        borderRadius: 40,
        marginTop: 20,
    },
    stationName: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginTop: 5,
        paddingHorizontal: 20,
    },
    lottieStyle: {
        height: 200,
        width: '100%',
    },
    playerBtn: {
        width: '100%',
        justifyContent: 'space-around',
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'flex-end',
        marginBottom: 20,
    },
});