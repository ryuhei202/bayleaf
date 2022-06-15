import { Loader } from "semantic-ui-react";
import { TOption } from "../../api/hearingForms/TOption";
import { useHearingFormsShow } from "../../api/hearingForms/useHearingFormsShow";
import { MultipleSelectForm } from "../../components/hearing/MultipleSelectForm";
import { SingleSelectForm } from "../../components/hearing/SingleSelectForm";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { getHearingFormFetcherHandler } from "./handler/getHearingFormFetcherHandler";

type TProps = {
  readonly onSubmitForm: (
    answer: AnsweredHearing,
    nextFormIdArg: number | null
  ) => void;
  readonly onCancelForm: () => void;
  readonly onSkip: ({
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
  readonly nextFormId: number;
  readonly firstAnsweredHearings: AnsweredHearing[];
  readonly secondAnsweredHearings: AnsweredHearing[];
  readonly currentAnswerNumber: 1 | 2;
};

export type AnsweredHearing = {
  readonly id: number;
  readonly title: string;
  readonly categoryName: string;
  readonly options: {
    id: number;
    text?: string;
    name: string;
  }[];
};

export const HearingFormFetcher = ({
  onSubmitForm,
  onCancelForm,
  onSkip,
  nextFormId,
  firstAnsweredHearings,
  secondAnsweredHearings,
  currentAnswerNumber,
}: TProps) => {
  const { data: hearingFormData, error: hearingFormError } =
    useHearingFormsShow({ hearingFormId: nextFormId });

  const { formattedResponseData, getBeforeAnswerText } =
    getHearingFormFetcherHandler({
      firstAnsweredHearings,
      secondAnsweredHearings,
      currentAnswerNumber,
    });

  if (hearingFormError) {
    return <ErrorMessage message={hearingFormError.message} />;
  }

  if (!hearingFormData) return <Loader active />;

  // スキップ処理
  if (hearingFormData.options.length === 1) {
    onSkip({
      formId: hearingFormData.id,
      title: hearingFormData.title,
      option: hearingFormData.options[0],
      categoryName: hearingFormData.categoryName,
    });
  }

  if (hearingFormData.multipleAnswerNextFormId !== null) {
    return (
      <MultipleSelectForm
        response={hearingFormData}
        onSubmit={onSubmitForm}
        onCancel={onCancelForm}
      />
    );
  }

  return (
    <SingleSelectForm
      response={formattedResponseData(hearingFormData)}
      onSubmit={onSubmitForm}
      onCancel={onCancelForm}
      beforeAnswerText={getBeforeAnswerText(hearingFormData)}
    />
  );
};
