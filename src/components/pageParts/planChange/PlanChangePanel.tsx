import { TPlan } from "../../../models/shared/Plans";
import { Button } from "../../baseParts/Button";
import { Typography } from "../../baseParts/legacy/Typography";
import { PlanChangeCard } from "./PlanChangeCard";
type TProps = {
  plan: TPlan;
  text: React.ReactNode;
  buttonText: string;
  onSubmit: () => void;
  isLoading: boolean;
  disabled?: boolean;
};

export const PlanChangePanel = ({
  plan,
  text,
  buttonText,
  onSubmit,
  isLoading,
  disabled,
}: TProps) => {
  return (
    <>
      <Typography className="text-center py-8">{text}</Typography>
      <PlanChangeCard plan={plan} />
      <Button
        size="large"
        className="mt-8"
        disabled={disabled}
        isLoading={isLoading}
        onClick={onSubmit}
      >
        {buttonText}
      </Button>
    </>
  );
};
