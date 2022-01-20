import { Dispatch, SetStateAction } from "react";
import { Loader } from "semantic-ui-react";
import { useMembersIndex } from "../../api/members/useMembersIndex";
import { Typography } from "../../components/baseParts/Typography";
import { MemberList } from "../../components/hearing/MemberList";
import { ErrorMessage } from "../../components/shared/ErrorMessage";

type Props = {
  readonly setMemberId: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
};
export const MemberListContainer = ({ setMemberId }: Props) => {
  const { data, error } = useMembersIndex();

  if (!data) return <Loader active />;
  if (data?.length <= 0)
    return (
      <Typography bold className="m-4">
        ヒアリングが存在しません
      </Typography>
    );

  if (error) return <ErrorMessage message={error.message} />;
  if (data.length === 1) {
    setMemberId(data[0].id);
  }
  return <MemberList data={data} setMemberId={setMemberId} />;
};
