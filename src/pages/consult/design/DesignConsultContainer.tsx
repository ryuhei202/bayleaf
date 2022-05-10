import { useState } from "react";
import { TCoordinateItemResponse } from "../../../api/coordinates/TCoordinateItemResponse";
import { ConsultItemList } from "../ConsultItemList";

type TProps = {
  readonly items: TCoordinateItemResponse[];
};

export const DesignConsultContainer = ({ items }: TProps) => {
  const [selectedItems, setSelectedItems] = useState<TCoordinateItemResponse[]>(
    []
  );
  return (
    <>
      {selectedItems.length ? (
        <></>
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
