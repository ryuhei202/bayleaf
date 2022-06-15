import { useState } from "react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { BeforeHearingConfirm } from "../../components/hearing/BeforeHearingConfirm";
import { HearingAnswerConfirm } from "../../components/hearing/HearingAnswerConfirm";
import { PremiumPlanConfirm } from "../../components/hearing/PremiumPlanConfirm";
import { PLANS } from "../../models/shared/TPlans";
import { AnsweredHearing, HearingFormFetcher } from "./HearingFormFetcher";
import { HearingPostSuccess } from "./HearingPostSuccess";
import { useHearingContainerHandler } from "./handler/useHearingContainerHandler";
import { FirstHearingConfirmButtons } from "./FirstHearingConfirmButtons";

type TProps = {
  readonly member: TMembersIndexResponse;
};
export const HearingContainer = ({ member }: TProps) => {
  const [nextFormId, setNextFormId] = useState<number | null>(null);
  const [currentAnswerNumber, setCurrentAnswerNumber] = useState<1 | 2>(1);
  const [firstAnsweredHearings, setFirstAnsweredHearings] = useState<
    AnsweredHearing[]
  >([]);
  const [secondAnsweredHearings, setSecondAnsweredHearings] = useState<
    AnsweredHearing[]
  >([]);

  const {
    handleClickFirstNext,
    handleClickPremiumNext,
    handleCancelPremiumNext,
    handleSubmitForm,
    handleCancelForm,
    handleSkipForm,
    formattedConfirmAnswers,
    handleSubmitComplete,
    handleClickReset,
    isPostLoading,
    isPostSuccess,
  } = useHearingContainerHandler({
    memberId: member.id,
    firstAnsweredHearings,
    secondAnsweredHearings,
    currentAnswerNumber,
    setNextFormId,
    setFirstAnsweredHearings,
    setCurrentAnswerNumber,
    setSecondAnsweredHearings,
  });

  if (isPostSuccess) {
    return <HearingPostSuccess />;
  }

  if (nextFormId === null) {
    if (firstAnsweredHearings.length <= 0) {
      return (
        <BeforeHearingConfirm
          onClick={handleClickFirstNext}
          planId={member.mPlanId}
        />
      );
    }
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
      onSkip={handleSkipForm}
      nextFormId={nextFormId}
      firstAnsweredHearings={firstAnsweredHearings}
      secondAnsweredHearings={secondAnsweredHearings}
      currentAnswerNumber={currentAnswerNumber}
    />
  );
};
