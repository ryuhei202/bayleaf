import { Button } from "../../../components/baseParts/Button";
import { SelectWrapper } from "../../../components/baseParts/wrapper/SelectWrapper";
import { PurchaseItemCard } from "../../../components/pageParts/buyItem/PurchaseItemCard";

type TItem = {
  imagePaths: { defaultPath: string; expandedPath: string };
  brand: string;
  category: string;
  color: string;
  discountRate: number;
  point: number;
  discountedPrice: number;
  price: number;
};

type TProps = {
  rentalItem: TItem[];
  isSelectedOrNot: boolean;
};

export const BuyItemSelect = ({ rentalItem, isSelectedOrNot }: TProps) => {
  return (
    <div className="">
      <div className="m-8 text-center text-neutral-500">
        レンタルアイテムの購入
      </div>
      <div>
        {rentalItem.map((item: TItem) => {
          return (
            <div className="mx-2 my-12">
              <SelectWrapper visible={isSelectedOrNot}>
                <PurchaseItemCard
                  imagePaths={{
                    defaultPath: item.imagePaths.defaultPath,
                    expandedPath: item.imagePaths.expandedPath,
                  }}
                  brand={item.brand}
                  category={item.category}
                  color={item.color}
                  discountRate={item.discountRate}
                  point={item.point}
                  discountedPrice={item.discountedPrice}
                  price={item.price}
                ></PurchaseItemCard>
              </SelectWrapper>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-20 mb-16">
        <Button className="w-1/2 i">確認画面へ</Button>
      </div>
    </div>
  );
};
