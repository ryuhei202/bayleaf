import { useState } from "react";

import { TAGE_CHOICES } from "../../../models/consult/choice/AgeChoice";
import { createAgeConsultFlexMessage } from "../createFlexMessage/createAgeConsultFlexMessage";
import { TAgeAnswer } from "../../../models/consult/TAgeAnswer";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { WearingPhotoContainer } from "../WearingPhotoContainer";
import { AgeDetailSelection } from "./AgeDetailSelection";

type TProps = {
  readonly selectedItems: TConsultingItem[];
  readonly onCancel: () => void;
};

export const AgeDetailContainer = ({ selectedItems, onCancel }: TProps) => {
  const [answeredItems, setAnsweredItems] = useState<TAgeAnswer[]>([]);

  const handleCancel = () => {
    if (answeredItems.length === 0) onCancel();
    const newAnsweredItems = [...answeredItems];
    newAnsweredItems.pop();
    setAnsweredItems(newAnsweredItems);
  };

  if (answeredItems.length === selectedItems.length)
    return (
      <WearingPhotoContainer
        items={selectedItems}
        flexMessage={createAgeConsultFlexMessage(answeredItems)}
        onCancel={handleCancel}
      />
    );

  const currentItem = selectedItems[answeredItems.length];
  return (
    <AgeDetailSelection
      selectedItem={currentItem}
      onSelect={(ageOption: TAGE_CHOICES) => {
        setAnsweredItems([
          ...answeredItems,
          { item: currentItem, ageOption: ageOption },
        ]);
      }}
      onCancel={handleCancel}
    />
  );
};
