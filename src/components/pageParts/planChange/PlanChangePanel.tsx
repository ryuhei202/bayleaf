import { TPlan } from "../../../models/shared/Plans";
import { Button } from "../../baseParts/Button";
import { Typography } from "../../baseParts/legacy/Typography";
import { PlanChangeCard } from "./PlanChangeCard";
type TProps = {
  currentPlanId: number;
  plan: TPlan;
  text: string;
  buttonText: string;
  onSubmit: () => void;
};

export const PlanChangePanel = ({
  currentPlanId,
  plan,
  text,
  buttonText,
  onSubmit,
}: TProps) => {
  return (
    <>
      <Typography className="text-center py-8">{text}</Typography>
      <PlanChangeCard plan={plan} />
      <Button
        size="large"
        className="mt-8"
        disabled={currentPlanId == plan.id}
        onClick={onSubmit}
      >
        {buttonText}
      </Button>
    </>
  );
};
