import { Dispatch, SetStateAction } from "react";

export const useHearingHandler = (
  setMemberId: Dispatch<SetStateAction<number | null>>
) => {
  const onMemberListContainerCallback = (memberId: number) => {
    return {};
    setMemberId(memberId);
  };

  return {
    onMemberListContainerCallback,
  };
};
