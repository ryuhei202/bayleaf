import { Typography } from "../../baseParts/legacy/Typography";
import { WideItemCard } from "../../resourceParts/item/WideItemCard";

type TProps = {
  imagePaths: { defaultPath: string; expandedPath: string };
  brand: string;
  category: string;
  color: string;
  discountRate: number;
  point: number;
  discountedPrice: number;
  price: number;
  className?: string;
};

export const PurchaseItemCard = ({
  imagePaths,
  brand,
  category,
  color,
  discountRate,
  point,
  discountedPrice,
  price,
  className,
}: TProps) => {
  return (
    <WideItemCard imagePaths={imagePaths} className={className}>
      <div className="h-full flex flex-col justify-around">
        <div>
          <Typography className="text-left" color="strong-gray" size="xl">
            {brand}
          </Typography>
          <Typography className="leading-3 text-left" size="xs" color="gray">
            {category}/{color}
          </Typography>
        </div>
        <div>
          <Typography className="text-left" size="xs" color="gray">
            価格
          </Typography>

          <Typography className="line-through text-left" color="strong-gray">
            ￥{price.toLocaleString()}
          </Typography>
          <Typography className="leading-3 text-left" color="red">
            ￥{discountedPrice.toLocaleString()}
            <br></br>
            <span className="text-xs">({discountRate}OFF)</span>
          </Typography>
        </div>
        <div>
          <Typography className="text-left" color="gray" size="xs">
            ポイント
          </Typography>
          <Typography className="leading-4 text-left" color="strong-gray">
            {point}pt
          </Typography>
        </div>
      </div>
    </WideItemCard>
  );
};
