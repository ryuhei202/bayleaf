import { Pagination } from "../../baseParts/Pagination";
import { Page } from "../../baseParts/legacy/Page";
import { Typography } from "../../baseParts/legacy/Typography";
import { PointHistoryList, TMemberPoint } from "./PointHistoryList";

type TProps = {
  currentPage: number;
  onClickPagination: (page: number) => void;
  maxPage: number;
  pointData: TMemberPoint[];
  totalPoint: number;
};

export const MemberPoints = ({
  currentPage,
  onClickPagination,
  maxPage,
  pointData,
  totalPoint,
}: TProps) => {
  return (
    <Page className="flex flex-col p-4">
      <Typography weight="regular" size="xl" color="primary" className="ml-4">
        ポイント履歴
      </Typography>
      <div className="my-2 border-[0.5px] border-gray" />
      <div className="mb-4 flex">
        <Typography
          weight="regular"
          size="base"
          color="primary"
          className="ml-2 grow"
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
      <div className="grow">
        <PointHistoryList memberPoints={pointData} />
      </div>
      <Pagination
        maxPage={maxPage}
        currentPage={currentPage}
        onClickPagination={onClickPagination}
        className="mt-6"
      />
    </Page>
  );
};
