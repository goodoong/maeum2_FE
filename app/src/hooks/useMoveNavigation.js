import {useCallback} from 'react';

// 이 훅은 네비게이션을 이용하여 특정 페이지로 이동하는 기능을 제공합니다.
const useMoveNavigation = navigation => {
  // 특정 페이지로 이동하는 함수
  const moveToPage = useCallback(
    page => {
      navigation.navigate(page);
    },
    [navigation],
  );

  return moveToPage;
};

export default useMoveNavigation;
