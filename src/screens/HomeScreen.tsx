import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import GenreCard from '../components/GenreCard';
import { GenreList } from '../utils/genre';
import { useEffect } from 'react';
import { fetchPlayStation } from '../services/fetchPlayStation';
import { useDispatch } from 'react-redux';
import { addPlaystationData, setLoading } from '../slices/playstationDataSlice';
import PlayingBar from '../components/PlayingBar';
import Singer from '../components/Singer';

const HomeScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchData = async () => {
            dispatch(setLoading(true));
            try {
                const result = await fetchPlayStation();
                dispatch(addPlaystationData(result));
                dispatch(setLoading(false));
            } catch (error) {
                console.error("Error fetching data: ", error);
                dispatch(setLoading(false));
            }
        };

        fetchData();
    }, []);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
    };
    return (
        <SafeAreaView style={[backgroundStyle, styles.backGroundStyle]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={[backgroundStyle, { paddingHorizontal: 10 }]}>

                <View>
                    <Text style={styles.genreChoose}>Choose a Genre you Like</Text>
                </View>

                <View style={styles.container}>
                    {
                        GenreList.map((genre, index) => {
                            return <GenreCard key={index} genre={genre} />;
                        })
                    }
                </View>


                {/* singers  */}
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.genreChoose}>Browse by Singers</Text>
                    <Singer />
                </View>


            </ScrollView>
            <View style={styles.playingBar}>
                <PlayingBar />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backGroundStyle: {
        backgroundColor: 'black',
        height: '100%',
        position: 'relative',
    },
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 5
    },
    genreChoose: {
        paddingHorizontal: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    playingBar: {
        position: 'absolute',
        bottom: 0,
    }
})

export default HomeScreen