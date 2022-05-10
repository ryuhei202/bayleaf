import { useEffect, useState } from "react";
import { TCoordinateItemResponse } from "../../../api/coordinates/TCoordinateItemResponse";
import { TSizeAnswer } from "../../../models/consult/TSizeAnswer";
import { SizeDetailSelection } from "./SizeDetailSelection";

type TProps = {
  selectedItems: TCoordinateItemResponse[];
};
export const SizeDetailContainer = ({ selectedItems }: TProps) => {
  const [answeredItems, setAnsweredItems] = useState<TSizeAnswer[]>([]);
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
        <SizeDetailSelection
          selectedItem={selectedItems[currentAnswerItemIndex]}
          answeredItems={answeredItems}
          setAnsweredItems={setAnsweredItems}
        />
      )}
    </>
  );
};
