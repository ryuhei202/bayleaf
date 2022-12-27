import { useEffect } from "react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { useMembersIndex } from "../../api/members/useMembersIndex";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { MemberList } from "../../components/pageParts/hearing/MemberList";

type Props = {
  readonly setMember: (member: TMembersIndexResponse) => void;
};

export const MemberListContainer = ({ setMember }: Props) => {
  const { data, error } = useMembersIndex();
  useEffect(() => {
    if (data?.length === 1) setMember(data[0]);
  }, [data, setMember]);

  if (error) return <ErrorPage message={error.message} />;
  if (!data) return <LoaderPage />;
  if (data?.length <= 0)
    return <Typography className="m-4">ユーザーが存在しません</Typography>;
  return <MemberList data={data} setMember={setMember} />;
};
