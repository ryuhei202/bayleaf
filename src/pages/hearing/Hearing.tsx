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
      ) : member.isSuspend ? (
        <ErrorPage message="停止中のお客様はこのページを利用できません" />
      ) : (
        <HearingChartFetcher
          member={{ ...member, mPlanId: member.mPlanId as number }}
        />
      )}
    </>
  );
};
