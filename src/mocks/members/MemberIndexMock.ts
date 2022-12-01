import { rest } from "msw";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";

type TProps = {
  status: number;
  response?: TMembersIndexResponse[];
};

export const MemberIndexMock = ({ status, response }: TProps) => {
  return rest.get(
    `${process.env.REACT_APP_HOST_URL}/leeaf/members`,
    (req, res, ctx) => {
      return res.once(ctx.status(status), ctx.json(response));
    }
  );
};
