import { useClient } from "./UseClient";
import { baseUrl } from "../../shared/BaseUrl";

export interface PutClient<T> {
  put(): Promise<T>;
}

export const usePutClient = <T>(request: PutRequest): PutClient<T> => {
  const client = useClient<T>();

  const put = (): Promise<T> => {
    const url = `${baseUrl}/${request.url()}`;
    const params = request.params();
    const api = client.createApi(client.createHeaders(), client.defaultTimeout);
    return client.execute(api.put(url, params));
  };

  return { put };
};
