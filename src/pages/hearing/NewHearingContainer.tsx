import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { BeforeHearingConfirm } from "../../components/pageParts/hearing/BeforeHearingConfirm";
import { HearingAnswerConfirm } from "../../components/pageParts/hearing/HearingAnswerConfirm";
import { PremiumPlanConfirm } from "../../components/pageParts/hearing/PremiumPlanConfirm";
import { HearingFormFetcher } from "./HearingFormFetcher";
import { FirstHearingConfirmButtons } from "./FirstHearingConfirmButtons";
import { M_PLAN_IDS } from "../../models/shared/Plans";
import { getNewHearingContainerHandler } from "./handler/getNewHearingContainerHandler";
import { AnsweredHearings } from "./HearingContainer";
import { useState } from "react";
import { useChartCreate } from "../../api/charts/useChartCreate";
import { HearingPostSuccess } from "./HearingPostSuccess";
import { ErrorMessage } from "../../components/shared/ErrorMessage";

type TProps = {
  readonly member: TMembersIndexResponse;
  readonly nextPlanId: number;
};

export const NewHearingContainer = ({ member, nextPlanId }: TProps) => {
  const [nextFormId, setNextFormId] = useState<number | null>(null);
  const [currentAnswerNumber, setCurrentAnswerNumber] = useState<1 | 2>(1);
  const [firstAnsweredHearings, setFirstAnsweredHearings] =
    useState<AnsweredHearings>({
      forms: [],
    });
  const [secondAnsweredHearings, setSecondAnsweredHearings] =
    useState<AnsweredHearings>({
      forms: [],
    });
  const [isBackTransition, setIsBackTransition] = useState<boolean>(false);
  const {
    mutate,
    isLoading: isPostLoading,
    isError: isPostError,
    isSuccess: isPostSuccess,
  } = useChartCreate();

  const {
    handleClickFirstNext,
    handleClickPremiumNext,
    handleCancelPremiumNext,
    handleSubmitForm,
    handleCancelForm,
    formattedConfirmAnswers,
    handleClickReset,
    handleSubmitComplete,
  } = getNewHearingContainerHandler({
    memberId: member.id,
    secondAnsweredHearings,
    currentAnswerNumber,
    setNextFormId,
    setCurrentAnswerNumber,
    setFirstAnsweredHearings,
    setSecondAnsweredHearings,
    setIsBackTransition,
    firstAnsweredHearings,
    mutate,
  });

  if (isPostSuccess) {
    return <HearingPostSuccess />;
  }

  if (isPostError)
    return <ErrorMessage message="予期せぬエラーが発生しました" />;

  if (nextFormId === null) {
    if (firstAnsweredHearings.forms.length <= 0) {
      return (
        <BeforeHearingConfirm
          onClick={handleClickFirstNext}
          planId={nextPlanId}
        />
      );
    }
    return nextPlanId === M_PLAN_IDS.PREMIUM &&
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
