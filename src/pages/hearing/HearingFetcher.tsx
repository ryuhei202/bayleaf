import { useState } from "react";
import { Loader } from "semantic-ui-react";
import { TFormParams } from "../../api/charts/TFormParams";
import { useHearingFormsShow } from "../../api/hearingForms/useHearingFormsShow";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { BeforeHearingConfirm } from "../../components/hearing/BeforeHearingConfirm";
import { MultipleSelectForm } from "../../components/hearing/MultipleSelectForm";
import { PremiumPlanConfirm } from "../../components/hearing/PremiumPlanConfirm";
import { SingleSelectForm } from "../../components/hearing/SingleSelectForm";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { PLANS } from "../../models/shared/TPlans";
import { getHearingFetchHandler } from "./handler/getHearingFetchHandler";

type TProps = {
  readonly member: TMembersIndexResponse;
};
export type AnsweredHearing = TFormParams;

export const HearingFetcher = ({ member }: TProps) => {
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
    handleClickSecondNext,
    handleSubmitForm,
    handleCancelForm,
    formattedResponseData,
    handleSkipForm,
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
    return (
      <BeforeHearingConfirm
        onClick={handleClickFirstNext}
        planId={member.mPlanId}
      />
    );
  }

  if (nextFormId === null) {
    return member.mPlanId === PLANS.PREMIUM &&
      secondAnsweredHearings.length <= 0 ? (
      <PremiumPlanConfirm onClick={handleClickSecondNext} />
    ) : (
      <>最後の確認画面</>
    );
  }

  if (!hearingFormData) return <Loader active />;

  // スキップ処理
  // if (hearingFormData.options.length === 1) {
  //   handleSkipForm(hearingFormData.id, hearingFormData.options[0]);
  // }

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
