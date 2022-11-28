import { Loader } from "semantic-ui-react";
import { useHearingFormsShow } from "../../api/hearingForms/useHearingFormsShow";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { MultipleSelectForm } from "../../components/pageParts/hearing/MultipleSelectForm";
import { SingleSelectForm } from "../../components/pageParts/hearing/SingleSelectForm";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { getHearingFormFetcherHandler } from "./handler/getHearingFormFetcherHandler";
import { TAnsweredForm } from "./HearingContainer";

type TProps = {
  readonly onSubmitForm: (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => void;
  readonly onCancelForm: () => void;
  readonly nextFormId: number;
  readonly previousAnsweredHearing?: TAnsweredForm;
  readonly isBackTransition?: boolean;
  readonly member: TMembersIndexResponse;
};

export const HearingFormFetcher = ({
  onSubmitForm,
  onCancelForm,
  nextFormId,
  previousAnsweredHearing,
  isBackTransition,
  member,
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
            categoryId: hearingFormData.categoryId,
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

  if (hearingFormData.options.some((o) => !o.isSingleAnswer)) {
    return (
      <MultipleSelectForm
        response={hearingFormData}
        onSubmit={onSubmitForm}
        onCancel={onCancelForm}
        memberId={member.id}
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
      memberId={member.id}
    />
  );
};
