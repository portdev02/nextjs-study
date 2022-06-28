import axios from 'axios';

const apiClient = axios.create({
    baseURL: "http://localhost:3000", 
    withCredentials: true,
});

apiClient.interceptors.response.use(res => {
    
})

apiClient.interceptors.request.use(
    function(response) {
        // 200인경우, 응답 성공 직전 호출
    },
    function(error) {

    }
)
export default apiClient;