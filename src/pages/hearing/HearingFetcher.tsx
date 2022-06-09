import { useState } from "react";
import { Loader } from "semantic-ui-react";
import { TFormParams } from "../../api/charts/TFormParams";
import { THearingFormShowResponse } from "../../api/hearingForms/THearingFormShowResponse";
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
export type AnsweredHearing = TFormParams;

export const HearingFetcher = ({ member }: TProps) => {
  // TODO: プレミアムプランIDを差し替える
  const PLEMIUM_PLAN_ID = 99999999;

  const [nextFormId, setNextFormId] = useState<number | null>(null);
  const [currentAnswerNumber, setCurrentAnswerNumber] = useState<number>(1);
  const [firstAnsweredHearings, setFirstAnsweredHearings] = useState<
    AnsweredHearing[]
  >([]);
  const [secondAnsweredHearings, setSecondAnsweredHearings] = useState<
    AnsweredHearing[]
  >([]);

  const { data: hearingFormData, error: hearingFormError } =
    useHearingFormsShow({ hearingFormId: nextFormId });

  const {
    handleClickFirstNext,
    handleSubmitForm,
    handleCancelForm,
    formattedResponseData,
  } = getHearingFetchHandler({
    nextFormId,
    firstAnsweredHearings,
    secondAnsweredHearings,
    currentAnswerNumber,
    setNextFormId,
    setFirstAnsweredHearings,
    setCurrentAnswerNumber,
    setSecondAnsweredHearings,
  });

  if (hearingFormError)
    return <ErrorMessage message={hearingFormError.message} />;

  if (nextFormId === null && firstAnsweredHearings.length <= 0) {
    return <BeforeHearingConfirm onClick={handleClickFirstNext} />;
  }

  if (nextFormId === null) {
    return member.mPlanId === PLEMIUM_PLAN_ID &&
      secondAnsweredHearings.length <= 0 ? (
      <>プレミアムプランの方は2コーデお届けするので、2回答えていただきます</>
    ) : (
      <>最後の確認画面</>
    );
  }

  if (!hearingFormData) return <Loader active />;

  if (hearingFormData.multipleAnswerNextFormId !== null) {
    return (
      <MultipleSelectForm
        response={hearingFormData}
        onSubmit={handleSubmitForm}
        onCancel={handleCancelForm}
      />
    );
  }

  return (
    <SingleSelectForm
      response={formattedResponseData(hearingFormData)}
      onSubmit={handleSubmitForm}
      onCancel={handleCancelForm}
    />
  );
};
