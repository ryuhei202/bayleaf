import { TChartItemsIndexResponse } from "../../../api/chartItems/useChartItemsIndex";
import { Button } from "../../../components/baseParts/Button";
import { SelectWrapper } from "../../../components/baseParts/wrapper/SelectWrapper";
import { PurchaseItemCard } from "../../../components/pageParts/buyItem/PurchaseItemCard";

type TProps = {
  selectedChartItemIds: number[];
  chartItemsData: TChartItemsIndexResponse[];
  onSelectChartItemIds: (chartItemId: number) => void;
};

export const BuyItemSelect = ({
  selectedChartItemIds,
  chartItemsData,
  onSelectChartItemIds,
}: TProps) => {
  return (
    <div className="">
      <div className="m-8 text-center text-neutral-500">
        レンタルアイテムの購入
      </div>
      <div>
        {chartItemsData.map((chartItem: TChartItemsIndexResponse) => {
          return (
            <div
              className="mx-2 my-12"
              onChange={() => onSelectChartItemIds(chartItem.id)}
            >
              <SelectWrapper
                visible={selectedChartItemIds.includes(chartItem.id)}
              >
                <PurchaseItemCard
                  imagePaths={{
                    defaultPath: chartItem.imagePaths[0],
                    expandedPath: chartItem.imagePaths[1],
                  }}
                  brand={chartItem.brandName}
                  category={chartItem.categoryName}
                  color={chartItem.colorName}
                  discountRate={chartItem.discountRate}
                  point={chartItem.point}
                  discountedPrice={chartItem.priceTaxIn}
                  price={chartItem.referencePriceTaxIn}
                ></PurchaseItemCard>
              </SelectWrapper>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-20 mb-16">
        <Button className="w-1/2 i">確認画面へ</Button>
      </div>
    </div>
  );
};
