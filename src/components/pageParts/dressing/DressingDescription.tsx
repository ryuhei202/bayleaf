import { TDressingComment } from "../../../api/dressings/TDressingComment";
import { TItemResponse } from "../../../api/shared/TItemResponse";
import { Typography } from "../../baseParts/legacy/Typography";
import { SpeechBalloon } from "../../baseParts/speechBalloon/SpeechBalloon";
import { PurchaseItemCard } from "../buyItem/PurchaseItemCard";

type TProps = {
  readonly description: string;
  readonly comment: TDressingComment;
  readonly coordinateItems: TItemResponse[];
};

export const DressingDescription = ({
  description,
  comment,
  coordinateItems,
}: TProps) => {
  return (
    <div>
      <Typography size="xl">コーデの説明</Typography>
      <div className="border-[1px] border-gray my-5" />
      <div className="my-5">
        {coordinateItems.map((item) => {
          return (
            <PurchaseItemCard
              {...item}
              brand={item.brandName}
              category={item.categoryName}
              color={item.colorName}
              imagePaths={{
                defaultPath: item.imagePaths.largeThumb,
                expandedPath: item.imagePaths.original,
              }}
              dense
              className="mb-2"
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
