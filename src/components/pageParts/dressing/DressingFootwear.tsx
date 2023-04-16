import { TDressingFootwear } from "../../../api/dressings/TDressingFootwear";
import { ExpandableImage } from "../../baseParts/legacy/images/ExpandableImage";
import { Typography } from "../../baseParts/legacy/Typography";

type TProps = {
  readonly footwear: TDressingFootwear;
};

export const DressingFootwear = ({ footwear }: TProps) => {
  return (
    <div>
      <Typography size="xl">コーデに合う靴</Typography>
      <div className="border-[1px] border-gray my-5" />
      <div className="flex items-center mt-5">
        <ExpandableImage
          defaultImageSrc={`${
            process.env.REACT_APP_HOST_URL + footwear.imagePath
          }`}
          ExpandedImageSrc={`${
            process.env.REACT_APP_HOST_URL + footwear.imagePath
          }`}
          className="w-[30vw] rounded-md"
        />
        <Typography className="px-6">{footwear.name}</Typography>
      </div>
      <Typography size="xs" color="strong-gray" className="mt-4 ml-2">
        ※お持ちの靴と合うか確認したい場合は、スタイリストまでお持ちの靴のお写真をお送りください。
      </Typography>
    </div>
  );
};
