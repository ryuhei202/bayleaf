import { TDressingFootwear } from "../../api/dressings/TDressingFootwear";
import { Typography } from "../baseParts/Typography";

type TProps = {
  readonly footwear: TDressingFootwear;
};

export const DressingFootwear = ({ footwear }: TProps) => {
  return (
    <div>
      <Typography size="sm">コーデに合う靴</Typography>
      <div className="flex items-center mt-5">
        <img
          src={`${process.env.REACT_APP_HOST_URL + footwear.imageFileName}`}
          alt=""
          className="w-[20vw] rounded-md"
        />
        <Typography className="px-6">{footwear.name}</Typography>
      </div>
    </div>
  );
};
