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

      switch (errorCode) {
        case 400:
          console.error(`[API RESPONSE ERROR] 400(Bad Request): ${errorMessage} - 잘못된 요청, 파라미터 누락 등`);
          break;
        case 401:
          console.error(`[API RESPONSE ERROR] 401(Unauthorized): ${errorMessage} - 인증 실패`);
          break;
        case 403:
          console.error(`[API RESPONSE ERROR] 403(Forbidden): ${errorMessage} - 접근 권한 없음`);
          break;
        case 404:
          console.error(`[API RESPONSE ERROR] 404(Not Found): ${errorMessage} - 해당 API를 찾을 수 없음`);
          break;
        case 500:
          console.error(`[API RESPONSE ERROR] 500(Internal Server Error): ${errorMessage} - 서버 내부 오류`);
          break;
        default:
          console.error(`[API RESPONSE ERROR] ${errorCode}: ${errorMessage}`);
      }
    } else if (error.request) {
      console.error('[API RESPONSE ERROR] No response received:', error.request);
    } else {
      console.error(`[API RESPONSE ERROR] ${error.message}`);
    }
    return Promise.reject(error);
  }
);
