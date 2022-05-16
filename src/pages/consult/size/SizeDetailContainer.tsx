import { useState } from "react";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { TSizeAnswer } from "../../../models/consult/TSizeAnswer";
import { TSizePart } from "../../../models/shared/TSizePart";
import { SizeDetailSelection } from "./SizeDetailSelection";

type TProps = {
  selectedItems: TConsultingItem[];
};
export const SizeDetailContainer = ({ selectedItems }: TProps) => {
  const [answeredItems, setAnsweredItems] = useState<TSizeAnswer[]>([]);
  const [currentAnswerItemIndex, setCurrentAnswerItemIndex] =
    useState<number>(0);

  const handleSubmit = (
    parts: TSizePart[],
    additionalText: string | undefined
  ) => {
    setAnsweredItems([
      ...answeredItems,
      {
        item: selectedItems[currentAnswerItemIndex],
        parts,
        additionalText: additionalText || undefined,
      },
    ]);
    setCurrentAnswerItemIndex(currentAnswerItemIndex + 1);
  };

  return (
    <>
      {selectedItems.length === answeredItems.length ? (
        <>{/* TODO: 別タスクで実装 */}</>
      ) : (
        <SizeDetailSelection
          selectedItem={selectedItems[currentAnswerItemIndex]}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};
