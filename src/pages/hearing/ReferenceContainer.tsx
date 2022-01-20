import { useState } from "react";
import { Loader } from "semantic-ui-react";
import { useStylingReferenceShow } from "../../api/stylingReference/useStylingReferenceShow";
import { useStylingReferenceUpdate } from "../../api/stylingReference/useStylingReferenceUpdate";
import { ReferenceDocument } from "../../components/hearing/ReferenceDocument";
import { ErrorMessage } from "../../components/shared/ErrorMessage";

type Props = {
  readonly memberId: number;
};

export const ReferenceContainer = ({ memberId }: Props) => {
  const [modifiedChoices, setModifiedChoices] = useState<number[]>([]);
  const { data: stylingReference, error } = useStylingReferenceShow(memberId);
  const { mutate } = useStylingReferenceUpdate(modifiedChoices, memberId);
  const [editingCategory, setEditngCategory] = useState<number | undefined>(
    undefined
  );

  if (!stylingReference) return <Loader active />;
  if (error) return <ErrorMessage message={error.message} />;

  return <ReferenceDocument stylingReference={stylingReference} />;
};
