"use client"
import { combineReducers } from "@reduxjs/toolkit";
import usuarioReducer from "./features/usuarioSlice";
const reducers = combineReducers({
    usuarios: usuarioReducer
});

export default reducers