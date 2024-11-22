import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import SingleSong from '../components/SingleSong';
import { useSelector } from 'react-redux';

const SongListScreen = ({ route }: any) => {
    const { genre, search } = route.params;//extracking params
    const playStation = useSelector((state: any) => state.playstationData);
    const playStationData = playStation.playstationData;
    const loading = playStation.loading;

    return (
        <View style={{ flex: 1, position: 'relative' }}>
            {
                genre === "All" && <Navbar />
            }
            {
                loading ? <View>
                    <Text>Loading the Data</Text>
                </View> : <View style={styles.container}>
                    <FlatList
                        data={playStationData}
                        renderItem={({ item }) => <SingleSong station={item}/>}
                        keyExtractor={item => item?.stationuuid}
                    />
                </View>
            }
        </View>
    )
}

export default SongListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 680,
        backgroundColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 8
    },
})