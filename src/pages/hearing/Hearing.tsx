import { useEffect, useState } from "react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { MemberListContainer } from "./MemberListContainer";
import { ReferenceFetcher } from "./ReferenceFetcher";

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
        <ReferenceFetcher member={member} />
      )}
    </>
  );
};
