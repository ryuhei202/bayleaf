import { THearingForm } from "../../models/hearing/THearingForm";
import { TitledAnswer } from "./TitledAnswer";

type TProps = {
  form: THearingForm;
};

export const FormConfirm = ({ form }: TProps) => {
  const choice =
    form.optionName.length === 1
      ? form.optionName[0]
      : form.optionName.join(" / ");

  return (
    <TitledAnswer titleText={form.title} choice={choice} className="pb-4" />
  );
};
