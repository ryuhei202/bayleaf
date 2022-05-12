import { useEffect, useState } from "react";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { TDesignAnswer } from "../../../models/consult/TDesignAnswer";

type TProps = {
  selectedItems: TConsultingItem[];
};

export const DesignDetailContainer = ({ selectedItems }: TProps) => {
  const [answeredItems, setAnsweredItems] = useState<TDesignAnswer[]>([]);
  const [currentAnswerItemIndex, setCurrentAnswerItemIndex] =
    useState<number>(0);

  useEffect(() => {
    const remainingAnswers: number =
      selectedItems.length - answeredItems.length;
    setCurrentAnswerItemIndex(selectedItems.length - remainingAnswers);
  }, [answeredItems]);

  return (
    <>
      {selectedItems.length === answeredItems.length ? (
        <>{/* TODO: 別タスクで実装 */}</>
      ) : (
        <></>
      )}
    </>
  );
};
