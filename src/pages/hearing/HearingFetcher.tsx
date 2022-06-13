import { useState } from "react";
import { Loader } from "semantic-ui-react";
import { useHearingFormsShow } from "../../api/hearingForms/useHearingFormsShow";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { Button } from "../../components/baseParts/Button";
import { Page } from "../../components/baseParts/Page";
import { PageHeader } from "../../components/baseParts/PageHeader";
import { BeforeHearingConfirm } from "../../components/hearing/BeforeHearingConfirm";
import { HearingAnswerConfirm } from "../../components/hearing/HearingAnswerConfirm";
import { MultipleSelectForm } from "../../components/hearing/MultipleSelectForm";
import { PremiumPlanConfirm } from "../../components/hearing/PremiumPlanConfirm";
import { SingleSelectForm } from "../../components/hearing/SingleSelectForm";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { PLANS } from "../../models/shared/TPlans";
import { useHearingFetchHandler } from "./handler/useHearingFetchHandler";
import { HearingPostSuccess } from "./HearingPostSuccess";

type TProps = {
  readonly member: TMembersIndexResponse;
};
export type AnsweredHearing = {
  readonly id: number;
  readonly title: string;
  readonly categoryName: string;
  readonly options: {
    id: number;
    text?: string;
    name: string;
  }[];
};

export const HearingFetcher = ({ member }: TProps) => {
  const [nextFormId, setNextFormId] = useState<number | null>(null);
  const [currentAnswerNumber, setCurrentAnswerNumber] = useState<1 | 2>(1);
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
    handleClickPremiumNext,
    handleCancelPremiumNext,
    handleSubmitForm,
    handleCancelForm,
    formattedResponseData,
    handleSkipForm,
    getBeforeAnswerText,
    formattedConfirmAnswers,
    handleSubmitComplete,
    handleCancelFinalConfirm,
    handleClickReset,
    isPostLoading,
    isPostSuccess,
  } = useHearingFetchHandler({
    memberId: member.id,
    firstAnsweredHearings,
    secondAnsweredHearings,
    currentAnswerNumber,
    setNextFormId,
    setFirstAnsweredHearings,
    setCurrentAnswerNumber,
    setSecondAnsweredHearings,
  });

  if (member.isAlreadyHearing) {
    return (
      <Page>
        <PageHeader
          title="既に回答済みです。"
          className="m-4"
          subtitle="スタイリストが対応しますので、少々お待ちください。"
        />
      </Page>
    );
  }

  if (hearingFormError) {
    return <ErrorMessage message={hearingFormError.message} />;
  }

  if (isPostSuccess) {
    return <HearingPostSuccess />;
  }

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
      <PremiumPlanConfirm
        onClick={handleClickPremiumNext}
        onCancel={handleCancelPremiumNext}
      />
    ) : (
      <HearingAnswerConfirm
        title="ヒアリング確認画面"
        confirmAnswers={formattedConfirmAnswers()}
        footer={
          <>
            <Button
              variant="primary"
              onClick={handleSubmitComplete}
              disabled={isPostLoading}
              border={true}
            >
              ヒアリングを完了する
            </Button>
            <Button
              onClick={handleCancelFinalConfirm}
              disabled={isPostLoading}
              variant="default"
              disableElevation
              border
            >
              ひとつ前に戻る
            </Button>
            <Button
              variant="text"
              onClick={handleClickReset}
              disabled={isPostLoading}
            >
              最初からやり直す
            </Button>
          </>
        }
      />
    );
  }

  if (!hearingFormData) return <Loader active />;

  // スキップ処理
  if (hearingFormData.options.length === 1) {
    handleSkipForm(
      hearingFormData.id,
      hearingFormData.title,
      hearingFormData.options[0],
      hearingFormData.categoryName
    );
  }

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
      beforeAnswerText={getBeforeAnswerText(hearingFormData)}
    />
  );
};
