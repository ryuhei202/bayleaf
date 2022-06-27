import { useState } from "react";
import { Button } from "semantic-ui-react";
import { THearing } from "../../api/hearings/THearing";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { HearingAnswerConfirm } from "../../components/hearing/HearingAnswerConfirm";
import { THearingAnswer } from "../../models/hearing/THearingAnswer";
import {
  HEARING_STATUS,
  THearingStatus,
} from "../../models/hearing/THearingStatus";
import { FirstHearingConfirmButtons } from "./FirstHearingConfirmButtons";
import { getAfterSecondHearingContainerHandler } from "./handler/getAfterSecondHearingContainerHandler";
import { AnsweredHearings, TAnsweredForm } from "./HearingContainer";
import { HearingFlowContainer } from "./HearingFlowContainer";
import { HearingFormFetcher } from "./HearingFormFetcher";

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
  readonly setIsBackTransition: React.Dispatch<React.SetStateAction<boolean>>;
  readonly handleSubmitForm: (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => void;
  readonly handleCancelForm: () => void;
  readonly formattedConfirmAnswers: () => THearingAnswer[];
  readonly handleClickReset: () => void;
  readonly handleSubmitComplete: () => void;
  readonly isPostLoading: boolean;
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
  handleSubmitForm,
  handleCancelForm,
  formattedConfirmAnswers,
  handleClickReset,
  handleSubmitComplete,
  isPostLoading,
}: TProps) => {
  const [sameCoordinateIds, setSameCoordinateIds] = useState<number[]>([]);
  const [hearingStatus, setHearingStatus] = useState<THearingStatus>(
    HEARING_STATUS.FIRST
  );

  // const {
  //   formattedPrivousHearing,
  //   handleTransitionSleeveForm,
  //   handleClickStart,
  // } = getAfterSecondHearingContainerHandler({ hearings });

  if (firstAnsweredHearings.forms.length > 0) {
    return (
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
    // <HearingFlowContainer
    //   handleSubmitForm={handleSubmitForm}
    //   handleCancelForm={handleCancelForm}
    //   handleTransitionSleeveForm={handleTransitionSleeveForm}
    //   handleClickStart={handleClickStart}
    //   confirmAnswers={confirmAnswers}
    //   nextFormId={nextFormId}
    //   currentAnswerNumber={currentAnswerNumber}
    //   firstAnsweredHearings={firstAnsweredHearings}
    //   secondAnsweredHearings={secondAnsweredHearings}
    //   isBackTransition={isBackTransition}
    //   member={member}
    // />
    <></>
  );
};
