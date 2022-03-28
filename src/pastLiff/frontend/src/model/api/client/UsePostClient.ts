import { useClient } from "./UseClient";
import { baseUrl } from "../../shared/BaseUrl";

export interface PostClient<T> {
  post(): Promise<T>;
}

export const usePostClient = <T>(request: PostRequest): PostClient<T> => {
  const client = useClient<T>();

  const post = (): Promise<T> => {
    const url = `${baseUrl}/${request.url()}`;
    const params = request.params();
    const api = client.createApi(client.createHeaders(), client.defaultTimeout);
    return client.execute(api.post(url, params));
  };

  return { post };
};
