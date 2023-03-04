import { useMembersIndex } from "../../../api/members/useMembersIndex";
import { ErrorPage } from "../../baseParts/pages/ErrorPage";
import { LoaderPage } from "../../baseParts/pages/LoaderPage";
import { MemberPaymentContainer } from "./MemberPaymentContainer";

export const PaymentHistory = () => {
  const { data: membersIndexData, error: membersIndexError } =
    useMembersIndex();
  if (membersIndexError)
    return <ErrorPage message={membersIndexError.message} />;
  if (!membersIndexData) return <LoaderPage />;
  if (membersIndexData.length !== 1) {
    return (
      <ErrorPage message="複数アカウントを持っています。LINEアカウント1つにつき、UWearアカウントは1つまでとなっております。お手数ですがアカウントを1つにした後に再度ご手続きお願いします。" />
    );
  }
  return (
    <MemberPaymentContainer
      nextPaymentDate={membersIndexData[0].nextPaymentDate}
    />
  );
};
