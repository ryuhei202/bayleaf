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
        <>{/* TODO: 別タスクで実装 */}</>
      ) : (
        <SizeDetailSelection
          selectedItem={selectedItems[answeredItems.length]}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};
