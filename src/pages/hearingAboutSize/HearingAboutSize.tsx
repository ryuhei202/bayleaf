import { useEffect, useState } from "react";
import { useMemberSizeOptionsIndex } from "../../api/memberSizeOptions/useMemberSizeOptionsIndex";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { MemberListContainer } from "../hearing/MemberListContainer";
import { SizeFormsContainer } from "./SizeFormsContainer";

export const HearingAboutSize = () => {
  const [member, setMember] =
    useState<TMembersIndexResponse | undefined>(undefined);
  const { data: memberSizeOptionData, error: memberSizeOptionError } =
    useMemberSizeOptionsIndex();

  useEffect(() => {
    document.title = "体型ヒアリング | UWear";
  }, []);

  if (memberSizeOptionError)
    return <ErrorPage message={memberSizeOptionError.message} />;

  if (!memberSizeOptionData) return <LoaderPage />;

  return (
    <>
      {member === undefined ? (
        <MemberListContainer setMember={setMember} />
      ) : (
        <SizeFormsContainer
          memberId={member.id}
          memberSizeOptions={memberSizeOptionData}
        />
      )}
    </>
  );
};
