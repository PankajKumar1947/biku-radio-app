import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SingleSong = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.dot}></View>
            <View style={styles.songTrack}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5 , flex: 1}}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../assets/songicon.jpg')} />
                    <Text style={styles.songTitle}>Song Name</Text>
                </TouchableOpacity>

                <View style={styles.songOptions}>
                    <Text style={{ fontSize: 20 }}>❤️</Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: -4 }}>⋮</Text>
                </View>
            </View>
        </View>
    )
}

export default SingleSong

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        gap: 10,
        paddingRight: 10,
    },
    songTrack: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#121213',
        paddingRight: 20,
        borderRadius: 20,
        overflow: 'hidden',
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
    dot: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: 'white',
    }
})