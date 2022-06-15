import { useState } from "react";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { ConsultItemList } from "../ConsultItemList";
import { SizeDetailContainer } from "./SizeDetailContainer";

type TProps = {
  readonly items: TConsultingItem[];
  readonly onCancel: () => void;
};

export const SizeConsultContainer = ({ items, onCancel }: TProps) => {
  const [selectedItems, setSelectedItems] = useState<TConsultingItem[]>([]);
  return (
    <>
      {selectedItems.length ? (
        <SizeDetailContainer
          selectedItems={selectedItems}
          onCancel={() => setSelectedItems([])}
        />
      ) : (
        <ConsultItemList
          items={items}
          title={
            <>
              どのアイテムのサイズ感が
              <br />
              気になりますか？
            </>
          }
          onClickNext={setSelectedItems}
          onCancel={onCancel}
        />
      )}
    </>
  );
};
