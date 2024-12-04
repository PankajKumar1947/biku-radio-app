import { configureStore } from '@reduxjs/toolkit';
import playStationDataReducer from '../slices/playstationDataSlice';
import playingSongReducer from '../slices/playingSongSlice';
import favouriteSongReducer from '../slices/favouriteSongSlice';

export const store = configureStore({
    reducer: {
        playstationData: playStationDataReducer,
        playingSong: playingSongReducer,
        favouriteSong: favouriteSongReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable state check
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;