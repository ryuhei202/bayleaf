import { useEffect, useState } from "react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
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
      ) : (
        <HearingChartFetcher member={member} />
      )}
    </>
  );
};
