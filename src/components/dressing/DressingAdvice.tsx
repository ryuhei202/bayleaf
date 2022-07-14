import { TDressingAdvice } from "../../api/dressings/TDressingAdvice";
import { Typography } from "../baseParts/Typography";
import PreviewDefault from "../../../src/images/preview_default.png";

type TProps = {
  readonly advices: TDressingAdvice[];
};
export const DressingAdvice = ({ advices }: TProps) => {
  return (
    <div>
      <Typography size="xl">コーデの着こなし方</Typography>
      <div className="mt-5">
        {advices.map((advice) => (
          <div className="flex items-center my-3">
            <img
              src={`${
                advice.imageFileName
                  ? process.env.REACT_APP_HOST_URL + advice.imageFileName
                  : PreviewDefault
              }`}
              alt=""
              className="w-[15vw]"
            />
            <Typography size="xs" className="px-6">
              {advice.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
