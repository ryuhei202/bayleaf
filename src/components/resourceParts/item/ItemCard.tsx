import { ExpandableImage } from "../../baseParts/legacy/images/ExpandableImage";
import { Typography } from "../../baseParts/legacy/Typography";
import { ItemPrice } from "./ItemPrice";

type TProps = {
  id?: number;
  price?: number;
  originPrice?: number;
  discountRate?: number;
  imagePaths: { defaultPath: string; expandedPath: string };
  categoryName?: string;
  colorName?: string;
  selectedItems?: number[];
  selectItem?: (item: number[]) => void;
};

// TODO: childrenを受け取りアイテムに表示する内容は使う側で決める
export const ItemCard = ({
  id,
  price,
  originPrice,
  discountRate,
  imagePaths,
  categoryName,
  colorName,
  selectedItems,
  selectItem,
}: TProps) => {
  const isProcessPresent = selectedItems && selectItem && id;
  const changeItem = () => {
    if (isProcessPresent) {
      selectedItems.includes(id)
        ? selectItem([...selectedItems].filter((itemId) => itemId !== id))
        : selectItem([...selectedItems, id]);
    }
  };

  return (
    <div className="flex justify-evenly gap-1" onClick={changeItem}>
      <div className="py-5 bg-white rounded-md w-[100px] text-center px-1">
        <ExpandableImage
          defaultImageSrc={imagePaths.defaultPath}
          ExpandedImageSrc={imagePaths.expandedPath}
        />
        <Typography
          className="mt-4 mb-1 text-center"
          size="sm"
          color="strong-gray"
          weight="medium"
        >
          {categoryName}
        </Typography>
        <Typography
          className="text-center"
          size="xs"
          color="gray"
          weight="medium"
        >
          {colorName}
        </Typography>
        {price !== undefined &&
        originPrice !== undefined &&
        discountRate !== undefined ? (
          <ItemPrice
            price={price}
            discountRate={discountRate}
            originPrice={originPrice}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
