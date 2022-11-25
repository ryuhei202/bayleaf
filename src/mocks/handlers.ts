import { rest } from "msw";

export const handlers = [
  rest.get("/leeaf/members", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1000,
        email: "stg_replication@kiizan-kiizan.co.jp",
        next_payment_date: 11,
        m_plan_id: 11,
        is_latest_chart_delivered: false,
        is_return_required: false,
        is_first_time: false,
        is_suspend: false,
      })
    );
  }),
];
