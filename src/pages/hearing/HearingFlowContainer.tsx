import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { Button } from "../../components/baseParts/Button";
import { HearingAnswerConfirm } from "../../components/hearing/HearingAnswerConfirm";
import { THearingAnswer } from "../../models/hearing/THearingAnswer";
import { AnsweredHearings, TAnsweredForm } from "./HearingContainer";
import { HearingFormFetcher } from "./HearingFormFetcher";

type TProps = {
  readonly onSubmitForm: (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => void;
  readonly onCancelForm: () => void;
  readonly onClickComplete: () => void;
  readonly onClickStart: () => void;
  readonly confirmAnswers: THearingAnswer[];
  readonly answeredHearings: AnsweredHearings;
  readonly nextFormId: number | null;
  readonly isBackTransition: boolean;
  readonly member: TMembersIndexResponse;
};

export const HearingFlowContainer = ({
  onSubmitForm,
  onCancelForm,
  onClickStart,
  onClickComplete,
  confirmAnswers,
  answeredHearings,
  nextFormId,
  isBackTransition,
  member,
}: TProps) => {
  if (nextFormId === null || answeredHearings.forms.length <= 0) {
    return (
      <HearingAnswerConfirm
        title="前回のコーデ"
        confirmAnswers={confirmAnswers}
        footer={
          <>
            <Button variant="primary" onClick={onClickComplete} border={true}>
              前回と同じ内容でコーデを作る
            </Button>
            <Button
              onClick={onClickStart}
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
      onSubmitForm={onSubmitForm}
      onCancelForm={onCancelForm}
      nextFormId={nextFormId}
      previousAnsweredHearing={answeredHearings.forms.slice(-1)[0]}
      isBackTransition={isBackTransition}
      member={member}
    />
  );
};
