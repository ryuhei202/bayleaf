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
      className={`p-5 bg-white rounded-md w-full text-center flex space-x-2 ${
        className ?? ""
      }`}
    >
      <ExpandableImage
        defaultImageSrc={imagePaths.defaultPath}
        ExpandedImageSrc={imagePaths.expandedPath}
        defaultImageClassName="m-auto"
        className="w-[50%]"
      />
      {children}
    </div>
  );
};
