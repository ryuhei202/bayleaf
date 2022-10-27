import { useDeliveryDateShow } from "../../api/charts/useDeliveryDateShow";
import { Loader } from "semantic-ui-react";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { SelectButton } from "../../components/baseParts/SelectButton";
import { DeliveryInputs } from "../../components/delivery/DeliveryInputs";
type Props = {
  chartId: number;
  nextPaymentsDate: string;
};
export const DeliveryForm = ({ chartId, nextPaymentsDate }: Props) => {
  const { data: deliveryDateShowData, error: deliveryDateShowError } =
    useDeliveryDateShow({
      chartId,
    });

  console.log(deliveryDateShowData);
  if (deliveryDateShowError)
    return <ErrorMessage message={deliveryDateShowError.message} />;
  if (!deliveryDateShowData) return <Loader active />;
  return (
    <div className="m-auto my-2">
      <div className="my-20">
        <DeliveryInputs
          deliveryDateShowData={deliveryDateShowData}
          isSelectableDateEnabled={
            deliveryDateShowData.selectableDatePeriod != null
          }
          isDiscountDateEnabled={
            deliveryDateShowData.discountSelectableDatePeriod != null
          }
        />
        <SelectButton selected={false}>確定する</SelectButton>
      </div>
    </div>
  );
};
