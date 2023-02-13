import { Typography } from "../../baseParts/legacy/Typography";

type TProps = {
  price: number;
  discountedPrice: number;
  grantedPoint: number;
  possesedPoint: number;
  selectedPoint: number;
  onChange: (selectedPoint: number) => void;
};

export const BillingInfo = ({
  price,
  discountedPrice,
  grantedPoint,
  possesedPoint,
  selectedPoint,
  onChange,
}: TProps) => {
  return (
    <div className="bg-white flex flex-col">
      <div className="border-dashed border-b-[1px] py-8 items-center flex text-right">
        <div className="w-1/2">
          <Typography color="strong-gray">アイテム合計</Typography>
        </div>
        <div className="w-1/2 pr-6">
          <Typography className="line-through" color="strong-gray">
            ¥{price.toLocaleString()}
          </Typography>
          <Typography color="red">
            ¥{discountedPrice.toLocaleString()}
          </Typography>
        </div>
      </div>

      <div className="border-dashed border-b-[1px] py-8 flex">
        <Typography className="text-right w-1/2" color="strong-gray">
          ポイントを利用する
        </Typography>
        <div className="w-1/2 pr-6">
          <Typography className="text-right" color="strong-gray">
            <input
              className="border rounded mr-0.5 w-1/2 text-right"
              value={selectedPoint}
              onChange={(e) => onChange(Number(e.target.value))}
            />
            pt
          </Typography>
          <Typography
            className="text-right leading-5"
            size="xs"
            color="strong-gray"
          >
            ({possesedPoint.toLocaleString()}pt利用可能)
          </Typography>
        </div>
      </div>

      <div className="border-dashed border-b-[1px] py-8 flex text-right ">
        <Typography className=" w-1/2" color="strong-gray">
          ご請求額
        </Typography>
        <Typography className="w-1/2 pr-6" color="strong-gray">
          ¥{(discountedPrice - selectedPoint).toLocaleString()}
        </Typography>
      </div>

      <div className="border-dashed border-b-[1px] py-8 flex text-right">
        <Typography className="w-1/2" color="strong-gray">
          付与ポイント
        </Typography>
        <Typography className="w-1/2 pr-6" color="strong-gray">
          {grantedPoint.toLocaleString()}pt
        </Typography>
      </div>
    </div>
  );
};
