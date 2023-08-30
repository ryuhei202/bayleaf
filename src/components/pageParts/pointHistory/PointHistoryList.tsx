import { Typography } from "../../baseParts/legacy/Typography";
import { PointHistoryListItem } from "./PointHistoryListItem";

export type TMemberPoint = {
  readonly id: number;
  readonly createdAt: string;
  readonly point: number;
};

type TProps = {
  memberPoints: TMemberPoint[];
};

export const PointHistoryList = ({ memberPoints }: TProps) => {
  return (
    <div>
      <div className="flex">
        <div className="basis-1/3 pl-3">
          <Typography color="strong-gray" size="xs">
            日付
          </Typography>
        </div>
        <div className="basis-1/3 pr-2 text-center">
          <Typography color="strong-gray" size="xs" className="ml-[4px]">
            区分
          </Typography>
        </div>
        <div className="basis-1/3 text-center">
          <Typography color="strong-gray" size="xs" className="ml-[8px]">
            ポイント
          </Typography>
        </div>
      </div>
      <div>
        {memberPoints.map((memberPoint: TMemberPoint) => {
          return (
            <PointHistoryListItem
              key={memberPoint.id}
              point={memberPoint.point}
              pointCreatedAt={memberPoint.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
};
