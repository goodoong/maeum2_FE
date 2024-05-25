import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// User에서 관리해야하는 Slice
const initialState = {
    tempId: ''
};

/**
 * TemplateSlice에서 관리할 상태를 지정합니다.
 */
export const TemplateSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {

        // 모든 사용자 정보를 상태에 저장합니다.
        setTemplate(state, action) {
            state.tempId = action.payload.tempId;
        },

        setTempId(state, action) {
            state.tempId = action.payload;
        },

    },
});

// Action creators are generated for each case reducer function
export const { setTemplate, setTempId } = TemplateSlice.actions

export default TemplateSlice.reducer
