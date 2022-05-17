import { useState } from "react";
import { createDesignConsultFlexMessage } from "../../../models/consult/flexMessage/createDesignConsultFlexMessage";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { TDesignAnswer } from "../../../models/consult/TDesignAnswer";
import { WearingPhotoContainer } from "../WearingPhotoContainer";
import { DesignDetailForm } from "./DesignDetailForm";

type TProps = {
  selectedItems: TConsultingItem[];
};

export const DesignDetailContainer = ({ selectedItems }: TProps) => {
  const [answeredItems, setAnsweredItems] = useState<TDesignAnswer[]>([]);

  const handleSubmit = (freeText: string) => {
    setAnsweredItems([
      ...answeredItems,
      {
        item: selectedItems[answeredItems.length],
        freeText,
      },
    ]);
  };

  const handleSkip = () => {
    setAnsweredItems([
      ...answeredItems,
      {
        item: selectedItems[answeredItems.length],
        freeText: "",
      },
    ]);
  };

  return (
    <>
      {selectedItems.length === answeredItems.length ? (
        <WearingPhotoContainer
          flexMessage={createDesignConsultFlexMessage(answeredItems)}
          items={selectedItems}
        />
      ) : (
        <DesignDetailForm
          selectedItem={selectedItems[answeredItems.length]}
          onSubmit={handleSubmit}
          onSkip={handleSkip}
        />
      )}
    </>
  );
};
