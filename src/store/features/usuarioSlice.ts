import { createSlice } from "@reduxjs/toolkit";
import IUsuario from "@/interfaces/usuario.interface";

const initialState: IUsuario[] = []

const usuarioSlice = createSlice({
    name: "usuarios",
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.push(payload)
        },
    }
})

export const { addUser } = usuarioSlice.actions
export default usuarioSlice.reducer 