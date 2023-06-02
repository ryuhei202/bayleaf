import { rest } from "msw";
import { THearingFormShowResponse } from "../../api/hearingForms/THearingFormShowResponse";

type TProps = {
  status: number;
  response?: THearingFormShowResponse;
  hearingFormId: number;
};

export const getHearingFormShowMock = ({
  status,
  response,
  hearingFormId,
}: TProps) => {
  return rest.get(
    `${process.env.REACT_APP_HOST_URL}/leeaf/hearing_forms/${hearingFormId}`,
    (_req, res, ctx) => {
      return res.once(ctx.status(status), ctx.json(response));
    }
  );
};
