import { useAgeAnswerHandler } from "../../../hooks/handler/consult/useAgeAnswerHandler";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { AgeDetailSelection } from "./AgeDetailSelection";

type TProps = {
  readonly selectedItems: TConsultingItem[];
};

export const AgeDetailContainer = ({ selectedItems }: TProps) => {
  const {
    answeredItems,
    setAnsweredItems,
    currentAnswerItemIndex,
    handleCurrentAnswerItemIndex,
  } = useAgeAnswerHandler(selectedItems);

  return (
    <>
      {answeredItems.length === selectedItems.length ? (
        {
          /** 別タスクで実装 */
        }
      ) : (
        <AgeDetailSelection
          selectedItem={selectedItems[currentAnswerItemIndex]}
          answeredItems={answeredItems}
          setAnsweredItems={setAnsweredItems}
          handleCurrentAnswerItemIndex={handleCurrentAnswerItemIndex}
        />
      )}
    </>
  );
};
