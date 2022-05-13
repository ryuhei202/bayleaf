import { useState } from "react";

import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { ConsultItemList } from "../ConsultItemList";
import { AgeDetailContainer } from "./AgeDetailContainer";

type TProps = {
  readonly items: TConsultingItem[];
};

export const AgeConsultContainer = ({ items }: TProps) => {
  const [selectedItems, setSelectedItems] = useState<TConsultingItem[]>([]);
  return (
    <>
      {selectedItems.length ? (
        <AgeDetailContainer selectedItems={selectedItems} />
      ) : (
        <ConsultItemList
          items={items}
          title={
            <>
              どのアイテムが年齢に
              <br />
              合っているか気になりますか？
            </>
          }
          setSelectedItems={setSelectedItems}
        />
      )}
    </>
  );
};
