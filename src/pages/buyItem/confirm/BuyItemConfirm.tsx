import { TChartItemsIndexResponse } from "../../../api/chartItems/useChartItemsIndex";
import { Button } from "../../../components/baseParts/Button";
import { FooterWrapper } from "../../../components/baseParts/legacy/FooterWrapper";
import { IconButton } from "../../../components/baseParts/legacy/IconButton";
import { ArrowIcon } from "../../../components/baseParts/legacy/icons/ArrowIcon";
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
  onCancel: () => void;
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
  onCancel,
  isPurchaseButtonDisabled,
}: TProps) => {
  return (
    <div className="bg-clay">
      <div className="px-6 py-6">
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
              key={item.id}
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
      </div>
      <FooterWrapper className="px-3 py-4">
        <div className="flex flex-row text-center">
          <IconButton className="flex-none" onClick={onCancel}>
            <ArrowIcon className="h-10 my-auto" />
          </IconButton>
          <Button onClick={onClick} disabled={isPurchaseButtonDisabled}>
            購入する
          </Button>
        </div>
      </FooterWrapper>
    </div>
  );
};
