import { THearingFormShowResponse } from "./THearingFormShowResponse";
import { useGetRequest } from "./../useGetRequest";

type THearingFormShow = {
  readonly data?: THearingFormShowResponse;
  readonly error: Error | null;
};

type THearingFormShowArgs = { hearingFormId: number };

export const useHearingFormsShow = ({
  hearingFormId,
}: THearingFormShowArgs): THearingFormShow => {
  const { data, error } = useGetRequest<THearingFormShowResponse>(
    `hearing_forms/${hearingFormId}`
  );

  return {
    data,
    error,
  };
};
