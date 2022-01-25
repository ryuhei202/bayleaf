import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { Button } from "../baseParts/Button";
import { CoworkerIcon } from "../baseParts/icons/CoworkerIcon";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { Typography } from "../baseParts/Typography";

type Props = {
  readonly data: TMembersIndexResponse[];
  readonly setMemberId: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
};
export const MemberList = ({ data, setMemberId }: Props) => {
  return (
    <Page className="px-5">
      <PageHeader title="アカウントを選択してください" className="mb-16" />
      {data.map((member) => (
        <div className="mb-5" key={member.id}>
          <Button variant="default" onClick={() => setMemberId(member.id)}>
            <CoworkerIcon className="mb-3" />
            <Typography>
              {member.email} <br />
              次回決済日: {member.nextPaymentDate}
            </Typography>
          </Button>
        </div>
      ))}
    </Page>
  );
};
