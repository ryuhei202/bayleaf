import { ReactNode } from "react";
import { ExpandableImage } from "../../baseParts/legacy/images/ExpandableImage";

type TProps = {
  imagePaths: { defaultPath: string; expandedPath: string };
  categoryName?: string;
  colorName?: string;
  children: ReactNode;
};

export const WideItemCard = ({
  imagePaths,
  categoryName,
  colorName,
  children,
}: TProps) => {
  return (
    <div className="flex justify-evenly gap-1">
      <div className="p-5 bg-white rounded-md w-full text-center grid grid-cols-2 gap-5">
        <div className="text-center">
          <ExpandableImage
            className="max-h-[165px]"
            defaultImageSrc={imagePaths.defaultPath}
            ExpandedImageSrc={imagePaths.expandedPath}
          />
        </div>
        {children}
      </div>
    </div>
  );
};
