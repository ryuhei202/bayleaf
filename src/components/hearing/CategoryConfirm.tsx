import { THearingConfirm } from "../../models/hearing/THearingConfirm";
import { Typography } from "../baseParts/Typography";
import { FormConfirm } from "./FormConfirm";

type TProps = THearingConfirm;

export const CategoryConfirm = ({ categoryName, forms }: TProps) => {
  return (
    <div className="">
      <Typography className="bg-gray-300 mb-4 pl-4 py-1 text-lg">
        {categoryName}
      </Typography>
      <div className="mx-3">
        {forms.map((form) => (
          <FormConfirm form={form} />
        ))}
      </div>
    </div>
  );
};
