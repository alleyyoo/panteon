import { configureStore } from '@reduxjs/toolkit';
import playerSlice from './player/player';

export const store = configureStore({
  reducer: {
    player: playerSlice.reducer
  }
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
