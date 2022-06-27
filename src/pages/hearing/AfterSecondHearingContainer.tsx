import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { TChartCreateRequest } from "../../api/charts/TChartCreateRequest";
import { THearing } from "../../api/hearings/THearing";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { HearingAnswerConfirm } from "../../components/hearing/HearingAnswerConfirm";
import { PremiumPlanConfirm } from "../../components/hearing/PremiumPlanConfirm";
import { FirstHearingConfirmButtons } from "./FirstHearingConfirmButtons";
import { getAfterSecondHearingContainerHandler } from "./handler/getAfterSecondHearingContainerHandler";
import { AnsweredHearings } from "./HearingContainer";
import { HearingFlowContainer } from "./HearingFlowContainer";

type TProps = {
  readonly hearings: THearing[];
  readonly member: TMembersIndexResponse;
  readonly nextFormId: number | null;
  readonly setNextFormId: React.Dispatch<React.SetStateAction<number | null>>;
  readonly currentAnswerNumber: 1 | 2;
  readonly setCurrentAnswerNumber: React.Dispatch<React.SetStateAction<1 | 2>>;
  readonly firstAnsweredHearings: AnsweredHearings;
  readonly setFirstAnsweredHearings: React.Dispatch<
    React.SetStateAction<AnsweredHearings>
  >;
  readonly secondAnsweredHearings: AnsweredHearings;
  readonly setSecondAnsweredHearings: React.Dispatch<
    React.SetStateAction<AnsweredHearings>
  >;
  readonly isBackTransition: boolean;
  readonly isPostLoading: boolean;
  readonly setIsBackTransition: React.Dispatch<React.SetStateAction<boolean>>;
  readonly mutate: UseMutateFunction<
    AxiosResponse<any, any>,
    unknown,
    TChartCreateRequest,
    unknown
  >;
};

export const AfterSecondHearingContainer = ({
  hearings,
  member,
  nextFormId,
  setNextFormId,
  currentAnswerNumber,
  setCurrentAnswerNumber,
  firstAnsweredHearings,
  setFirstAnsweredHearings,
  secondAnsweredHearings,
  setSecondAnsweredHearings,
  isBackTransition,
  setIsBackTransition,
  isPostLoading,
  mutate,
}: TProps) => {
  const {
    handleSubmitForm,
    handleClickPremiumNext,
    handleCancelPremiumNext,
    getAnsweredHearings,
    handleCancelForm,
    handleClickStart,
    getPreviousAnswers,
    handleClickReset,
    handleClickBack,
    handlePost,
    getConfirmAnswers,
    handleClickSameHearing,
    shouldPremiumConfirmPage,
    isAnsweredAll,
  } = getAfterSecondHearingContainerHandler({
    member,
    hearings,
    currentAnswerNumber,
    firstAnsweredHearings,
    secondAnsweredHearings,
    setNextFormId,
    setFirstAnsweredHearings,
    setSecondAnsweredHearings,
    setIsBackTransition,
    setCurrentAnswerNumber,
    mutate,
  });

  if (shouldPremiumConfirmPage()) {
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
      onClickStart={handleClickStart}
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
