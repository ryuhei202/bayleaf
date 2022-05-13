import { useState } from "react";

import { TAgeAnswer } from "../../../models/consult/TAgeAnswer";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";

export const useAgeAnswerHandler = (selectedItems: TConsultingItem[]) => {
  const [answeredItems, setAnsweredItems] = useState<TAgeAnswer[]>([]);
  const [currentAnswerItemIndex, setCurrentAnswerItemIndex] =
    useState<number>(0);

  const handleCurrentAnswerItemIndex = () => {
    const remainingAnswers: number =
      selectedItems.length - answeredItems.length;
    setCurrentAnswerItemIndex(remainingAnswers);
  };

  return {
    answeredItems,
    setAnsweredItems,
    currentAnswerItemIndex,
    handleCurrentAnswerItemIndex,
  };
};
