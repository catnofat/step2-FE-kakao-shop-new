import { useQueryClient } from "react-query";
import axios from "axios";

export const handleAPIError = (error) => {
  console.error("API 요청 에러:", error);

  const status = error?.response?.status;
  if (status >= 400 && status < 500) {
    throw new Error("클라이언트 에러");
  } else if (status >= 500) {
    throw new Error("서버 에러");
  }

  throw error;
};

//using queryclient instance to call query or unvalidate query.
export const useAxiosInterceptor = () => {
  const queryClient = useQueryClient();
  //response interceptor. error catching and console error print.
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      handleAPIError(error);
      return Promise.reject(error);
    }
  );

  // request interceptor. Invalidate all queries on network error
  axios.interceptors.request.use(
    (config) => config,
    (error) => {
      queryClient.invalidateQueries();
      return Promise.reject(error);
    }
  );
};