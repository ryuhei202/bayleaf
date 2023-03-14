import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChartItemsIndex } from "../../api/chartItems/useChartItemsIndex";
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

export const BuyItemContainer = ({ chartId, possesedPoint }: TProps) => {
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [selectedPoint, setSelectedPoint] = useState<number>(0);
  const { data: chartItemsData, error: chartItemsError } = useChartItemsIndex({
    chartId,
  });
  const [selectedChartItemIds, setSelectedChartItemIds] = useState<number[]>(
    []
  );
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const {
    mutate,
    isLoading: isBuyItemLoading,
    error: buyItemsError,
  } = useChartBuyItems({ chartId });
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedPoint(0);
  }, [isConfirm]);

  if (chartItemsError) return <ErrorPage message={chartItemsError.message} />;
  if (!chartItemsData) return <LoaderPage />;
  if (buyItemsError) return <ErrorPage message={buyItemsError.message} />;

  const handleSelectChartItems = (chartItemId: number) => {
    const index = selectedChartItemIds.indexOf(chartItemId);
    if (index === -1) {
      const newSelectedChartItemIds = [...selectedChartItemIds, chartItemId];
      setSelectedChartItemIds(newSelectedChartItemIds);
    } else {
      const newSelectedChartItemIds = [...selectedChartItemIds];
      newSelectedChartItemIds.splice(index, 1);
      setSelectedChartItemIds(newSelectedChartItemIds);
    }
  };

  const selectedChartItems = chartItemsData.filter((item) =>
    selectedChartItemIds.includes(item.id)
  );

  const getTotalPrice = () => {
    let initialValue = 0;
    const totalPrice = selectedChartItems.reduce(
      (accumulator, selectedChartItem) => accumulator + selectedChartItem.price,
      initialValue
    );
    return totalPrice;
  };

  const getTotalSellingPrice = () => {
    let initialValue = 0;
    const totalSellingPrice = selectedChartItems.reduce(
      (accumulator, selectedChartItem) =>
        accumulator + selectedChartItem.discountedPrice,
      initialValue
    );
    return totalSellingPrice;
  };

  const getTotalGrantedPoint = () => {
    let initialValue = 0;
    const totalGrantedPoint = selectedChartItems.reduce(
      (accumulator, selectedChartItem) => accumulator + selectedChartItem.point,
      initialValue
    );
    return totalGrantedPoint;
  };

  const getAllSelectedDiscountPrice = () => {
    const selectableItems = chartItemsData.filter(
      (item) => item.isBuyable && !item.isPurchased
    );
    if (
      selectedChartItems.length !== selectableItems.length ||
      selectedChartItems.find((item) => !item.isBuyable)
    ) {
      return undefined;
    }
    return selectedChartItems.reduce(
      (accumulator, selectedChartItem) =>
        accumulator + Math.ceil(selectedChartItem.discountedPrice * 0.1),
      0
    );
  };

  const getTotalDiscountedPrice = () => {
    return getTotalSellingPrice() - (getAllSelectedDiscountPrice() ?? 0);
  };

  const isValidPurchased = (): boolean => {
    const isAvailablePoints =
      possesedPoint > getTotalDiscountedPrice()
        ? getTotalDiscountedPrice() < selectedPoint
        : possesedPoint < selectedPoint;
    return isAvailablePoints || isBuyItemLoading;
  };

  return (
    <>
      {isConfirm ? (
        <BuyItemConfirm
          selectedItems={chartItemsData.filter((item) =>
            selectedChartItemIds.includes(item.id)
          )}
          totalPrice={getTotalPrice()}
          totalSellingPrice={getTotalSellingPrice()}
          totalGrantedPoint={getTotalGrantedPoint()}
          totalDiscountedPrice={getTotalDiscountedPrice()}
          possesedPoint={possesedPoint}
          selectedPoint={selectedPoint}
          onChange={(selectedPoint) => {
            const newSelectedPoint =
              selectedPoint >= getTotalDiscountedPrice()
                ? getTotalDiscountedPrice()
                : selectedPoint;

            setSelectedPoint(
              newSelectedPoint > possesedPoint
                ? possesedPoint
                : newSelectedPoint
            );
          }}
          onClick={() => {
            mutate(
              {
                chartItemIds: selectedChartItemIds,
                totalPrice: getTotalDiscountedPrice(),
                usingPoint: selectedPoint,
              },
              {
                onSuccess: () => {
                  setIsCompleted(true);
                },
              }
            );
          }}
          onCancel={() => setIsConfirm(false)}
          isPurchaseButtonDisabled={isValidPurchased()}
          allSelectedDiscountPrice={getAllSelectedDiscountPrice()}
        />
      ) : (
        <BuyItemSelect
          chartItems={chartItemsData.map((item) => {
            return {
              ...item,
              isSelected: selectedChartItemIds.includes(item.id),
            };
          })}
          totalSellingPrice={getTotalSellingPrice()}
          onSelectChartItems={handleSelectChartItems}
          onClickConfirm={() => setIsConfirm(true)}
          allSelectedDiscountPrice={getAllSelectedDiscountPrice()}
        />
      )}
      <AlertDialog
        open={isCompleted}
        title={"アイテム購入が完了しました"}
        description={<CheckIcon />}
        onClick={() => navigate(0)}
        onClose={() => navigate(0)}
        okBtnText="閉じる"
      />
    </>
  );
};
