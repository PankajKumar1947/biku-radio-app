import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import OctIcons from 'react-native-vector-icons/Octicons';
import IoIcons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { truncateString } from '../utils/common';
import { muteSound, startPlayer, stopPlayer } from '../services/audioControls';

const PlayingBar = () => {
    const playingSong = useSelector((state: any) => state.playingSong);
    const mutedSound = playingSong.mutedAudio;
    const isPlaying = playingSong.isPlayingSong;
    const stationUrl = playingSong.playingSongUrl;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handlePlayButton = () => {
        //@ts-ignore
        navigation.navigate('player');
    };
    return (
        <>
            {
                stationUrl && <View style={styles.container}>
                    <TouchableOpacity onPress={() => muteSound({ mutedSound, dispatch })}>
                        <OctIcons name={mutedSound ? 'mute' : 'unmute'} size={30} color="#D7007D" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePlayButton}>
                        <Text style={styles.songTitle}>{truncateString(playingSong?.playingSongName, 15)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={isPlaying ? () => stopPlayer({ dispatch }) : () => startPlayer({ stationUrl, dispatch })}>
                        <IoIcons name={isPlaying ? 'pause-circle-outline' : 'play-circle-outline'} size={35} color="#D7007D" />
                    </TouchableOpacity>
                </View>
            }
        </>
    )
}

export default PlayingBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        color: 'white',
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 5
    },
    songTitle: {
        color: '#D7007D',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 2
    }
})