import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SingleSong = ({ station }: any) => {
    const navigation = useNavigation();
    return (
        <View style={styles.songTrack}>
            <TouchableOpacity
                onPress={() => {
                    //@ts-ignore
                    navigation.navigate('player', {
                        stationId: station?.stationuuid,
                        stationName: station?.name,
                        stationUrl: station?.url,
                    })
                }}
                style={{ flexDirection: 'row', alignItems: 'center', gap: 5, flex: 1 }}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/songicon.jpg')} />
                <Text style={styles.songTitle}>{station?.name}</Text>
            </TouchableOpacity>

            <View style={styles.songOptions}>
                <Text style={{ fontSize: 20 }}>❤️</Text>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: -4 }}>⋮</Text>
            </View>
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
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#D7007D',
        overflow: 'hidden'
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    songTitle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'left',
    },
    songOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
    },
})