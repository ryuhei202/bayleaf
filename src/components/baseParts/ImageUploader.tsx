import { ChangeEventHandler } from "react";
import { ImageAlt } from "./images/ImageAlt";
import { UploadButton } from "./inputs/UploadButton";

type Props = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultSrc: string;
  preUploadImage: string | null;
  className?: string;
};

export const ImageUploader = ({
  onChange,
  defaultSrc,
  preUploadImage,
  className,
}: Props) => {
  return (
    <div className={className ?? ""}>
      <ImageAlt
        imageSrc={preUploadImage === null ? defaultSrc : preUploadImage}
        className={"h-[380px] w-fit"}
      />
      <UploadButton uploadType="select" onChange={onChange} className="my-3" />
      <UploadButton uploadType="snap" onChange={onChange} className="my-3" />
    </div>
  );
};
