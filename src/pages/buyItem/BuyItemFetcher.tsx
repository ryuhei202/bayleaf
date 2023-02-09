import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TChartItemsIndexResponse,
  useChartItemsIndex
} from "../../api/chartItems/useChartItemsIndex";
import { useChartBuyItems } from "../../api/charts/useChartBuyItems";
import { AlertDialog } from "../../components/baseParts/dialogs/AlertDialog";
import { CheckIcon } from "../../components/baseParts/icons/CheckIcon";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { BuyItemConfirm } from "./confirm/BuyItemConfirm";
import { BuyItemSelect } from "./select/BuyItemSelect";


export type TProps = {
  chartId: number;
  possesedPoint: number;
};

export const BuyItemFetcher = ({ chartId, possesedPoint }: TProps) => {
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [selectedPoint, setSelectedPoint] = useState<number>(0);
  const { data: chartItemsData, error: chartItemsError } = useChartItemsIndex({
    chartId,
  });
  const [selectedChartItems, setSelectedChartItems] = useState<
    TChartItemsIndexResponse[]
  >([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const { mutate, isLoading: isBuyItemLoading, error: buyItemsError } = useChartBuyItems({ chartId });
  const navigate = useNavigate();

  if (chartItemsError) return <ErrorPage message={chartItemsError.message} />;
  if (!chartItemsData) return <LoaderPage />;
  if (buyItemsError) return <ErrorPage message={buyItemsError.message} />;

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

  const getTotalPrice = () => {
    let initialValue = 0
    const totalPrice = selectedChartItems.reduce(
      (accumulator, selectedChartItem) => accumulator + selectedChartItem.price,
      initialValue
    );
    return totalPrice;
  }

  const getTotalDiscountedPrice = () => {
    let initialValue = 0
    const totalDiscountedPrice = selectedChartItems.reduce(
      (accumulator, selectedChartItem) => accumulator + selectedChartItem.discountedPrice,
      initialValue
    );
    return totalDiscountedPrice;
  }

  const getTotalGrantedPoint = () => {
    let initialValue = 0
    const totalGrantedPoint = selectedChartItems.reduce(
      (accumulator, selectedChartItem) => accumulator + selectedChartItem.point,
      initialValue
    );
    return totalGrantedPoint;
  }

  const getItemIds = () => {
    let itemIds = selectedChartItems.map(
      (selectedItem) => selectedItem.id
    );
    return itemIds;
  }

  return (
    <>
      {isConfirm ? (
        <BuyItemConfirm
          selectedItems={selectedChartItems}
          totalPrice={getTotalPrice()}
          totalDiscountedPrice={getTotalDiscountedPrice()}
          totalGrantedPoint={getTotalGrantedPoint()}
          possesedPoint={possesedPoint}
          selectedPoint={selectedPoint}
          onChange={(selectedPoint) => {
            setSelectedPoint(selectedPoint)
          }}
          onClick={() => {
            mutate({
              chartItemIds: getItemIds(),
              totalPrice: getTotalDiscountedPrice(),
              usedPoint: selectedPoint,
            },{
              onSuccess: () => {
                setIsCompleted(true)
              }
            }
             )
          }}
          isPurchaseButtonDisabled={selectedPoint > possesedPoint || isBuyItemLoading}
        />
      ) : (
        <BuyItemSelect
          selectedChartItems={selectedChartItems}
          chartItemsData={chartItemsData}
          onSelectChartItems={handeleSelectChartItems}
          onClickConfirm={() => setIsConfirm(true)}
        />
      )}
      <AlertDialog
            open={isCompleted}
            title={
              'アイテム購入が完了しました'
            }
            description={<CheckIcon />}
            onClick={() => navigate(0)}
            onClose={() => navigate(0)}
            okBtnText="閉じる"
          />
    </>
  );
};
