import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import SingleSong from '../components/SingleSong'
import { useSelector } from 'react-redux';

const FavouriteScreen = () => {
    const favouriteSongList = useSelector((state: any) => state.favouriteSong?.favouriteSong);
    return (
        <View style={styles.container}>
            {
                favouriteSongList?.length > 0 ?
                    <FlatList
                        data={favouriteSongList}
                        renderItem={({ item }) => <SingleSong station={item} />}
                        keyExtractor={item => item?.stationuuid}
                    /> :
                    <View style={styles.favouriteContainer}>
                        <Text style={{ fontSize: 100, color: 'red' }}>🎶</Text>
                        <Text style={styles.favouriteText}>No Favourite Added</Text>
                    </View>
            }
        </View>
    )
}

export default FavouriteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 680,
        backgroundColor: 'black',
        paddingBottom: 20
    },
    favouriteContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    favouriteText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1,
        paddingHorizontal: 20,
        textAlign: 'center'
    }
})