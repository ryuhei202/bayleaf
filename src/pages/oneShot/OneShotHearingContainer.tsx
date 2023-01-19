import { useEffect } from "@storybook/addons";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { BeforeHearingConfirm } from "../../components/pageParts/hearing/BeforeHearingConfirm";
import { AnsweredHearings, TAnsweredForm } from "../hearing/HearingContainer";
import { HearingFormFetcher } from "../hearing/HearingFormFetcher";

type TProps = {
  readonly member: TMembersIndexResponse;
  readonly nextFormId: number | null;
  readonly answeredHearings: AnsweredHearings;
  readonly isBackTransition: boolean;
  readonly handleClickFirstNext: () => void;
  readonly handleSubmitForm: (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => void;
  readonly handleCancelForm: () => void;
  readonly handleChangeStep: () => void;
};

export const OneShotHearingContainer = ({
  member,
  nextFormId,
  answeredHearings,
  isBackTransition,
  handleClickFirstNext,
  handleSubmitForm,
  handleCancelForm,
  handleChangeStep,
}: TProps) => {
  useEffect(() => {
    const isEndHearing =
      nextFormId === null && answeredHearings.forms.length <= 0;
    if (isEndHearing) handleChangeStep;
  }, [answeredHearings, nextFormId]);

  if (nextFormId === null) {
    return (
      <BeforeHearingConfirm
        onClick={handleClickFirstNext}
        planId={member.mPlanId}
      />
    );
  }

  return (
    <HearingFormFetcher
      onSubmitForm={handleSubmitForm}
      onCancelForm={handleCancelForm}
      nextFormId={nextFormId}
      previousAnsweredHearing={answeredHearings.forms.slice(-1)[0]}
      isBackTransition={isBackTransition}
      member={member}
    />
  );
};
