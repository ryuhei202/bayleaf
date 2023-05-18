import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { TAnsweredForm } from "../hearing/HearingContainer";
import { HearingFormFetcher } from "../hearing/HearingFormFetcher";

type TProps = {
  readonly member: TMembersIndexResponse;
  readonly nextFormId: number;
  readonly previousAnsweredHearing: TAnsweredForm;
  readonly isBackTransition: boolean;
  readonly onSubmitForm: (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => void;
  readonly onCancelForm: () => void;
};

export const OneShotHearingContainer = ({
  member,
  nextFormId,
  previousAnsweredHearing,
  isBackTransition,
  onSubmitForm,
  onCancelForm,
}: TProps) => {
  const handleSubmitForm = (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => {
    onSubmitForm(answer, nextFormIdArg);
  };

  return (
    <HearingFormFetcher
      onSubmitForm={handleSubmitForm}
      onCancelForm={() => onCancelForm()}
      nextFormId={nextFormId}
      previousAnsweredHearing={previousAnsweredHearing}
      isBackTransition={isBackTransition}
      member={member}
    />
  );
};
