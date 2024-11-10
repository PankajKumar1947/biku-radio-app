import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SingleSong from './SingleSong'

const SongList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>All playstations</Text>

            <View style={styles.songContainer}>
                <SingleSong />
                <SingleSong />
                <SingleSong />
                <SingleSong />
                <SingleSong />
                <SingleSong />
                <SingleSong />
                <SingleSong />
                <SingleSong />
                <SingleSong />
                <SingleSong />
                <SingleSong />
                <SingleSong />
                <SingleSong />
                <SingleSong />
                <SingleSong />
            </View>
        </View>
    )
}

export default SongList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 680,
        backgroundColor: 'black',
        paddingHorizontal: 15
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 2,
        fontStyle: 'italic',
        color: '#D7007D',
        textAlign: 'left',
        paddingBottom: 10
    },
    songContainer: {
        gap: 10
    }
})