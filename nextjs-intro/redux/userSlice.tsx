import { createSlice } from '@reduxjs/toolkit'

const getInitialValues = () => {
    let isLogin: boolean = false;
    const token = localStorage.getItem("token")
    if(token) {
        isLogin = true;
    }
    return {
        token
    }
} 

const initialState = {
    isAuthenticated : false,
    value : {
        user: "test",
        token: "sdfadfad",
    }
}

export const userSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.value = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.value = {
                user : "",
                token: ""

            } /* null */;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;