import { ReactNode } from "react";
import { ExpandableImage } from "../../baseParts/legacy/images/ExpandableImage";

type TProps = {
  imagePaths: { defaultPath: string; expandedPath: string };
  children: ReactNode;
  className?: string;
  dense?: boolean;
};

export const WideItemCard = ({
  imagePaths,
  children,
  className,
  dense,
}: TProps) => {
  return (
    <div
      className={`bg-white rounded-md w-full text-center flex space-x-2 ${
        dense ? "py-2" : "py-5"
      } ${className ?? ""}`}
    >
      <ExpandableImage
        defaultImageSrc={imagePaths.defaultPath}
        ExpandedImageSrc={imagePaths.expandedPath}
        defaultImageClassName="m-auto h-32"
        className="w-[50%] my-auto"
      />
      {children}
    </div>
  );
};
