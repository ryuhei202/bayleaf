import { SelectWrapper } from "../../../components/baseParts/wrapper/SelectWrapper";
import { PurchaseItemCard } from "../../../components/pageParts/buyItem/PurchaseItemCard";

type TSelectedItem = {
  brand: string;
  category: string;
  color: string;
  discountRate: number;
  point: number;
  discountedPrice: number;
  price: number;
};

type TProps = {
  itemIds: number[];
  selectedItems: TSelectedItem[];
  setSelectItems: (selectedItem: TSelectedItem) => void;
};

export const BuyItemSelect = ({
  itemIds,
  selectedItems,
  setSelectItems,
}: TProps) => {
  return;
  <div>
    レンタルアイテムの購入
    <SelectWrapper visible={false} children={undefined}>
      <PurchaseItemCard
        imagePaths={{
          defaultPath: "",
          expandedPath: "",
        }}
        brand={""}
        category={""}
        color={""}
        discountRate={0}
        point={0}
        discountedPrice={0}
        price={0}
      ></PurchaseItemCard>
    </SelectWrapper>
  </div>;
};
