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
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>

                <View>
                    <Text style={styles.genreChoose}>Choose a genre you like</Text>
                </View>

                <View style={styles.container}>
                    {
                        GenreList.map((genre, index) => {
                            return <GenreCard key={index} genre={genre} />;
                        })
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        padding: 10,
    },
    genreChoose: {
        paddingHorizontal: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#D7007D',
    }
})

export default HomeScreen