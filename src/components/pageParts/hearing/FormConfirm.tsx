import { TForm } from "../../../api/hearings/TForm";
import { TitledAnswer } from "./TitledAnswer";

type TProps = {
  form: TForm;
};

export const FormConfirm = ({ form }: TProps) => {
  const choice = form.options.map((o) => o.name).join(" / ");
  const text = form.options
    .filter((o) => o.text)
    .map((o) => o.text)
    .join(" / ");

  return (
    <TitledAnswer
      titleText={form.title}
      choice={choice}
      text={text}
      className="pb-4"
    />
  );
};
