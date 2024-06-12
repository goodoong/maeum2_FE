import React, { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import useToast from './useToast';
import CustomToast from '../components/common/atom/CustomToast';
import { instance } from '../service/instance';
import { useLogout } from './useLogout';

const GlobalErrorHandler = ({ children, navigation }) => {
  const { message, visible, showToast } = useToast();

  useEffect(() => {
    const responseInterceptor = instance.interceptors.response.use(
      response => response,
      error => {
        if (!error.config.headers['X-Handled-Locally']) {
          const errorCode = error.response?.status;
          const errorMessage = error.response?.data?.message || error.message;

          switch (errorCode) {
            case 400:
              showToast(`400(Bad Request) 잘못된 요청입니다. ${errorMessage}`);
              break;
            case 401:
              showToast(`401(Unauthorized) 인증되지 않은 사용자입니다. ${errorMessage}`);
              useLogout({navigation});
              break;
            case 403:
              showToast(`403(Forbidden): ${errorMessage}`);
              break;
            case 404:
              showToast(`404(Not Found) 주소를 찾을 수 없습니다. ${errorMessage}`);
              break;
            case 500:
              showToast(`500(Internal Server Error) 서버에 연결 할 수 없습니다. ${errorMessage}`);
              break;
            default:
              showToast(`${errorCode}: ${errorMessage}`);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [showToast, navigation]);

  return (
    <>
      {children}
      <CustomToast message={message} visible={visible} />
    </>
  );
};

export default GlobalErrorHandler;
