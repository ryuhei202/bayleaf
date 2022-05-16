import React, { useEffect, useState } from "react";
import { ImageAlt } from "./ImageAlt";

type TProps = {
  imageSrc: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onImageClick?: () => void;
  className?: string;
  checked: boolean;
};
export const SelectButtonImage = ({
  imageSrc,
  value,
  onChange,
  onImageClick,
  className,
  checked,
}: TProps) => {
  return (
    <div className={`w-fit relative ${className ?? ""}`}>
      <input
        type="checkbox"
        className="form-checkbox absolute right-1.5 bottom-1.5 rounded-full text-gray-600 focus:outline-none h-5 w-5"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <ImageAlt imageSrc={imageSrc} onClick={onImageClick} />
    </div>
  );
};
