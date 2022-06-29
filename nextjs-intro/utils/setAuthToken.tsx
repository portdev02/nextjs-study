import apiClient from "../api/apiClinet";

export default async function setAuthToken(token: string|null) {
    if (token !== null) {
        if(token) {
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete apiClient.defaults.headers.common['Authorization'];
        }
    } else {
        throw Error('Given token is null')
    }
}