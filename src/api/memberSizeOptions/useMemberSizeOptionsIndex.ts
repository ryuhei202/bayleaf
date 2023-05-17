import { useGetRequest } from "../useGetRequest";

export type TMemberSizeOptionsIndexResponse = {
  readonly tops: {
    id: number;
    name: string;
  }[];
  readonly bottoms: {
    id: number;
    name: string;
  }[];
  readonly shoulder: {
    id: number;
    name: string;
    imageFilePath: string;
  }[];
  readonly waist: {
    id: number;
    name: string;
    imageFilePath: string;
  }[];
  readonly hip: {
    id: number;
    name: string;
    imageFilePath: string;
  }[];
  readonly bust: {
    id: number;
    name: string;
    imageFilePath: string;
  }[];
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
