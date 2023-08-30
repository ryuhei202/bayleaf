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
      <Typography size="xl">コーデアイテム</Typography>
      <div className="my-5 border-[1px] border-gray" />
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
              className="mb-2"
              key={item.id}
            />
          );
        })}
      </div>
      <div className="mt-10">
        <Typography className="m-2">{description}</Typography>
        <div className="mt-10 flex space-x-3">
          <img
            src={`${process.env.REACT_APP_HOST_URL}${comment.stylistIcon}`}
            alt="stylistIcon"
            className="h-[15vw] w-[15vw] rounded-full object-cover"
          />
          <div className="table min-h-[15vw] w-full">
            <SpeechBalloon arrowPlacement="left">{comment.text}</SpeechBalloon>
          </div>
        </div>
      </div>
    </div>
  );
};
