import React from "react";
import { ExpandableImage } from "../baseParts/images/ExpandableImage";
import { Typography } from "../baseParts/Typography";

type TProps = {
  items: {
    cateSmallName: string;
    imagePaths: { large_thumb: string; large: string };
  }[];
};

export const CoordinateItemImages = ({ items }: TProps) => {
  return (
    <div className="flex justify-evenly">
      {items.map((item) => {
        return (
          <div>
            <ExpandableImage
              className="max-h-[120px]"
              defaultImageSrc={item.imagePaths.large_thumb}
              ExpandedImageSrc={item.imagePaths.large}
            />
            <Typography
              className="mt-1 text-center"
              size="xs"
              color="primary"
              weight="medium"
            >
              {item.cateSmallName}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};
