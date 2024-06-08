import { useQuery } from '@tanstack/react-query';

const useFetchData = (queryKey, queryFn) => {
  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, error, isLoading };
};

export default useFetchData;
