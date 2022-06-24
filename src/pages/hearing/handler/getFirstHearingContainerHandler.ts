import { HEARING_FORM } from "../../../models/hearing/THearingForms";
import { AnsweredHearing } from "../HearingContainer";

type THearingContainerHandler = {
  readonly handleClickFirstNext: () => void;
  readonly handleClickPremiumNext: () => void;
  readonly handleCancelPremiumNext: () => void;
};

type TArgs = {
  readonly secondAnsweredHearings: AnsweredHearing[];
  readonly setNextFormId: React.Dispatch<React.SetStateAction<number | null>>;
  readonly setSecondAnsweredHearings: React.Dispatch<
    React.SetStateAction<AnsweredHearing[]>
  >;
  readonly setCurrentAnswerNumber: React.Dispatch<React.SetStateAction<1 | 2>>;
  readonly firstAnsweredHearings: AnsweredHearing[];
  readonly removeLastAnswer: (
    answeredHearings: AnsweredHearing[],
    answerNum: number
  ) => void;
};

export const FirstHearingContainerHandler = ({
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
    setSecondAnsweredHearings([]);
    setCurrentAnswerNumber(1);
    removeLastAnswer(firstAnsweredHearings, 1);
  };

  return {
    handleClickFirstNext,
    handleClickPremiumNext,
    handleCancelPremiumNext,
  };
};
