import { useState } from "react";
import { Button } from "../Button";
import { ImageAlt } from "./ImageAlt";

type TProps = {
  defaultImageSrc: string;
  ExpandedImageSrc: string;
  className?: string;
  defaultImageClassName?: string;
};

export const ExpandableImage = ({
  defaultImageSrc,
  ExpandedImageSrc,
  className,
  defaultImageClassName,
}: TProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleClickDefaultImage = () => {
    setIsExpanded(true);
  };

  const handleClickClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className={`${className ?? ""}`}>
      <ImageAlt
        imageSrc={defaultImageSrc}
        onClick={handleClickDefaultImage}
        className={defaultImageClassName}
      />
      {isExpanded ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
          <div
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="bg-opacity/40 absolute -z-10 h-full w-full bg-black"
            onClick={handleClickClose}
          ></div>
          <div className="flex max-h-[80vh] max-w-[80vw] justify-center">
            <ImageAlt imageSrc={ExpandedImageSrc} />
          </div>
          <div className="mt-3 w-40">
            <Button onClick={handleClickClose}>閉じる</Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
