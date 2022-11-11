import { TCategorizedForm } from "../../api/hearings/TCategorizedForm";
import { Typography } from "../baseParts/Typography";
import { FormConfirm } from "./FormConfirm";

type TProps = Omit<TCategorizedForm, "categoryId">;

export const CategoryConfirm = ({ categoryName, forms }: TProps) => {
  return (
    <div className="">
      <Typography className="bg-gray-200 mb-4 pl-4 py-1 text-lg">
        {categoryName}
      </Typography>
      <div className="mx-3">
        {forms.map((form, index) => (
          <FormConfirm form={form} key={index} />
        ))}
      </div>
    </div>
  );
};
