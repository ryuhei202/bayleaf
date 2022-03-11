
export const UseAddressOptionsGetRequest = (
): GetRequest => {
  const url = (): string => {
    return "liff/api/profile/address_options";
  };

  return { url };
};
