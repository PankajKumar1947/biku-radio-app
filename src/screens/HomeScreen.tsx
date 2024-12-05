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
import { useEffect, useState, version } from 'react';
import { fetchPlayStation } from '../services/fetchPlayStation';
import { useDispatch } from 'react-redux';
import { addPlaystationData, setLoading } from '../slices/playstationDataSlice';
import PlayingBar from '../components/PlayingBar';
import Singer from '../components/Singer';
import Topics from '../components/Topics';

import DeviceInfo from 'react-native-device-info';
import firestore from '@react-native-firebase/firestore';
import Dialog from '../components/Dialog';
import analytics from '@react-native-firebase/analytics';

const HomeScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const dispatch = useDispatch();
    const [updateApp, setUpdateApp] = useState({
        updateApp: false,
        url: '',
        version: '',
        message: ''
    });

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


    useEffect(() => {
        const versionMatch = async () => {
            const versions = await firestore().collection('versions').get();

            if (versions?.docs[0]?.data()?.version !== DeviceInfo.getVersion()) {
                setUpdateApp({
                    updateApp: true,
                    url: versions?.docs[0]?.data()?.url,
                    version: versions?.docs[0]?.data()?.version,
                    message: versions?.docs[0]?.data()?.message
                })
            }

            //firebase analytics -> sending ip address and mobile name
            await analytics().logEvent('device_info', {
                ip_address: DeviceInfo.getIpAddress(),
                mobile_name: DeviceInfo.getDeviceName(),
                version: DeviceInfo.getVersion(),
                model: DeviceInfo.getModel(),
                brand: DeviceInfo.getBrand(),
                systemName: DeviceInfo.getSystemName(),
                systemVersion: DeviceInfo.getSystemVersion(),
                buildNumber: DeviceInfo.getBuildNumber(),
                localizedModel: DeviceInfo.getDeviceId(),
            })            
        }
        versionMatch();
    },[])

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.black : Colors.black,
    };
    return (
        <SafeAreaView style={[styles.backGroundStyle]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'light-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={[backgroundStyle, { paddingHorizontal: 10 }]}>

                <View style={{ marginBottom:10}}>
                    <Text style={styles.genreChoose}>Hot Picks for you</Text>
                    <Topics />
                </View>

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

            <Dialog updateApp={updateApp}/>
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