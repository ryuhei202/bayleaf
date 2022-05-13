import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";

import {
  TMemberPhotoCreateParams,
  TMemberPhotoCreateResponse,
  useMemberPhotoCreate,
} from "../../api/consult/useMemberPhotoCreate";
import { TImagePathsResponse } from "../../api/shared/TImagePathsResponse";
import { Button } from "../../components/baseParts/Button";
import { ImageAlt } from "../../components/baseParts/images/ImageAlt";
import { ImageUploader } from "../../components/baseParts/ImageUploader";
import { PageHeader } from "../../components/baseParts/PageHeader";
import { Typography } from "../../components/baseParts/Typography";
import { useImageUploadHandler } from "../../hooks/handler/image/useImageUploadHandler";
import { MEMBER_PHOTO_CATEGORY_ID } from "../../models/consult/MemberPhotoCategoryId";
import { TConsultingItem } from "../../models/consult/TConsultingItem";

type TProps = {
  items: TConsultingItem[];
  setUploadedImagePaths: Dispatch<
    SetStateAction<TImagePathsResponse | undefined>
  >;
};

export const WearingPhoto = ({ items, setUploadedImagePaths }: TProps) => {
  const { imageFileName, imageData, preUploadImage, onChangeFile } =
    useImageUploadHandler();
  const { mutate, isLoading } = useMemberPhotoCreate();

  const onSubmit = () => {
    if (imageData && imageFileName) {
      const params: TMemberPhotoCreateParams = {
        image: {
          memberPhotoCategoryId: MEMBER_PHOTO_CATEGORY_ID.WEARING,
          imageData: imageData,
          imageFileName: imageFileName,
        },
      };
      mutate(params, {
        onSuccess: (data: AxiosResponse<TMemberPhotoCreateResponse>) => {
          if (data && data.data) {
            setUploadedImagePaths(data.data.imagePaths);
          }
        },
      });
    }
  };

  return (
    <div className="m-8">
      <PageHeader title="着用写真を送ってください" />
      <Typography className="my-6">
        以下のアイテムを着用している写真を送ってください。
        <br />
        着用写真をもとにサイズ感や着こなしを確認します。
      </Typography>

      <div className="flex h-[150px] justify-center space-x-3 mt-4">
        {items.map((item) => {
          return <ImageAlt imageSrc={item.imagePaths.large} />;
        })}
      </div>
      <hr className="border-none h-1 bg-gray-400 my-5" />

      <ImageUploader onChange={onChangeFile} preUploadImage={preUploadImage} />

      <Button
        onClick={onSubmit}
        isLoading={isLoading}
        disabled={!imageFileName && !imageData}
      >
        次へ
      </Button>
      <Button
        variant="text"
        className="mt-4 px-10"
        onClick={() => {}}
        disabled={!!imageFileName && !!imageData}
      >
        <Typography className="text-lg text-indigo-900 underline underline-offset-4">
          あとで着用写真を送る
        </Typography>
      </Button>
    </div>
  );
};
