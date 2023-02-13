import { TChartItemsIndexResponse } from "../../../api/chartItems/useChartItemsIndex";
import { Button } from "../../../components/baseParts/Button";
import { Typography } from "../../../components/baseParts/legacy/Typography";
import { SelectWrapper } from "../../../components/baseParts/wrapper/SelectWrapper";
import { PurchaseItemCard } from "../../../components/pageParts/buyItem/PurchaseItemCard";

type TProps = {
  selectedChartItems: TChartItemsIndexResponse[];
  chartItemsData: TChartItemsIndexResponse[];
  onSelectChartItems: (chartItemId: number) => void;
  onClickConfirm: () => void;
};

export const BuyItemSelect = ({
  selectedChartItems,
  chartItemsData,
  onSelectChartItems,
  onClickConfirm,
}: TProps) => {
  const isVisible = (chartItemId: number) => {
    const selectedChartItemsIds = selectedChartItems.map((item) => item.id);
    return selectedChartItemsIds.includes(chartItemId);
  };

  return (
    <div className="text-center mx-4">
      <div className="m-8 text-center text-neutral-500">
        レンタルアイテムの購入
      </div>
      <div>
        {chartItemsData.map((chartItem: TChartItemsIndexResponse) => {
          if (chartItem.isPurchased || !chartItem.isBuyable) {
            return (
              <div className="mx-2 my-6 relative">
                <PurchaseItemCard
                  className="brightness-50"
                  imagePaths={{
                    defaultPath: chartItem.imagePaths.thumb,
                    expandedPath: chartItem.imagePaths.large,
                  }}
                  brand={chartItem.brandName}
                  category={chartItem.categoryName}
                  color={chartItem.colorName}
                  discountRate={chartItem.discountRate}
                  point={chartItem.point}
                  discountedPrice={chartItem.discountedPrice}
                  price={chartItem.price}
                ></PurchaseItemCard>
                <Typography
                  className="absolute top-1/2 text-center w-full align-top -translate-y-1/2"
                  size="2xl"
                  color="white"
                  weight="bold"
                >
                  {chartItem.isPurchased ? "購入済み" : "購入不可"}
                </Typography>
              </div>
            );
          } else {
            return (
              <div
                className="mx-2 my-6"
                onClick={() => onSelectChartItems(chartItem.id)}
              >
                <SelectWrapper visible={isVisible(chartItem.id)}>
                  <PurchaseItemCard
                    imagePaths={{
                      defaultPath: chartItem.imagePaths.thumb,
                      expandedPath: chartItem.imagePaths.large,
                    }}
                    brand={chartItem.brandName}
                    category={chartItem.categoryName}
                    color={chartItem.colorName}
                    discountRate={chartItem.discountRate}
                    point={chartItem.point}
                    discountedPrice={chartItem.discountedPrice}
                    price={chartItem.price}
                  ></PurchaseItemCard>
                </SelectWrapper>
              </div>
            );
          }
        })}
      </div>
      <Button
        className="w-1/2 text-center mt-8 mb-16"
        onClick={onClickConfirm}
        disabled={selectedChartItems.length === 0}
      >
        確認画面へ
      </Button>
    </div>
  );
};
