import { createSlice } from "@reduxjs/toolkit";
import  IUsuario  from "@/interfaces/usuario.interface";

const initialState : IUsuario[] = []

const usuarioSlice = createSlice({
    name: "usuarios",
    initialState,
    reducers: {}
})

export const {} = usuarioSlice.actions
export default usuarioSlice.reducer 