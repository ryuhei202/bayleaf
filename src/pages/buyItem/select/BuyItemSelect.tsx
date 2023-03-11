import { TChartItemsIndexResponse } from "../../../api/chartItems/useChartItemsIndex";
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
  const isSelectable = (item: TSelectBuyItem) =>
    item.isBuyable && !item.isPurchased;

  return (
    <div className="text-center bg-clay">
      <div className="px-6 pb-16">
        <div className="p-8 text-center text-themeGray">
          レンタルアイテムの購入
        </div>
        <div>
          {chartItems.map((chartItem) =>
            isSelectable(chartItem) ? (
              <div
                className="my-6"
                onClick={() => onSelectChartItems(chartItem.id)}
                key={chartItem.id}
              >
                <SelectWrapper visible={chartItem.isSelected}>
                  <PurchaseItemCard
                    imagePaths={{
                      defaultPath:
                        chartItem.imagePaths.largeThumb ??
                        chartItem.imagePaths.large,
                      expandedPath: chartItem.imagePaths.large,
                    }}
                    brand={chartItem.brandName}
                    category={chartItem.categoryName}
                    color={chartItem.colorName}
                    discountRate={chartItem.discountRate}
                    point={chartItem.point}
                    discountedPrice={chartItem.discountedPrice}
                    price={chartItem.price}
                  />
                </SelectWrapper>
              </div>
            ) : (
              <div className="my-6 relative" key={chartItem.id}>
                <PurchaseItemCard
                  className="brightness-50 pointer-events-none"
                  imagePaths={{
                    defaultPath: chartItem.imagePaths.large,
                    expandedPath: chartItem.imagePaths.large,
                  }}
                  brand={chartItem.brandName}
                  category={chartItem.categoryName}
                  color={chartItem.colorName}
                  discountRate={chartItem.discountRate}
                  point={chartItem.point}
                  discountedPrice={chartItem.discountedPrice}
                  price={chartItem.price}
                />
                <Typography
                  className="absolute top-1/2 text-center w-full align-top -translate-y-1/2"
                  size="2xl"
                  color="white"
                  weight="bold"
                >
                  {chartItem.isPurchased ? "購入済み" : "購入不可"}
                </Typography>
              </div>
            )
          )}
        </div>
      </div>
      <FooterWrapper className="px-3 py-4">
        <div className="flex">
          <div className="flex-grow mt-auto text-start">
            {allSelectedDiscountPrice ? (
              <Typography size="xs" color="red">
                全アイテム選択で
                <br />
                <b className="text-base">10%</b>OFFになりました
              </Typography>
            ) : (
              <Typography size="xs" color="red">
                あと
                {
                  chartItems.filter(
                    (item) => isSelectable(item) && !item.isSelected
                  ).length
                }
                アイテム選択で
                <br />
                全アイテム<b className="text-base">10%</b>OFF
              </Typography>
            )}
          </div>
          <div className="text-end mt-auto">
            {allSelectedDiscountPrice ? (
              <>
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
              </>
            ) : (
              <Typography size="base" color="strong-gray">
                税込
                <b className="text-xl">{totalSellingPrice.toLocaleString()}</b>
                円
              </Typography>
            )}
          </div>
        </div>
        <Button
          onClick={onClickConfirm}
          disabled={chartItems.filter((item) => item.isSelected).length === 0}
        >
          確認画面へ
        </Button>
      </FooterWrapper>
    </div>
  );
};
