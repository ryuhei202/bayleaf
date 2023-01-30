import { ReactNode } from "react";
import { ExpandableImage } from "../../baseParts/legacy/images/ExpandableImage";
import { Typography } from "../../baseParts/legacy/Typography";

type TProps = {
  id?: number;
  imagePaths: { defaultPath: string; expandedPath: string };
  categoryName?: string;
  colorName?: string;
  selectedItems?: number[];
  children: ReactNode;
  selectItem?: (item: number[]) => void;
};

export const WideItemCard = ({
  id,
  imagePaths,
  categoryName,
  colorName,
  selectedItems,
  children,
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
    <div className="flex justify-evenly gap-1" onClick={changeItem}>
      <div className="p-5 bg-white rounded-md w-full text-center grid grid-cols-2 gap-5">
        <div className="text-center">
          <ExpandableImage
            className="max-h-[150px]"
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
        </div>
        <div className="place-self-center">{children}</div>
      </div>
    </div>
  );
};
