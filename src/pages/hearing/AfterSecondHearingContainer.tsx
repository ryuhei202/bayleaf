import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { TChartCreateRequest } from "../../api/charts/TChartCreateRequest";
import { THearing } from "../../api/hearings/THearing";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { HearingAnswerConfirm } from "../../components/hearing/HearingAnswerConfirm";
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
    getAnsweredHearings,
    handleCancelForm,
    handleClickStart,
    getPreviousAnswers,
    handleClickReset,
    handlePost,
    getConfirmAnswers,
  } = getAfterSecondHearingContainerHandler({
    hearings,
    currentAnswerNumber,
    firstAnsweredHearings,
    secondAnsweredHearings,
    setNextFormId,
    setFirstAnsweredHearings,
    setSecondAnsweredHearings,
    setIsBackTransition,
    setCurrentAnswerNumber,
  });

  if (
    !!firstAnsweredHearings.sameCoordinateId ||
    firstAnsweredHearings.forms.length <= 0
  ) {
    return (
      <HearingFlowContainer
        onSubmitForm={handleSubmitForm}
        onCancelForm={handleCancelForm}
        onClickStart={handleClickStart}
        onClickComplete={handlePost}
        confirmAnswers={getPreviousAnswers()}
        nextFormId={nextFormId}
        answeredHearings={getAnsweredHearings()}
        isBackTransition={isBackTransition}
        member={member}
      />
    );
  }

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
};
