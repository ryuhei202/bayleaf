import { Button } from "../../../components/baseParts/Button";
import { BillingInfo } from "../../../components/pageParts/buyItem/BillingInfo";
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
  selectedItems: TItem[];
  totalPrice: number;
  totalDiscountedPrice: number;
  totalGrantedPoint: number;
  possesedPoint: number;
  selectedPoint: number;
  onChange: () => number;
  onClick: () => void;
};

export const BuyItemConfirm = ({
  selectedItems,
  totalPrice,
  totalDiscountedPrice,
  totalGrantedPoint,
  possesedPoint,
  selectedPoint,
  onChange,
  onClick,
}: TProps) => {
  return (
    <div className="">
      <div className="m-8 text-center text-neutral-500">
        レンタル中アイテムの購入確認画面
      </div>
      <div>
        {selectedItems.map((item: TItem) => {
          return (
            <div className="mx-2 my-12">
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
            </div>
          );
        })}
      </div>
      <BillingInfo
        price={totalPrice}
        discountedPrice={totalDiscountedPrice}
        grantedPoint={totalGrantedPoint}
        possesedPoint={possesedPoint}
        selectedPoint={selectedPoint}
        onChange={onChange}
      ></BillingInfo>

      <div className="text-center mt-20 mb-16">
        <Button className="w-1/2 i" onClick={onClick}>
          購入する
        </Button>
      </div>
    </div>
  );
};
