import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
import {
  TMemberPhotoCreateParams,
  TMemberPhotoCreateResponse,
  useMemberPhotoCreate,
} from "../../api/consult/useMemberPhotoCreate";
import { Button } from "../../components/baseParts/Button";
import { UploadButton } from "../../components/baseParts/inputs/UploadButton";
import { MEMBER_PHOTO_CATEGORY_ID } from "../../models/consult/MemberPhotoCategoryId";

type TProps = {
  setAlreadySent: Dispatch<SetStateAction<boolean>>;
};

export const WearingPhoto = ({ setAlreadySent }: TProps) => {
  const [imageFileName, setImageFileName] = useState<string>("");
  const [imageData, setImageData] = useState<string>("");
  const [preUploadImage, setPreUploadImage] = useState<string>("");
  const { mutate, isLoading } = useMemberPhotoCreate();

  const onChangeFile: ChangeEventHandler<HTMLInputElement> = (event) => {
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

  const onSubmit = () => {
    const params: TMemberPhotoCreateParams = {
      image: {
        memberPhotoCategoryId: MEMBER_PHOTO_CATEGORY_ID.WEARING,
        imageData: imageData,
        imageFileName: imageFileName,
      },
    };
    mutate(params, {
      onSuccess: (data, error) => {
        setAlreadySent((b) => !b);
      },
    });
  };

  return (
    <div className="content-center">
      <img src={preUploadImage} />
      <UploadButton uploadType="select" onChange={onChangeFile} />
      <UploadButton uploadType="snap" onChange={onChangeFile} />
      <Button
        onClick={onSubmit}
        isLoading={isLoading}
        disabled={!imageFileName || !preUploadImage}
      >
        次へ
      </Button>
    </div>
  );
};
