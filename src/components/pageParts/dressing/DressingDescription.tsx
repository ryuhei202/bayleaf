import { TDressingComment } from "../../../api/dressings/TDressingComment";
import { TDressingItem } from "../../../api/dressings/TDressingItem";
import { Typography } from "../../baseParts/legacy/Typography";
import { SpeechBalloon } from "../../baseParts/speechBalloon/SpeechBalloon";
import { ItemCard } from "../../resourceParts/item/ItemCard";

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
  return (
    <div className="mb-16">
      <Typography size="xl">コーデの説明</Typography>
      <div className="border-[1px] border-gray my-5" />
      <div className="my-5 flex justify-around">
        {coordinateItems.map((item) => {
          return (
            <ItemCard
              imagePaths={{
                defaultPath: item.imagePaths.largeThumb,
                expandedPath: item.imagePaths.large,
              }}
              categoryName={item.cateSmallName}
              colorName={item.color}
            />
          );
        })}
      </div>
      <div className="mt-10">
        <Typography className="mx-2 my-2">{description}</Typography>
        <div className="flex mt-10 space-x-3">
          <img
            src={`${process.env.REACT_APP_HOST_URL}${comment.stylistIcon}`}
            alt="stylistIcon"
            className="rounded-full w-[15vw] h-[15vw] object-cover"
          />
          <div className="table w-full min-h-[15vw]">
            <SpeechBalloon arrowPlacement="left">{comment.text}</SpeechBalloon>
          </div>
        </div>
      </div>
    </div>
  );
};
