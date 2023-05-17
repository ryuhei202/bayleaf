import { TPropertyRecord } from "../../models/shared/TPropertyRecord";
import { useGetRequest } from "../useGetRequest";

export type TMemberSizeOptionsIndexResponse = {
  readonly tops: TPropertyRecord[];
  readonly bottoms: TPropertyRecord[];
  readonly shoulder: (TPropertyRecord & { imageFilePath: string })[];
  readonly waist: (TPropertyRecord & { imageFilePath: string })[];
  readonly hip: (TPropertyRecord & { imageFilePath: string })[];
  readonly bust: (TPropertyRecord & { imageFilePath: string })[];
};

export const useMemberSizeOptionsIndex = () => {
  const { data, error } = useGetRequest<TMemberSizeOptionsIndexResponse>(
    "member_size_options"
  );
  return {
    data,
    error,
  };
};
