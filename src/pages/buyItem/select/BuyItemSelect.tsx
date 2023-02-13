import { TChartItemsIndexResponse } from "../../../api/chartItems/useChartItemsIndex";
import { Button } from "../../../components/baseParts/Button";
import { FooterWrapper } from "../../../components/baseParts/legacy/FooterWrapper";
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
    <div className="text-center bg-clay">
      <div className="px-6 pb-16">
        <div className="p-8 text-center text-themeGray">
          レンタルアイテムの購入
        </div>
        <div>
          {chartItemsData.map((chartItem: TChartItemsIndexResponse) => {
            if (chartItem.isPurchased || !chartItem.isBuyable) {
              return (
                <div className="my-6 relative w-full">
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
              );
            } else {
              return (
                <div
                  className="my-6"
                  onClick={() => onSelectChartItems(chartItem.id)}
                >
                  <SelectWrapper visible={isVisible(chartItem.id)}>
                    <PurchaseItemCard
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
                  </SelectWrapper>
                </div>
              );
            }
          })}
        </div>
      </div>
      <FooterWrapper className="px-3 py-4">
        <Button
          onClick={onClickConfirm}
          disabled={selectedChartItems.length === 0}
        >
          確認画面へ
        </Button>
      </FooterWrapper>
    </div>
  );
};
