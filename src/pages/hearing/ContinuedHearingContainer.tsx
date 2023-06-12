import { useState } from "react";
import { useChartCreateForPlan } from "../../api/charts/useChartCreateForPlan";
import { THearing } from "../../api/hearings/THearing";
import { TNotNullPlanIdMember } from "../../api/members/TMembersIndexResponse";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { BeforeHearingConfirm } from "../../components/pageParts/hearing/BeforeHearingConfirm";
import { HearingAnswerConfirm } from "../../components/pageParts/hearing/HearingAnswerConfirm";
import { PremiumPlanConfirm } from "../../components/pageParts/hearing/PremiumPlanConfirm";
import { RankSelectingForm } from "../../components/pageParts/oneShot/RankSelectingForm";
import { HearingConfirmButtons } from "../../components/resourceParts/hearing/HearingConfirmButtons";
import { AnsweredHearings } from "./HearingContainer";
import { HearingFlowContainer } from "./HearingFlowContainer";
import { HearingPostSuccess } from "./HearingPostSuccess";
import { getContinuedHearingContainerHandler } from "./handler/getContinuedHearingContainerHandler";

type TProps = {
  readonly hearings: THearing[];
  readonly member: TNotNullPlanIdMember;
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
  const [isSelectableBRank, setIsSelectableBRank] = useState<boolean>();
  const {
    mutate,
    isLoading: isPostLoading,
    isError: isPostError,
    isSuccess: isPostSuccess,
  } = useChartCreateForPlan();

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
    isSelectableBRank,
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

  if (isPostError) return <ErrorPage message="予期せぬエラーが発生しました" />;

  if (!isHearingStarted) {
    return (
      <div data-testid="beforeHearingConfirm">
        <BeforeHearingConfirm
          onClick={handleClickHearingStart}
          planId={member.mPlanId}
        />
      </div>
    );
  }

  if (shouldAnswerTwo()) {
    return (
      <div data-testid="premiumPlanConfirm">
        <PremiumPlanConfirm
          onClick={handleClickPremiumNext}
          onCancel={handleCancelPremiumNext}
        />
      </div>
    );
  }

  if (isAnsweredAll()) {
    if (isSelectableBRank === undefined) {
      return (
        <div data-testid="rankSelectingForm">
          <RankSelectingForm
            onSelect={(isSelectable) => setIsSelectableBRank(isSelectable)}
            onCancel={handleCancelForm}
          />
        </div>
      );
    }
    return (
      <div data-testid="hearingAnswerConfirm">
        <HearingAnswerConfirm
          title="ヒアリング確認画面"
          confirmAnswers={getConfirmAnswers()}
          isSelectableBRank={isSelectableBRank}
          footer={
            <HearingConfirmButtons
              onClickComplete={handlePost}
              onClickBack={() => setIsSelectableBRank(undefined)}
              isPostLoading={isPostLoading}
            />
          }
        />
      </div>
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
