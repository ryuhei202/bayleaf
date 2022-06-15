import { TOptionParams } from "../../../api/charts/TOptionParams";
import { THearingFormShowResponse } from "../../../api/hearingForms/THearingFormShowResponse";
import { ESPECIALLY_CATEGORY } from "../../../models/hearing/THearingForms";
import { AnsweredHearing } from "../HearingFormFetcher";

type TArgs = {
  readonly firstAnsweredHearings: AnsweredHearing[];
  readonly secondAnsweredHearings: AnsweredHearing[];
  readonly currentAnswerNumber: 1 | 2;
};

type THearingFormFetcherHandler = {
  readonly formattedResponseData: (
    hearingFormData: THearingFormShowResponse
  ) => THearingFormShowResponse;
  readonly getBeforeAnswerText: (
    hearingFormData: THearingFormShowResponse
  ) => TOptionParams[] | undefined;
};

export const getHearingFormFetcherHandler = ({
  firstAnsweredHearings,
  secondAnsweredHearings,
  currentAnswerNumber,
}: TArgs): THearingFormFetcherHandler => {
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
  const isEspeciallyCategory = (categoryId: number): boolean => {
    return Object.values(ESPECIALLY_CATEGORY).some((c) => c === categoryId);
  };

  return {
    formattedResponseData,
    getBeforeAnswerText,
  };
};
