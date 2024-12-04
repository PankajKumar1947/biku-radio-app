import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SongListScreen from "../screens/SongListScreen";
import PlayerScreen from "../screens/PlayerScreen";
import FavouriteScreen from "../screens/FavouriteScreen";

export const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screenOptions: {
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: '#D7007D',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
        },
    },
    screens: {
        Home: {
            screen: HomeScreen,
            options: {
                title: 'BIKU Radio',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 30,
                    letterSpacing: 1,
                }
            }
        },
        songlist: {
            screen: SongListScreen,
            options: ({ route }) => ({
                //@ts-ignore
                title: `${route?.params?.genre} PlayStation`,
            }),
        },
        player: {
            screen: PlayerScreen,
            options: {
                title: 'Playing Now',
                headerTitleAlign: 'center',
            },
        },
        favourite: {
            screen: FavouriteScreen,
            options: {
                title: 'Favourites',
                headerTitleAlign: 'center',
            }
        }
    },

});