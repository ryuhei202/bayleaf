import { useState } from "react";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { ConsultItemList } from "../ConsultItemList";
import { SizeDetailContainer } from "./SizeDetailContainer";

type TProps = {
  readonly items: TConsultingItem[];
};

export const SizeConsultContainer = ({ items }: TProps) => {
  const [selectedItems, setSelectedItems] = useState<TConsultingItem[]>([]);
  return (
    <>
      {selectedItems.length ? (
        <SizeDetailContainer selectedItems={selectedItems} />
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
          setSelectedItems={setSelectedItems}
        />
      )}
    </>
  );
};
