import { useState } from "react";
import { createSizeConsultFlexMessage } from "../createFlexMessage/createSizeConsultFlexMessage";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { TSizeAnswer } from "../../../models/consult/TSizeAnswer";
import { TSizePart } from "../../../models/shared/TSizePart";
import { WearingPhotoContainer } from "../WearingPhotoContainer";
import { SizeDetailSelection } from "./SizeDetailSelection";

type TProps = {
  selectedItems: TConsultingItem[];
  onCancel: () => void;
};
export const SizeDetailContainer = ({ selectedItems, onCancel }: TProps) => {
  const [answeredItems, setAnsweredItems] = useState<TSizeAnswer[]>([]);

  const handleSubmit = (
    parts: TSizePart[],
    additionalText: string | undefined
  ) => {
    setAnsweredItems([
      ...answeredItems,
      {
        item: selectedItems[answeredItems.length],
        parts,
        additionalText: additionalText || undefined,
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
          items={selectedItems}
          flexMessage={createSizeConsultFlexMessage(answeredItems)}
          onCancel={handleCancel}
        />
      ) : (
        <SizeDetailSelection
          selectedItem={selectedItems[answeredItems.length]}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};
