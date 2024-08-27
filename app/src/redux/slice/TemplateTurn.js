import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// User에서 관리해야하는 Slice
const initialState = {
    tempTurn: ''
};

/**
 * TemplateTurn에서 관리할 상태를 지정합니다.
 */
export const templateTurnSlice = createSlice({
    name: 'templateTurn',
    initialState,
    reducers: {

        // 모든 순서 정보를 상태에 저장합니다.
        setTurn(state, action) {
            state.tempTurn = action.payload.tempTurn;
        },

        setTempTurn(state, action) {
            state.tempTurn = action.payload;
        },

    },
});

// Action creators are generated for each case reducer function
export const { setTurn, setTempTurn } = templateTurnSlice.actions

export default templateTurnSlice.reducer
