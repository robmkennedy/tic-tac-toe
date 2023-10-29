import { createSlice } from '@reduxjs/toolkit';
import { Player, PlayerState } from 'utils/types';

const initialPlayerState: PlayerState = {
    currentPlayer: Player.O
};

/**
 * This portion of the state is used to control the layout of the app. For a simple
 * app such as this, the only requirement is to keep track of what person is selected
 * and the search string
 * */
const playerSlice = createSlice({
    name: 'player',
    initialState: initialPlayerState,
    reducers: {
        currentPlayerChanged: (state, { payload }) => {
            state.currentPlayer = payload;
        }
    }
});

// Redux actions automatically generated by redux toolkit based on the reducer names
export const { currentPlayerChanged } = playerSlice.actions;

export default playerSlice;