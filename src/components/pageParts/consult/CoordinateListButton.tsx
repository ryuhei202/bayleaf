import { TImagePathsResponse } from "../../../api/shared/TImagePathsResponse";
import { Button } from "../../baseParts/legacy/Button";
import { ImageAlt } from "../../baseParts/legacy/images/ImageAlt";
import { Typography } from "../../baseParts/legacy/Typography";

type Props = {
  index: number;
  ImagePathThumbs: TImagePathsResponse["thumb"][];
  onClick: () => void;
};

export const CoordinateListButton = ({
  index,
  ImagePathThumbs,
  onClick,
}: Props) => {
  return (
    <Button onClick={onClick}>
      <Typography className="text-xl">コーデ{index + 1}</Typography>

      <div className="flex h-[100px] justify-center space-x-2 mt-4">
        {ImagePathThumbs.map((thumb) => {
          return <ImageAlt imageSrc={thumb} key={thumb} />;
        })}
      </div>
    </Button>
  );
};
