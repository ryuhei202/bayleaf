import { TCategorizedForm } from "../../../api/hearings/TCategorizedForm";
import { Typography } from "../../baseParts/legacy/Typography";
import { CategoryConfirm } from "./CategoryConfirm";

type TProps = {
  readonly answer: TCategorizedForm[];
  readonly coordinateNum: number;
};

export const AnswerConfirm = ({
  answer,
  coordinateNum,
}: TProps): JSX.Element => {
  return (
    <>
      <Typography className="text-lg mt-5 ">コーデ{coordinateNum}</Typography>
      <div className="bg-white mt-3 rounded-md overflow-hidden">
        {answer.map((ans, index) => (
          <CategoryConfirm
            categoryName={ans.categoryName}
            forms={ans.forms}
            key={index}
          />
        ))}
      </div>
    </>
  );
};