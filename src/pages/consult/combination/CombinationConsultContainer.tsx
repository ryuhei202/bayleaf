import { AxiosResponse } from "axios";
import { useState } from "react";
import {
  TMemberPhotoCreateParams,
  TMemberPhotoCreateResponse,
  useMemberPhotoCreate,
} from "../../../api/consult/useMemberPhotoCreate";
import { useImageUploadHandler } from "../../../hooks/handler/image/useImageUploadHandler";
import { createCombinationConsultFlexMessage } from "../../../models/consult/flexMessage/createCombinationConsultFlexMessage";
import { MEMBER_PHOTO_CATEGORY_ID } from "../../../models/consult/MemberPhotoCategoryId";
import {
  COMBINATION_FORM,
  TCombiantionForm,
} from "../../../models/consult/TCombinationForm";
import { TCombinationItemCategory } from "../../../models/consult/TCombinationItemCategory";
import { TCombinationDetails } from "../../../models/consult/TCombinationItemDetails";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { TPersonalItem } from "../../../models/consult/TPersonalItem";
import { TColors } from "../../../models/shared/TColors";
import { TPatterns } from "../../../models/shared/TPatterns";
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
  const [personalItem, setPersonalItem] = useState<TPersonalItem>({
    cateLargeName: itemCategory,
  });

  const [flexMessage, setFlexMessage] = useState<string | null>(null);
  const { imageFileName, imageData, preUploadImage, onChangeFile } =
    useImageUploadHandler();
  const { mutateAsync, isLoading } = useMemberPhotoCreate();

  const handleCategoryChange = (cateSmallName: TCombinationDetails) => {
    setPersonalItem({
      ...personalItem,
      cateSmallName,
    });
  };
  const handleColorChange = (color: TColors) => {
    setPersonalItem({
      ...personalItem,
      color,
    });
  };
  const handlePatternChange = (pattern: TPatterns) => {
    setPersonalItem({
      ...personalItem,
      pattern,
    });
  };
  const handleTextChange = (additionalText: string) => {
    setPersonalItem({
      ...personalItem,
      additionalText,
    });
  };
  const handleSubmit = () => {
    if (imageFileName && imageData) {
      postPhoto();
      return;
    }

    const itemImageUrls = items.map((item) => item.imagePaths.thumb);
    setFlexMessage(
      createCombinationConsultFlexMessage({ itemImageUrls, personalItem })
    );
  };

  const postPhoto = async () => {
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
          const newPersonalItem = {
            ...personalItem,
            image: data.data.imagePaths,
          };
          setPersonalItem(newPersonalItem);
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
    return personalItem.image ? (
      <AfterConsultContainer
        flexMessage={flexMessage}
        isPhotoSendable={true}
        wearingPhoto={personalItem.image}
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
          setCurrentFormType={setCurrentFormType}
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
          itemCategory={itemCategory}
          personalItem={personalItem}
          onSubmit={handleSubmit}
          onCategoryChange={handleCategoryChange}
          onColorChange={handleColorChange}
          onPatternChange={handlePatternChange}
          onTextChange={handleTextChange}
        />
      );
    default:
      return <></>;
  }
};
