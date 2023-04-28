import { useEffect, useState } from "react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { MemberListContainer } from "../hearing/MemberListContainer";
import { MemberPointContainer } from "./MemberPointContainer";

export const PointHistory = () => {
  const [member, setMember] =
    useState<TMembersIndexResponse | undefined>(undefined);
  useEffect(() => {
    document.title = "決済履歴 | UWear";
  }, []);
  return (
    <>
      {member === undefined ? (
        <MemberListContainer setMember={setMember} />
      ) : (
        <MemberPointContainer totalPoint={member.point} memberId={member.id} />
      )}
    </>
  );
};
