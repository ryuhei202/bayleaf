import { TCoordinateResponse } from "../../../api/coordinates/TCoordinateResponse";
import { Button } from "../../baseParts/legacy/Button";
import { ImageAlt } from "../../baseParts/legacy/images/ImageAlt";
import { Typography } from "../../baseParts/legacy/Typography";

type Props = {
  index: number;
  coordinate: TCoordinateResponse;
  onClick: () => void;
};

export const CoordinateListButton = ({ index, coordinate, onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <Typography className="text-xl">コーデ{index + 1}</Typography>

      <div className="flex h-[100px] justify-center space-x-2 mt-4">
        {coordinate.items.map((item) => {
          return <ImageAlt imageSrc={item.imagePaths.thumb} key={item.id} />;
        })}
      </div>
    </Button>
  );
};