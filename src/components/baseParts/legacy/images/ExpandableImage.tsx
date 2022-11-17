import React, { useState } from "react";
import { Button } from "../Button";
import { ImageAlt } from "./ImageAlt";

type TProps = {
  defaultImageSrc: string;
  ExpandedImageSrc: string;
  className?: string;
};

export const ExpandableImage = ({
  defaultImageSrc,
  ExpandedImageSrc,
  className,
}: TProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleClickDefaultImage = () => {
    setIsExpanded(true);
  };

  const handleClickClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className={`${className ?? ""} h-full`}>
      <ImageAlt imageSrc={defaultImageSrc} onClick={handleClickDefaultImage} />

      {isExpanded ? (
        <div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center flex-col z-50">
          <div
            className="absolute bg-black bg-opacity-40 w-full h-full -z-10"
            onClick={handleClickClose}
          ></div>
          <div className="max-w-[80vw] max-h-[80vh] flex justify-center">
            <ImageAlt imageSrc={ExpandedImageSrc} />
          </div>
          <div className="w-40 mt-3">
            <Button onClick={handleClickClose}>閉じる</Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
