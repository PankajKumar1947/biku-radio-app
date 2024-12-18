import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import SingleSong from '../components/SingleSong';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import PlayingBar from '../components/PlayingBar';

const SongListScreen = ({ route }: any) => {
    const { genre, search } = route.params;//extracking params
    const playStation = useSelector((state: any) => state.playstationData);
    const playStationData = playStation.playstationData;
    const loading = playStation.loading;
    const [searchInput, setSearchInput] = useState('');
    const playingSong = useSelector((state: any) => state.playingSong);

    const filteredData = genre === "All" ?
        playStationData?.filter((item: any) => item?.name.toLowerCase().includes(searchInput.toLowerCase()))
        :
        playStationData?.filter((item: any) => item?.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <View style={{ flex: 1, position: 'relative' }}>
                {
                    genre === "All" && <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
                }
                {
                    loading ? <Loader /> : <View style={[styles.container, playingSong?.playingSongUrl && { paddingBottom:70}]}>
                        <FlatList
                            data={filteredData}
                            renderItem={({ item }) => <SingleSong station={item} />}
                            keyExtractor={item => item?.stationuuid}
                        />
                    </View>
                }
            </View>
            <PlayingBar />
        </>
    )
}

export default SongListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 680,
        backgroundColor: 'black',
        paddingBottom: 20
    },
})