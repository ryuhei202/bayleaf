import { useState } from "react";
import { createSizeConsultFlexMessage } from "../createFlexMessage/createSizeConsultFlexMessage";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { TSizeAnswer } from "../../../models/consult/TSizeAnswer";
import { TSizePart } from "../../../models/shared/TSizePart";
import { WearingPhotoContainer } from "../WearingPhotoContainer";
import { SizeDetailSelection } from "./SizeDetailSelection";

type TProps = {
  selectedItems: TConsultingItem[];
};
export const SizeDetailContainer = ({ selectedItems }: TProps) => {
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

  return (
    <>
      {selectedItems.length === answeredItems.length ? (
        <WearingPhotoContainer
          items={selectedItems}
          flexMessage={createSizeConsultFlexMessage(answeredItems)}
        />
      ) : (
        <SizeDetailSelection
          selectedItem={selectedItems[answeredItems.length]}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};
