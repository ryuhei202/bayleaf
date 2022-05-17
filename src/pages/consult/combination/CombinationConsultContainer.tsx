import { AxiosResponse } from "axios";
import { useState } from "react";
import {
  TMemberPhotoCreateParams,
  TMemberPhotoCreateResponse,
  useMemberPhotoCreate,
} from "../../../api/consult/useMemberPhotoCreate";
import { TImagePathsResponse } from "../../../api/shared/TImagePathsResponse";
import { useImageUploadHandler } from "../../../hooks/handler/image/useImageUploadHandler";
import { createCombinationConsultFlexMessage } from "../../../models/consult/flexMessage/createCombinationConsultFlexMessage";
import { MEMBER_PHOTO_CATEGORY_ID } from "../../../models/consult/MemberPhotoCategoryId";
import {
  COMBINATION_FORM,
  TCombiantionForm,
} from "../../../models/consult/TCombinationForm";
import { TCombinationItemCategory } from "../../../models/consult/TCombinationItemCategory";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { TPersonalItem } from "../../../models/consult/TPersonalItem";
import { AfterConsultContainer } from "../AfterConsultContainer";
import { CombinationConsult } from "./CombinationConsult";
import { CombinationItemCategorySelection } from "./CombinationItemCategorySelection";
import { CombinationItemDetailSelection } from "./CombinationItemDetailSelection";

type TProps = {
  readonly items: TConsultingItem[];
};
export const CombinationConsultContainer = ({ items }: TProps) => {
  const [currentFormType, setCurrentFormType] = useState<TCombiantionForm>(
    COMBINATION_FORM.IMAGE_SEND
  );
  const [itemCategory, setItemCategory] =
    useState<TCombinationItemCategory | undefined>(undefined);

  const [flexMessage, setFlexMessage] = useState<string | null>(null);
  const { imageFileName, imageData, preUploadImage, onChangeFile } =
    useImageUploadHandler();
  const [response, setResponse] = useState<TImagePathsResponse | null>(null);
  const { mutateAsync, isLoading } = useMemberPhotoCreate();
  const handleSubmit = ({
    cateSmallName,
    color,
    pattern,
    additionalText,
  }: TPersonalItem) => {
    const personalItem: TPersonalItem = {
      cateLargeName: itemCategory,
      cateSmallName,
      color,
      pattern,
      additionalText,
    };
    if (imageFileName && imageData) {
      postPhoto(personalItem);
      return;
    }

    const itemImageUrls = items.map((item) => item.imagePaths.thumb);
    setFlexMessage(
      createCombinationConsultFlexMessage({
        itemImageUrls,
        personalItem,
      })
    );
  };

  const postPhoto = async (personalItem: TPersonalItem) => {
    const params: TMemberPhotoCreateParams = {
      image: {
        memberPhotoCategoryId: MEMBER_PHOTO_CATEGORY_ID.PERSONALITEM,
        imageData: imageData as string,
        imageFileName: imageFileName as string,
      },
    };
    await mutateAsync(params, {
      onSuccess: (data: AxiosResponse<TMemberPhotoCreateResponse>) => {
        if (data && data.data) {
          setResponse(data.data.imagePaths);
          const newPersonalItem = {
            ...personalItem,
            image: data.data.imagePaths,
          };
          const itemImageUrls = items.map((item) => item.imagePaths.thumb);
          setFlexMessage(
            createCombinationConsultFlexMessage({
              itemImageUrls,
              personalItem: newPersonalItem,
            })
          );
        }
      },
    });
  };

  if (flexMessage) {
    return response ? (
      <AfterConsultContainer
        flexMessage={flexMessage}
        isPhotoSendable={true}
        wearingPhoto={response}
      />
    ) : (
      <AfterConsultContainer
        flexMessage={flexMessage}
        isPhotoSendable={false}
      />
    );
  }

  switch (currentFormType) {
    case COMBINATION_FORM.IMAGE_SEND:
      return (
        <CombinationConsult
          onClickNext={() => setCurrentFormType(COMBINATION_FORM.ITEM_CATEGORY)}
          onChangeFile={onChangeFile}
          preUploadImage={preUploadImage}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          imageFileName={imageFileName}
          imageData={imageData}
        />
      );
    case COMBINATION_FORM.ITEM_CATEGORY:
      return (
        <CombinationItemCategorySelection
          setCurrentFormType={setCurrentFormType}
          itemCategory={itemCategory}
          setItemCategory={setItemCategory}
        />
      );
    case COMBINATION_FORM.ITEM_DETAIL:
      return (
        <CombinationItemDetailSelection
          itemCategory={itemCategory as TCombinationItemCategory}
          onSubmit={handleSubmit}
        />
      );
    default:
      throw Error("予期せぬエラーが発生しました");
  }
};
