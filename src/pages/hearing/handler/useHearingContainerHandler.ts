import { AnsweredHearings, TAnsweredForm } from "./../HearingContainer";
import liff from "@line/liff/dist/lib";
import { TChartCreateRequest } from "../../../api/charts/TChartCreateRequest";
import { useChartCreate } from "../../../api/charts/useChartCreate";
import { TCategorizedForm } from "../../../api/hearings/TCategorizedForm";
import { THearingAnswer } from "../../../models/hearing/THearingAnswer";

type THearingContainerHandler = {
  readonly handleSubmitForm: (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => void;
  readonly handleCancelForm: () => void;
  readonly formattedConfirmAnswers: () => THearingAnswer[];
  readonly handleClickReset: () => void;
  readonly handleSubmitComplete: () => void;
  readonly removeLastAnswer: (
    answeredHearings: TAnsweredForm[],
    answerNum: number
  ) => void;
  readonly isPostLoading: boolean;
  readonly isPostSuccess: boolean;
  readonly isPostError: boolean;
};

type TArgs = {
  readonly memberId: number;
  readonly firstAnsweredHearings: AnsweredHearings;
  readonly secondAnsweredHearings: AnsweredHearings;
  readonly currentAnswerNumber: number;
  readonly setNextFormId: React.Dispatch<React.SetStateAction<number | null>>;
  readonly setFirstAnsweredHearings: React.Dispatch<
    React.SetStateAction<AnsweredHearings>
  >;
  readonly setSecondAnsweredHearings: React.Dispatch<
    React.SetStateAction<AnsweredHearings>
  >;
  readonly setCurrentAnswerNumber: React.Dispatch<React.SetStateAction<1 | 2>>;
  readonly setIsBackTransition: React.Dispatch<React.SetStateAction<boolean>>;
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
  setIsBackTransition,
}: TArgs): THearingContainerHandler => {
  const {
    mutate,
    isLoading: isPostLoading,
    isError: isPostError,
    isSuccess: isPostSuccess,
  } = useChartCreate();

  const handleSubmitForm = (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => {
    if (currentAnswerNumber === 1) {
      setFirstAnsweredHearings({
        forms: [...firstAnsweredHearings?.forms, answer],
      });
    } else {
      setSecondAnsweredHearings({
        forms: [...secondAnsweredHearings?.forms, answer],
      });
    }
    setNextFormId(nextFormIdArg);
    setIsBackTransition(false);
  };

  // 各フォームの戻るボタンをクリック
  const handleCancelForm = () => {
    if (currentAnswerNumber === 1) {
      removeLastAnswer(firstAnsweredHearings.forms, 1);
    } else {
      removeLastAnswer(secondAnsweredHearings.forms, 2);
    }
    setIsBackTransition(true);
  };

  // 答えの配列の最後を削除する
  const removeLastAnswer = (
    answeredHearings: TAnsweredForm[],
    answerNum: number
  ) => {
    let newAnswers = answeredHearings.slice(0, -1);
    let lastAnswerId = getLastAnswerId(answeredHearings);
    if (answerNum === 1) {
      setFirstAnsweredHearings({ forms: newAnswers });
    } else {
      setSecondAnsweredHearings({ forms: newAnswers });
    }
    setNextFormId(lastAnswerId ?? null);
  };

  // 確認画面へ渡すために答えた情報を整形する
  const formattedConfirmAnswers = (): THearingAnswer[] => {
    const formattedAnswer = [
      firstAnsweredHearings.forms,
      secondAnsweredHearings.forms,
    ]
      .filter((h) => h.length !== 0)
      .map((answers) => {
        return {
          answer: answers.reduce((answer: TCategorizedForm[], value) => {
            let someCategory = answer.find(
              (h) => h.categoryName === value.categoryName
            );
            if (someCategory) {
              someCategory.forms.push({
                title: value.title,
                options: value.options.map((o) => {
                  return {
                    name: o.name,
                    text: o.text ?? null,
                  };
                }),
              });
            } else {
              answer.push({
                categoryName: value.categoryName,
                forms: [
                  {
                    title: value.title,
                    options: value.options.map((o) => {
                      return {
                        name: o.name,
                        text: o.text ?? null,
                      };
                    }),
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
    setFirstAnsweredHearings({ forms: [] });
    setSecondAnsweredHearings({ forms: [] });
  };

  const handleSubmitComplete = () => {
    const hearings = [firstAnsweredHearings.forms, secondAnsweredHearings.forms]
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

  const getLastAnswerId = (
    answeredHearing: TAnsweredForm[]
  ): number | undefined => {
    return answeredHearing.slice(-1)[0]?.id;
  };

  return {
    handleSubmitForm,
    handleCancelForm,
    removeLastAnswer,
    formattedConfirmAnswers,
    handleClickReset,
    handleSubmitComplete,
    isPostLoading,
    isPostSuccess,
    isPostError,
  };
};
