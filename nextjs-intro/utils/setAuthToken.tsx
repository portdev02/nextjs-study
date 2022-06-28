import apiClient from "../api/apiClinet";

export default function setAuthToken(token: number) {
    if(token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers.common['Authorization'];
    }
}