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
  onChange: (selectedPoint: number) => void;
  onClick: () => void;
  isPurchaseButtonDisabled: boolean;
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
  isPurchaseButtonDisabled,
}: TProps) => {
  return (
    <div className="px-6 pb-16 bg-clay">
      <div className="p-8 text-center text-themeGray">
        レンタル中アイテムの購入確認画面
      </div>
      <div>
        {selectedItems.map((item: TChartItemsIndexResponse) => (
          <PurchaseItemCard
            imagePaths={{
              defaultPath: item.imagePaths.large,
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
      />

      <div className="text-center mt-20">
        <Button onClick={onClick} disabled={isPurchaseButtonDisabled}>
          購入する
        </Button>
      </div>
    </div>
  );
};
