import { TCoordinateResponse } from "../../../api/coordinates/TCoordinateResponse";
import { Typography } from "../../baseParts/legacy/Typography";
import { CoordinateListButton } from "./CoordinateListButton";

type TProps = {
  coordinates: TCoordinateResponse[];
  onClickCoordinate: (coordinate: TCoordinateResponse) => void;
};

export const CoordinateList = ({ coordinates, onClickCoordinate }: TProps) => {
  return (
    <div className="m-8">
      <Typography className="text-3xl">
        相談したいコーデを選択してください。
      </Typography>
      <Typography className="text-xl my-6">
        以下より相談したいコーデをお選びください。
      </Typography>
      <div className="flex flex-col space-y-4">
        {coordinates.map((coordinate, index) => (
          <CoordinateListButton
            index={index}
            ImagePathThumbs={coordinate.items.map(
              (item) => item.imagePaths.thumb
            )}
            onClick={() => onClickCoordinate(coordinate)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
