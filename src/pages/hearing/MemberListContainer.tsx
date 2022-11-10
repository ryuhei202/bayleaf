import { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { useMembersIndex } from "../../api/members/useMembersIndex";
import { Typography } from "../../components/baseParts/Typography";
import { MemberList } from "../../components/hearing/MemberList";
import { ErrorMessage } from "../../components/shared/ErrorMessage";

type Props = {
  readonly setMember: (member: TMembersIndexResponse) => void;
};

export const MemberListContainer = ({ setMember }: Props) => {
  const { data, error } = useMembersIndex();
  useEffect(() => {
    if (data?.length === 1) setMember(data[0]);
  }, [data, setMember]);

  if (error) return <ErrorMessage message={error.message} />;
  if (!data) return <Loader active />;
  if (data?.length <= 0)
    return <Typography className="m-4">ユーザーが存在しません</Typography>;
  return <MemberList data={data} setMember={setMember} />;
};
