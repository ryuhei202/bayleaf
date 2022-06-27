import { useState } from "react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { BeforeHearingConfirm } from "../../components/hearing/BeforeHearingConfirm";
import { HearingAnswerConfirm } from "../../components/hearing/HearingAnswerConfirm";
import { PremiumPlanConfirm } from "../../components/hearing/PremiumPlanConfirm";
import { HearingFormFetcher } from "./HearingFormFetcher";
import { FirstHearingConfirmButtons } from "./FirstHearingConfirmButtons";
import { M_PLAN_IDS } from "../../models/hearing/MPlanIds";
import { getFirstHearingContainerHandler } from "./handler/getFirstHearingContainerHandler";
import { THearingAnswer } from "../../models/hearing/THearingAnswer";
import { AnsweredHearings, TAnsweredForm } from "./HearingContainer";

type TProps = {
  readonly member: TMembersIndexResponse;
  readonly nextFormId: number | null;
  readonly setNextFormId: React.Dispatch<React.SetStateAction<number | null>>;
  readonly currentAnswerNumber: 1 | 2;
  readonly setCurrentAnswerNumber: React.Dispatch<React.SetStateAction<1 | 2>>;
  readonly firstAnsweredHearings: AnsweredHearings;
  readonly secondAnsweredHearings: AnsweredHearings;
  readonly setSecondAnsweredHearings: React.Dispatch<
    React.SetStateAction<AnsweredHearings>
  >;
  readonly isBackTransition: boolean;
  readonly handleSubmitForm: (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => void;
  readonly handleCancelForm: () => void;
  readonly formattedConfirmAnswers: () => THearingAnswer[];
  readonly handleClickReset: () => void;
  readonly handleSubmitComplete: () => void;
  readonly isPostLoading: boolean;
  readonly removeLastAnswer: (
    answeredHearings: TAnsweredForm[],
    answerNum: number
  ) => void;
};

export const FirstHearingContainer = ({
  member,
  setNextFormId,
  setCurrentAnswerNumber,
  setSecondAnsweredHearings,
  firstAnsweredHearings,
  secondAnsweredHearings,
  removeLastAnswer,
  nextFormId,
  formattedConfirmAnswers,
  handleSubmitComplete,
  handleCancelForm,
  handleClickReset,
  isPostLoading,
  handleSubmitForm,
  currentAnswerNumber,
  isBackTransition,
}: TProps) => {
  const {
    handleClickFirstNext,
    handleClickPremiumNext,
    handleCancelPremiumNext,
  } = getFirstHearingContainerHandler({
    setNextFormId,
    setCurrentAnswerNumber,
    setSecondAnsweredHearings,
    firstAnsweredHearings,
    removeLastAnswer,
  });

  if (nextFormId === null) {
    if (firstAnsweredHearings.forms.length <= 0) {
      return (
        <BeforeHearingConfirm
          onClick={handleClickFirstNext}
          planId={member.mPlanId}
        />
      );
    }
    return member.mPlanId === M_PLAN_IDS.PREMIUM &&
      secondAnsweredHearings.forms.length <= 0 ? (
      <PremiumPlanConfirm
        onClick={handleClickPremiumNext}
        onCancel={handleCancelPremiumNext}
      />
    ) : (
      <HearingAnswerConfirm
        title="ヒアリング確認画面"
        confirmAnswers={formattedConfirmAnswers()}
        footer={
          <FirstHearingConfirmButtons
            onClickComplete={handleSubmitComplete}
            onClickBack={handleCancelForm}
            onClickReset={handleClickReset}
            isPostLoading={isPostLoading}
          />
        }
      />
    );
  }

  return (
    <HearingFormFetcher
      onSubmitForm={handleSubmitForm}
      onCancelForm={handleCancelForm}
      nextFormId={nextFormId}
      previousAnsweredHearing={
        currentAnswerNumber === 1
          ? firstAnsweredHearings.forms.slice(-1)[0]
          : secondAnsweredHearings.forms.slice(-1)[0]
      }
      isBackTransition={isBackTransition}
      member={member}
    />
  );
};
