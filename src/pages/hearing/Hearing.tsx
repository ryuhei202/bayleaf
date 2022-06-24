import { useEffect, useState } from "react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { HearingChartFetcher } from "../HearingChartFetcher";
import { HearingContainer } from "./HearingContainer";
import { MemberListContainer } from "./MemberListContainer";

export const Hearing = () => {
  const [member, setMember] =
    useState<TMembersIndexResponse | undefined>(undefined);

  useEffect(() => {
    document.title = "ヒアリング | leeap";
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
