import { ComponentProps } from "react";
import { TItemResponse } from "../../../api/shared/TItemResponse";
import { CoordinateItemImages } from "../../baseParts/legacy/CoordinateItemImages";

export const convertItemsToItemImagesProps = (
  items: TItemResponse[]
): ComponentProps<typeof CoordinateItemImages> => {
  return {
    items: items.map((item) => {
      return {
        imagePaths: {
          defaultPath: item.imagePaths.largeThumb,
          expandedPath: item.imagePaths.large,
        },
        caption: item.categoryName,
      };
    }),
  };
};
