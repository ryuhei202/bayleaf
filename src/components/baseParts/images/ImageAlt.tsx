import React from "react";

type TProps = {
  imageSrc: string;
  onClick?: () => void;
  className?: string;
};

export const ImageAlt = ({ imageSrc, className, onClick }: TProps) => {
  return (
    <div className="h-full">
      <img
        src={imageSrc}
        className={`${
          className ?? ""
        } rounded-md object-contain max-h-full max-w-full w-auto h-auto m-auto`}
        onClick={onClick}
      />
    </div>
  );
};
