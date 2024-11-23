import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import AntIcons from 'react-native-vector-icons/AntDesign';
import OctIcons from 'react-native-vector-icons/Octicons';
import TrackPlayer, { Event, State } from 'react-native-track-player';

const PlayerScreen = ({ route }: any) => {
    const { stationId, stationName, stationUrl } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [mutedSound, setMutedSound] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const muteSound = async () => {
        if (mutedSound) {
            await TrackPlayer.setVolume(1);
            setMutedSound(false);
        } else {
            await TrackPlayer.setVolume(0);
            setMutedSound(true);
        }
    }

    const toggleFavorite = () => {
        setFavorited(!favorited);
    }

    const start = async () => {
        await TrackPlayer.reset();
        await TrackPlayer.add({
            id: 'trackId',
            url: stationUrl,
        });
        await TrackPlayer.play();
        setIsPlaying(true);
    };
    const stopPlayer = async () => {
        await TrackPlayer.pause();
        setIsPlaying(false);
    };

    useEffect(() => {
        const handlePlaybackState = async (state: State) => {
            if (state === State.Playing) {
                setIsLoading(false);
            }
        };

        start();
        // Add event listener for playback state
        const playbackListener = TrackPlayer.addEventListener(Event.PlaybackState, (data) => {
            handlePlaybackState(data.state);
        });

        // Cleanup listener
        return () => {
            playbackListener.remove();
        };
    }, []);

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
                            <TouchableOpacity onPress={muteSound}>
                                <OctIcons name={mutedSound ? 'mute' : 'unmute'} size={40} color="#D7007D" />
                            </TouchableOpacity>
                            <Icons name="backward" size={40} color="#D7007D" />
                            <TouchableOpacity onPress={isPlaying ? stopPlayer : start}>
                                <Icons name={isPlaying ? 'pause' : 'play'} size={40} color="#D7007D" />
                            </TouchableOpacity>

                            <Icons name="forward" size={40} color="#D7007D" />
                            <TouchableOpacity onPress={toggleFavorite}>
                                <AntIcons name={favorited ? 'heart' : 'hearto'} size={40} color="#D7007D" />
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