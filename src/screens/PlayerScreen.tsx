import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlayerScreen = ({ route }: any) => {
    const { } = route.params;//extracking params
    console.log(route.params);
    return (
        <View style={styles.container}>
            <Image
                style={styles.playingImg}
                source={require('../assets/songicon.jpg')} />

            <View>
                <Text style={styles.stationName}>Song name</Text>
            </View>

            <View>
                
            </View>

        </View>
    )
}

export default PlayerScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'black',
        width:'100%',
        flex:1,
        alignItems:"center"
    },
    playingImg: {
        height: '50%',
        width:'80%',
        borderRadius:40,
        marginTop: 40
    },
    stationName: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginTop: 5
    }
})