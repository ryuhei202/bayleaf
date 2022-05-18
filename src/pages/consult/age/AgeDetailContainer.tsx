import { useState } from "react";

import { TAGE_CHOICES } from "../../../models/consult/choice/AgeChoice";
import { createAgeConsultFlexMessage } from "../../../models/consult/flexMessage/createAgeConsultFlexMessage";
import { TAgeAnswer } from "../../../models/consult/TAgeAnswer";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { WearingPhotoContainer } from "../WearingPhotoContainer";
import { AgeDetailSelection } from "./AgeDetailSelection";

type TProps = {
  readonly selectedItems: TConsultingItem[];
};

export const AgeDetailContainer = ({ selectedItems }: TProps) => {
  const [answeredItems, setAnsweredItems] = useState<TAgeAnswer[]>([]);

  if (answeredItems.length === selectedItems.length)
    return (
      <WearingPhotoContainer
        items={selectedItems}
        flexMessage={createAgeConsultFlexMessage(answeredItems)}
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
    />
  );
};
