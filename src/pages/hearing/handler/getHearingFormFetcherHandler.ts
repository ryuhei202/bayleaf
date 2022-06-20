import { TOptionParams } from "../../../api/charts/TOptionParams";
import { THearingFormShowResponse } from "../../../api/hearingForms/THearingFormShowResponse";
import { AnsweredHearing } from "../HearingContainer";

type TArgs = {
  readonly previousAnsweredHearing?: AnsweredHearing;
};

type THearingFormFetcherHandler = {
  readonly formattedResponseData: (
    hearingFormData: THearingFormShowResponse
  ) => THearingFormShowResponse;
  readonly getBeforeAnswerText: () => TOptionParams[] | undefined;
  readonly isEspeciallyCategory: boolean;
};

export const getHearingFormFetcherHandler = ({
  previousAnsweredHearing,
}: TArgs): THearingFormFetcherHandler => {
  // 複数選択した後に1つ選択するものはレスポンスを整形してフォームに渡す
  const formattedResponseData = (
    hearingFormData: THearingFormShowResponse
  ): THearingFormShowResponse => {
    if (!(previousAnsweredHearing && isEspeciallyCategory)) {
      return hearingFormData;
    }
    const optionIds = previousAnsweredHearing.options.map((o) => o.id);
    const options = hearingFormData.options.filter((o) =>
      optionIds.includes(o.id)
    );

    return { ...hearingFormData, options };
  };

  // その他のテキストを次のフォームに渡すためのメソッド
  const getBeforeAnswerText = (): TOptionParams[] | undefined => {
    if (!(previousAnsweredHearing && isEspeciallyCategory)) return undefined;
    return previousAnsweredHearing.options.filter((o) => isNotUndefinedText(o));
  };

  const isNotUndefinedText = (
    option: any
  ): option is Required<TOptionParams> => {
    return option.text !== undefined;
  };

  const isEspeciallyCategory: boolean =
    previousAnsweredHearing !== undefined &&
    previousAnsweredHearing.options.length > 1;

  return {
    formattedResponseData,
    getBeforeAnswerText,
    isEspeciallyCategory,
  };
};
