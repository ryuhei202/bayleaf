import { TDressingAdvice } from "../../api/dressings/TDressingAdvice";
import { Typography } from "../baseParts/Typography";
import PreviewDefault from "../../../src/images/preview_default.png";
import { ExpandableImage } from "../baseParts/images/ExpandableImage";

type TProps = {
  readonly advices: TDressingAdvice[];
};
export const DressingAdvice = ({ advices }: TProps) => {
  return (
    <div className="mb-16">
      <Typography size="xl">コーデの着こなし方</Typography>
      <div className="mt-5">
        {advices.map((advice, index) => (
          <div className="flex items-center my-3" key={index}>
            <ExpandableImage
              defaultImageSrc={`${
                advice.imageFileName
                  ? process.env.REACT_APP_HOST_URL + advice.imageFileName
                  : PreviewDefault
              }`}
              ExpandedImageSrc={`${
                advice.imageFileName
                  ? process.env.REACT_APP_HOST_URL + advice.imageFileName
                  : PreviewDefault
              }`}
              className="w-[15vw]"
            />
            <Typography className="px-4 w-[80vw]">
              {advice.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
