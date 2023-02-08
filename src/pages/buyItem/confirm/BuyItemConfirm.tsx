import { TChartItemsIndexResponse } from "../../../api/chartItems/useChartItemsIndex";
import { Button } from "../../../components/baseParts/Button";
import { BillingInfo } from "../../../components/pageParts/buyItem/BillingInfo";
import { PurchaseItemCard } from "../../../components/pageParts/buyItem/PurchaseItemCard";

type TProps = {
  selectedItems: TChartItemsIndexResponse[];
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
    <div className="mx-4">
      <div className="m-8 text-center text-neutral-500">
        レンタル中アイテムの購入確認画面
      </div>
      <div>
        {selectedItems.map((item: TChartItemsIndexResponse) => (
          <PurchaseItemCard
            imagePaths={{
              defaultPath: item.imagePaths.thumb,
              expandedPath: item.imagePaths.large,
            }}
            brand={item.brandName}
            category={item.categoryName}
            color={item.colorName}
            discountRate={item.discountRate}
            point={item.point}
            discountedPrice={item.discountedPrice}
            price={item.price}
            className="my-6"
          />
        ))}
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
