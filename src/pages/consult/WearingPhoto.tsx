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
  const [preUploadImageName, setPreUploadImageName] = useState<string>("");
  const [preUploadImage, setPreUploadImage] = useState<string>("");
  const { mutate, isLoading } = useMemberPhotoCreate();

  const onChangeFile: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.target.files;

    if (files && files[0]) {
      setPreUploadImageName(files[0].name);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e: any) => {
        setPreUploadImage(e.target.result);
      };
    }
  };

  const onSubmit = () => {
    const params: TMemberPhotoCreateParams = {
      image: {
        memberPhotoCategoryId: MEMBER_PHOTO_CATEGORY_ID.WEARING,
        imageData: preUploadImage,
        imageFileName: preUploadImageName,
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
        disabled={!preUploadImageName || !preUploadImage}
      >
        次へ
      </Button>
      {/* disabled追加 */}
    </div>
  );
};
