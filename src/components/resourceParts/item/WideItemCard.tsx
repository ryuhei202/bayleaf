import { ReactNode } from "react";
import { ExpandableImage } from "../../baseParts/legacy/images/ExpandableImage";

type TProps = {
  imagePaths: { defaultPath: string; expandedPath: string };
  children: ReactNode;
  className?: string;
};

export const WideItemCard = ({ imagePaths, children, className }: TProps) => {
  return (
    <div
      className={`flex justify-evenly gap-1 min-h-[230px] ${className ?? ""}`}
    >
      <div className="p-5 bg-white rounded-md w-full text-center grid grid-cols-2 gap-5">
        <div className="flex flex-col justify-around text-center">
          <ExpandableImage
            className="h-fit"
            defaultImageSrc={imagePaths.defaultPath}
            ExpandedImageSrc={imagePaths.expandedPath}
            defaultImageClassName="max-w-[80%]"
          />
        </div>
        {children}
      </div>
    </div>
  );
};
