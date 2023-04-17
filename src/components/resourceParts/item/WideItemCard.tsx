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
      className={`bg-white px-5 rounded-md w-full text-center flex space-x-2 py-2 ${
        className ?? ""
      }`}
    >
      <ExpandableImage
        defaultImageSrc={imagePaths.defaultPath}
        ExpandedImageSrc={imagePaths.expandedPath}
        defaultImageClassName="mx-auto h-32"
        className="w-[50%] my-auto mr-2"
      />
      {children}
    </div>
  );
};
