import { Loader } from "semantic-ui-react";
import { useHearingFormsShow } from "../../api/hearingForms/useHearingFormsShow";
import { MultipleSelectForm } from "../../components/hearing/MultipleSelectForm";
import { SingleSelectForm } from "../../components/hearing/SingleSelectForm";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { getHearingFormFetcherHandler } from "./handler/getHearingFormFetcherHandler";
import { AnsweredHearing } from "./HearingContainer";

type TProps = {
  readonly onSubmitForm: (
    answer: AnsweredHearing,
    nextFormIdArg: number | null
  ) => void;
  readonly onCancelForm: () => void;
  readonly nextFormId: number;
  readonly previousAnsweredHearing?: AnsweredHearing;
  readonly isBackTransition?: boolean;
};

export const HearingFormFetcher = ({
  onSubmitForm,
  onCancelForm,
  nextFormId,
  previousAnsweredHearing,
  isBackTransition,
}: TProps) => {
  const { data: hearingFormData, error: hearingFormError } =
    useHearingFormsShow({ hearingFormId: nextFormId });

  const { formattedResponseData, getBeforeAnswerText, isEspeciallyCategory } =
    getHearingFormFetcherHandler({
      previousAnsweredHearing,
    });

  if (hearingFormError) {
    return <ErrorMessage message={hearingFormError.message} />;
  }

  if (!hearingFormData) return <Loader active />;

  // スキップ処理
  if (hearingFormData.options.length === 1) {
    isBackTransition
      ? onCancelForm()
      : onSubmitForm(
          {
            id: hearingFormData.id,
            title: hearingFormData.title,
            categoryName: hearingFormData.categoryName,
            options: [
              {
                id: hearingFormData.options[0].id,
                name: hearingFormData.options[0].name,
              },
            ],
          },
          hearingFormData.options[0].nextFormId
        );
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
      beforeAnswerText={getBeforeAnswerText()}
      isEspeciallyCategory={isEspeciallyCategory}
    />
  );
};
