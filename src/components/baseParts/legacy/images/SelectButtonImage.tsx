import React from "react";
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
    <div className={`relative w-fit ${className ?? ""}`}>
      <input
        type="checkbox"
        className="form-checkbox absolute bottom-1.5 right-1.5 h-5 w-5 rounded-full text-themeGray focus:outline-none"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <ImageAlt imageSrc={imageSrc} onClick={onImageClick} />
    </div>
  );
};
