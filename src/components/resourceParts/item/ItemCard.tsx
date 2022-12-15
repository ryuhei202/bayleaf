import { ExpandableImage } from "../../baseParts/legacy/images/ExpandableImage";
import { Typography } from "../../baseParts/legacy/Typography";

type TProps = {
  imagePaths: { defaultPath: string; expandedPath: string };
  categoryName?: string;
  colorName?: string;
};

export const ItemCard = ({ imagePaths, categoryName, colorName }: TProps) => {
  return (
    <div className="flex justify-evenly gap-1">
      <div className="py-5 bg-white rounded-md w-[100px]">
        <ExpandableImage
          className="max-h-[100px]"
          defaultImageSrc={imagePaths.defaultPath}
          ExpandedImageSrc={imagePaths.expandedPath}
        />
        <Typography
          className="my-4 text-center"
          size="xs"
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
    </div>
  );
};
