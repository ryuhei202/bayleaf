import { ComponentProps } from "react";
import { TCoordinateItemResponse } from "../../../api/coordinates/TCoordinateItemResponse";
import { CoordinateItemImages } from "../../baseParts/CoordinateItemImages";

export const convertItemsToItemImagesProps = (
  itemResponses: TCoordinateItemResponse[]
): ComponentProps<typeof CoordinateItemImages> => {
  const items = itemResponses.map((item) => {
    return {
      imagePaths: {
        defaultPath: item.imagePaths.largeThumb,
        expandedPath: item.imagePaths.large,
      },
      caption: item.cateSmallName,
    };
  });

  return {
    items,
  };
};
