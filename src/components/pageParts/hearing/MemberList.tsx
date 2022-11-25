import { TMembersIndexResponse } from "../../../api/members/TMembersIndexResponse";
import { Button } from "../../baseParts/legacy/Button";
import { CoworkerIcon } from "../../baseParts/legacy/icons/CoworkerIcon";
import { Page } from "../../baseParts/legacy/Page";
import { PageHeader } from "../../baseParts/legacy/PageHeader";
import { Typography } from "../../baseParts/legacy/Typography";

type Props = {
  readonly data: TMembersIndexResponse[];
  readonly setMember: (member: TMembersIndexResponse) => void;
};

export const MemberList = ({ data, setMember }: Props) => {
  return (
    <Page className="px-5">
      <PageHeader title="アカウントを選択してください" className="mb-16" />
      {data.map((member) => (
        <div className="mb-5" key={member.id}>
          <Button variant="default" onClick={() => setMember(member)}>
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
