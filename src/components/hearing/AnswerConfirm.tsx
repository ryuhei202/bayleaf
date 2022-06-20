import { THearingConfirm } from "../../models/hearing/THearingConfirm";
import { Typography } from "../baseParts/Typography";
import { CategoryConfirm } from "./CategoryConfirm";

type TProps = {
  readonly answer: THearingConfirm[];
  readonly index: number;
};

export const AnswerConfirm = ({ answer, index }: TProps): JSX.Element => {
  return (
    <>
      <Typography className="text-lg mt-5 ">コーデ{index + 1}</Typography>
      <div className="bg-white mt-3 rounded-md overflow-hidden">
        {answer.map((ans) => (
          <CategoryConfirm categoryName={ans.categoryName} forms={ans.forms} />
        ))}
      </div>
    </>
  );
};
