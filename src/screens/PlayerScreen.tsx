import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Icons from 'react-native-vector-icons/FontAwesome'
import LottieView from 'lottie-react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'
import AntIcons from 'react-native-vector-icons/AntDesign'
import TrackPlayer from 'react-native-track-player'

const PlayerScreen = ({ route }: any) => {
    const { stationId, stationName, stationUrl } = route.params;

    useEffect(() => {
        const start = async () => {
            await TrackPlayer.reset();

            await TrackPlayer.add({
                id: 'trackId',
                url: stationUrl,
            });

            await TrackPlayer.play();
            
        };
        start();
    },[])
    return (
        <View style={styles.container}>
            <Image
                style={styles.playingImg}
                source={require('../assets/songicon.jpg')} />

            <View>
                <Text style={styles.stationName}>{stationName}</Text>
            </View>
            <LottieView style={styles.lottieStyle} source={require('../assets/animation/musicwave.json')} autoPlay loop />
            <View style={styles.playerBtn}>
                <AntIcons name="sound" size={40} color="#D7007D" />
                <Icons name="backward" size={40} color="#D7007D" />
                <Icons name="pause" size={40} color="#D7007D" />
                <Icons name="forward" size={40} color="#D7007D" />
                <FeatherIcons name="headphones" size={40} color="#D7007D" />
            </View>

        </View>
    )
}

export default PlayerScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        flex: 1,
        alignItems: "center",
        position: 'relative'
    },
    playingImg: {
        height: '45%',
        width: '80%',
        borderRadius: 40,
        marginTop: 20
    },
    stationName: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginTop: 5,
        paddingHorizontal: 20
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
    }
})