import { useState } from "react";
import { useChartCreate } from "../../api/charts/useChartCreate";
import { THearing } from "../../api/hearings/THearing";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { BeforeHearingConfirm } from "../../components/hearing/BeforeHearingConfirm";
import { HearingAnswerConfirm } from "../../components/hearing/HearingAnswerConfirm";
import { PremiumPlanConfirm } from "../../components/hearing/PremiumPlanConfirm";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { FirstHearingConfirmButtons } from "./FirstHearingConfirmButtons";
import { getContinuedHearingContainerHandler } from "./handler/getContinuedHearingContainerHandler";
import { AnsweredHearings } from "./HearingContainer";
import { HearingFlowContainer } from "./HearingFlowContainer";
import { HearingPostSuccess } from "./HearingPostSuccess";

type TProps = {
  readonly hearings: THearing[];
  readonly member: TMembersIndexResponse;
};

export const ContinuedHearingContainer = ({ hearings, member }: TProps) => {
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
  const [isHearingStarted, setIsHearingStarted] = useState<boolean>(false);
  const {
    mutate,
    isLoading: isPostLoading,
    isError: isPostError,
    isSuccess: isPostSuccess,
  } = useChartCreate();

  const {
    handleSubmitForm,
    getAnsweredHearings,
    handleCancelForm,
    handleClickBack,
    handleClickFormStart,
    handleClickHearingStart,
    handleClickPremiumNext,
    handleCancelPremiumNext,
    getPreviousAnswers,
    handleClickReset,
    handlePost,
    getConfirmAnswers,
    handleClickSameHearing,
    shouldAnswerTwo,
    isAnsweredAll,
  } = getContinuedHearingContainerHandler({
    member,
    hearings,
    currentAnswerNumber,
    firstAnsweredHearings,
    secondAnsweredHearings,
    nextFormId,
    setNextFormId,
    setFirstAnsweredHearings,
    setSecondAnsweredHearings,
    setIsBackTransition,
    setCurrentAnswerNumber,
    setIsHearingStarted,
    mutate,
  });

  if (isPostSuccess) {
    return <HearingPostSuccess />;
  }

  if (isPostError)
    return <ErrorMessage message="予期せぬエラーが発生しました" />;

  if (!isHearingStarted) {
    return (
      <BeforeHearingConfirm
        onClick={handleClickHearingStart}
        planId={member.mPlanId}
      />
    );
  }

  if (shouldAnswerTwo()) {
    return (
      <PremiumPlanConfirm
        onClick={handleClickPremiumNext}
        onCancel={handleCancelPremiumNext}
      />
    );
  }

  if (isAnsweredAll()) {
    return (
      <HearingAnswerConfirm
        title="ヒアリング確認画面"
        confirmAnswers={getConfirmAnswers()}
        footer={
          <FirstHearingConfirmButtons
            onClickComplete={handlePost}
            onClickBack={handleCancelForm}
            onClickReset={handleClickReset}
            isPostLoading={isPostLoading}
          />
        }
      />
    );
  }

  return (
    <HearingFlowContainer
      onSubmitForm={handleSubmitForm}
      onCancelForm={handleCancelForm}
      onClickStart={handleClickFormStart}
      onClickBack={handleClickBack}
      onClickSameHearing={handleClickSameHearing}
      confirmAnswers={getPreviousAnswers()}
      nextFormId={nextFormId}
      answeredHearings={getAnsweredHearings()}
      currentAnswerNumber={currentAnswerNumber}
      isBackTransition={isBackTransition}
      member={member}
    />
  );
};
