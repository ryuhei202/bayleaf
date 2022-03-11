export const usePostFetchCoordeRequest = (lineUserId: string): PostRequest => {
  const url = (): string => {
    return "liff/api/coorde/fetch";
  };

  const params = (): FormData => {
    const form = new FormData();
    form.append("line_user_id", String(lineUserId));
    return form;
  };

  return { url, params };
};
