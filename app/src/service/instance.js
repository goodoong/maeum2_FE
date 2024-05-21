import axios from "axios";

// axios 인스턴스 생성
export const instance = axios.create({
  baseURL: "http://54.234.82.206:8080",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
  async (config) => {
    console.log('[API REQUEST]', config);
    return config;
  },
  (error) => {
    console.log(`[API REQUEST ERROR] ${error}`);
    console.dir(error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
instance.interceptors.response.use(
  (response) => {
    console.log('[API RESPONSE]', response);
    return response;
  },
  async (error) => {
    if (error.response) {
      const errorCode = error.response.status;
      const errorMessage = error.response.data ? error.response.data.message : error.message;
      const errorState = ["Redirect", "Client", "Server"][
        Math.floor(errorCode / 100) - 3
      ];
      console.error(
        `[API RESPONSE ERROR] ${errorCode}(${errorState}): ${errorMessage}`
      );
    } else if (error.request) {
      console.error('[API RESPONSE ERROR] No response received:', error.request);
    } else {
      console.error(`[API RESPONSE ERROR] ${error.message}`);
    }
    return Promise.reject(error);
  }
);
