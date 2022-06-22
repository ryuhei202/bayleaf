import { TForm } from "../../api/hearings/TForm";
import { TitledAnswer } from "./TitledAnswer";

type TProps = {
  form: TForm;
};

export const FormConfirm = ({ form }: TProps) => {
  const choice = form.options.map((o) => o.name).join(" / ");

  return (
    <TitledAnswer titleText={form.title} choice={choice} className="pb-4" />
  );
};
