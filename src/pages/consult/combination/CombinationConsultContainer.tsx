import { AxiosResponse } from "axios";
import { useState } from "react";
import {
  TMemberPhotoCreateParams,
  TMemberPhotoCreateResponse,
  useMemberPhotoCreate,
} from "../../../api/memberPhotos/useMemberPhotoCreate";
import { createCombinationConsultFlexMessage } from "../createFlexMessage/createCombinationConsultFlexMessage";
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
import { useConsultLineMessageSender } from "../useConsultLineMessageSender";
import { ErrorMessage } from "../../../components/shared/ErrorMessage";
import { LoaderPage } from "../../../components/baseParts/pages/LoaderPage";

type TProps = {
  readonly items: TConsultingItem[];
  readonly onCancel: () => void;
};

export const CombinationConsultContainer = ({ items, onCancel }: TProps) => {
  const [currentFormType, setCurrentFormType] = useState<TCombiantionForm>(
    COMBINATION_FORM.IMAGE_SEND
  );
  const [itemCategory, setItemCategory] =
    useState<TCombinationItemCategory | undefined>(undefined);
  const { mutateAsync, isLoading } = useMemberPhotoCreate();
  const { send, isSending, isError, isSuccess } = useConsultLineMessageSender();

  const createFlexMessage = (personalItem?: TPersonalItem): string => {
    const itemImageUrls = items.map((item) => item.imagePaths.thumb);
    return createCombinationConsultFlexMessage({
      itemImageUrls,
      personalItem,
    });
  };

  const handleCombinationConsultSubmit = async (
    imageFileName: string,
    imageData: string
  ) => {
    const params: TMemberPhotoCreateParams = {
      image: {
        memberPhotoCategoryId: MEMBER_PHOTO_CATEGORY_ID.PERSONALITEM,
        imageData: imageData as string,
        imageFileName: imageFileName as string,
      },
    };
    await mutateAsync(params, {
      onSuccess: (data: void | AxiosResponse<TMemberPhotoCreateResponse>) => {
        if (data && data.data) {
          send(createFlexMessage(), true, data.data.imagePaths);
        }
      },
    });
  };

  const handleItemCategorySubmit = (itemCategory: TCombinationItemCategory) => {
    setItemCategory(itemCategory);
    setCurrentFormType(COMBINATION_FORM.ITEM_DETAIL);
  };

  const handleItemCategoryCancel = () => {
    setItemCategory(undefined);
    setCurrentFormType(COMBINATION_FORM.IMAGE_SEND);
  };

  if (isSuccess) return <AfterConsultContainer />;
  if (isError) return <ErrorMessage message="予期せぬエラーが発生しました" />;
  if (isSending) return <LoaderPage />;

  switch (currentFormType) {
    case COMBINATION_FORM.IMAGE_SEND:
      return (
        <CombinationConsult
          onClickNext={() => setCurrentFormType(COMBINATION_FORM.ITEM_CATEGORY)}
          onSubmit={handleCombinationConsultSubmit}
          isLoading={isLoading}
          onCancel={onCancel}
        />
      );
    case COMBINATION_FORM.ITEM_CATEGORY:
      return (
        <CombinationItemCategorySelection
          itemCategory={itemCategory}
          onSubmit={handleItemCategorySubmit}
          onCancel={handleItemCategoryCancel}
        />
      );
    case COMBINATION_FORM.ITEM_DETAIL:
      return (
        <CombinationItemDetailSelection
          itemCategory={itemCategory as TCombinationItemCategory}
          onSubmit={(personalItem) => {
            send(createFlexMessage(personalItem), false);
          }}
          onCancel={() => setCurrentFormType(COMBINATION_FORM.ITEM_CATEGORY)}
        />
      );
    default:
      throw Error("予期せぬエラーが発生しました");
  }
};
