import { configureStore } from '@reduxjs/toolkit';
import playStationDataReducer from '../slices/playstationDataSlice';

export const store = configureStore({
    reducer: {
        playstationData: playStationDataReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable state check
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;