import liff from "@line/liff";
import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { TChartCreateForPlanRequest } from "../../../api/charts/TChartCreateForPlanRequest";
import { TCategorizedForm } from "../../../api/hearings/TCategorizedForm";
import { THearingAnswer } from "../../../models/hearing/THearingAnswer";
import { HEARING_FORM } from "../../../models/hearing/THearingForms";
import { AnsweredHearings, TAnsweredForm } from "../HearingContainer";
import { sortHearingConfirm } from "./../../../models/hearing/THearingForms";

type THearingContainerHandler = {
  readonly handleClickFirstNext: () => void;
  readonly handleClickPremiumNext: () => void;
  readonly handleCancelPremiumNext: () => void;
  readonly handleSubmitForm: (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => void;
  readonly handleCancelForm: () => void;
  readonly formattedConfirmAnswers: () => THearingAnswer[];
  readonly handleSubmitComplete: () => void;
  readonly removeLastAnswer: (
    answeredHearings: TAnsweredForm[],
    answerNum: number
  ) => void;
};

type TArgs = {
  readonly memberId: number;
  readonly firstAnsweredHearings: AnsweredHearings;
  readonly secondAnsweredHearings: AnsweredHearings;
  readonly currentAnswerNumber: number;
  readonly isSelectableBRank?: boolean;
  readonly setNextFormId: React.Dispatch<React.SetStateAction<number | null>>;
  readonly setFirstAnsweredHearings: React.Dispatch<
    React.SetStateAction<AnsweredHearings>
  >;
  readonly setSecondAnsweredHearings: React.Dispatch<
    React.SetStateAction<AnsweredHearings>
  >;
  readonly setCurrentAnswerNumber: React.Dispatch<React.SetStateAction<1 | 2>>;
  readonly setIsBackTransition: React.Dispatch<React.SetStateAction<boolean>>;
  readonly mutate: UseMutateFunction<
    void | AxiosResponse,
    unknown,
    TChartCreateForPlanRequest,
    unknown
  >;
};

export const getNewHearingContainerHandler = ({
  memberId,
  secondAnsweredHearings,
  currentAnswerNumber,
  isSelectableBRank,
  setNextFormId,
  setCurrentAnswerNumber,
  setFirstAnsweredHearings,
  setSecondAnsweredHearings,
  setIsBackTransition,
  firstAnsweredHearings,
  mutate,
}: TArgs): THearingContainerHandler => {
  const handleClickFirstNext = () => {
    setNextFormId(HEARING_FORM.FIRST);
    setIsBackTransition(false);
  };

  const handleClickPremiumNext = () => {
    setCurrentAnswerNumber(2);
    setNextFormId(HEARING_FORM.FIRST);
    setIsBackTransition(false);
  };

  const handleCancelPremiumNext = () => {
    setSecondAnsweredHearings({ forms: [] });
    setCurrentAnswerNumber(1);
    removeLastAnswer(firstAnsweredHearings.forms, 1);
  };

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
              sortHearingConfirm(answer, value);
            }
            return answer;
          }, []),
        };
      });
    return formattedAnswer;
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
    const params: TChartCreateForPlanRequest = {
      memberId,
      hearings,
      isSelectableBRank: isSelectableBRank!,
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
    handleClickFirstNext,
    handleClickPremiumNext,
    handleCancelPremiumNext,
    handleSubmitForm,
    handleCancelForm,
    removeLastAnswer,
    formattedConfirmAnswers,
    handleSubmitComplete,
  };
};
