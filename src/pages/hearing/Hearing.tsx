import { useEffect, useState } from "react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { HearingChartFetcher } from "./HearingChartFetcher";
import { MemberListContainer } from "./MemberListContainer";

export const Hearing = () => {
  const [member, setMember] =
    useState<TMembersIndexResponse | undefined>(undefined);

  useEffect(() => {
    document.title = "ヒアリング | UWear";
  }, []);

  return (
    <>
      {member === undefined ? (
        <MemberListContainer setMember={setMember} />
      ) : member.mPlanId === null ? (
        <ErrorPage message="単発利用のお客様はこのページを利用できません" />
      ) : (
        <HearingChartFetcher
          member={{
            id: member.id,
            email: member.email,
            nextPaymentDate: member.nextPaymentDate,
            mPlanId: member.mPlanId as number,
            isLatestChartDelivered: member.isLatestChartDelivered,
            isReturnRequired: member.isReturnRequired,
            isFirstTime: member.isFirstTime,
            isSuspend: member.isFirstTime,
            isPaymentError: member.isPaymentError,
            rentalRemainingNum: member.rentalRemainingNum,
            requestedPlanId: member.rentalRemainingNum,
            point: member.point,
          }}
        />
      )}
    </>
  );
};
