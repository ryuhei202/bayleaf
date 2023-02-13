import { TPlan } from "../../../models/shared/Plans";
import { Typography } from "../../baseParts/legacy/Typography";
import { PlanChangeCard } from "./PlanChangeCard";
type TProps = {
  plan: TPlan;
  text: React.ReactNode;
  children: React.ReactNode;
};

export const PlanChangePanel = ({ plan, text, children }: TProps) => {
  return (
    <>
      <Typography className="text-center pt-8 pb-2">{text}</Typography>
      <PlanChangeCard plan={plan} />
      {children}
    </>
  );
};
