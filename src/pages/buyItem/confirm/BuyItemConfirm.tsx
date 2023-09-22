import { useState } from "react";
import { TItemResponse } from "../../../api/shared/TItemResponse";
import { Button } from "../../../components/baseParts/Button";
import { ConfirmDialog } from "../../../components/baseParts/dialogs/ConfirmDialog";
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
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  return (
    <div className="bg-clay" data-testid="BuyItemConfirm">
      <div className="p-6">
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
        <div className="mt-3 flex flex-row text-center">
          <IconButton className="flex-none" onClick={onCancel}>
            <ArrowIcon className="my-auto h-10" />
          </IconButton>
          <Button
            onClick={() => setIsOpenDialog(true)}
            disabled={isPurchaseButtonDisabled}
          >
            最終確認へ進む
          </Button>
        </div>
      </div>
      <ConfirmDialog
        open={isOpenDialog}
        title="購入確認"
        description="購入するとキャンセルできません。購入を確定しますか？"
        okBtnText="購入を確定する"
        onClickOk={() => {
          onClick();
          setIsOpenDialog(false);
        }}
        onClickCancel={() => setIsOpenDialog(false)}
        onClose={() => setIsOpenDialog(false)}
      />
    </div>
  );
};
