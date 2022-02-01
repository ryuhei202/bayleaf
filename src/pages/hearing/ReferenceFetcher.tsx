import { Loader } from "semantic-ui-react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { useStylingReferenceShow } from "../../api/stylingReference/useStylingReferenceShow";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { ReferenceContainer } from "./ReferenceContainer";

type Props = {
  readonly member: TMembersIndexResponse;
};

export const ReferenceFetcher = ({ member }: Props) => {
  const { data, error } = useStylingReferenceShow(member.id);
  if (!data) return <Loader active />;
  if (error) return <ErrorMessage message={error.message} />;
  return <ReferenceContainer stylingReference={data} member={member} />;
};
