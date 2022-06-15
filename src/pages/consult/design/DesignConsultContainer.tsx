import { useState } from "react";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { ConsultItemList } from "../ConsultItemList";
import { DesignDetailContainer } from "./DesignDetailContainer";

type TProps = {
  readonly items: TConsultingItem[];
  readonly onCancel: () => void;
};

export const DesignConsultContainer = ({ items, onCancel }: TProps) => {
  const [selectedItems, setSelectedItems] = useState<TConsultingItem[]>([]);
  return (
    <>
      {selectedItems.length ? (
        <DesignDetailContainer
          selectedItems={selectedItems}
          onCancel={() => setSelectedItems([])}
        />
      ) : (
        <ConsultItemList
          items={items}
          title={
            <>
              どのアイテムの色や柄が
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
