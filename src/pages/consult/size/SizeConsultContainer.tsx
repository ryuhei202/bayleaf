import { useState } from "react";
import { TCoordinateItemResponse } from "../../../api/coordinates/TCoordinateItemResponse";
import { ConsultItemList } from "./ConsultItemList";
import { SizeDetailContainer } from "./SizeDetailContainer";

type TProps = {
  readonly items: TCoordinateItemResponse[];
};

export const SizeConsultContainer = ({ items }: TProps) => {
  const [selectedItems, setSelectedItems] = useState<TCoordinateItemResponse[]>(
    []
  );
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
