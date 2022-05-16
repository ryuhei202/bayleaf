import { useState } from "react";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { TDesignAnswer } from "../../../models/consult/TDesignAnswer";
import { DesignDetailForm } from "./DesignDetailForm";

type TProps = {
  selectedItems: TConsultingItem[];
};

export const DesignDetailContainer = ({ selectedItems }: TProps) => {
  const [answeredItems, setAnsweredItems] = useState<TDesignAnswer[]>([]);
  const [currentAnswerItemIndex, setCurrentAnswerItemIndex] =
    useState<number>(0);

  const handleSubmit = (freeText: string) => {
    setAnsweredItems([
      ...answeredItems,
      {
        item: selectedItems[currentAnswerItemIndex],
        freeText,
      },
    ]);
    setCurrentAnswerItemIndex(currentAnswerItemIndex + 1);
  };

  const handleSkip = () => {
    setAnsweredItems([
      ...answeredItems,
      {
        item: selectedItems[currentAnswerItemIndex],
        freeText: "",
      },
    ]);
    setCurrentAnswerItemIndex(currentAnswerItemIndex + 1);
  };

  return (
    <>
      {selectedItems.length === answeredItems.length ? (
        <>{/* TODO: 別タスクで実装 */}</>
      ) : (
        <DesignDetailForm
          selectedItem={selectedItems[currentAnswerItemIndex]}
          onSubmit={handleSubmit}
          onSkip={handleSkip}
        />
      )}
    </>
  );
};
