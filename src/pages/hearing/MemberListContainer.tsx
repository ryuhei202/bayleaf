import { Dispatch, SetStateAction } from "react";
import { Loader } from "semantic-ui-react";
import { useMembersIndex } from "../../api/members/useMembersIndex";
import { MemberList } from "../../components/hearing/MemberList";
import { ErrorMessage } from "../../components/shared/ErrorMessage";

type Props = {
  readonly setMemberId: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
};
export const MemberListContainer = ({ setMemberId }: Props) => {
  const { data, error } = useMembersIndex();
  if (!data) return <Loader active inline="centered" />;
  if (data?.length <= 0) return <>ヒアリングが存在しません</>;

  if (error) return <ErrorMessage message={error.message} />;
  if (data.length === 1) {
    setMemberId(data[0].id);
  }
  return <MemberList data={data} setMemberId={setMemberId} />;
};
