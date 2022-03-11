
export const UseAddressGetRequest = (
): GetRequest => {
  const url = (): string => {
    return "liff/api/profile/address";
  };

  return { url };
};
