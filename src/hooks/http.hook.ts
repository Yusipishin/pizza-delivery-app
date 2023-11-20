import { ApiResponse } from "../intefaces/interfaces";

export const useHttp = () => {

  const request = async (url: string, 
                          method: string = 'GET', 
                          body = null, 
                          headers = {'Content-Type': 'application/json'})
                          :Promise<ApiResponse[]> => {

    try {
      const response = await fetch(url, {method, body, headers});

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data: ApiResponse[] = await response.json();

      return data;
    } catch(e) {
      throw e;
    }
  };

  return {request}
}