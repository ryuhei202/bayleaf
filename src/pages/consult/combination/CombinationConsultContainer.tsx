import { useState } from "react";
import { createCombinationConsultFlexMessage } from "../../../models/consult/flexMessage/createCombinationConsultFlexMessage";
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

  const handleSubmit = (personalItem: TPersonalItem) => {
    const itemImageUrls = items.map((item) => item.imagePaths.thumb);
    setFlexMessage(
      createCombinationConsultFlexMessage({ itemImageUrls, personalItem })
    );
  };

  if (flexMessage) {
    return <AfterConsultContainer flexMessage={flexMessage} />;
  }

  switch (currentFormType) {
    case COMBINATION_FORM.IMAGE_SEND:
      return <CombinationConsult setCurrentFormType={setCurrentFormType} />;
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
          onSubmit={handleSubmit}
        />
      );
    default:
      return <></>;
  }
};
