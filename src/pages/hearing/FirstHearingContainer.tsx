import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { BeforeHearingConfirm } from "../../components/hearing/BeforeHearingConfirm";
import { HearingAnswerConfirm } from "../../components/hearing/HearingAnswerConfirm";
import { PremiumPlanConfirm } from "../../components/hearing/PremiumPlanConfirm";
import { HearingFormFetcher } from "./HearingFormFetcher";
import { FirstHearingConfirmButtons } from "./FirstHearingConfirmButtons";
import { M_PLAN_IDS } from "../../models/hearing/MPlanIds";
import { getFirstHearingContainerHandler } from "./handler/getFirstHearingContainerHandler";
import { AnsweredHearings, TAnsweredForm } from "./HearingContainer";
import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { TChartCreateRequest } from "../../api/charts/TChartCreateRequest";

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
  readonly setFirstAnsweredHearings: React.Dispatch<
    React.SetStateAction<AnsweredHearings>
  >;
  readonly setIsBackTransition: React.Dispatch<React.SetStateAction<boolean>>;
  readonly isBackTransition: boolean;
  readonly isPostLoading: boolean;
  readonly mutate: UseMutateFunction<
    AxiosResponse<any, any>,
    unknown,
    TChartCreateRequest,
    unknown
  >;
};

export const FirstHearingContainer = ({
  member,
  setNextFormId,
  setCurrentAnswerNumber,
  setFirstAnsweredHearings,
  setSecondAnsweredHearings,
  setIsBackTransition,
  firstAnsweredHearings,
  secondAnsweredHearings,
  nextFormId,
  isPostLoading,
  currentAnswerNumber,
  isBackTransition,
  mutate,
}: TProps) => {
  const {
    handleClickFirstNext,
    handleClickPremiumNext,
    handleCancelPremiumNext,
    handleSubmitForm,
    handleCancelForm,
    formattedConfirmAnswers,
    handleClickReset,
    handleSubmitComplete,
  } = getFirstHearingContainerHandler({
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
