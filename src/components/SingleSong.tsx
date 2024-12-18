import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { setFavicon, setPlayingSongId, setPlayingSongName, setPlayingSongUrl } from '../slices/playingSongSlice';
import Snackbar from 'react-native-snackbar';

const SingleSong = ({ station }: any) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const playingSong = useSelector((state: any) => state.playingSong);

    const setPlayingSong = () => {
        if (station?.url_resolved?.includes('m3u8')) {
            Snackbar.show({
                text: 'Currently Unavailable',
                duration: Snackbar.LENGTH_SHORT,
                action: {
                    text: 'OK',
                    textColor: 'green',
                    onPress: () => { 
                        //remove the snackbar
                        Snackbar.dismiss();
                    },
                },

            })
            return ;
        }
        dispatch(setPlayingSongUrl(station?.url_resolved));
        dispatch(setPlayingSongId(station?.stationuuid));
        dispatch(setPlayingSongName(station?.name));
        dispatch(setFavicon(station?.favicon));

        // @ts-ignore
        navigation.navigate('player')
    }
    return (
        <View style={playingSong?.playingSongId === station?.stationuuid ? [styles.songTrack, styles.playingSongTrack] : styles.songTrack}>
            <TouchableOpacity
                onPress={setPlayingSong}
                style={{ flexDirection: 'row', alignItems: 'center', gap: 7, flex: 1 }}>
                <Image
                    style={styles.tinyLogo}
                    source={station?.favicon ? { uri: station?.favicon } : require('../assets/songicon.jpg')} />
                <Text style={styles.songTitle}>{station?.name}</Text>
            </TouchableOpacity>
            <Text style={styles.options}>⋮</Text>
        </View>
    )
}

export default SingleSong

const styles = StyleSheet.create({
    songTrack: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#121213',
        paddingRight: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        marginBottom: 5,
        borderColor: '#D7007D',
        overflow: 'hidden'
    },
    playingSongTrack: {
        backgroundColor: '#290617',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#D7007D'
    },
    songTitle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'left',
    },
    options: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -4,
        width: 20,
        textAlign: 'right'
    }
})