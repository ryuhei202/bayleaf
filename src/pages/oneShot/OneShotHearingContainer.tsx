import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { BeforeHearingConfirm } from "../../components/pageParts/hearing/BeforeHearingConfirm";
import { AnsweredHearings, TAnsweredForm } from "../hearing/HearingContainer";
import { HearingFormFetcher } from "../hearing/HearingFormFetcher";

type TProps = {
  readonly member: TMembersIndexResponse;
  readonly nextFormId: number | null;
  readonly answeredHearings: AnsweredHearings;
  readonly isBackTransition: boolean;
  readonly onClickFirstNext: () => void;
  readonly onSubmitForm: (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => void;
  readonly onCancelForm: () => void;
};

export const OneShotHearingContainer = ({
  member,
  nextFormId,
  answeredHearings,
  isBackTransition,
  onClickFirstNext,
  onSubmitForm,
  onCancelForm,
}: TProps) => {
  if (nextFormId === null) {
    return (
      <BeforeHearingConfirm
        onClick={onClickFirstNext}
        planId={member.mPlanId}
      />
    );
  }

  return (
    <HearingFormFetcher
      onSubmitForm={onSubmitForm}
      onCancelForm={onCancelForm}
      nextFormId={nextFormId}
      previousAnsweredHearing={answeredHearings.forms.slice(-1)[0]}
      isBackTransition={isBackTransition}
      member={member}
    />
  );
};
