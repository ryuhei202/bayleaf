import { useState } from "react";
import { TCoordinateItemResponse } from "../../../api/coordinates/TCoordinateItemResponse";
import { ConsultItemList } from "../../../components/consult/ConsultItemList";
import { SizeDetail } from "./SizeDetail";

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
        <SizeDetail selectedItems={selectedItems} />
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
