import { TDressingComment } from "../../api/dressings/TDressingComment";
import { TDressingItem } from "../../api/dressings/TDressingItem";
import { CoordinateItemImages } from "../baseParts/CoordinateItemImages";
import { SpeechBalloon } from "../baseParts/SpeechBalloon";
import { Typography } from "../baseParts/Typography";

type TProps = {
  readonly description: string;
  readonly comment: TDressingComment;
  readonly coordinateItems: TDressingItem[];
};

export const DressingDescription = ({
  description,
  comment,
  coordinateItems,
}: TProps) => {
  const items = coordinateItems.map((item) => {
    return {
      imagePaths: {
        defaultPath: item.imagePaths.largeThumb,
        expandedPath: item.imagePaths.large,
      },
      caption: `${item.cateSmallName} / ${item.color}`,
    };
  });

  return (
    <div>
      <Typography size="sm">コーデの説明</Typography>
      <div className="my-5">
        <CoordinateItemImages items={items} />
      </div>
      <div className="mt-10">
        <div className="flex">
          <img
            src={`${process.env.REACT_APP_HOST_URL}${comment.stylistIcon}`}
            className="rounded-full w-[25vw]"
          />
          <Typography size="xs" className="ml-3 my-2">
            {description}
          </Typography>
        </div>
        <div className="mt-3">
          <SpeechBalloon arrowPlacement="top-left">
            <Typography size="xs">{comment.text}</Typography>
          </SpeechBalloon>
        </div>
      </div>
    </div>
  );
};
