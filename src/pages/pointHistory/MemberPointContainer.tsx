import { useState } from "react";
import { useMemberPointsIndex } from "../../api/memberPoints/useMemberPointsIndex";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { MemberPoints } from "../../components/pageParts/pointHistory/MemberPoints";

type TProps = {
  totalPoint: number;
  memberId: number;
};

export const MemberPointContainer = ({ totalPoint, memberId }: TProps) => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const {
    data: memberPointsData,
    error: memberPointsError,
    refetch,
    isRefetching,
    isRefetchError,
  } = useMemberPointsIndex({
    memberId,
    params: { limit: 10, offset: (selectedPage - 1) * 10, order: "desc" },
  });

  const handleClickPagination = (page: number) => {
    setSelectedPage(page);
    refetch();
  };

  if (memberPointsError)
    return <ErrorPage message={memberPointsError.message} />;
  if (isRefetchError) return <ErrorPage message="読み込みに失敗しました" />;

  if (!memberPointsData || isRefetching) return <LoaderPage />;

  return (
    <MemberPoints
      currentPage={selectedPage}
      onClickPagenation={handleClickPagination}
      maxPage={Math.floor((memberPointsData.totalCount - 1) / 10 + 1)}
      pointData={memberPointsData.memberPoints}
      totalPoint={totalPoint}
    ></MemberPoints>
  );
};
