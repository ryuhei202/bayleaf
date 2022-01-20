import { useState } from "react";
import { useHearingHandler } from "../../hooks/hearing/useHearingHandler";
import { MemberListContainer } from "./MemberListContainer";
import { ReferenceContainer } from "./ReferenceContainer";

export const Hearing = () => {
  const [memberId, setMemberId] = useState<number | undefined>(undefined);

  return (
    <>
      {memberId === undefined ? (
        <MemberListContainer setMemberId={setMemberId} />
      ) : (
        <ReferenceContainer />
      )}
    </>
  );
};
