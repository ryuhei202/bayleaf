import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { Button } from "../../components/baseParts/Button";
import { HearingAnswerConfirm } from "../../components/hearing/HearingAnswerConfirm";
import { THearingAnswer } from "../../models/hearing/THearingAnswer";
import { AnsweredHearings } from "./HearingContainer";
import { HearingFormFetcher } from "./HearingFormFetcher";

type TProps = {
  readonly handleSubmitForm: () => void;
  readonly handleCancelForm: () => void;
  readonly handleTransitionSleeveForm: () => void;
  readonly handleClickStart: () => void;
  readonly confirmAnswers: THearingAnswer[];
  readonly nextFormId: number | null;
  readonly currentAnswerNumber: 1 | 2;
  readonly firstAnsweredHearings: AnsweredHearings;
  readonly secondAnsweredHearings: AnsweredHearings;
  readonly isBackTransition: boolean;
  readonly member: TMembersIndexResponse;
};

export const HearingFlowContainer = ({
  handleSubmitForm,
  handleCancelForm,
  handleTransitionSleeveForm,
  handleClickStart,
  confirmAnswers,
  nextFormId,
  currentAnswerNumber,
  firstAnsweredHearings,
  secondAnsweredHearings,
  isBackTransition,
  member,
}: TProps) => {
  if (nextFormId === null || firstAnsweredHearings.forms.length <= 0) {
    return (
      <HearingAnswerConfirm
        title="前回のコーデ"
        confirmAnswers={confirmAnswers}
        footer={
          <>
            <Button
              variant="primary"
              onClick={handleTransitionSleeveForm}
              border={true}
            >
              前回と同じ内容でコーデを作る
            </Button>
            <Button
              onClick={handleClickStart}
              variant="default"
              disableElevation
              border
            >
              ヒアリングを開始する
            </Button>
          </>
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
