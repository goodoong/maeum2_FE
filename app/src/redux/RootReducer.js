import { combineReducers } from "@reduxjs/toolkit";
import templateSlice from "./slice/TemplateSlice";
import templateUserSlice from "./slice/TemplateUserSlice";
import templateTurnSlice from "./slice/TemplateTurn";

/**
 * 애플리케이션에서 목적에 따라 리듀서를 분리하여 관리 합니다.
 */
const RootReducer = combineReducers({
    templateUser: templateUserSlice,
    template: templateSlice,
    templateTurn : templateTurnSlice
});

export default RootReducer;
