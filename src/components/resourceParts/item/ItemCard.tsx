import { ExpandableImage } from "../../baseParts/legacy/images/ExpandableImage";
import { Typography } from "../../baseParts/legacy/Typography";
import { ItemCardWrapper } from "./ItemCardWrapper";

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
  const isSelected = isProcessPresent ? selectedItems.includes(id) : false;
  const changeItem = () => {
    if (isProcessPresent) {
      selectedItems.includes(id)
        ? selectItem([...selectedItems].filter((itemId) => itemId !== id))
        : selectItem([...selectedItems, id]);
    }
  };

  return (
    <ItemCardWrapper visible={isSelected}>
      <div className="flex justify-evenly gap-1" onClick={changeItem}>
        <div className="py-5 bg-white rounded-md w-[100px] text-center">
          <ExpandableImage
            className="max-h-[100px]"
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
          {originPrice !== undefined &&
          price !== undefined &&
          discountRate !== undefined ? (
            <div className="my-6">
              <Typography size="xs" weight="regular">
                UWear価格
              </Typography>
              <Typography size="sm" weight="medium">
                {price}円
              </Typography>
              <Typography size="xs" color="primary" weight="medium">
                ({discountRate}%OFF)
              </Typography>
              <Typography size="xs" weight="regular" className="my-2">
                ↑
              </Typography>
              <Typography size="xs" weight="regular">
                新品参考価格
              </Typography>
              <Typography size="sm" weight="medium">
                {originPrice}円
              </Typography>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </ItemCardWrapper>
  );
};
