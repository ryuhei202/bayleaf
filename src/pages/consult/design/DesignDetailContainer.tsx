import { useState } from "react";
import { createDesignConsultFlexMessage } from "../createFlexMessage/createDesignConsultFlexMessage";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { TDesignAnswer } from "../../../models/consult/TDesignAnswer";
import { WearingPhotoContainer } from "../WearingPhotoContainer";
import { DesignDetailForm } from "./DesignDetailForm";

type TProps = {
  selectedItems: TConsultingItem[];
  onCancel: () => void;
};

export const DesignDetailContainer = ({ selectedItems, onCancel }: TProps) => {
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

  const handleCancel = () => {
    if (answeredItems.length === 0) onCancel();
    const newAnsweredItems = [...answeredItems];
    newAnsweredItems.pop();
    setAnsweredItems(newAnsweredItems);
  };

  return (
    <>
      {selectedItems.length === answeredItems.length ? (
        <WearingPhotoContainer
          flexMessage={createDesignConsultFlexMessage(answeredItems)}
          items={selectedItems}
          onCancel={handleCancel}
        />
      ) : (
        <DesignDetailForm
          selectedItem={selectedItems[answeredItems.length]}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};
