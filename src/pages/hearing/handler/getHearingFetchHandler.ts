import { THearingFormShowResponse } from "../../../api/hearingForms/THearingFormShowResponse";
import { TOption } from "../../../api/hearingForms/TOption";
import {
  ESPECIALLY_CATEGORY,
  HEARING_FORM,
} from "../../../models/hearing/THearingForms";
import { AnsweredHearing } from "../HearingFetcher";

type THearingFetchHandler = {
  readonly handleClickFirstNext: () => void;
  readonly handleSubmitForm: (
    answer: AnsweredHearing,
    nextFormIdArg: number | null
  ) => void;
  readonly handleCancelForm: () => void;
  readonly formattedResponseData: (
    hearingFormData: THearingFormShowResponse
  ) => THearingFormShowResponse;
  readonly handleSkipForm: (formId: number, option: TOption) => void;
};

type TArgs = {
  readonly nextFormId: number | null;
  readonly firstAnsweredHearings: AnsweredHearing[];
  readonly secondAnsweredHearings: AnsweredHearing[];
  readonly currentAnswerNumber: number;
  readonly setNextFormId: React.Dispatch<React.SetStateAction<number | null>>;
  readonly setFirstAnsweredHearings: React.Dispatch<
    React.SetStateAction<AnsweredHearing[]>
  >;
  readonly setSecondAnsweredHearings: React.Dispatch<
    React.SetStateAction<AnsweredHearing[]>
  >;
  readonly setCurrentAnswerNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const getHearingFetchHandler = ({
  nextFormId,
  firstAnsweredHearings,
  secondAnsweredHearings,
  currentAnswerNumber,
  setNextFormId,
  setFirstAnsweredHearings,
  setCurrentAnswerNumber,
  setSecondAnsweredHearings,
}: TArgs): THearingFetchHandler => {
  const handleClickFirstNext = () => {
    setNextFormId(HEARING_FORM.FIRST);
  };
  const handleSubmitForm = (
    answer: AnsweredHearing,
    nextFormIdArg: number | null
  ) => {
    if (currentAnswerNumber === 1) {
      setFirstAnsweredHearings([...firstAnsweredHearings, answer]);
    } else {
      setSecondAnsweredHearings([...secondAnsweredHearings, answer]);
    }
    setNextFormId(nextFormIdArg);
  };

  // 答えの配列の最後を削除する
  const handleCancelForm = () => {
    if (currentAnswerNumber === 1) {
      const newAnswers = firstAnsweredHearings.slice(0, -1);
      setFirstAnsweredHearings(newAnswers);
      setNextFormId(firstAnsweredHearings.slice(-1)[0]?.id ?? null);
    } else {
      const newAnswers = secondAnsweredHearings.slice(0, -1);
      setSecondAnsweredHearings(newAnswers);
      setNextFormId(secondAnsweredHearings.slice(-1)[0]?.id ?? null);
    }
  };

  // 複数選択した後に1つ選択するものはレスポンスを整形してフォームに渡す
  const formattedResponseData = (
    hearingFormData: THearingFormShowResponse
  ): THearingFormShowResponse => {
    if (
      !Object.values(ESPECIALLY_CATEGORY).some(
        (c) => c === hearingFormData.categoryId
      )
    )
      return hearingFormData;
    const optionIds =
      currentAnswerNumber === 1
        ? firstAnsweredHearings.slice(-1)[0].options.map((o) => o.id)
        : secondAnsweredHearings.slice(-1)[0].options.map((o) => o.id);
    const options = hearingFormData.options.filter((o) =>
      optionIds.includes(o.id)
    );

    return { ...hearingFormData, options };
  };

  // スキップメソッド
  const handleSkipForm = (formId: number, option: TOption) => {
    setNextFormId(option.nextFormId);
    const answer = {
      id: formId,
      options: [{ id: option.id }],
    };
    if (currentAnswerNumber === 1) {
      setFirstAnsweredHearings([...firstAnsweredHearings, answer]);
    } else {
      setSecondAnsweredHearings([...secondAnsweredHearings, answer]);
    }
  };

  return {
    handleClickFirstNext,
    handleSubmitForm,
    handleCancelForm,
    formattedResponseData,
    handleSkipForm,
  };
};
