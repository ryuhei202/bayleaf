import { TOptionParams } from "../../../api/charts/TOptionParams";
import { THearingFormShowResponse } from "../../../api/hearingForms/THearingFormShowResponse";
import { TOption } from "../../../api/hearingForms/TOption";
import {
  ESPECIALLY_CATEGORY,
  HEARING_FORM,
  SKIP_ANSWER_FORM,
} from "../../../models/hearing/THearingForms";
import { AnsweredHearing } from "../HearingFetcher";

type THearingFetchHandler = {
  readonly handleClickFirstNext: () => void;
  readonly handleClickPremiumNext: () => void;
  readonly handleCancelPremiumNext: () => void;
  readonly handleSubmitForm: (
    answer: AnsweredHearing,
    nextFormIdArg: number | null
  ) => void;
  readonly handleCancelForm: () => void;
  readonly formattedResponseData: (
    hearingFormData: THearingFormShowResponse
  ) => THearingFormShowResponse;
  readonly handleSkipForm: (formId: number, option: TOption) => void;
  readonly getBeforeAnswerText: (
    hearingFormData: THearingFormShowResponse
  ) => TOptionParams[] | undefined;
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
  readonly setCurrentAnswerNumber: React.Dispatch<React.SetStateAction<1 | 2>>;
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

  const handleClickPremiumNext = () => {
    setCurrentAnswerNumber(2);
    setNextFormId(HEARING_FORM.FIRST);
  };

  const handleCancelPremiumNext = () => {
    setSecondAnsweredHearings([]);
    setCurrentAnswerNumber(1);
    removeLastAnswer(firstAnsweredHearings, 1);
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

  // 各フォームの戻るボタンをクリック
  const handleCancelForm = () => {
    if (currentAnswerNumber === 1) {
      removeLastAnswer(firstAnsweredHearings, 1);
    } else {
      removeLastAnswer(secondAnsweredHearings, 2);
    }
  };

  // 答えの配列の最後を削除する
  const removeLastAnswer = (
    answeredHearings: AnsweredHearing[],
    answerNum: number
  ) => {
    let newAnswers = answeredHearings.slice(0, -1);
    let lastAnswerId = getLastAnswerId(answeredHearings);
    if (isSkip(lastAnswerId)) {
      lastAnswerId = getLastAnswerId(newAnswers);
      newAnswers = newAnswers.slice(0, -1);
    }
    if (answerNum === 1) {
      setFirstAnsweredHearings(newAnswers);
    } else {
      setSecondAnsweredHearings(newAnswers);
    }
    setNextFormId(lastAnswerId ?? null);
  };

  // 複数選択した後に1つ選択するものはレスポンスを整形してフォームに渡す
  const formattedResponseData = (
    hearingFormData: THearingFormShowResponse
  ): THearingFormShowResponse => {
    if (!isEspeciallyCategory(hearingFormData.categoryId)) {
      return hearingFormData;
    }
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

  // その他のテキストを次のフォームに渡すためのメソッド
  const getBeforeAnswerText = (
    hearingFormData: THearingFormShowResponse
  ): TOptionParams[] | undefined => {
    if (!isEspeciallyCategory(hearingFormData.categoryId)) return undefined;
    if (currentAnswerNumber === 1) {
      return firstAnsweredHearings
        .slice(-1)[0]
        .options.filter((o) => isNotUndefinedtext(o));
    } else {
      return secondAnsweredHearings
        .slice(-1)[0]
        .options.filter((o) => isNotUndefinedtext(o));
    }
  };

  const isNotUndefinedtext = (
    option: any
  ): option is Required<TOptionParams> => {
    return option.text !== undefined;
  };

  const isSkip = (lastAnswerId?: number): boolean => {
    return Object.values(SKIP_ANSWER_FORM).some((f) => f === lastAnswerId);
  };

  const isEspeciallyCategory = (categoryId: number): boolean => {
    return Object.values(ESPECIALLY_CATEGORY).some((c) => c === categoryId);
  };

  const getLastAnswerId = (
    answeredHearing: AnsweredHearing[]
  ): number | undefined => {
    return answeredHearing.slice(-1)[0]?.id;
  };

  return {
    handleClickFirstNext,
    handleClickPremiumNext,
    handleCancelPremiumNext,
    handleSubmitForm,
    handleCancelForm,
    formattedResponseData,
    handleSkipForm,
    getBeforeAnswerText,
  };
};
