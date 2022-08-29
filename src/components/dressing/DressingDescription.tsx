import { TDressingComment } from "../../api/dressings/TDressingComment";
import { TDressingItem } from "../../api/dressings/TDressingItem";
import { CoordinateItemImages } from "../baseParts/CoordinateItemImages";
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
    <div className="mb-16">
      <Typography size="xl">コーデの説明</Typography>
      <div className="my-5">
        <CoordinateItemImages items={items} />
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
            <Typography className="bg-white table-cell align-middle rounded-lg p-3">
              {comment.text}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
