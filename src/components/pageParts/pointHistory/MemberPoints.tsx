import { Pagination } from "../../baseParts/Pagination";
import { Page } from "../../baseParts/legacy/Page";
import { Typography } from "../../baseParts/legacy/Typography";
import { PointHistoryList, TMemberPoint } from "./PointHistoryList";

type TProps = {
  currentPage: number;
  onClickPagenation: (page: number) => void;
  maxPage: number;
  pointData: TMemberPoint[];
  totalPoint: number;
};

export const MemberPoints = ({
  currentPage,
  onClickPagenation,
  maxPage,
  pointData,
  totalPoint,
}: TProps) => {
  return (
    <Page className="p-4 flex flex-col">
      <Typography weight="regular" size="xl" color="primary" className="ml-4">
        ポイント履歴
      </Typography>
      <div className="border-[0.5px] border-gray my-2" />
      <div className="flex mb-4">
        <Typography
          weight="regular"
          size="base"
          color="primary"
          className="grow ml-2"
        >
          合計ポイント:
        </Typography>
        <Typography
          weight="regular"
          size="base"
          color="primary"
          className="mr-6"
        >
          {totalPoint}pt
        </Typography>
      </div>
      <div className="flex-grow">
        <PointHistoryList memberPoints={pointData} />
      </div>
      <Pagination
        maxPage={maxPage}
        currentPage={currentPage}
        onClickPagination={onClickPagenation}
        className="mt-6"
      />
    </Page>
  );
};
