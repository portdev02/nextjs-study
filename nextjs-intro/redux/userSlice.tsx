import { createSlice } from '@reduxjs/toolkit'

const getInitialValues = () => {
    let isLogin: boolean = false;
    const token = localStorage.getItem("acessToken")
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
        accessToken: "accessTokeninit",
        refreshToken: "refreshTokeninit"

    }
}

export const userSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.value = action.payload;
            localStorage.setItem("accessToken", action.payload.token)
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.value = {
                user : "",
                accessToken: "",
                refreshToken: ""
            }; 
            localStorage.clear();
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;