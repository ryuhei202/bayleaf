import { useEffect } from "react";
import { useBusinessDayShow } from "../../api/businessDays/useBusinessDayShow";
import { useMembersIndex } from "../../api/members/useMembersIndex";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { OneShotContainer } from "./OneShotContainer";

export const OneShot = () => {
  const { data: membersIndexData, error: memberIndexError } = useMembersIndex();
  const { data: businessDayData, error: businessDayError } = useBusinessDayShow(
    { daysLater: 6 }
  );

  useEffect(() => {
    document.title = "単発利用 | UWear";
  }, []);

  if (memberIndexError || businessDayError)
    return <ErrorPage message="予期せぬエラーが発生しました" />;
  if (!membersIndexData || !businessDayData) return <LoaderPage />;
  if (membersIndexData.length !== 1) {
    return (
      <ErrorPage message="複数アカウントを持っています。LINEアカウント1つにつき、UWearアカウントは1つまでとなっております。お手数ですがアカウントを1つにした後に再度ご手続きお願いします。" />
    );
  }
  return (
    <OneShotContainer
      memberData={membersIndexData[0]}
      daysFrom={businessDayData.fromDate}
    />
  );
};
