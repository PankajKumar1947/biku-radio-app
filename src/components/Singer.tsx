import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { singersList } from '../utils/singers'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setPlayingSongId, setPlayingSongName, setPlayingSongUrl } from '../slices/playingSongSlice'

const Singer = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const playSingerSongHandler = (singer:any) => {
        

        dispatch(setPlayingSongUrl(singer?.url));
        dispatch(setPlayingSongId(singer?.stationuuid));
        dispatch(setPlayingSongName(singer?.stationName));

        // @ts-ignore
        navigation.navigate('player')
    }
    return (
        <View style={styles.mainContainer}>
            {
                singersList.map((singer) => {
                    return (
                        <TouchableOpacity
                        onPress={() => playSingerSongHandler(singer)}
                        key={singer.id}>
                            <ImageBackground
                                source={singer.image}
                                style={styles.singerContainer}>   
                            </ImageBackground>
                            <Text style={styles.singerName}>{singer.name}</Text>
                        </TouchableOpacity>

                    )
                })
            }
        </View>
    )
}

export default Singer

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 10,
        marginBottom:60
    },
    singerContainer: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        borderRadius: 50,
        overflow: 'hidden',
        borderColor: '#D7007D',
        borderWidth: 1,
    },
    singerName: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        opacity: 0.8
    }
})