import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { Button } from "../../components/baseParts/legacy/Button";
import { HearingAnswerConfirm } from "../../components/pageParts/hearing/HearingAnswerConfirm";
import { THearingAnswer } from "../../models/hearing/THearingAnswer";
import { AnsweredHearings, TAnsweredForm } from "./HearingContainer";
import { HearingFormFetcher } from "./HearingFormFetcher";

type TProps = {
  readonly onSubmitForm: (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => void;
  readonly onCancelForm: () => void;
  readonly onClickSameHearing: () => void;
  readonly onClickStart: () => void;
  readonly onClickBack: () => void;
  readonly confirmAnswers: THearingAnswer[];
  readonly answeredHearings: AnsweredHearings;
  readonly nextFormId: number | null;
  readonly isBackTransition: boolean;
  readonly currentAnswerNumber: 1 | 2;
  readonly member: TMembersIndexResponse;
};

export const HearingFlowContainer = ({
  onSubmitForm,
  onCancelForm,
  onClickStart,
  onClickBack,
  onClickSameHearing,
  confirmAnswers,
  answeredHearings,
  nextFormId,
  isBackTransition,
  currentAnswerNumber,
  member,
}: TProps) => {
  if (nextFormId === null) {
    return (
      <HearingAnswerConfirm
        title="前回のヒアリング"
        confirmAnswers={confirmAnswers}
        coordinateNum={currentAnswerNumber}
        footer={
          <>
            <Button
              onClick={onClickStart}
              variant="primary"
              disableElevation
              border
            >
              ヒアリングを開始する
            </Button>
            <Button
              variant="default"
              onClick={onClickSameHearing}
              border={true}
            >
              前回と同じ内容でコーデを作る
            </Button>
            {currentAnswerNumber === 2 && (
              <Button variant="text" onClick={onClickBack}>
                前に戻る
              </Button>
            )}
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
