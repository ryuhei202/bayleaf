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
      className={`flex w-full space-x-2 rounded-md bg-white px-5 py-2 text-center ${
        className ?? ""
      }`}
    >
      <ExpandableImage
        defaultImageSrc={imagePaths.defaultPath}
        ExpandedImageSrc={imagePaths.expandedPath}
        defaultImageClassName="mx-auto h-32"
        className="my-auto mr-2 w-[50%]"
      />
      {children}
    </div>
  );
};
