import liff from "@line/liff/dist/lib";
import { TChartCreateRequest } from "../../../api/charts/TChartCreateRequest";
import { useChartCreate } from "../../../api/charts/useChartCreate";
import { TOption } from "../../../api/hearingForms/TOption";
import { THearingAnswer } from "../../../models/hearing/THearingAnswer";
import { THearingConfirm } from "../../../models/hearing/THearingConfirm";
import {
  HEARING_FORM,
  SKIP_ANSWER_FORM,
} from "../../../models/hearing/THearingForms";
import { AnsweredHearing } from "../HearingFormFetcher";

type THearingFetchHandler = {
  readonly handleClickFirstNext: () => void;
  readonly handleClickPremiumNext: () => void;
  readonly handleCancelPremiumNext: () => void;
  readonly handleSubmitForm: (
    answer: AnsweredHearing,
    nextFormIdArg: number | null
  ) => void;
  readonly handleCancelForm: () => void;
  readonly handleSkipForm: ({
    formId,
    title,
    option,
    categoryName,
  }: {
    formId: number;
    title: string;
    option: TOption;
    categoryName: string;
  }) => void;
  readonly formattedConfirmAnswers: () => THearingAnswer[];
  readonly handleClickReset: () => void;
  readonly handleSubmitComplete: () => void;
  readonly isPostLoading: boolean;
  readonly isPostSuccess: boolean;
};

type TArgs = {
  readonly memberId: number;
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

export const useHearingContainerHandler = ({
  memberId,
  firstAnsweredHearings,
  secondAnsweredHearings,
  currentAnswerNumber,
  setNextFormId,
  setFirstAnsweredHearings,
  setCurrentAnswerNumber,
  setSecondAnsweredHearings,
}: TArgs): THearingFetchHandler => {
  const {
    mutate,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
  } = useChartCreate();
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

  // スキップメソッド
  const handleSkipForm = ({
    formId,
    title,
    option,
    categoryName,
  }: {
    formId: number;
    title: string;
    option: TOption;
    categoryName: string;
  }) => {
    setNextFormId(option.nextFormId);
    const answer = {
      id: formId,
      title,
      options: [{ id: option.id, name: option.name }],
      categoryName,
    };
    if (currentAnswerNumber === 1) {
      setFirstAnsweredHearings([...firstAnsweredHearings, answer]);
    } else {
      setSecondAnsweredHearings([...secondAnsweredHearings, answer]);
    }
  };

  // 確認画面へ渡すために答えた情報を整形する
  const formattedConfirmAnswers = (): THearingAnswer[] => {
    const formattedAnswer = [firstAnsweredHearings, secondAnsweredHearings]
      .filter((h) => h.length !== 0)
      .map((answers) => {
        return {
          answer: answers.reduce((answer: THearingConfirm[], value) => {
            let someCategory = answer.find(
              (h) => h.categoryName === value.categoryName
            );
            if (someCategory) {
              someCategory.forms.push({
                title: value.title,
                optionName: value.options.map((o) => o.name),
              });
            } else {
              answer.push({
                categoryName: value.categoryName,
                forms: [
                  {
                    title: value.title,
                    optionName: value.options.map((o) => o.name),
                  },
                ],
              });
            }
            return answer;
          }, []),
        };
      });
    return formattedAnswer;
  };

  const handleClickReset = () => {
    setNextFormId(null);
    setCurrentAnswerNumber(1);
    setFirstAnsweredHearings([]);
    setSecondAnsweredHearings([]);
  };

  const handleSubmitComplete = () => {
    const hearings = [firstAnsweredHearings, secondAnsweredHearings]
      .filter((f) => f.length !== 0)
      .map((hearings) => {
        return {
          forms: hearings.map((hearing) => {
            return {
              id: hearing.id,
              options: hearing.options.map((o) => {
                return { id: o.id, text: o.text };
              }),
            };
          }),
        };
      });
    const params: TChartCreateRequest = {
      memberId,
      hearings,
    };
    mutate(params, {
      onSuccess: () => {
        liff.closeWindow();
      },
    });
  };
  const isSkip = (lastAnswerId?: number): boolean => {
    return Object.values(SKIP_ANSWER_FORM).some((f) => f === lastAnswerId);
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
    handleSkipForm,
    formattedConfirmAnswers,
    handleClickReset,
    handleSubmitComplete,
    isPostLoading,
    isPostSuccess,
  };
};
