import { TItemResponse } from "../../../api/shared/TItemResponse";
import { Button } from "../../../components/baseParts/Button";
import { IconButton } from "../../../components/baseParts/legacy/IconButton";
import { ArrowIcon } from "../../../components/baseParts/legacy/icons/ArrowIcon";
import { BillingInfo } from "../../../components/pageParts/buyItem/BillingInfo";
import { PurchaseItemCard } from "../../../components/pageParts/buyItem/PurchaseItemCard";

type TProps = {
  selectedItems: TItemResponse[];
  totalPrice: number;
  totalSellingPrice: number;
  totalDiscountedPrice: number;
  allSelectedDiscountPrice?: number;
  totalGrantedPoint: number;
  possesedPoint: number;
  selectedPoint: number;
  onChange: (selectedPoint: number) => void;
  onClick: () => void;
  onCancel: () => void;
  isPurchaseButtonDisabled: boolean;
};

export const BuyItemConfirm = ({
  selectedItems,
  totalPrice,
  totalSellingPrice,
  totalDiscountedPrice,
  allSelectedDiscountPrice,
  totalGrantedPoint,
  possesedPoint,
  selectedPoint,
  onChange,
  onClick,
  onCancel,
  isPurchaseButtonDisabled,
}: TProps) => {
  return (
    <div className="bg-clay" data-testid="BuyItemConfirm">
      <div className="px-6 py-6">
        <div className="p-8 text-center text-themeGray">
          レンタル中アイテムの購入確認画面
        </div>
        <div>
          {selectedItems.map((item: TItemResponse) => (
            <PurchaseItemCard
              imagePaths={{
                defaultPath: item.imagePaths.large,
                expandedPath: item.imagePaths.large,
              }}
              brand={item.brandName}
              category={item.categoryName}
              color={item.colorName}
              discountRate={item.discountRate}
              point={item.purchasePoint}
              discountedPrice={item.discountedPrice}
              price={item.price}
              className="my-6"
              key={item.id}
              rank={item.rank}
            />
          ))}
        </div>
        <BillingInfo
          price={totalPrice}
          totalSellingPrice={totalSellingPrice}
          allSelectedDiscountPrice={allSelectedDiscountPrice}
          totalDiscountedPrice={totalDiscountedPrice}
          grantedPoint={totalGrantedPoint}
          possesedPoint={possesedPoint}
          selectedPoint={selectedPoint}
          onChange={onChange}
        />
        <div className="flex flex-row text-center mt-3">
          <IconButton className="flex-none" onClick={onCancel}>
            <ArrowIcon className="h-10 my-auto" />
          </IconButton>
          <Button onClick={onClick} disabled={isPurchaseButtonDisabled}>
            購入する
          </Button>
        </div>
      </div>
    </div>
  );
};
