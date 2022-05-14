import { ChangeEventHandler } from "react";
import { ImageAlt } from "./images/ImageAlt";
import { UploadButton } from "./inputs/UploadButton";
import DefaultSrc from "../../images/image.png";

type Props = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  preUploadImage?: string | null;
  className?: string;
};

export const ImageUploader = ({
  onChange,
  preUploadImage,
  className,
}: Props) => {
  return (
    <div className={className ?? ""}>
      <ImageAlt imageSrc={preUploadImage ?? DefaultSrc} />
      <UploadButton uploadType="select" onChange={onChange} className="my-3" />
      <UploadButton uploadType="snap" onChange={onChange} className="my-3" />
    </div>
  );
};
