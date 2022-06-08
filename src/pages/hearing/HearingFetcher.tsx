import { useState } from "react";
import { Loader } from "semantic-ui-react";
import { THearingParams } from "../../api/charts/THearingParams";
import { useHearingFormsShow } from "../../api/hearingForms/useHearingFormsShow";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { BeforeHearingConfirm } from "../../components/hearing/BeforeHearingConfirm";
import { MultipleSelectForm } from "../../components/hearing/MultipleSelectForm";
import { SingleSelectForm } from "../../components/hearing/SingleSelectForm";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { getHearingFetchHandler } from "./handler/getHearingFetchHandler";

type TProps = {
  readonly member: TMembersIndexResponse;
};
type AnsweredHearing = THearingParams;

export const HearingFetcher = ({ member }: TProps) => {
  const [nextFormId, setNextFormId] = useState<number | null>(null);
  const [answeredHearings, setAnsweredHearings] = useState<AnsweredHearing[]>(
    []
  );
  const { data: hearingFormData, error: hearingFormError } =
    useHearingFormsShow({ hearingFormId: nextFormId });

  const { handleClickFirstNext } = getHearingFetchHandler({
    setNextFormId,
  });

  if (hearingFormError)
    return <ErrorMessage message={hearingFormError.message} />;

  if (nextFormId === null && answeredHearings.length <= 0) {
    return <BeforeHearingConfirm onClick={handleClickFirstNext} />;
  }

  if (!hearingFormData) return <Loader active />;

  if (hearingFormData.multipleAnswerNextFormId !== null) {
    return (
      <MultipleSelectForm
        response={hearingFormData}
        onSubmit={() => {}}
        onCancel={() => {}}
      />
    );
  }

  return (
    <SingleSelectForm
      response={hearingFormData}
      onSubmit={() => {}}
      onCancel={() => {}}
    />
  );
};
