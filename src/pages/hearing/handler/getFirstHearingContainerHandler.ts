import { HEARING_FORM } from "../../../models/hearing/THearingForms";
import { AnsweredHearings, TAnsweredForm } from "../HearingContainer";

type THearingContainerHandler = {
  readonly handleClickFirstNext: () => void;
  readonly handleClickPremiumNext: () => void;
  readonly handleCancelPremiumNext: () => void;
};

type TArgs = {
  readonly setNextFormId: React.Dispatch<React.SetStateAction<number | null>>;
  readonly setSecondAnsweredHearings: React.Dispatch<
    React.SetStateAction<AnsweredHearings>
  >;
  readonly setCurrentAnswerNumber: React.Dispatch<React.SetStateAction<1 | 2>>;
  readonly firstAnsweredHearings: AnsweredHearings;
  readonly removeLastAnswer: (
    answeredHearings: TAnsweredForm[],
    answerNum: number
  ) => void;
};

export const getFirstHearingContainerHandler = ({
  setNextFormId,
  setCurrentAnswerNumber,
  setSecondAnsweredHearings,
  firstAnsweredHearings,
  removeLastAnswer,
}: TArgs): THearingContainerHandler => {
  const handleClickFirstNext = () => {
    setNextFormId(HEARING_FORM.FIRST);
  };

  const handleClickPremiumNext = () => {
    setCurrentAnswerNumber(2);
    setNextFormId(HEARING_FORM.FIRST);
  };

  const handleCancelPremiumNext = () => {
    setSecondAnsweredHearings({ forms: [] });
    setCurrentAnswerNumber(1);
    removeLastAnswer(firstAnsweredHearings.forms, 1);
  };

  return {
    handleClickFirstNext,
    handleClickPremiumNext,
    handleCancelPremiumNext,
  };
};
