import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { HEARING_FORM } from "../../models/hearing/THearingForms";
import { TAnsweredForm } from "../hearing/HearingContainer";
import { HearingFormFetcher } from "../hearing/HearingFormFetcher";

type TProps = {
  readonly member: TMembersIndexResponse;
  readonly nextFormId: number;
  readonly previousAnsweredHearing: TAnsweredForm;
  readonly isBackTransition: boolean;
  readonly isAvoidFormAnswered: boolean;
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
  isAvoidFormAnswered,
  onSubmitForm,
  onCancelForm,
}: TProps) => {
  const handleSubmitForm = (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => {
    if (nextFormIdArg === null && !isAvoidFormAnswered) {
      onSubmitForm(answer, HEARING_FORM.AVOID_ITEM);
    } else {
      onSubmitForm(answer, nextFormIdArg);
    }
  };

  const handleCancelForm = () => {
    onCancelForm();
  };

  return (
    <HearingFormFetcher
      onSubmitForm={handleSubmitForm}
      onCancelForm={handleCancelForm}
      nextFormId={nextFormId}
      previousAnsweredHearing={previousAnsweredHearing}
      isBackTransition={isBackTransition}
      member={member}
    />
  );
};
