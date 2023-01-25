import { Typography } from "../../baseParts/legacy/Typography";
type TProps = {
  price: number;
  discountRate: number;
  originPrice: number;
};
export const ItemPrice = ({ price, discountRate, originPrice }: TProps) => {
  return (
    <div className="my-6">
      <Typography size="xs" weight="regular">
        UWear価格
      </Typography>
      <Typography size="sm" weight="medium">
        {price}円
      </Typography>
      <Typography size="xs" color="primary" weight="medium">
        ({discountRate}%OFF)
      </Typography>
      <Typography size="xs" weight="regular" className="my-2">
        ↑
      </Typography>
      <Typography size="xs" weight="regular">
        新品参考価格
      </Typography>
      <Typography size="sm" weight="medium">
        {originPrice}円
      </Typography>
    </div>
  );
};
