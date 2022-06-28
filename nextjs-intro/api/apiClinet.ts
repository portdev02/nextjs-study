import axios from 'axios';

const baseURL = "http://localhost:3000"

const apiClient = axios.create({
    baseURL: baseURL, 
});

apiClient.interceptors.request.use(
    function(config) {
        // 요청 보내기 전 수행
        return config;
    },
    function(error) {
        // request 요청시 error 발생하면 여기서 catch

    }
)

apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    // statusCode가 4xx, 5xx 에러일 경우
    async (error) => {
      const {
        config,
        response: { status },
      } = error;
      if (status === 401) {
        if (error.response.data.message === "jwt expired") {
          const originalRequest = config;
          const refreshToken = await localStorage.getItem("refreshToken");

          // token refresh 요청
          const { data } = await apiClient.post(
            `/auth/token/refresh`, // token refresh api
            {
              refreshToken,
            }
          );
          // 새로운 토큰 저장
          const {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
          } = data;
          await localStorage.multiSet([
            ["accessToken", newAccessToken],
            ["refreshToken", newRefreshToken],
          ]);
          apiClient.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
          return apiClient(originalRequest);
        }
        else {
            console.log(error)
        }
      }
      return Promise.reject(error);
    }
  );

export default apiClient;