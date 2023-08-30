import { TChartItemsIndexResponse } from "../../../api/chartItems/TChartItemsIndexResponse";
import { TItemResponse } from "../../../api/shared/TItemResponse";
import { Button } from "../../../components/baseParts/Button";
import { FooterWrapper } from "../../../components/baseParts/legacy/FooterWrapper";
import { Typography } from "../../../components/baseParts/legacy/Typography";
import { SelectWrapper } from "../../../components/baseParts/wrapper/SelectWrapper";
import { PurchaseItemCard } from "../../../components/pageParts/buyItem/PurchaseItemCard";

type TSelectBuyItem = TChartItemsIndexResponse & {
  readonly isSelected: boolean;
};

type TProps = {
  readonly chartItems: TSelectBuyItem[];
  readonly totalSellingPrice: number;
  readonly allSelectedDiscountPrice?: number;
  readonly onSelectChartItems: (chartItemId: number) => void;
  readonly onClickConfirm: () => void;
};

export const BuyItemSelect = ({
  chartItems,
  totalSellingPrice,
  allSelectedDiscountPrice,
  onSelectChartItems,
  onClickConfirm,
}: TProps) => {
  const isSelectable = (item: TItemResponse) =>
    item.isForSale && !item.isPurchased;

  const isAllSelectedDiscountAvailable = chartItems
    .map((chartItems) => chartItems.itemInfo)
    .every((item) => item.isForSale || item.isPurchased);

  return (
    <div className="bg-clay text-center">
      <div className="px-6 pb-16">
        <div className="p-8 text-center text-themeGray">
          レンタルアイテムの購入
        </div>
        <div>
          {chartItems.map((chartItem) =>
            isSelectable(chartItem.itemInfo) ? (
              <div
                className="my-6"
                onClick={() => onSelectChartItems(chartItem.id)}
                key={chartItem.id}
                data-testid={`BuyItemSelectItemCard-${chartItem.id}`}
              >
                <SelectWrapper visible={chartItem.isSelected}>
                  <PurchaseItemCard
                    imagePaths={{
                      defaultPath:
                        chartItem.itemInfo.imagePaths.largeThumb ??
                        chartItem.itemInfo.imagePaths.large,
                      expandedPath: chartItem.itemInfo.imagePaths.large,
                    }}
                    brand={chartItem.itemInfo.brandName}
                    category={chartItem.itemInfo.categoryName}
                    color={chartItem.itemInfo.colorName}
                    discountRate={chartItem.itemInfo.discountRate}
                    point={chartItem.itemInfo.purchasePoint}
                    discountedPrice={chartItem.itemInfo.discountedPrice}
                    price={chartItem.itemInfo.price}
                    rank={chartItem.itemInfo.rank}
                  />
                </SelectWrapper>
              </div>
            ) : (
              <div className="relative my-6" key={chartItem.id}>
                <PurchaseItemCard
                  className="pointer-events-none brightness-50"
                  imagePaths={{
                    defaultPath: chartItem.itemInfo.imagePaths.large,
                    expandedPath: chartItem.itemInfo.imagePaths.large,
                  }}
                  brand={chartItem.itemInfo.brandName}
                  category={chartItem.itemInfo.categoryName}
                  color={chartItem.itemInfo.colorName}
                  discountRate={chartItem.itemInfo.discountRate}
                  point={chartItem.itemInfo.purchasePoint}
                  discountedPrice={chartItem.itemInfo.discountedPrice}
                  price={chartItem.itemInfo.price}
                  rank={chartItem.itemInfo.rank}
                />
                <Typography
                  className="absolute top-1/2 w-full -translate-y-1/2 text-center align-top"
                  size="2xl"
                  color="white"
                  weight="bold"
                >
                  {chartItem.itemInfo.isPurchased ? "購入済み" : "購入不可"}
                </Typography>
              </div>
            )
          )}
        </div>
      </div>
      <FooterWrapper className="px-3 py-4">
        <div className="flex">
          <div className="mt-auto grow text-start">
            {isAllSelectedDiscountAvailable && (
              <>
                {allSelectedDiscountPrice ? (
                  <div data-testid="BuyItemSelectAllSelectedDiscountLabel">
                    <Typography size="xs" color="red">
                      全アイテム選択で
                      <br />
                      <b className="text-base">10%</b>OFFになりました
                    </Typography>
                  </div>
                ) : (
                  <div data-testid="BuyItemSelectSelectableItemRemainingLabel">
                    <Typography size="xs" color="red">
                      あと
                      {
                        chartItems.filter(
                          (chartItem) =>
                            isSelectable(chartItem.itemInfo) &&
                            !chartItem.isSelected
                        ).length
                      }
                      アイテム選択で
                      <br />
                      全アイテム<b className="text-base">10%</b>OFF
                    </Typography>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="mt-auto text-end">
            {isAllSelectedDiscountAvailable && allSelectedDiscountPrice ? (
              <div data-testid="BuyItemSelectAllSelectedDiscountPriceLabel">
                <Typography size="base" className="line-through" color="gray">
                  税込{totalSellingPrice.toLocaleString()}円
                </Typography>
                <Typography size="base" color="strong-gray">
                  税込
                  <b className="text-xl">
                    {(
                      totalSellingPrice - allSelectedDiscountPrice
                    ).toLocaleString()}
                  </b>
                  円
                </Typography>
              </div>
            ) : (
              <div data-testid="BuyItemSelectPriceWithoutDiscountLabel">
                <Typography size="base" color="strong-gray">
                  税込
                  <b className="text-xl">
                    {totalSellingPrice.toLocaleString()}
                  </b>
                  円
                </Typography>
              </div>
            )}
          </div>
        </div>
        <Button
          dataTestId="BuyItemSelectSubmitButton"
          onClick={onClickConfirm}
          disabled={chartItems.filter((item) => item.isSelected).length === 0}
        >
          確認画面へ
        </Button>
      </FooterWrapper>
    </div>
  );
};
