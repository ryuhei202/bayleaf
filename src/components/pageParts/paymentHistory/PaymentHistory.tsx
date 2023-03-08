import { useEffect, useState } from "react";
import { TMembersIndexResponse } from "../../../api/members/TMembersIndexResponse";
import { MemberListContainer } from "../../../pages/hearing/MemberListContainer";
import { MemberPaymentContainer } from "./MemberPaymentContainer";

export const PaymentHistory = () => {
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
        <MemberPaymentContainer nextPaymentDate={member.nextPaymentDate} />
      )}
    </>
  );
};
