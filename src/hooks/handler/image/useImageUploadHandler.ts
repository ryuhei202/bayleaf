import { ChangeEventHandler } from "react";
import { useState } from "react";

export const useImageUploadHandler = () => {
  const [imageFileName, setImageFileName] = useState<string | null>(null);
  const [imageData, setImageData] = useState<string | null>(null);
  const [preUploadImage, setPreUploadImage] = useState<string | null>(null);

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.target.files;

    if (files && files[0]) {
      setImageFileName(files[0].name);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      const imageType = files[0].type;

      reader.onload = (e: any) => {
        setPreUploadImage(e.target.result);
        setImageData(e.target.result.replace(`data:${imageType};base64,`, ""));
      };
    }
  };

  return { imageFileName, imageData, preUploadImage, handleChangeFile };
};
