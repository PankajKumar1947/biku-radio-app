import { configureStore } from '@reduxjs/toolkit';
import playStationDataReducer from '../slices/playstationDataSlice';
import playingSongReducer from '../slices/playingSongSlice';
import favouriteSongReducer from '../slices/favouriteSongSlice';

import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

let persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

let rootReducer = combineReducers({
    playstationData: playStationDataReducer,
    playingSong: playingSongReducer,
    favouriteSong: favouriteSongReducer
})

let persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false, // Disable serializable state check
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;