import { useState } from "react";
import {
  TChartItemsIndexResponse,
  useChartItemsIndex,
} from "../../api/chartItems/useChartItemsIndex";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { BuyItemConfirm } from "./confirm/BuyItemConfirm";
import { BuyItemSelect } from "./select/BuyItemSelect";

export type TProps = {
  chartId: number;
};

export const BuyItemFetcher = ({ chartId }: TProps) => {
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  // const handleChangeIsConfirm = () => {
  //   setIsConfirm(!isConfirm);
  // };
  const { data: chartItemsData, error: chartItemsError } = useChartItemsIndex({
    chartId,
  });
  const [selectedChartItems, setSelectedChartItems] = useState<
    TChartItemsIndexResponse[]
  >([]);

  if (chartItemsError) return <ErrorPage message={chartItemsError.message} />;
  if (!chartItemsData) return <LoaderPage />;

  const isNumber = (chartItemId: unknown): chartItemId is number => {
    return typeof chartItemId === "number";
  };
  const handeleSelectChartItems = (chartItemId: number) => {
    const selectedChartItemsIds = selectedChartItems.map((item) => item.id);
    const targetChartItem = chartItemsData.find(
      (chartItem) => chartItem.id === chartItemId
    );
    const targetChartItemId = targetChartItem?.id;
    if (isNumber(targetChartItemId)) {
      if (selectedChartItemsIds.includes(targetChartItemId)) {
        const newSelectedChartItems = selectedChartItems.filter(
          (item) => item.id !== chartItemId
        );
        setSelectedChartItems(newSelectedChartItems);
      } else {
        const newSelectedChartItems = [
          ...selectedChartItems,
          targetChartItem as TChartItemsIndexResponse,
        ];
        setSelectedChartItems(newSelectedChartItems);
      }
    }
  };

  return (
    <>
      {isConfirm ? (
        <BuyItemConfirm
          selectedItems={selectedChartItems}
          totalPrice={0}
          totalDiscountedPrice={0}
          totalGrantedPoint={0}
          possesedPoint={0}
          selectedPoint={0}
          onChange={function (): number {
            throw new Error("Function not implemented.");
          }}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      ) : (
        <BuyItemSelect
          selectedChartItems={selectedChartItems}
          chartItemsData={chartItemsData}
          onSelectChartItems={handeleSelectChartItems}
          onClickConfirm={() => setIsConfirm(true)}
        />
      )}
    </>
  );
};
