import { useState } from "react";

import { TAGE_CHOICES } from "../../../models/consult/choice/AgeChoice";
import { TAgeAnswer } from "../../../models/consult/TAgeAnswer";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { AgeDetailSelection } from "./AgeDetailSelection";

type TProps = {
  readonly selectedItems: TConsultingItem[];
};

export const AgeDetailContainer = ({ selectedItems }: TProps) => {
  const [answeredItems, setAnsweredItems] = useState<TAgeAnswer[]>([]);
  const currentItem = selectedItems[answeredItems.length];

  if (answeredItems.length === selectedItems.length)
    return <>{/** 別タスクで実装 */}</>;

  return (
    <AgeDetailSelection
      selectedItem={currentItem}
      onSelect={(ageOption: TAGE_CHOICES) => {
        setAnsweredItems([
          ...answeredItems,
          { item: currentItem, ageOption: ageOption },
        ]);
      }}
    />
  );
};
