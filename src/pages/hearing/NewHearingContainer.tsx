import { useState } from "react";
import { useChartCreateForPlan } from "../../api/charts/useChartCreateForPlan";
import { TNotNullPlanIdMember } from "../../api/members/TMembersIndexResponse";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { BeforeHearingConfirm } from "../../components/pageParts/hearing/BeforeHearingConfirm";
import { HearingAnswerConfirm } from "../../components/pageParts/hearing/HearingAnswerConfirm";
import { PremiumPlanConfirm } from "../../components/pageParts/hearing/PremiumPlanConfirm";
import { RankSelectingForm } from "../../components/pageParts/oneShot/RankSelectingForm";
import { HearingConfirmButtons } from "../../components/resourceParts/hearing/HearingConfirmButtons";
import { M_PLAN_IDS } from "../../models/shared/Plans";
import { AnsweredHearings } from "./HearingContainer";
import { HearingFormFetcher } from "./HearingFormFetcher";
import { HearingPostSuccess } from "./HearingPostSuccess";
import { getNewHearingContainerHandler } from "./handler/getNewHearingContainerHandler";

type TProps = {
  readonly member: TNotNullPlanIdMember;
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
  const [isSelectableBRank, setIsSelectableBRank] = useState<boolean>();
  const {
    mutate,
    isLoading: isPostLoading,
    isError: isPostError,
    isSuccess: isPostSuccess,
  } = useChartCreateForPlan();

  const {
    handleClickFirstNext,
    handleClickPremiumNext,
    handleCancelPremiumNext,
    handleSubmitForm,
    handleCancelForm,
    formattedConfirmAnswers,
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

  if (isPostError) return <ErrorPage message="予期せぬエラーが発生しました" />;

  if (nextFormId === null) {
    if (firstAnsweredHearings.forms.length <= 0) {
      return (
        <div data-testid="beforeHearingConfirm">
          <BeforeHearingConfirm
            onClick={handleClickFirstNext}
            planId={nextPlanId}
          />
        </div>
      );
    }
    if (
      nextPlanId === M_PLAN_IDS.PREMIUM &&
      secondAnsweredHearings.forms.length <= 0
    ) {
      return (
        <div data-testid="premiumPlanConfirm">
          <PremiumPlanConfirm
            onClick={handleClickPremiumNext}
            onCancel={handleCancelPremiumNext}
          />
        </div>
      );
    }

    if (isSelectableBRank === undefined) {
      return (
        <div data-testid="rankSelectingForm">
          <RankSelectingForm
            onSubmit={(isSelectable) => setIsSelectableBRank(isSelectable)}
            onCancel={handleCancelForm}
          />
        </div>
      );
    }

    return (
      <div data-testid="hearingAnswerConfirm">
        <HearingAnswerConfirm
          title="ヒアリング確認画面"
          confirmAnswers={formattedConfirmAnswers()}
          isSelectableBRank={isSelectableBRank}
          footer={
            <HearingConfirmButtons
              onClickComplete={handleSubmitComplete}
              onClickBack={() => setIsSelectableBRank(undefined)}
              isPostLoading={isPostLoading}
            />
          }
        />
      </div>
    );
  }
  return (
    <div data-testid="hearingFormFetcher">
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
    </div>
  );
};
