import { AxiosResponse } from "axios";
import { useState } from "react";

import {
  TMemberPhotoCreateParams,
  TMemberPhotoCreateResponse,
  useMemberPhotoCreate,
} from "../../api/consult/useMemberPhotoCreate";
import { TImagePathsResponse } from "../../api/shared/TImagePathsResponse";
import { Page } from "../../components/baseParts/Page";
import { useImageUploadHandler } from "../../hooks/handler/image/useImageUploadHandler";
import { MEMBER_PHOTO_CATEGORY_ID } from "../../models/consult/MemberPhotoCategoryId";
import { TConsultingItem } from "../../models/consult/TConsultingItem";
import { AfterConsultContainer } from "./AfterConsultContainer";
import { WearingPhoto } from "./WearingPhoto";

type TProps = {
  items: TConsultingItem[];
  flexMessage: string;
};

export const WearingPhotoContainer = ({ items, flexMessage }: TProps) => {
  const [uploadedImagePaths, setUploadedImagePaths] =
    useState<TImagePathsResponse | undefined>(undefined);
  const [isSkipped, setIsSkipped] = useState<boolean>(false);
  const { imageFileName, imageData, preUploadImage, onChangeFile } =
    useImageUploadHandler();
  const { mutate, isLoading } = useMemberPhotoCreate();

  if (uploadedImagePaths || isSkipped)
    return (
      <Page>
        <AfterConsultContainer
          flexMessage={flexMessage}
          isPhotoSendable={true}
          wearingPhoto={uploadedImagePaths}
        />
      </Page>
    );

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

  const onSkip = () => setIsSkipped(true);

  return (
    <Page>
      <WearingPhoto
        items={items}
        preUploadImage={preUploadImage ?? ""}
        imageFileName={imageFileName ?? ""}
        imageData={imageData ?? ""}
        onChangeFile={onChangeFile}
        onSubmit={onSubmit}
        isLoading={isLoading}
        onSkip={onSkip}
      />
    </Page>
  );
};
