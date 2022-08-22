import { ExpandableImage } from "../baseParts/images/ExpandableImage";
import { Typography } from "../baseParts/Typography";

type TProps = {
  items: {
    imagePaths: { defaultPath: string; expandedPath: string };
    caption?: string;
  }[];
};

export const CoordinateItemImages = ({ items }: TProps) => {
  return (
    <div className="flex justify-evenly">
      {items.map((item) => {
        return (
          <div key={item.imagePaths.defaultPath}>
            <ExpandableImage
              className="max-h-[120px]"
              defaultImageSrc={item.imagePaths.defaultPath}
              ExpandedImageSrc={item.imagePaths.expandedPath}
            />
            {item.caption ? (
              <Typography
                className="mt-1 text-center"
                size="xs"
                color="primary"
                weight="medium"
              >
                {item.caption}
              </Typography>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};