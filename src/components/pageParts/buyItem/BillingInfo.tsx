import { useState } from "react";
import { Typography } from "../../baseParts/legacy/Typography";

type TProps = {
  price: number;
  discountedPrice: number;
  grantedPoint: number;
  possesedPoint: number;
};

export const BillingInfo = ({
  price,
  discountedPrice,
  grantedPoint,
  possesedPoint,
}: TProps) => {
  const [selectedPoint, setSelectedPoint] = useState<number>(0);
  const [pointWarningDisplay, setPointWarningDisplay] = useState<boolean>(true);
  const handleChange = (e: any) => {
    if (e.target.value >= 0 && e.target.value <= possesedPoint) {
      setSelectedPoint(() => e.target.value);
      setPointWarningDisplay(true);
    } else {
      setPointWarningDisplay(false);
    }
  };
  return (
    <div className="bg-white">
      <div className="border-dashed border-b-[1px] py-8 flex justify-around">
        <Typography className="text-center" color="strong-gray">
          アイテム合計
        </Typography>
        <div className="">
          <Typography className="line-through text-center" color="strong-gray">
            ¥{discountedPrice}
          </Typography>
          <Typography className="text-center" color="red">
            ¥{price}
          </Typography>
        </div>
      </div>

      <div className="border-dashed border-b-[1px] py-8 flex justify-around">
        <Typography className="text-center" color="strong-gray">
          <span className="">ポイントを利用する</span>
        </Typography>
        <div className="">
          <Typography className="text-right" color="strong-gray">
            <input
              className="border rounded mr-0.5 w-3/4 "
              value={selectedPoint}
              onChange={handleChange}
              type="number"
              min="0"
              max={possesedPoint}
              step="100"
            ></input>
            pt
          </Typography>
          <Typography
            className={
              pointWarningDisplay
                ? "text-right leading-5 text-[1px] hidden"
                : "text-right leading-5 text-[1px]"
            }
            color="red"
          >
            ※0pt~{possesedPoint}ptの範囲で選択してください
          </Typography>
          <Typography
            className="text-right leading-5"
            size="xs"
            color="strong-gray"
          >
            ({possesedPoint}pt利用可能)
          </Typography>
        </div>
      </div>

      <div className="border-dashed border-b-[1px] py-8 flex justify-around">
        <Typography className="text-center" color="strong-gray">
          ご請求額
        </Typography>
        <Typography className="" color="strong-gray">
          ¥{price - selectedPoint}
        </Typography>
      </div>

      <div className="border-dashed border-b-[1px] py-8 flex justify-around">
        <Typography className="text-center" color="strong-gray">
          付与ポイント
        </Typography>
        <Typography className="" color="strong-gray">
          {grantedPoint}pt
        </Typography>
      </div>
    </div>
  );
};
