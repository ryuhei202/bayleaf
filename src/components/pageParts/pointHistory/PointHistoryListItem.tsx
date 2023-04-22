import { Typography } from "../../baseParts/legacy/Typography";

type TProps = {
  point: number;
  pointCreatedAt: string;
};

export const PointHistoryListItem = ({ point, pointCreatedAt }: TProps) => {
  const formattedDate = pointCreatedAt.replace(
    /^(\d{4})-(\d{2})-(\d{2}).*$/,
    "$1年$2月$3日"
  );
  return (
    <div className="bg-white flex justify-around items-center h-12 my-1">
      <div>
        <Typography color="strong-gray" size="xs">
          {formattedDate}
        </Typography>
      </div>
      <div className="mr-14">
        <Typography color="strong-gray" size="xs">
          {point > 0 ? "獲得" : "利用"}
        </Typography>
      </div>
      <div>
        <Typography color="strong-gray" size="xs">
          {point}pt
        </Typography>
      </div>
    </div>
  );
};
