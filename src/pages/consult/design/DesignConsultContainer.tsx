import { useState } from "react";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { ConsultItemList } from "../ConsultItemList";
import { DesignDetailContainer } from "./DesignDetailContainer";

type TProps = {
  readonly items: TConsultingItem[];
};

export const DesignConsultContainer = ({ items }: TProps) => {
  const [selectedItems, setSelectedItems] = useState<TConsultingItem[]>([]);
  return (
    <>
      {selectedItems.length ? (
        <DesignDetailContainer selectedItems={selectedItems} />
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
          setSelectedItems={setSelectedItems}
        />
      )}
    </>
  );
};
