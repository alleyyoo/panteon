import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../../utils/fetchData';
import { PlayerState } from './player.state';

export const initialPlayerState: PlayerState = {
  loading: false,
  data: null,
  error: ''
};
export const playerListThunk = createAsyncThunk(
  'player/list',
  async (id?: string) => {
    const players = await fetchData(`/players${id ? `?id=${id}` : ''}`);
    return players;
  }
);

const playerSlice = createSlice({
  name: 'player',
  initialState: initialPlayerState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(playerListThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(playerListThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.players;
      })
      .addCase(playerListThunk.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch players';
      });
  }
});

export default playerSlice;
