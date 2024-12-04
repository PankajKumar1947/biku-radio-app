import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import SingleSong from '../components/SingleSong';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import PlayingBar from '../components/PlayingBar';

const TrendingScreen = ({ route }: any) => {
    const playStation = useSelector((state: any) => state.playstationData);
    const playStationData = playStation.playstationData;
    const loading = playStation.loading;

    let sortedData = [];
    if (route?.params?.topic === "Trending") {
        //find first 30 songs by clickcount from api -> trending
        sortedData = [...(playStationData || [])]
            .sort((a, b) => b.clickcount - a.clickcount)
            .slice(0, 50);
    } else if(route?.params?.topic === "Popular") {
        sortedData = [...(playStationData || [])]
            .sort((a, b) => b.votes - a.votes)
            .slice(0, 50);
    } else if(route?.params?.topic === "All") {
        sortedData = [...(playStationData || [])]
    }

    return (
        <>
            <View style={{ flex: 1, position: 'relative' }}>

                {
                    loading ? <Loader /> : <View style={styles.container}>
                        <FlatList
                            data={sortedData}
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

export default TrendingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 680,
        backgroundColor: 'black',
        paddingBottom: 20
    },
})