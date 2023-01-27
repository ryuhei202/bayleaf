import { TCategorizedForm } from "../../../api/hearings/TCategorizedForm";
import { Typography } from "../../baseParts/legacy/Typography";
import { FormConfirm } from "./FormConfirm";

type TProps = Omit<TCategorizedForm, "categoryId">;

export const CategoryConfirm = ({ categoryName, forms }: TProps) => {
  return (
    <div>
      <Typography color="primary" size="2xl" className="mb-6">
        {categoryName}
      </Typography>
      <div className="mx-3 mb-4">
        {forms.map((form, index) => (
          <FormConfirm form={form} key={index} />
        ))}
      </div>
    </div>
  );
};
